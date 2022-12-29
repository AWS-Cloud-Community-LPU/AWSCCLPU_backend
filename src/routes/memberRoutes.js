import express from "express";
import {
    addMember,
    getMembers,
    getMemberByTeam,
    deleteMemberById,
} from "../controllers/memberController.js";
const memberRouter = express.Router();
import protect from "../middlewares/authMiddleware.js";

memberRouter.post("/add", protect, addMember);
memberRouter.get("/all", getMembers);
memberRouter.get("/team", getMemberByTeam);
memberRouter.delete("/delete/:id", protect, deleteMemberById);

export default memberRouter;
