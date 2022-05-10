import React from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";

export default function FaqComponent({ label, description }) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <Faq>
      <button
        className={`question-section ${active}`}
        onClick={toggleAccordion}
      >
        <div>
          <div className="question-align">
            <h4 className="question-style">{label}</h4>
            <FiPlus
              className={active ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRef}
            className={active ? `answer answer-divider` : `answer`}
          >
            <p>{description}</p>
          </div>
        </div>
      </button>
    </Faq>
  );
}

const Faq = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100%;
  h4 {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }
  .question-section {
    color: #e1e1e6;

    background: #212529;
    border: 1px solid lightgray;
    border-radius: 8px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    cursor: pointer;
    width: 100%;
  }

  .question-align {
    align-items: center;
    display: flex;
    min-height: 10px;
    text-align: left;
  }

  .question-align h4 {
    margin-left: 8px;
  }

  .question-styling {
    font-size: 17px;
    width: 100%;
  }

  .question-icon {
    background: none;
    border: none;
    color: #ff5d02;
    cursor: pointer;
    font-size: 22px;
    margin-left: auto;
    margin-right: 8px;
  }

  .rotate {
    transform: rotate(45deg);
  }

  .answer-divider {
    border-top: 1px solid lightgray;
  }

  .answer {
    margin-left: 8px;
    margin-right: 8px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.6s ease;
    text-align: left;
  }
`;
