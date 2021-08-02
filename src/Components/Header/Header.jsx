import React from "react";
import { useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { FaSearch } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import pasticho from "../../Img/Pasticho.png";
import { connect } from "react-redux";
import { LOGOUT } from "../../redux/type";

const Header = (props) => {
  let history = useHistory();
  const takeMe = (were) => {
    history.push(were);
  };
  // obtener las iniciales de los usuarios.

  // funcion controladora del LogOut
  const LogOut = () => {
    props.dispatch({ type: LOGOUT });
  };

  if (props.credentials?.token === "") {
    return (
      <div className="bodyNavBar">
        <Navbar bg="navBackGround" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img className="pasticho" src={pasticho} alt="pasticho"></img>
          </Navbar.Brand>
          <Nav.Link onClick={() => takeMe("/")} className="BtnFaSearch">
            <FaSearch />
          </Nav.Link>
          <Nav.Link onClick={() => takeMe("/explore")} className="BtnFaSearch">
            <CgMenuGridR />
          </Nav.Link>
          <NavbarToggle className="NavbarToggle" />
          <NavbarCollapse>
            <Nav>
              <NavDropdown title="Products" className="BtnCollapse">
                <NavDropdown.Item href="#products/chocolate">
                  chocolate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => takeMe("/products/tea")}
                  className="BtnCollapse"
                >
                  Tea
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => takeMe("/")}
                className="BtnCollapse BtnBuscar"
              >
                BUSCAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/about")}
                className="BtnCollapse"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/explore")}
                className="BtnCollapse BtnBuscar"
              >
                EXPLORAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/contact")}
                className="BtnCollapse"
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="BtnLogin">
              <Nav.Link onClick={() => takeMe("/login")}>Login</Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  } else if (
    props.credentials?.token !== "" &&
    props.credentials.user.role === "Admin"
  ) {
    const primeraLetra = props.credentials.user?.name.charAt(0);
    const segundaLetra = props.credentials.user?.lastName.charAt(0);
    return (
      <div className="bodyNavBar">
        <Navbar bg="navBackGround" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img className="pasticho" src={pasticho} alt="pasticho"></img>
          </Navbar.Brand>
          <Nav.Link onClick={() => takeMe("/")} className="BtnFaSearch">
            <FaSearch />
          </Nav.Link>
          <Nav.Link onClick={() => takeMe("/explore")} className="BtnFaSearch">
            <CgMenuGridR />
          </Nav.Link>
          <NavbarToggle className="NavbarToggle" />
          <NavbarCollapse>
            <Nav>
              <NavDropdown title="Products" className="BtnCollapse">
                <NavDropdown.Item href="#products/chocolate">
                  chocolate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => takeMe("/products/tea")}
                  className="BtnCollapse"
                >
                  Tea
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => takeMe("/")}
                className="BtnCollapse BtnBuscar"
              >
                BUSCAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/about")}
                className="BtnCollapse"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/explore")}
                className="BtnCollapse BtnBuscar"
              >
                EXPLORAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/contact")}
                className="BtnCollapse"
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="costumerBTN"
                onClick={() => takeMe("/profile")}
              >
                <p id="Iniciales">
                  {primeraLetra.toUpperCase()} {segundaLetra.toUpperCase()}
                </p>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="BtnLogin LogOutBTN" onClick={() => LogOut()}>
                logOut
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  } else {
    const primeraLetra = props.credentials.user?.name.charAt(0);
    const segundaLetra = props.credentials.user?.lastName.charAt(0);
    return (
      <div className="bodyNavBar">
        <Navbar bg="navBackGround" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <img className="pasticho" src={pasticho} alt="pasticho"></img>
          </Navbar.Brand>
          <Nav.Link onClick={() => takeMe("/")} className="BtnFaSearch">
            <FaSearch />
          </Nav.Link>
          <Nav.Link onClick={() => takeMe("/explore")} className="BtnFaSearch">
            <CgMenuGridR />
          </Nav.Link>
          <NavbarToggle className="NavbarToggle" />
          <NavbarCollapse>
            <Nav>
              <NavDropdown title="Products" className="BtnCollapse">
                <NavDropdown.Item href="#products/chocolate">
                  chocolate
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => takeMe("/products/tea")}
                  className="BtnCollapse"
                >
                  Tea
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                onClick={() => takeMe("/")}
                className="BtnCollapse BtnBuscar"
              >
                BUSCAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/about")}
                className="BtnCollapse"
              >
                About Us
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/explore")}
                className="BtnCollapse BtnBuscar"
              >
                EXPLORAR
              </Nav.Link>
              <Nav.Link
                onClick={() => takeMe("/contact")}
                className="BtnCollapse"
              >
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                className="costumerBTN"
                onClick={() => takeMe("/profile")}
              >
                <p id="Iniciales">
                  {primeraLetra.toUpperCase()} {segundaLetra.toUpperCase()}
                </p>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="BtnLogin LogOutBTN" onClick={() => LogOut()}>
                logOut
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </div>
    );
  }
};

export default connect((state) => ({
  credentials: state.credentials,
}))(Header);
