import React, { useState } from "react";

const Accordion = () => {
  let faqData = [
    {
      question: "Question-1",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem soluta amet, nesciunt vero tempore ex dolores. Cumque, soluta rem?",
    },
    {
      question: "Question-2",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem soluta amet, nesciunt vero tempore ex dolores. Cumque, soluta rem?",
    },
    {
      question: "Question-3",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem soluta amet, nesciunt vero tempore ex dolores. Cumque, soluta rem?",
    },
    {
      question: "Question-4",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem soluta amet, nesciunt vero tempore ex dolores. Cumque, soluta rem?",
    },
    {
      question: "Question-5",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem soluta amet, nesciunt vero tempore ex dolores. Cumque, soluta rem?",
    },
  ];

  const [select, setSelect] = useState(null);

  const handleSelect = (i) => {
    if (select === i) {
      return setSelect(null);
    }
    setSelect(i);
  };

  return (
    <div>
      <h1 className="heading-1">FAQ's</h1>
      <section className="accordion">
        {faqData.map((a, i) => {
          return (
            <div className="items" key={i} onClick={() => handleSelect(i)}>
              <div className="questions">
                <h1>{a.question}</h1>
                <div className="imgDiv">
                  <img
                    src={require("../../../Assets/up-arrow-color.png")}
                    alt="up-arrow-img"
                    className={select === i ? "reverse" : ""}
                  />
                </div>
              </div>
              <div className={select === i ? "answers show" : "answers"}>
                <p>{a.answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Accordion;
