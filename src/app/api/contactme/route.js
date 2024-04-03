import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// Define a MongoDB schema for the contact form data
const ContactSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    query: String,
});

// Create a mongoose model using the schema
const Contact = mongoose.model('Contact', ContactSchema);

// MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://kunalborkar2001:pveoINdiVlZx2wEm@kunalsmongo.5raphyd.mongodb.net/myportfolio';

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

// Email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'kunalborkar3088@gmail.com', // Your Gmail email address
        pass: 'ibhhlfkuhalnyfzi', // Your Gmail password
    },
});

export async function POST(request) {
    try {
        // Parse the request body as JSON
        const { name, lastName, email, query } = await request.json();

        // Save form data to MongoDB
        await Contact.create({ name, lastName, email, query });

        // Send email to "kunalborkar2001@gmail.com"
        await transporter.sendMail({
            from: 'kunalborkar3088@gmail.com', // Your Gmail email address
            to: 'kunalborkar2001@gmail.com',
            subject: 'New query received',
            text: `Name: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nQuery: ${query}`,
        });

        // Send confirmation email to the query maker
        await transporter.sendMail({
            from: 'kunalborkar3088@gmail.com', // Your Gmail email address
            to: email,
            subject: 'Thank you for your query',
            text: 'Thanks for your query! I will get back to you soon.',
        });

        // Return success response
        return new Response(JSON.stringify({ message: 'Form data stored and emails sent successfully' }), {
            headers: {
                'Content-Type': 'application/json',
                status : 201
            },
        });
    } catch (error) {
        console.error('Error:', error);
        // Return error response
        return new Response(JSON.stringify({ error: 'An error occurred while processing your request' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
