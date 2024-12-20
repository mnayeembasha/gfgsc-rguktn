import ExploreMoreButton from "../components/ExploreMoreButton.jsx";
import { resources } from "../data/resources.js";
import MERN_Resources from "../resources/MERN_Resources.jsx";

const ResourcesShowCase = () => {

    const resourcesToShowcase =[
        "The Pragmatic Programmer",
        "Python Crash Course",
    ]

    const filteredResources = resources.filter((resource)=>{
        return resourcesToShowcase.includes(resource.name);
    });
  return (
    <section
      id="resources"
      className="bg-[#DCF5DC] min-h-screen dark:bg-[#1b1c1f] bg-[#E6F0E9] pt-8 md:pt-6"
    >
      <div
        data-aos="fade-up"
        className="container mx-auto px-4 md:px-12 md:pt-4 rounded-2xl"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl text-[#1a5a1a] dark-green-grad">
        Resources
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {filteredResources.map((resource) => (
            <div
              data-aos="fade-up"
              key={resource.id}
              className="rounded-lg  bg-green-200 p-4 shadow-md dark:bg-[#252525]"
            >
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={resource.image}
                  alt={resource.name}
                  width={100}
                  height={300}
                  className="mb-4 h-40 w-full rounded object-cover"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </a>
              <div className="flex flex-col gap-2 items-center justify-between">
                <div>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="text-[#1a5a1a] text-green-900 text-lg font-bold dark-green-grad text-left">
                      {resource.name}
                    </h3>
                  </a>
                </div>

                <div className="about-resource dark:text-gray-200">
                  {resource.about}
                </div>
              </div>
            </div>
          ))}
          <MERN_Resources />

        </div>
      </div>
      <div className="mt-10 mb-2 md:mt-12">
      <ExploreMoreButton destination="/resources" />

      </div>
    </section>
  );
};

export default ResourcesShowCase;
