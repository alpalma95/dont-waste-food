import React from "react";
import { useEffect, useRef } from "react";
import { render } from "react-dom";
//import tableImage from "../../img/table.jpg"
import imagem2Image from "../../../img/imagem2.jpg";

const LandingPage = () => {
  const textRef = useRef();
  const carouselText = [
    { text: "mushroom, quinoa, cheese" },
    { text: "chicken, spinach" },
    { text: "rice" },
  ];

  useEffect(() => {
    const getCarousel = async () => {
      await carousel(carouselText);
    };
    getCarousel();
  }, []);

  async function typeSentence(sentence, delay = 150) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      textRef.current.innerHTML += letters[i];
      i++;
    }
    return;
  }

  async function deleteSentence() {
    const sentence = textRef.current.innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      textRef.current.innerHTML = letters.join("");
    }
  }

  async function carousel(carouselList) {
    var i = 0;
    while (true) {
      await typeSentence(carouselList[i].text);
      await waitForMs(1500);
      await deleteSentence();
      await waitForMs(500);
      i++;
      if (i >= carouselList.length) {
        i = 0;
      }
    }
  }

  function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const styles = {
    backgroundImage: `linear-gradient(to right bottom, rgba(252, 91, 91, 0.8), rgba(40, 180, 133, 0.8)), url(${imagem2Image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "top",
    clipPath: "polygon(0 0, 100% 0, 100% 80vh, 0 100%)",
  };

  return (
    <div className="image" style={styles}>
      <div className="box">
        <h1 className="maintitle"> The fridge is where the magic happens!</h1>
        <div className="typing-demonstration">
          <h5 className="title">Type ingredients you have...</h5>
          <div className="typing-container">
            <span id="sentence" className="sentence">
              <i className="bi bi-search"></i>
            </span>
            <span ref={textRef} id="feature-text"></span>
            <span className="input-cursor"></span>
          </div>
          <button className="try">Try it out!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
