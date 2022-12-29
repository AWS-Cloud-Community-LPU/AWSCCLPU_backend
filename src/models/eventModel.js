import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        event_name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        event_date: {
            type: Date,
            required: true,
        },
        event_venue: {
            type: String,
            required: true,
        },
        registration_link: {
            type: String,
            required: true,
        },
        secondary_link: {
            type: String,
        },
        contact_phone_number: {
            type: Number,
        },
        contact_email: {
            type: String,
        },
    },
    {timestamps: true}
);

export default mongoose.model("Event", userSchema);
