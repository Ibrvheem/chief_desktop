import React, { useState, useTransition } from "react";
import styles from "../Home/home.module.css";
import Card from "../../components/card/Card";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { cardData } from "../../local-data/cardData";

function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const selectedCard = cardData.find((card) => card.link === `/${id}`);
  console.log(selectedCard);
  console.log(id);
  const transition = {
    ease: "easeIn",
    duration: 0.6,
  };
  const text = "VICE ADMIRAL EL.OGALLA";

  // Split the text into words
  const words = text.split(" ");
  // Variants for staggered animation
  const textVariants = {
    initial: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.05, staggerDirection: 1 },
    },
  };

  const desc = selectedCard.description;

  // Split the text into words
  const descSplit = desc.split(" ");

  // Variant for each letter in a word
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className={styles.home} style={{ backgroundPositionX: "550px", margin: "2rem", height: "96vh" }}>
      <motion.div className={styles.backgroundOverlay} style={{ transform: "translateX(550px)", height: "96vh" }} transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}></motion.div>

      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", padding: "3rem", paddingLeft: "0rem", paddingBottom: "2rem" }}>
        <div className={`${styles.topContent} justify-space-btw align-start`} style={{ marginBottom: 0 }}>
          <motion.div className={styles.writing} exit={{ opacity: 0 }} transition={transition}></motion.div>
          <img src="./images/logo.svg" alt="" />
        </div>
        <div style={{ height: "100%", flexDirection: "column", flexWrap: "nowrap" }} className="justify-space-btw">
          <div style={{ height: "100%", width: "100%", display: "flex" }} className={styles.details}>
            <motion.div style={{ height: "100%", width: "540px", padding: "1rem", opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
              <div>
                <motion.h4>{selectedCard.title}</motion.h4>
                <motion.p variants={textVariants} initial="initial" animate="animate" style={{ overflow: "scroll", height: "55vh" }}>
                  {" "}
                  {desc.split("").map((letter, index) => (
                    <motion.span key={index} variants={letterVariants} style={{ fontFamily: "Lato" }}>
                      {letter}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
            <div>
              <motion.h2 variants={textVariants} initial="initial" animate="animate" style={{ color: "white", fontSize: "7rem", fontWeight: 100, padding: "0rem 2rem" }}>
                {words.map((word, wordIndex) => (
                  <React.Fragment key={wordIndex}>
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span key={letterIndex} variants={letterVariants}>
                        {letter}
                      </motion.span>
                    ))}
                    {wordIndex !== words.length - 1 && <motion.br />} {/* Add a line break after each word except the last one */}
                  </React.Fragment>
                ))}
              </motion.h2>
            </div>
          </div>
          <div className="justify-space-btw align-end">
            <Link to="/">
              <div className={`${styles.button} align-center justify-center`}>BACK TO HOME</div>
            </Link>
            <motion.div
              className={`${styles.bottomContent} justify-space-btw align-end`}
              style={{ marginLeft: "auto", width: "65%", padding: "1rem", opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
            >
              {cardData.map((data) => {
                console.log(`/details${data.link}`);

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
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Details;
