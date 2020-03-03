import CardItem from "./CardItem";
import { Container, Row, Col } from "react-bootstrap";

function Cards(props) {
  // let arr = [];
  // for (let i = 0; i < 3; i++) {
  //   arr.push(i);
  // }
  // console.log(props);

  // const cardList = arr.map((item, index) => (
  //   <div key={index} className="col-md-4">
  //     <CardItem articles={cards} id={`${index}`} />
  //   </div>
  // ));

  const cardList = props.cards.map((item, index) => (
    <Col key={index} md={4}>
      <CardItem
        src={props.cards[index].urlToImage}
        text={props.cards[index].description}
        title={props.cards[index].title}
        name={props.cards[index].source.name}
        id={index + 1}
      />
    </Col>
  ));
  console.log(props);
  return (
    <div className="album py-5 bg-light">
      <Container>
        <Row>{cardList}</Row>
      </Container>
    </div>
  );
}

export default Cards;
