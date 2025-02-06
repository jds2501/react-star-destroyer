import { useEffect, useState } from "react";
import Star from "./Star";

const STAR_SIZE = 10;

function getRandomPosition() {
    return {
        x: (window.innerWidth - STAR_SIZE) * Math.random(),
        y: (window.innerHeight - STAR_SIZE) * Math.random()
    };
}

function Space() {
    const [stars, setStars] = useState([]);

    function removeStar(id) {
        console.log("Removing star: ", id);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log("Generate Star!");
            const newStar = {
                id: crypto.randomUUID(),
                position: getRandomPosition()
            };

            setStars(stars => [...stars, newStar]);
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            {stars.map((star) => {
                return <Star id={star.id} position={star.position} destroyCallback={removeStar} />
            })}
        </>
    );
}

export default Space;