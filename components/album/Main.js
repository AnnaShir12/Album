import { Container, Jumbotron } from "react-bootstrap";
import Buttons from "./Buttons";
import TitleH1 from "./TitleH1";
import Description from "./Description";

function Main() {
  return (
    <main>
      <Jumbotron className="text-center">
        <Container>
          <TitleH1 />
          <Description />
          <Buttons />
        </Container>
      </Jumbotron>
    </main>
  );
}

export default Main;
