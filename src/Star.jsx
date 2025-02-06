import { useEffect } from "react";
import "./Star.css";
import { useRef } from "react";

const STAR_EMOJI = "⭐";

function Star({ id, position, destroyCallback }) {
    const starRef = useRef(null);

    useEffect(() => {
        starRef.current?.focus();
    }, []);

    const starPosition = {
        left: position.x,
        top: position.y
    };

    return (
        <div tabIndex="0" ref={starRef} onClick={() => {
            destroyCallback(id);
        }} className="Star" style={starPosition}>
            {STAR_EMOJI}
        </div>
    );
}

export default Star;