import React from "react";
import Breadcrumb from "../../common/Breadcrumb";
import Footer from "../../common/Footer";
import Accordian from "./components/Accordian";

const breadCrumb = {
  backgroundImage: "images/bg/breadcrumb-bg.jpg",
  heading: "About FAQ",
  links: [{ id: 1, link: "", text: "Home" }],
  activeLink: "FAQ",
};

const accordianDataLeft = [
  {
    id: 1,
    question: "What is Sports Rehabilitation?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  },
  {
    id: 2,
    question: "What is our service of Sports Rehabilitation?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  },
  {
    id: 3,
    question: "How do I make a perfect Business plan?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  },
  {
    id: 4,
    question: "What is our service of Sports Rehabilitation?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  },
  {
    id: 5,
    question: "How do I make a perfect Business plan?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  },
  {
    id: 6,
    question: "How do I make a perfect Business plan?",
    answer:
      "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
  }
];

const accordianDataRight = [
    {
      id: 7,
      question: "What is Sports Rehabilitation?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    },
    {
      id: 8,
      question: "What is our service of Sports Rehabilitation?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    },
    {
      id: 9,
      question: "How do I make a perfect Business plan?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    },
    {
      id: 10,
      question: "What is our service of Sports Rehabilitation?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    },
    {
      id: 11,
      question: "How do I make a perfect Business plan?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    },
    {
      id: 12,
      question: "How do I make a perfect Business plan?",
      answer:
        "Sint et et illum. Odio et nesciunt veritatis maxime quas esse dolore. Beatae vel et modi quidem. Modi aut dolorem sed necessitatibus ut voluptatem deleniti.",
    }
  ];

function Faq() {
  return (
    <div id="wrapper" className="wrapper">
      <Breadcrumb data={breadCrumb} />
      <main className="main-content">
        <div className="tm-section faq-area tm-padding-section bg-white">
          <div className="container">
            <div className="row mt-50-reverse">
              <div className="col-lg-6 mt-50">
                <div id="tm-accordion1" className="tm-accordion">
                  {accordianDataLeft.map((item) => {
                    return (
                      <Accordian
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                        parent={1}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="col-lg-6 mt-50">
                <div id="tm-accordion2" className="tm-accordion">
                {accordianDataRight.map((item) => {
                    return (
                      <Accordian
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                        parent={2}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;
