import {
  Navbar,
  Form,
  Nav,
  NavDropdown,
  FormControl,
  Button
} from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import SvgBrand from "./SvgBrand";
import HeaderList from "./HeaderList";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div class="bg-dark collapse" id="navbarHeader">
        <Container>
          <Row>
            <Col class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </Col>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#" class="text-white">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <SvgBrand />
            <strong>Album</strong>
          </Navbar.Brand>
          <Navbar.Toggle
            class="navbar-toggler collapsed"
            type="button"
          />
        </Container>
      </div>
      </Navbar> */}
    </header>
    // <header>
    //   <div className="bg-dark collapse" id="navbarHeader">
    //     <Container>
    //       <Row>
    //         <Col sm={8} md={7} py={4}>
    //           <h4 className="text-white">About</h4>
    //           <p className="text-muted">
    //             Add some information about the album below, the author, or any
    //             other background context. Make it a few sentences long so folks
    //             can pick up some informative tidbits. Then, link them off to
    //             some social networking sites or contact information.
    //           </p>
    //         </Col>
    //         <Col sm={4} md={{ offset: 1 }} py={4}>
    //           <h4 className="text-white">Contact</h4>
    //           <HeaderList />
    //         </Col>
    //       </Row>
    //     </Container>
    //   </div>
    //   <div className="navbar navbar-dark bg-dark shadow-sm">
    //     <Container className="d-flex justify-content-between">
    //       <Navbar.Brand href="/" className="d-flex align-items-center">
    //         <SvgBrand />
    //         <strong>Album</strong>
    //       </Navbar.Brand>
    //       <Navbar.Toggle
    //         aria-controls="navbarHeader"
    //         data-toggle="collapse"
    //         data-target="#navbarHeader"
    //         aria-expanded="false"
    //       />
    //     </Container>
    //   </div>
    // </header>
    // <header>
    //   <Navbar bg="dark" expand="lg" variant="dark">
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Container>
    //         <Row>
    //           <Col sm={8} md={7} py={4}>
    //             <h4 className="text-white">About</h4>
    //             <p className="text-muted">
    //               Add some information about the album below, the author, or any
    //               other background context. Make it a few sentences long so
    //               folks can pick up some informative tidbits. Then, link them
    //               off to some social networking sites or contact information.
    //             </p>
    //           </Col>
    //           <Col sm={4} md={{ offset: 1 }} py={4}>
    //             <h4 className="text-white">Contact</h4>
    //             <HeaderList />
    //           </Col>
    //         </Row>
    //       </Container>
    //     </Navbar.Collapse>
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <SvgBrand />
    //         <strong>Album</strong>
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     </Container>
    //   </Navbar>
    // </header>
  );
}

export default Header;
