import Message from "../models/messageModel.js";
import logger from "../logger/logger.js";

// * @desc - SAVE MESSAGE CONTROLLER
// * @method - POST
// * @route - /save
const saveMessage = async (req, res) => {
    const messageDetails = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    try {
        const message = await messageDetails.save();
        logger.info("Message saved successfully.");
        res.status(201).json({
            status: "success",
            code: 201,
            message: "Message saved successfully.",
            data: message,
        });
    } catch (err) {
        logger.error("Error occured while saving message.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to save message. Try again.",
            data: err,
        });
    }
};

// * @desc - GET MESSAGES CONTROLLER
// * @method - GET
// * @route - /all
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        logger.info("Messages fetched successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Messages fetched successfully.",
            data: messages,
        });
    } catch (err) {
        logger.error("Error occured while fetching messages.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to fetch messages. Try again.",
            data: err,
        });
    }
};

// * @desc - DELETE MESSAGE CONTROLLER
// * @method - DELETE
// * @route - /delete/:id
const deleteMessagesById = async (req, res) => {
    const id = req.params.id;
    try {
        const messages = await Message.findByIdAndRemove(id);
        logger.info("Message deleted successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Message deleted successfully.",
            data: messages,
        });
    } catch (err) {
        logger.error("Error occured while deleting message.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to delete message. Try again.",
            data: err,
        });
    }
};

// * @desc - DELETE ALL MESSAGE CONTROLLER
// * @method - DELETE
// * @route - /delete/all
const deleteAllMessages = async (req, res) => {
    try {
        const messages = await Message.deleteMany({});
        logger.info("Messages deleted successfully.");
        res.status(200).json({
            status: "success",
            code: 200,
            message: "Messages deleted successfully.",
            data: messages,
        });
    } catch (err) {
        logger.error("Error occured while deleting messages.");
        logger.error(err);
        res.status(500).json({
            status: "error",
            code: 500,
            message: "Failed to delete messages. Try again.",
            data: err,
        });
    }
};

export {saveMessage, getMessages, deleteMessagesById, deleteAllMessages};
