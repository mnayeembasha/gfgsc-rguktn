import ExploreMoreButton from "../components/ExploreMoreButton.jsx";
import {Link} from 'react-router-dom';
const ExploreSections = () => {


    const sectionsToShowCase = [
        {
            id: 1,
            name: "DSA Sheet",
            link: "/dsa-sheet",
            image: "/assets/dsa-sheet.jpg",
            about: "Access the SDE Sheet to master Data Structures and Algorithms with a structured, problem-solving approach."
        },
        {
            id: 2,
            name: "Blogs",
            link: "/blogs",
            image: "/assets/blog.jpg",
            about: "Explore insightful articles, tutorials, and guides written by students and professionals to enhance your learning experience."
        },
        {
            id: 3,
            name: "Resources",
            link: "/resources",
            image: "/assets/resources.jpg",
            about: "Find essential programming books and tutorials to boost your coding journey and knowledge base."
        }
    ];

  return (
    <section
      id="resources"
      className="dark:bg-primary-dark py-8 md:py-12"
    >
      <div
        data-aos="fade-up"
        className="container mx-auto px-4 md:px-12 md:pt-4 rounded-2xl"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl text-heading-green dark-green-grad">
        Explore all Sections
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {sectionsToShowCase.map((section) => (
            <div
              data-aos="fade-up"
              key={section.id}
              className="section-showcase-card rounded-lg  p-4 shadow-md dark:bg-card-dark"
            >
              <Link to={section.link}
              // target="_blank"
              rel="noopener noreferrer">
                <img
                  src={section.image}
                  alt={section.name}
                  width={100}
                  height={300}
                  className="mb-4 h-40 w-full rounded object-cover"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Link>
              <div className="flex flex-col gap-2 items-center justify-between">
                <div>
                  <Link
                    to={section.link}
                    // target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-heading-green text-lg font-bold dark-green-grad text-left">
                      {section.name}
                    </h3>
                  </Link>
                </div>

                <div className="about-resource dark:text-gray-200">
                  {section.about}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExploreSections;
