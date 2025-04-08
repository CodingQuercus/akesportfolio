"use client";

import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
    return (
        <div
            id="projects"
            className="bg-[#f3f3f3] min-h-screen flex flex-col gap-6 px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] pt-[80px] pb-[40px]"
        >
            <h1 className="text-3xl sm:text-4xl text-[#000] font-bold font-inter text-left pb-6">
                Projects
            </h1>

            <ProjectCard
                year="2025"
                title="Erfaren"
                subtitle="Innovative mobile services and systems"
                desc1="A concept application with the goal of reducing loneliness of retirees. Implemented video calls with WebRTC."
                desc2="Full-stack project."
                desc3="Developed with Svelte and Supabase."
                imageUrl="images/erfaren.png"
                contribution="My main focus during this project was to work with the UX/UI of the application. 
                I did code frontend and backend as well. I was part of implementing the WebRTC integration for the video calls."
                link="/projects/erfaren"
            />

            <ProjectCard
                year="2024"
                title="Sketch'N'Guess"
                subtitle="Prototype Development for Mobile Applications"
                desc1="A mobile game combining Pictionary with Strava."
                desc2="Full-stack project."
                desc3="Developed with React Native for the application and Node.JS for the backend."
                imageUrl="images/sketchnguesslogo.png"
                contribution="My main focus during this project was to create the server for the game. I implemented a local server using 
                Node.JS which handled game logic and distributed information to all connected clients."
                link="/projects/sketchnguess"
            />

            <ProjectCard
                year="2024"
                title="FikaSpelet"
                subtitle="Product Development in Media Technology using the 'Design-build-test' method"
                desc1="A marketing campaign consisting of a browser game and website for a Swedish company."
                desc2="Full-stack project."
                desc3="Developed using React JS, Phaser.IO, C# and ASP.NET Core."
                imageUrl="images/fika.png"
                contribution="My main focus during this project was to implement the game. Through pair programming with another classmate we implemented the game with Phaser.IO as the game engine."
                link="/projects/fikaspelet"
            />
        </div>
    );
}
