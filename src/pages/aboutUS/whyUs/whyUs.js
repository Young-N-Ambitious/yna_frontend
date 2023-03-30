import React from "react";



const whyUs = "We are a diverse group of tech enthusiasts who began coding together in the summer of 2019. We come from a wide range of backgrounds, but we all bring something special and unique to the Tech Industry, which sets us apart. While many of us are bootcamp grads, Computer Science students, and/or have come from other IT related fields, we each have something in common. We are Young And Ambitious and we attract like minded individuals who have the same goals, and plan to leave a mark on the entire tech force."

const WhyUs = () => {
    return (
    
        <div className='container ' id='whyUs-area'>
            <article className='WhyUs-article'>
                <h3 id='whyUs-title1'>Why us?</h3>
                <h2 id='whyUs-title2'>What do we do?</h2>
                <p id="WhyUs-text"> {whyUs}</p>
            </article>
        </div>

   

    );
};

export default WhyUs;