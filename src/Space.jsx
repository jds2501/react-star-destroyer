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
        setStars(stars => {
            return stars.filter((star) => {
                return star.id !== id;
            });
        })
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
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
                return <Star key={star.id} id={star.id} position={star.position} destroyCallback={removeStar} />
            })}
        </>
    );
}

export default Space;