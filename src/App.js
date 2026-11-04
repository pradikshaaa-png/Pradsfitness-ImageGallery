
import React from "react";
import ImageCard from "./components/ImageCard";
import "./App.css";

import logo from "./assets/pradsfitness-logo.jpeg";

function App() {

    // Array of fitness activities
    const activities = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
            title: "Aerobics",
            description: "Improve your stamina, flexibility and overall fitness through energetic aerobic movements."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800",
            title: "Zumba",
            description: "Enjoy dance-based workouts combining music, movement and calorie-burning exercises."
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
            title: "Belidi",
            description: "Enjoy a fun and engaging fitness session with energetic movements and rhythm."
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800",
            title: "HIIT",
            description: "High intensity interval training to improve endurance and build strength."
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800",
            title: "Cardio Kickboxing",
            description: "Combine punching, kicking and cardio movements for a powerful workout."
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
            title: "Weight Training",
            description: "Build muscle strength and improve body composition through resistance training."
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800",
            title: "Stepper Workout",
            description: "Boost cardiovascular endurance with energetic step-based movements."
        }
    ];

    return (
        <>
            {/* Header */}
            <header className="header">

                <div className="logo-section">
                    <img src={logo} alt="Pradsfitness Logo" />
                    <h1>Pradsfitness</h1>
                </div>

                <p>Fitness is a lifestyle, not a destination!</p>

            </header>


            {/* Gallery */}
            <main className="gallery-container">

                <div className="gallery-heading">
                    <h1>Explore Our Fitness Activities</h1>

                    <p>
                        Discover your strength. Move with energy.
                        Live a healthier life.
                    </p>
                </div>


                <div className="image-gallery">

                    {activities.map((item) => (

                        <ImageCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />

                    ))}

                </div>

            </main>


            {/* Footer */}
            <footer className="footer">

                <h2>Pradsfitness</h2>

                <p>
                    Empowering Women Through Fitness
                </p>

                <p className="footer-text">
                    Aerobics | Zumba | Belidi | HIIT |
                    Cardio Kickboxing | Weight Training | Stepper
                </p>

                <p className="copyright">
                    © 2026 Pradsfitness. All Rights Reserved.
                </p>

            </footer>

        </>
    );
}

export default App;
