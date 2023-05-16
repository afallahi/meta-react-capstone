import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";

const specials = [
  {
    id: 'greek-salad'
  , title: 'Greek Salad'
  , description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  , price: '12.99'
  , image: '../assets/greekSalad.jpg'
  }
, {
    id: 'bruchetta'
  , title: 'Bruchetta'
  , description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  , price: '5.99'
  , image: '../assets/greekSalad.svg'
  }
, {
    id: 'lemon-dessert'
  , title: 'Lemon Dessert'
  , description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
  , price: '5.00'
  , image: '../assets/lemonDessert.jpg'
  }
];

const Specials = () => {

  const handleClick = (e) => {
    e.preventDefault();
    alert('Coming Soon!');
  };

  return (
    <section id='specials-section'>
      <h1>Specials</h1>
      <button onClick={handleClick}>Order Online</button>
      <ul id='specials-list'>
        {specials.map((special) => {
          return (
            <li key={special.id}>
              <article className="card">
                <img src={special.image} alt={special.title} />
                <h4>{special.title}</h4>
                <h4 className='price'>$ {special.price}</h4>
                <p>{special.description}</p>
                <h4>Order a Delivery    <FontAwesomeIcon icon={faMotorcycle} size='sm' /></h4>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Specials;