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
      style={{ height: "100vh", backgroundSize: "cover", backgroundColor: "rgba(000,000,000,1)" }}
      transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}
    >
      <motion.div className={styles.backgroundOverlay} exit={{ backgroundColor: "rgba(000,000,000,1)" }} transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}></motion.div>
      {/* <video muted autoPlay loop style={{ position: "absolute", zIndex: 0 }}>
        <source src="./flag.mp4"></source>
      </video>
      <img
        src="./images/chief.png"
        alt=""
        style={{ height: "100vh", position: "absolute", right: 0, top: 0, zIndex: 1 }}
        exit={{ height: "96vh", width: "68%", objectFit: "cover", objectPosition: "top", position: "absolute", right: 0, top: 0, zIndex: 1 }}
        transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}
      /> */}

      {/* <div className={styles.backgroundOverlay} exit={{ x: 550, height: "96vh" }} transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}></div> */}
      <div
        className="container justify-space-btw"
        style={{ height: "100%", padding: "5rem", position: "relative", zIndex: 20 }}
        exit={{ padding: "3rem" }}
        transition={{ ease: "easeOut", delay: 0.5, duration: 2.2 }}
      >
        <div className={`${styles.topContent} justify-space-btw align-start`} exit={{ marginBottom: 0 }}>
          <motion.div className={styles.writing} exit={{ opacity: 0 }} transition={transition}>
            <h1 className={styles.h1}>
              THE CHIEF <br /> OF NAVAL STAFF
            </h1>
            <p>
              <b>Mission</b> <br />
              "Maintain and equip a professionally competent and ethical naval force while leveraging on all elements of national power for the effective defence of Nigeria’s maritime area of interest
              against all forms of threat in fulfilment of national security imperatives."
            </p>
            <br />
            <br />
            <p>
              <b>Vision</b> <br />
              “A highly motivated professional naval force capable of shaping the security outcomes within Nigeria’s maritime domain and the littorals including land-based engagements in fulfilment of
              Nigeria’s national interest.”{" "}
            </p>
          </motion.div>
          <img src="./images/logo.svg" alt="" />
        </div>
        <motion.div className={`${styles.middleContent} align-end`} style={{ flexDirection: "column", width: "100%" }} exit={{ opacity: 0 }} transition={transition}>
          <p>AM GSS pcs fdc(+) BSc MSc</p>
          <h1>VICE ADMIRAL Ei OGALLA</h1>
        </motion.div>
        <div className={`${styles.bottomContent} justify-space-btw align-end`} style={{ marginLeft: "auto", width: "65%", gap: "0.1rem" }} exit={{ opacity: 0 }} transition={transition}>
          {cardData.map((data) => {
            return (
              <Card
                path={location.pathname}
                link={`/details${data.link}`}
                image={data.icon}
                text={data.name}
                handleClick={() => {
                  navigate(`/details${data.link}`);
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
