import React, { useState, useTransition } from 'react';
import styles from './details.module.css';
import Card from '../../components/card/Card';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cardData } from '../../local-data/cardData';

// Swiper imports
import "@splidejs/react-splide/css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";

function Details() {
  const navigate = useNavigate();
  const transition = {
    ease: 'easeInOut',
    duration: 0.6,
  };

  const { id } = useParams();
  const location = useLocation();
  const selectedCard = cardData.find((card) => card.link === `/${id}`);
  const text = 'VICE ADMIRAL EI OGALLA';
  const words = text.split(' ');

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

  const desc = selectedCard.link == "/chiefs" ? "" : selectedCard.description;

  const [currentIndex, setCurrentIndex] = useState(0)


  // Split the text into words
  // const descSplit = desc.split(' ');

  // Variant for each letter in a word
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div className={styles.details}>
      <div className={styles.container}>
        <div className={`${styles.textContainer} justify-space-btw`}>

          {
            selectedCard.link == '/chiefs'?
            <div>
              {/* <motion.h3>{selectedCard.title}</motion.h3>
            <motion.p variants={textVariants} initial='initial' animate='animate' style={{ overflow: 'scroll', height: '55vh' }}>
              {' '}
              {desc.split('').map((letter, index) => (
                <motion.span key={index} variants={letterVariants} style={{ fontFamily: 'Lato' }}>
                  {letter}
                </motion.span>
              ))}
            </motion.p> */}
            <motion.h3>{selectedCard.description[currentIndex].name}</motion.h3>
            <p style={{color:'white', fontSize: 15, paddingTop: 0, color: "gold"}}>{selectedCard.description[currentIndex].year}</p>
            <p style={{color:'white', fontSize: 19, paddingBottom: 5, color: "gold"}}>Achievements:</p>
            <div style={{ listStyleType: "upper-roman"}}>
            { 
              selectedCard.description[currentIndex].achievements.map((item, index)=>
              <p style={{color:'white', fontSize: 19, padding: 0}}>{index+1} - {item}</p>
              )
            } 
            </div>
           
            <p style={{color:'white', fontSize: 19, paddingBottom: 0, color: "gold"}}>Leadership:</p>
            <p style={{color:'white', fontSize: 19, paddingTop: 0, paddingBottom: 0}}>{selectedCard.description[currentIndex].qualities}</p>
            <p style={{color:'white', fontSize: 19, paddingBottom: 0, color: "gold"}}>Thoughts:</p>
            <p style={{color:'white', fontSize: 19, paddingTop: 0}}>{selectedCard.description[currentIndex].thoughts}</p>
            </div>
            :
            <div>
            {/* Text container begins */}
            <motion.h3>{selectedCard.title}</motion.h3>
            <motion.p variants={textVariants} initial='initial' animate='animate' style={{ overflow: 'scroll', height: '55vh' }}>
              {' '}
              {desc.split('').map((letter, index) => (
                <motion.span key={index} variants={letterVariants} style={{ fontFamily: 'Lato' }}>
                  {letter}
                </motion.span>
              ))}
            </motion.p>
          </div>
          // End of Text
          }
          <div
            className={styles.button}
            onClick={() => {
              navigate('/');
            }}
          >
            BACK TO HOME
          </div>
        </div>
        {
          selectedCard.link == "/chiefs" ?
          <div style={{ display: "flex", alignItems: "center",}}>
          <motion.div
              style={{ width: "80%", marginLeft: "4.5em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div
                className="splide_div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "73vw",
                  justifyContent: "center",
                }}
              >

            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                    }}
                    spaceBetween={0}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                    style={{ width:"80vw"}}
                    onSlideChange={(swiperCore) => {
                      const {
                        activeIndex,
                        snapIndex,
                        previousIndex,
                        realIndex,
                      } = swiperCore;
                      setCurrentIndex(activeIndex);
                    }}
                  >
                    {
                      selectedCard.description.map((_, index) =>{
                        // alert(`images/past${index}.png`)
                        return <SwiperSlide style={{ width:"auto"}} >
                        <img src={`images/past/${index}.png`} alt="gallery" style={{ width: "auto", height: "500px"}} />
                        </SwiperSlide>
                      } 
                    )
                    }
                    
                  </Swiper>
          </div>
            </motion.div>
        </div>
          
          :
          selectedCard.link == "/gallery" ?
          // Gallery Field
          <div style={{ display: "flex", alignItems: "center",}}>
          <motion.div
              style={{ width: "80%", marginLeft: "4.5em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            >
              <div
                className="splide_div"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "73vw",
                  justifyContent: "center",
                }}
              >

            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                    }}
                    spaceBetween={0}
                    modules={[EffectCoverflow]}
                    className="mySwiper"
                    style={{ width:"80vw"}}
                  >
                    {
                      Array.apply(null, Array(61)).map((_, index) =>{
                        // alert('Was here')
                        return <SwiperSlide style={{ width:"auto"}} >
                        <img src={`images/CNS${index+1}.png`} alt="gallery" style={{ width: "auto", height: "500px"}} />
                        </SwiperSlide>
                      } 
                    )
                    }
                    
                  </Swiper>
          </div>
            </motion.div>
        </div> :
        // Other Fields
        <div className={styles.imageContainer} style={{ backgroundImage: `url(./images/${selectedCard.image})` }}>
          <img src='./images/logo.svg' className={styles.logo} alt='' />
          <div className={styles.imageOverlay}></div>
          <motion.h2 variants={textVariants} initial='initial' animate='animate' style={{ color: 'white', fontSize: '6rem', fontWeight: 100, padding: '9rem 2rem' }}>
            {words.map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {word.split('').map((letter, letterIndex) => (
                  <motion.span key={letterIndex} variants={letterVariants}>
                    {letter}
                  </motion.span>
                ))}
                {wordIndex !== words.length - 1} {/* Add a line break after each word except the last one */}
              </React.Fragment>
            ))}
          </motion.h2>{' '}
          {/* <img src="./images/chief.jpg" className={styles.displayImage} /> */}
          <div className={`${styles.bottomContent} justify-space-btw align-end`} style={{ marginLeft: 'auto', width: '100%', gap: '0.1rem' }} exit={{ opacity: 0 }} transition={transition}>
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
        }
      </div>
    </motion.div>
  );
}

