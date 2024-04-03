const { default: mongoose } = require("mongoose")


const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    imgLink: String,
    gitLink: String,
    liveLink: String,
})

const Projects = mongoose.model('Project', projectSchema, "projects")


module.exports = Projects
