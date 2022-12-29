import Event from "../models/eventModel.js";
import logger from "../logger/logger.js";

// * @desc - CREATE EVENT CONTROLLER
// * @method - POST
// * @route - /create
const createEvent = async (req, res) => {
    const eventDetails = new Event({
        event_name: req.body.event_name,
        description: req.body.description,
        image_url: req.body.image_url,
        event_date: req.body.event_date,
        event_venue: req.body.event_venue,
        registration_link: req.body.registration_link,
        secondary_link: req.body.secondary_link,
        contact_phone_number: req.body.contact_phone_number,
        contact_email: req.body.contact_email,
    });

    try {
        const event = await eventDetails.save();
        logger.info("Event created successfully.");
        res.status(201).json({
            status: "success",
            code: 201,
            message: "Event created successfully.",
            data: event,
        });
    } catch (err) {
        logger.error("Error occured while saving event.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to save event. Try again.",
            data: err,
        });
    }
};

// * @desc - GET EVENTS CONTROLLER
// * @method - GET
// * @route - /all
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        logger.info("Events fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Events fetched successfully.",
            data: events,
        });
    } catch (err) {
        logger.error("Error occured while fetching events.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch event. Try again.",
            data: err,
        });
    }
};

// * @desc - GET EVENT CONTROLLER
// * @method - GET
// * @route - /:id
const getEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const events = await Event.findById(id);
        logger.info("Event fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Event fetched successfully.",
            data: events,
        });
    } catch (err) {
        logger.error("Error occured while fetching event.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch event. Try again.",
            data: err,
        });
    }
};

// * @desc - UPDATE EVENT CONTROLLER
// * @method -PUT
// * @route - /update/:id
const updateEvent = async (req, res) => {
    const id = req.params.id;
    try {
        const events = await Event.findByIdAndUpdate(id, req.body, {
            useFindAndModify: false,
        });
        logger.info("Event fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Event fetched successfully.",
            data: events,
        });
    } catch (err) {
        logger.error("Error occured while fetching event.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch event. Try again.",
            data: err,
        });
    }
};

// * @desc - DELETE EVENT CONTROLLER
// * @method - DELETE
// * @route - /delete/:id
const deleteEventById = async (req, res) => {
    const id = req.params.id;
    try {
        const events = await Event.findByIdAndRemove(id);
        logger.info("Event deleted successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Event deleted successfully.",
            data: events,
        });
    } catch (err) {
        logger.error("Error occured while deleting event.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to delete event. Try again.",
            data: err,
        });
    }
};

export {createEvent, getEvents, getEventById, updateEvent, deleteEventById};
