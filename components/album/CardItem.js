import { Card, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Svg from "./Svg.js";
import Time from "./Time.js";
import Link from "next/link";
import ModalWindow from "./ModalWindow.js";

function CardItem(props) {
  // console.log(props);
  return (
    <Card сlassName="card mb-4 shadow-sm">
      {/* onClick={() => Router.push(`/gallery/${props.id}`)} */}
      {/* <Svg title={props.articles.articles[props.id].title} /> */}
      <Card.Img variant="top" src={props.src} />
      <Card.ImgOverlay>
        <Card.Title>{props.name}</Card.Title>
      </Card.ImgOverlay>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup>
            <Link href="/gallery/[slug]" as={`/gallery/${props.id}`}>
              <Button
                className={`${props.id}`}
                variant="outline-secondary"
                size="sm"
              >
                View
              </Button>
            </Link>
            <ModalWindow id={props.id} />
          </ButtonGroup>
          <Time />
        </div>
      </Card.Body>
    </Card>
  );
}

// function onClickHandler(href) {
//   return e => {
//     e.preventDefault();
//     Router.push(href);
//   };
// }

// const Link = ({ children, href }) => (
//   <a href="#" onClick={onClickHandler(href)}>
//     {children}
//     <style jsx>{`
//       a {
//         color: red;
//       }
//     `}</style>
//   </a>
// );

export default CardItem;
