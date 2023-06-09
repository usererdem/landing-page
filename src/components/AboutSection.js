import React from "react";
import home1 from "../img/home1.png";
// Styled
import styled from "styled-components";
import { Layout, Description, Image, Hide } from '../styles'

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>

          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>

          <Hide>
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='guy with a camera' />
      </Image>
    </Layout>
  );
};

export default AboutSection;
