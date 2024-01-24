import React from "react";
import "./styles.css";
import { motion, Variants } from "framer-motion";
import pinkbanner from './img/pinkbanner.jpeg';
import Middle from "./Middle.tsx";


interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    scale: 1,
    // scaleY:2,
  },
  onscreen: (index: number) => ({
    y: 0,
    scale: index === 2 ? 4 : 3,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 4,
      // delay: 0.00001 * index,
      // when: "beforeChildren", // Delay side cards until the main card animation is complete
    },
  }),
};

export default function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h3 style={{ color: "white", fontSize: 70, fontWeight: "bolder" }}>
            Rewards for paying
          </h3>
        </div>
        <div>
          <h3 style={{ color: "white", fontSize: 70, fontWeight: "bolder" }}>
            credit card bills.
          </h3>
        </div>
        <div>
          <h1 style={{ color: "white", fontSize: 40, fontWeight: "bolder" }}>
            join 9M+ members who win rewards and cashbacks everyday
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: "black",
              fontSize: 30,
              padding: 10,
              marginTop: 20,
              fontWeight: "bolder",
              backgroundColor: "white",
              borderRadius: 50,
            }}
          >
            Join Now
          </h1>
        </div>
      </div>

      <motion.div
        className="card-container"
        initial="offscreen"
        // animate="onscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        variants={cardVariants}
      >
        <motion.div className="image-row">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="Card"
            className="small-image1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="Card"
            className="small-image2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="Card"
            className="large-image"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="Card"
            className="small-image4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="Card"
            className="small-image5"
          />
        </motion.div>
      </motion.div>

      <div
        style={{
          marginTop: "220px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={pinkbanner} style={{ width: "100%", height: "90%" }} />
      </div>
      <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
        <Middle />
      </div>
    </div>
  );
}
