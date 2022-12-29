import Member from "../models/memberModel.js";
import logger from "../logger/logger.js";

// * @desc - ADD MEMBER CONTROLLER
// * @method - POST
// * @route - /add
const addMember = async (req, res) => {
    const memberDetails = new Member({
        name: req.body.name,
        position: req.body.position,
        team: req.body.team,
        image_url: req.body.image_url,
        linkedin_url: req.body.linkedin_url,
    });

    try {
        const member = await memberDetails.save();
        logger.info("Member added successfully.");
        res.status(201).json({
            status: "success",
            code: 201,
            message: "Member added successfully.",
            data: member,
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

// * @desc - GET MEMBERS CONTROLLER
// * @method - GET
// * @route - /all
const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        logger.info("Members fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Members fetched successfully.",
            data: members,
        });
    } catch (err) {
        logger.error("Error occured while fetching members.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch members. Try again.",
            data: err,
        });
    }
};

// * @desc - GET MEMBER CONTROLLER
// * @method - GET
// * @route - /team
const getMemberByTeam = async (req, res) => {
    const team = req.body.team;
    try {
        const events = await Member.find({team: team});
        logger.info("Members fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Members fetched successfully.",
            data: events,
        });
    } catch (err) {
        logger.error("Error occured while fetching members.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch members. Try again.",
            data: err,
        });
    }
};

// * @desc - DELETE MEMBER CONTROLLER
// * @method - DELETE
// * @route - /delete/:id
const deleteMemberById = async (req, res) => {
    const id = req.params.id;
    try {
        const events = await Member.findByIdAndRemove(id);
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

export {addMember, getMembers, getMemberByTeam, deleteMemberById};
