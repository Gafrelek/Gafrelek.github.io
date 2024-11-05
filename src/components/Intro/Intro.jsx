// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Intro.css';
import fotoGF from '../../assets/fotoGF.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <div className="spacerFirstChild"></div>
        <div className="spacerLastChild">
          <span className="hello">
            Hello,
            <br />
          </span>
          <span className="introText">
            {' '}
            I&apos;m <span className="introName">Gregor</span>
            <br />
            Webdeveloper
          </span>

          <p className="introPara">
            <br />I am passionate about crafting seamless, user-friendly digital
            experiences.
          </p>
        </div>
        <img src={fotoGF} alt="Gregor photo" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
