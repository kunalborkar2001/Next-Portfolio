import mongoose from 'mongoose';
require('dotenv').config();
const Projects = require('./Modules/projects.schema')


export async function GET() {

    const MONGODB_URI = process.env.MONGODB_URL

    mongoose.connect(MONGODB_URI)
    
    try {
        const getProjects = await Projects.find()

        return new Response(JSON.stringify(getProjects), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error);
    }
}


// export async function GET(request) {
//     const { searchParams } = new URL(request.url)
//     const id = searchParams.get('id')

//     const getDetails = await Projects.find({ id: id })

//     return new Response(JSON.stringify(getDetails), {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

// }
