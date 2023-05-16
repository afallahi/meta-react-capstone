import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook
, faInstagram
, faTiktok
, faYelp
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    id:   'facebook'
  , icon: faFacebook
  , url: "https://facebook.com"
  }
, {
    id:   'instagram'
  , icon: faInstagram
  , url: "https://instagram.com"
  }
, {
    id:   'tiktok'
  , icon: faTiktok
  , url: "https://tiktok.com"
  }
, {
    id:   'yelp'
  , icon: faYelp
  , url: "https://yelp.com"
  }
];

const Socials = () => {
  return (
    <nav id='socials'>
      <h3>Follow Us</h3>
      <ul>
        {socials.map((social) => {
          return (
            <li key={social.id}>
              <a href={social.url} target='_blank' rel="noreferrer noopener">
                <FontAwesomeIcon icon={social.icon} size='2xl' />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Socials;