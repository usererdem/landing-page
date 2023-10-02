import React from "react";

import styled from "styled-components";
import { Layout } from "../styles";

const FaqSection = () => {
  return (
    <Faq className='faq'>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            minima.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            minima.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className='question'>
        <h4>Different Payment Methods</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            minima.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className='question'>
        <h4>What Product do you offer?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            minima.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
