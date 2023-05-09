import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import HelmetComponent from "../../components/utility/Helmet";
import styles from "./auth.module.css";

const SignupPage = () => {
  return (
    <section
      className={`py-5`}
      style={{
        backgroundColor: "#f0f0f0",
        minHeight: "500px",
      }}
    >
      <HelmetComponent title="sign up" />
      <Container className="d-flex justify-content-center align-items-center">
        <div
          className={`bg-white p-4 mt-3 rounded-1 ${styles.login}`}
          style={{
            boxShadow: "rgb(220 220 220) 0px 0px 22px 16px",
          }}
        >
          <h4 className="text-center mb-4">sign up</h4>
          <form className="d-flex flex-column" action="">
            <input
              className="mb-2 border-0"
              type="text"
              placeholder="first name"
            />
            <input
              className="mb-2 border-0"
              type="text"
              placeholder="last name"
            />
            <input className="mb-2 border-0" type="email" placeholder="Email" />
            <input
              className="mb-2 border-0"
              type="password"
              placeholder="Password"
            />
            <input
              className="mb-2 border-0"
              type="password"
              placeholder="Conferm Password"
            />
            <Link to="/login" style={{ color: "#000" }}>
              <p style={{ cursor: "pointer" }}>Do You Have Email Click Here</p>
            </Link>
            <Link to="/sign-up">
              <Button
                variant="dark"
                className={`rounded-pill border-0 px-4 mt-2`}
              >
                Register
              </Button>
            </Link>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignupPage;
