const Projects = require("../Modules/projects.schema")
const mongoose = require("mongoose")



export const GET = async (request, { params }) => {
    const MONGODB_URI = process.env.MONGODB_URL

    mongoose.connect(MONGODB_URI)

    const getDetails = await Projects.findOne({ _id: params.id })

    return new Response(JSON.stringify(getDetails), {
        headers: {
            'Content-Type': 'application/json',
        },
    });

}

