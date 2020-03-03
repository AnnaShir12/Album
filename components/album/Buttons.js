import { Button } from "react-bootstrap";

function Buttons() {
  return (
    <p>
      <Button variant="primary" className="my-2">
        Main call to action
      </Button>{" "}
      <Button variant="secondary" className="my-2">
        Secondary action
      </Button>
    </p>
  );
}

export default Buttons;
