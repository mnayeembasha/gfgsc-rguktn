import React from 'react';

const GateCS = () => {
  return (
    <div className="px-[10%] md:px-[20%] py-8 md:py-16 dark:bg-[#252525] dark:text-white">
      <article id="a1b2d00e-aa80-4065-9429-1247e2992180" className="page sans">
        <header>
          <h1 className="page-title text-4xl font-bold text-center">Gate-CS Overview</h1>
        </header>
        <div className="page-body mt-4">
          <p className="my-4">
            The <strong>Graduate Aptitude Test in Engineering (GATE) 2025</strong> is an entrance exam conducted for admissions to postgraduate programs (Master’s and Doctoral) in engineering, technology, architecture, and science in India. It's also used by several Public Sector Undertakings (PSUs) for recruiting engineers.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            <strong>Why a CSE student should consider writing GATE?</strong>
          </h3>
          <ol className="list-decimal list-inside mt-4 px-4" style={{lineHeight:'2rem'}}>
            <li><strong>Higher Education</strong>: Admission to M.Tech/MS programs in top institutes (IITs, NITs, IISc).</li>
            <li><strong>PSU Jobs</strong>: Direct recruitment opportunities in Public Sector Undertakings (e.g., ONGC, BHEL).</li>
            <li><strong>Research Roles</strong>: Eligibility for research fellowships and positions in R&D organizations (BARC, ISRO).</li>
            <li><strong>Opportunities Abroad</strong>: Some international universities accept GATE scores for master's programs.</li>
          </ol>

          <ul className="list-disc mt-6">
            <li><strong>Conducting Body</strong>: GATE will likely be conducted by one of the Indian Institutes of Technology (IITs) or the Indian Institute of Science (IISc).</li>
          </ul>

          <ul className="list-disc mt-4">
            <li>
              <strong>Eligibility</strong>:
              <ul className="list-circle ml-5">
                <li>Bachelor’s degree holders in Engineering, Technology, Architecture, Science, Commerce, and Arts.</li>
                <li>Final-year students or 3rd-year students of these programs are also eligible.</li>
              </ul>
            </li>
          </ul>

          <ul className="list-disc mt-4">
            <li><strong>Validity</strong>: The GATE score is valid for 3 years from the date of the result.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 border-b border-gray-400 pb-2">
            Syllabus
          </h2>

          <div className="overflow-x-auto mt-4">
            <table className="table-auto border-collapse w-full dark:border-gray-700">
              <thead>
                <tr>
                  <th className="border px-4 py-2 dark:border-gray-700">Subject</th>
                  <th className="border px-4 py-2 dark:border-gray-700">Approximate Weightage (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">General Aptitude</td>
                  <td className="border px-4 py-2 dark:border-gray-700">15%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Engineering Mathematics (Linear Algebra, Calculus, Discrete Mathematics, Probability)</td>
                  <td className="border px-4 py-2 dark:border-gray-700">15%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Digital Logic</td>
                  <td className="border px-4 py-2 dark:border-gray-700">4-6%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Computer Organization & Architecture</td>
                  <td className="border px-4 py-2 dark:border-gray-700">6-10%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">C Programming & Data Structures</td>
                  <td className="border px-4 py-2 dark:border-gray-700">8-12%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Algorithms</td>
                  <td className="border px-4 py-2 dark:border-gray-700">8-10%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Theory of Computation</td>
                  <td className="border px-4 py-2 dark:border-gray-700">7-10%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Compiler Design</td>
                  <td className="border px-4 py-2 dark:border-gray-700">5-7%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Operating Systems</td>
                  <td className="border px-4 py-2 dark:border-gray-700">8-10%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Databases</td>
                  <td className="border px-4 py-2 dark:border-gray-700">7-9%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 dark:border-gray-700">Computer Networks</td>
                  <td className="border px-4 py-2 dark:border-gray-700">6-9%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6">Exam Pattern:</h3>
          <ul className="list-disc mt-4">
            <li><strong>Total Marks</strong>: 100</li>
            <li><strong>Total Questions</strong>: 65</li>
            <li><strong>Duration</strong>: 3 hours (180 minutes)</li>
          </ul>

          <ul className="list-disc mt-4">
            <li><strong>Type of Questions</strong>:
              <ul className="list-circle ml-5">
                <li><strong>Multiple Choice Questions (MCQs)</strong>: Each question has 4 options, and only one is correct.</li>
                <li><strong>Numerical Answer Type (NAT) Questions</strong>: Requires a numerical value as the answer, to be entered by the candidate.</li>
                <li><strong>Multiple Select Questions (MSQs)</strong>: More than one option may be correct.</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Negative Marking:</h3>
          <ul className="list-disc mt-4">
            <li><strong>For MCQs</strong>:
              <ul className="list-circle ml-5">
                <li><strong>1-mark questions</strong>: 1/3 mark will be deducted for every wrong answer.</li>
                <li><strong>2-mark questions</strong>: 2/3 mark will be deducted for every wrong answer.</li>
              </ul>
            </li>
            <li><strong>No negative marking</strong> for <strong>NAT</strong> and <strong>MSQ</strong> questions.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">Detailed Syllabus</h2>
          <p className="mt-4">
            <a href="https://gate2025.iitr.ac.in/doc/2025/GATE%20_CS_2025_Syllabus.pdf" className="text-blue-600 dark:text-blue-400">
              https://gate2025.iitr.ac.in/doc/2025/GATE%20_CS_2025_Syllabus.pdf
            </a>
          </p>

          <h2 className="text-2xl font-semibold mt-6">Practicing Previous Year Questions</h2>
          <p className="mt-4">
            <a href="https://practicepaper.in/gate-cse" className="text-blue-600 dark:text-blue-400">
              https://practicepaper.in/gate-cse
            </a>
          </p>

          <h1 className="text-2xl font-bold mt-6">
            <strong>Other Competitive Exams for GATE CSE Aspirants</strong>
          </h1>

          <p className="mt-4">
            Here’s a table summarizing the some of the competitive exams for <strong>GATE CSE aspirants</strong>:
          </p>

          <div className="overflow-x-auto mt-4">
            <table className="table-auto border-collapse w-full dark:border-gray-700">
              <thead>
                <tr>
                  <th className="border px-4 py-2 border-gray-700 text-left">Exam</th>
                  <th className="border px-4 py-2 border-gray-700 text-left">Overlap with GATE</th>
                  <th className="border px-4 py-2 border-gray-700 text-left">Additional Preparation Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 border-gray-700">BARC</td>
                  <td className="border px-4 py-2 border-gray-700">Large (70-80%)</td>
                  <td className="border px-4 py-2 border-gray-700">Focus on C/C++ programming, Problem-solving skills</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-gray-700">UGC NET</td>
                  <td className="border px-4 py-2 border-gray-700">Moderate</td>
                  <td className="border px-4 py-2 border-gray-700">Web Technologies, Software Engineering, AI, ML</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-gray-700">ISRO</td>
                  <td className="border px-4 py-2 border-gray-700">Large (60-70%)</td>
                  <td className="border px-4 py-2 border-gray-700">Advanced Electronics, Communication Systems</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-gray-700">DRDO</td>
                  <td className="border px-4 py-2 border-gray-700">Moderate</td>
                  <td className="border px-4 py-2 border-gray-700">Embedded Systems, IoT, Security</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 border-gray-700">TIFR</td>
                  <td className="border px-4 py-2 border-gray-700">Moderate</td>
                  <td className="border px-4 py-2 border-gray-700">Theoretical Computer Science, Algorithms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </div>
  );
};

export default GateCS;