export default Details;

// function Details() {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const location = useLocation();
//   const selectedCard = cardData.find((card) => card.link === `/${id}`);
//   console.log(selectedCard);
//   console.log(id);

//   const text = "VICE ADMIRAL EL.OGALLA";

//   // Split the text into words
//   const words = text.split(" ");
//   // Variants for staggered animation

//   return (
//     <motion.div className={styles.home} style={{ backgroundPositionX: "550px", margin: "2rem", height: "96vh", backgroundImage: `url('./images/${selectedCard.image}')`, overflow: "hidden" }}>
//       <motion.div className={styles.backgroundOverlay} style={{ transform: "translateX(550px)", height: "96vh" }} transition={{ ease: [0.6, 0.5, 0.6, 1], delay: 0.5, duration: 1.5 }}></motion.div>
//       {/* <img src="./images/chief.png" alt="" style={{ height: "96vh", width: "68%", objectFit: "cover", objectPosition: "top", position: "absolute", right: 0, top: 0, zIndex: 1 }} /> */}

//       <div
//         className="container"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           height: "100%",
//           padding: "3rem",
//           paddingLeft: "0rem",
//           paddingBottom: "2rem",
//           position: "relative",
//           zIndex: 20,
//         }}
//       >
//         <div className={`${styles.topContent} justify-space-btw align-start`} style={{ marginBottom: 0 }}>
//           <motion.div className={styles.writing} exit={{ opacity: 0 }} transition={transition}></motion.div>
//           <img src="./images/logo.svg" alt="" />
//         </div>
//         <div style={{ height: "100%", flexDirection: "column", flexWrap: "nowrap" }} className="justify-space-btw">
//           <div style={{ height: "100%", width: "100%", display: "flex" }} className={styles.details}>
//             <motion.div style={{ height: "100%", width: "540px", padding: "1rem", opacity: 0 }} animate={{ opacity: 1 }} transition={transition}>
//               <div>
//                 <motion.h4>{selectedCard.title}</motion.h4>
//                 <motion.p variants={textVariants} initial="initial" animate="animate" style={{ overflow: "scroll", height: "55vh" }}>
//                   {" "}
//                   {desc.split("").map((letter, index) => (
//                     <motion.span key={index} variants={letterVariants} style={{ fontFamily: "Lato" }}>
//                       {letter}
//                     </motion.span>
//                   ))}
//                 </motion.p>
//               </div>
//             </motion.div>
//             <div>
//               <motion.h2 variants={textVariants} initial="initial" animate="animate" style={{ color: "white", fontSize: "7rem", fontWeight: 100, padding: "0rem 2rem" }}>
//                 {words.map((word, wordIndex) => (
//                   <React.Fragment key={wordIndex}>
//                     {word.split("").map((letter, letterIndex) => (
//                       <motion.span key={letterIndex} variants={letterVariants}>
//                         {letter}
//                       </motion.span>
//                     ))}
//                     {wordIndex !== words.length - 1 && <motion.br />} {/* Add a line break after each word except the last one */}
//                   </React.Fragment>
//                 ))}
//               </motion.h2>
//             </div>
//           </div>
//           <div className="justify-space-btw align-end">
//             <Link to="/">
//               <div className={`${styles.button} align-center justify-center`}>BACK TO HOME</div>
//             </Link>
//             <motion.div
//               className={`${styles.bottomContent} justify-space-btw align-end`}
//               style={{ marginLeft: "auto", width: "65%", padding: "1rem", opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={transition}
//             >
//               {cardData.map((data) => {
//                 console.log(`/details${data.link}`);

//                 return (
//                   <Card
//                     path={location.pathname}
//                     link={`/details${data.link}`}
//                     image={data.icon}
//                     text={data.name}
//                     handleClick={() => {
//                       navigate(`/details${data.link}`);
//                     }}
//                   />
//                 );
//               })}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Details;
