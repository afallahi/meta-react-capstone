import marioImg from "../assets/Mario and Adrian A.jpg";
import chefImg from "../assets/restaurantChefB.jpg";

const About = () => {
    return (
      <article id='about-section'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Little Lemon is a charming neighbourhood bistro that serves simple 
          food and classic cocktails in a lively but casual environment. The 
          restaurant features a locally-sourced menu with daily specials.
        </p>
        <img className="bottom" src={marioImg} alt="Mario and Adrian" />
        <img className="top" src={chefImg} alt="Chef Adrian" />
      </article>
    );
  };
  

  export default About;