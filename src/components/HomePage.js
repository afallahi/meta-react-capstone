import { useEffect } from "react";
import { useParams } from "react-router-dom";

import About    from "./About";
import Landing  from "./Landing";
import Reviews  from "./Reviews";
import Specials from "./Specials";

const Home = () => {
  const { slug } = useParams();

  useEffect(() => {
    const id = `${slug}-section`;
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [slug]);

  return (
    <>
      <Landing />
      <Specials />
      <Reviews />
      <About />
    </>
  );
};

export default Home;