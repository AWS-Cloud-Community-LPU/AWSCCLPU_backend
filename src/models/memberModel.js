import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        team: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
        },
        linkedin_url: {
            type: String,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Member", userSchema);
