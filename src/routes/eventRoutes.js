import express from "express";
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEventById,
} from "../controllers/eventController.js";
const eventRouter = express.Router();
import protect from "../middlewares/authMiddleware.js";

eventRouter.post("/create", protect, createEvent);
eventRouter.get("/all", getEvents);
eventRouter.get("/:id", getEventById);
eventRouter.put("/update/:id", protect, updateEvent);
eventRouter.delete("/delete/:id", protect, deleteEventById);

export default eventRouter;
