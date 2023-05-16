import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const imageIds = {};
let   counter  = 0;
do {
  const newId = Math.floor(Math.random() * 71);
  if (!imageIds[newId]) {
    imageIds[newId] = 1;
    counter++;
  }
} while (counter < 4);

const images = Object.keys(imageIds);

const reviews = [
  {
    id: images[0]
  , rating: 4
  , name: 'UserName' + images[0]
  , avatar: "https://i.pravatar.cc/200?img="  + images[0]
  , text: "I love meeting my friends there for a cocktail on fridays!"
  }
, {
    id: images[1]
  , rating: 4
  , name: 'UserName' + images[1]
  , avatar: "https://i.pravatar.cc/200?img="  + images[1]
  , text: "Mario and Adrian are a great team!"
  }
, {
    id: images[2]
  , rating: 3
  , name: 'UserName' + images[2]
  , avatar: "https://i.pravatar.cc/200?img="  + images[2]
  , text: "The Lemon Dessert was delicious.  You could tell it was made fresh."
  }
, {
    id: images[3]
  , rating: 5
  , name: 'UserName' + images[3]
  , avatar: "https://i.pravatar.cc/200?img="  + images[3]
  , text: "The specials are always great and I love the bistro vibe!"
  }
];

const Reviews = () => {
  return (
    <section id='reviews-section'>
      <h2>Testimonials</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.id}>
              <article className="card">
                <ul>
                  {[0,1,2,3,4].map((idx) => {
                    return (
                      <li key={idx}><FontAwesomeIcon className={(idx < review.rating) ? 'yellow' : 'grey'} icon={faStar} size='sm' /></li>
                    );
                  })}
                </ul>
                <img src={review.avatar} alt={'user ' + review.id + ' avatar'} />
                <h4>{review.name}</h4>
                <p>{review.text}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Reviews;