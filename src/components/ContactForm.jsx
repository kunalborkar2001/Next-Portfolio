"use client";
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import ThankYou from "./ThankYou";
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        query: '',
    });

    const [success, setSuccess] = useState(false)
    const [progress, setProgress] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setProgress(true)
        try {
            const response = await fetch('/apicontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Handle success
                setSuccess(true)
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error(error);
            // Handle error
        }
        finally {
            setProgress(false)
        }
    };



    return (
        <>
            {!success ? (<div className="h-screen flex flex-col justify-center max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ">
                <h2 className="font-bold text-xl  text-neutral-200">
                    Contact Form
                </h2>
                <p className="text-sm max-w-sm mt-2 text-neutral-300">
                    Please provide your short info so that I can contact you back 🤵‍♂️
                </p>

                <form className="my-8" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" placeholder="Just first name..." type="text" required
                                name="name" value={formData.name} onChange={handleChange}
                            />
                        </LabelInputContainer>

                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input id="lastname" placeholder="Last name please..." type="text" required
                                name="lastName" value={formData.lastName} onChange={handleChange}
                            />
                        </LabelInputContainer>

                    </div>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" placeholder="Email here..." type="email" required
                            name="email" value={formData.email} onChange={handleChange}
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="Description">Description</Label>
                        <Input id="Description" placeholder="Your Query ???...." type="text" required
                            name="query" value={formData.query} onChange={handleChange}
                        />
                    </LabelInputContainer>

                    {!progress ? (<button
                        className="relative group/btn  from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                    >
                        Send to Kunal &rarr;
                        <BottomGradient />
                    </button>) :
                        (
                            <div className="w-full  text-center">
                                <CircularProgress color="success" />
                            </div>
                        )
                    }

                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    <div className="flex flex-col space-y-4">

                        <Link href="https://github.com/kunalborkar2001" target="_blank">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="button"
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                        </Link>

                        <Link href="https://www.linkedin.com/in/kunal-borkar-195a3a213/" target="_blank">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="button"
                            >
                                <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Linkdin
                                </span>
                                <BottomGradient />
                            </button>
                        </Link>

                        <Link href="https://www.instagram.com/i_am_kunalborkar/" target="_blank">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                type="button"
                            >
                                <IconBrandInstagram className="h-4 w-4 text-neutral-300" />
                                <span className="text-neutral-300 text-sm">
                                    Instagram
                                </span>
                                <BottomGradient />
                            </button>
                        </Link>
                    </div>
                </form>
            </div>) : (
                <div>
                    <ThankYou />
                </div>
            )}

            <Snackbar open={success} autoHideDuration={6000} onClose={handleSnackBarClose}>
                <Alert
                    onClose={handleSnackBarClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Query Sent Successfully
                </Alert>
            </Snackbar>
        </>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
