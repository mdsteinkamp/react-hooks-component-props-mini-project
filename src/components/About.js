import React from "react";

function About({
    img = "https://via.placeholder.com/215",
    alt,
    id,
    about,
}) {
    return (
        <aside>
            <img src={img} alt={alt} id={id}/>
            <p>{about}</p>
        </aside>
    )
}

export default About;