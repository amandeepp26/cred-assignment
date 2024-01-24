import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";

const images = [
  "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
  "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
  "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
  "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
  // Add other image URLs here
];

const sections = [
  "Section 1 content... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Section 2 content... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Section 3 content... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Section 4 content... Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];


// ... (existing imports)

const Middle = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 0, scale: 0 });
      setTimeout(() => {
        controls.start({ opacity: 1, scale: 1 });
      }, 5500);
    }
  }, [inView, controls]);

  const [currentImage, setCurrentImage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Change the image every 80vh scroll
    const newIndex = Math.floor(scrollY / (window.innerHeight * 0.8));
    setCurrentImage(newIndex % images.length);

    // Set the scroll position for fixed positioning
    setScrollPosition(scrollY);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine the current section based on the scroll position
  const currentSection = Math.floor(scrollPosition / (window.innerHeight * 0.8));

  return (
    <div
      style={{
        display: "flex",
        height: "400vh",
        justifyContent: "center",
      }}
    >
      <div className="right-side" style={{ padding: "20px", flex: 1 }}>
        {sections.map((section, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 100, damping: 100 }}
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              marginLeft: 100,
              opacity: currentSection === index ? 0 : 1,
            }}
          >
            <p
              style={{
                color: "white",
                display: "flex",
                paddingTop: 350,
                paddingBottom: 200,
                fontSize: 50,
                fontWeight: "bold",
              }}
            >
              {section}
            </p>
          </motion.div>
        ))}
      </div>
      <div
        style={{
          paddingTop: 350,
        }}
      >
        <motion.div
          className="styled-div"
          ref={ref}
          style={{
            position: "sticky",
            left: -200,
            top: 170,
            zIndex: 999,
          }}
        >
          <motion.img
            key={currentImage} // Add key for the motion component
            src={images[currentImage]}
            alt="Styled Div Image"
            animate={{ opacity: 1,}} // Adjust the x value based on your needs
            transition={{ duration: 1.5, type: "tween" }} // Adjust the duration as needed
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Middle;

