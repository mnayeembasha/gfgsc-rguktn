import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { dsaSheet } from "../data/dsaSheet.js";
import { useState } from "react";
import './DSASheet.css'
const DSASheet=()=>{
    const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
        <>
             <Navbar/>
             <section

          id="faq-section"
          className="primary p-3 md-p-6 min-h-screen flex-grow"
        >
          <div data-aos="fade-up" className="container px-2 md:px-4 mx-auto">
          {/* dark-green-grad */}
            <h1 className="text-3xl font-bold md:text-4xl font-bold  my-6 text-center dark-green-grad">
              DSA Sheet
            </h1>
            <div id="accordion-flush">
  {Object.keys(dsaSheet).map((category, index) => (
    <div
      key={index}
      className="dsa-category-card gradient-border-top bg-[#f0f8f0] focus:outline-none border-t-4 border-green-grad dark:border-t-4 dark:border-green-300 mb-2 my-4 md:my-5 px-3 shadow-lg faq-shadow rounded-lg hover:bg-none  dark:bg-[#252525]"
    >
      <h2 id={`accordion-flush-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 text-muted text-left text-green-900 transition-colors duration-300"
          onClick={() => toggleAccordion(index)}
        >
          <span className="font-semibold dark:text-gray-100">{category}</span>
          <svg
            className={`w-3 h-3 dark:text-green-200 transform ${
              openIndex === index ? "rotate-180" : ""
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
        id={`accordion-flush-body-${index}`}
        className={`px-1 md:px-8 py-2 md:py-4 pb-4 md:pb-8 ${openIndex === index ? "block" : "hidden"}`}
      >
        <div className="overflow-x-auto rounded-xl md:rounded-2xl">
          <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-green-200 dark:bg-black dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4 md:py-5 border-b dark:border-gray-600 text-green-900 dark:text-gray-100">Question</th>
                <th scope="col" className="px-6 py-4 md:py-5 border-b dark:border-gray-600 text-green-900 dark:text-gray-100">Article</th>
                <th scope="col" className="px-6 py-4 md:py-5 border-b dark:border-gray-600 text-green-900 dark:text-gray-100">Practice</th>
                <th scope="col" className="px-6 py-4 md:py-5 border-b dark:border-gray-600 text-green-900 dark:text-gray-100">Video</th>
              </tr>
            </thead>
            <tbody className="bg-green-50 dark:bg-black">
              {dsaSheet[category].map((item, idx) => (
                <tr
                  key={idx}
                  className="dark:bg-[#080808] border-b dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 text-green-900 dark:text-gray-100 whitespace-nowrap">
                    {item.question}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={item.article}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={item.practice}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solve
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    {item.video ? (
                      <a
                        href={item.video}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ))}
</div>


          </div>
        </section>
            <Footer/>
        </>
    );
}
export default DSASheet;