import React, { useState, useTransition } from "react";
import styles from "./home.module.css";
import Card from "../../components/card/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { cardData } from "../../local-data/cardData";

function Home() {
  const navigate = useNavigate();
  const transition = {
    ease: "easeIn",
    duration: 0.6,
  };
  const location = useLocation();
  return (
    <motion.div
      className={styles.home}
      style={{ height: "100vh", backgroundSize: "cover" }}
      exit={{ backgroundPositionX: "550px", margin: "2rem", height: "96vh" }}
      transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}
    >
      <motion.div className={styles.backgroundOverlay} exit={{ x: 550, height: "96vh" }} transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}></motion.div>
      <motion.div className="container justify-space-btw" style={{ height: "100%", padding: "5rem" }} exit={{ padding: "3rem" }} transition={{ ease: "easeOut", delay: 0.5, duration: 2.2 }}>
        <motion.div className={`${styles.topContent} justify-space-btw align-start`} exit={{ marginBottom: 0 }}>
          <motion.div className={styles.writing} exit={{ opacity: 0 }} transition={transition}>
            <h1 className={styles.h1}>
              THE CHIEF <br /> OF NAVAL STAFF
            </h1>
            <p>
              “A highly motivated professional naval force capable of shaping the security outcomes within Nigeria’s maritime domain and the littorals including land-based engagements in fulfilment of
              Nigeria’s national interest.”{" "}
            </p>
          </motion.div>
          <img src="./images/logo.svg" alt="" />
        </motion.div>
        <motion.div className={`${styles.middleContent} align-end`} style={{ flexDirection: "column", width: "100%" }} exit={{ opacity: 0 }} transition={transition}>
          <p>AM GSS pcs fdc(+) BSc MSc</p>
          <h1>VICE ADMIRAL Ei OGALLA</h1>
        </motion.div>
        <motion.div className={`${styles.bottomContent} justify-space-btw align-end`} style={{ marginLeft: "auto", width: "65%", gap: "0.1rem" }} exit={{ opacity: 0 }} transition={transition}>
          {cardData.map((data) => {
            return (
              <Card
                path={location.pathname}
                link={`/details${data.link}`}
                image={data.image}
                text={data.name}
                handleClick={() => {
                  navigate(`/details${data.link}`);
                }}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
