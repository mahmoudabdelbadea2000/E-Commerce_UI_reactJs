import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetComponent from "../../components/utility/Helmet";
import styles from "./auth.module.css";

const LoginPage = () => {
  return (
    <section
      className={`py-5`}
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "500px",
      }}
    >
      <HelmetComponent title="Login" />
      <Container className="d-flex justify-content-center align-items-center">
        <div
          className={`bg-white p-4 mt-5 rounded-1 ${styles.login}`}
          style={{
            boxShadow: "-2px 2px 10px 0px #f1f1f1",
          }}
        >
          <h4 className="text-center mb-4">login</h4>
          <form className="d-flex flex-column" action="">
            <input className="mb-2 border-0" type="email" placeholder="Email" />
            <input
              className="mb-2 border-0"
              type="password"
              placeholder="Password"
            />
            <Link to="/forget-password" style={{ color: "#000" }}>
              <p style={{ cursor: "pointer" }}>Forget Password ?</p>
            </Link>
            <div className="text-center d-flex justify-content-evenly">
              <Button
                variant="dark"
                className={`rounded-pill border-0 px-4 mt-2`}
              >
                login
              </Button>
              <Link to="/sign-up">
                <Button
                  variant="dark"
                  className={`rounded-pill border-0 px-4 mt-2`}
                >
                  sign up
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default LoginPage;
