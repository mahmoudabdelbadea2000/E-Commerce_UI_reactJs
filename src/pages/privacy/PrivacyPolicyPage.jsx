import React from "react";
import { Container } from "react-bootstrap";
import HelmetComponent from "../../components/utility/Helmet";
import styles from "./style.module.css";

const PrivacyPolicyPage = () => {
  return (
    <section
      className="position-relative"
      style={{ backgroundColor: "var(--back-color)", minHeight: "500px" }}
    >
      <HelmetComponent title="privacy policy" />
      <Container>
        <div
          className={`position-absolute shadow p-3 w-75 rounded-2 ${styles.privacy__card}`}
        >
          <div className="mb-4chrome.exe">
            <h5>the Standard lorem Ipusem Massage</h5>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              optio cupiditate ullam, illum atque cumque quia illo adipisci esse
              maxime. Et placeat eius magni adipisci optio deleniti corrupti,
              autem iure!
            </p>
          </div>
          <div className="mb-4">
            <h5>the Standard lorem Ipusem Massage</h5>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              optio cupiditate ullam, illum atque cumque quia illo adipisci esse
              maxime. Et placeat eius magni adipisci optio deleniti corrupti,
              autem iure!
            </p>
          </div>
          <div className="mb-4">
            <h5>the Standard lorem Ipusem Massage</h5>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              optio cupiditate ullam, illum atque cumque quia illo adipisci esse
              maxime. Et placeat eius magni adipisci optio deleniti corrupti,
              autem iure!
            </p>
          </div>
          <div>
            <h5>the Standard lorem Ipusem Massage</h5>
            <p className="text-black-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              optio cupiditate ullam, illum atque cumque quia illo adipisci esse
              maxime. Et placeat eius magni adipisci optio deleniti corrupti,
              autem iure!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicyPage;
