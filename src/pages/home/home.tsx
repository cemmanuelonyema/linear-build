import { Container } from "../../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "./comps/hero";

function Home() {
  return (
    <>
      <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubtitle>
        </Hero>
      </Container>
    </>
  );
}

export default Home;
