import express from "express";
import {
    saveMessage,
    getMessages,
    deleteMessagesById,
    deleteAllMessages,
} from "../controllers/messageController.js";
const messageRouter = express.Router();
import protect from "../middlewares/authMiddleware.js";

messageRouter.post("/save", saveMessage);
messageRouter.get("/all", protect, getMessages);
messageRouter.delete("/delete/all", protect, deleteAllMessages);
messageRouter.delete("/delete/:id", protect, deleteMessagesById);

export default messageRouter;
