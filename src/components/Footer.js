import Nav     from "./Nav";
import Socials from "./Socials";
import Contact from "./Contact";
import restaurantfood from "../assets/restauranfood.jpg";

const Footer = () => {
  return (
    <footer>
      <img src={restaurantfood} alt="Little Lemon Restaurant Food" />
      <section id='sitenav-section'>
        <h3>Site Navigation</h3>
        <Nav id='sitenav'/>
      </section>
      <Contact />
      <Socials />
    </footer>
  );
};

export default Footer;