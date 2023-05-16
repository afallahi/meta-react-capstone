import { useNavigate } from "react-router-dom";
import restaurantImg from "../assets/restaurant.jpg"

const Landing = () => {
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    navigate("/booking");
  };

  return (
    <article id='landing-section'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Reserve a table with our new reservation system!  We'll have your table ready for you when you arrive!
      </p>
      <button onClick={handleButtonClick}>Reserve a Table</button>
      <img src={restaurantImg} alt='Little Lemon Restaurant' />
    </article>
  );
};

export default Landing;