import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function ModalWindow(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Page # {props.id}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalWindow;
// render(<ModalWindow />);

// function ModalWindow() {
//   const [show, setShow] = useState(false);

//   const visible = () => setShow(true);
//   return (
//     <div>
//       <Button variant="primary" onClick={visible}>
//         Open modal window
//       </Button>
//       <Modal>Text Modal</Modal>
//     </div>
//   );
// }

// export default ModalWindow;

// import { Button } from "react-bootstrap";

// function Modal() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary">
//         {/* onClick={handleShow} */}
//         Launch demo modal
//       </Button>

//       <Modal>
//         {/* show={show} onHide={handleClose} */}
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary">
//             {/* onClick={handleClose} */}
//             Close
//           </Button>
//           <Button variant="primary">
//             {/* onClick={handleClose} */}
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
// render(<Modal />);
