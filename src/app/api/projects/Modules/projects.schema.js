import { Schema, model, models } from "mongoose";


const projectSchema = new Schema({
    name: String,
    description: String,
    imgLink: String,
    gitLink: String,
    liveLink: String,
})

const Projects = models.Project || model("Project", projectSchema, "projects");


module.exports = Projects