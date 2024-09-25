import { faqs } from "../data/data";
import { useState } from "react";

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <section
          data-aos="fade-up"
          id="faq-section"
          className="p-6 rounded-lg"
        >
          <div className="container px-2 md:px-4 mx-auto">
          {/* dark-green-grad */}
            <h1 className="text-3xl font-bold md:text-4xl font-bold  mb-6 dark-green-grad">
              Frequently Asked Questions
            </h1>
            <div  id="accordion-flush" >
              {faqs.map(({ id, question, answer }) => (
                /* dark:border-t-4 dark:border-green-300 */
                /* border-b border-gray-200 */

                <div
                data-aos="fade-up"
                  key={id}
                  className=" bg-[#f0f8f0] mb-2 px-3 shadow rounded-lg hover:bg-none dark:bg-[#252525] "
                >
                  <h2 id={`accordion-flush-heading-${id}`}>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full py-5 text-muted text-left  text-green-900 transition-colors duration-300 "
                      onClick={() => toggleAccordion(id)}
                    >
                      <span className=" dark:text-gray-100 ">{question}</span>
                      <hr />
                      <svg
                        className={`w-3 h-3 dark:text-green-200 transform ${
                          openIndex === id ? "rotate-180" : ""
                        } shrink-0 transition-transform duration-300`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1l4 4 4-4"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`accordion-flush-body-${id}`}
                    className={`py-1 pb-2  ${
                      openIndex === id ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-800 dark:text-gray-400 font-medium">{answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}

export default Faqs;