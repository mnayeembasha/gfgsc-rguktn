import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {resources} from '../data/resources.js'
import MERN_Resources from "./MERN_Resources.jsx";
const Resources = () => {
  return (
    <>
      <Navbar />
      <section id="resources" className="bg-primary-light dark:bg-primary-dark min-h-screen py-4 md:pt-6 pb-8">
        <div data-aos="fade-up" className="container mx-auto px-4 md:px-12 md:pt-4 md:pb-4 rounded-2xl">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl text-heading-green dark-green-grad text-center"> Resources</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {resources.map((resource) => (
        <div data-aos="fade-up" key={resource.id} className="rounded-lg card-light-green-grad p-4 shadow-md dark:bg-card-dark">
  <a href={resource.link} target="_blank" rel="noopener noreferrer">
    <img
      src={resource.image}
      alt={resource.name}
      width={100}
      height={300}
      className="mb-4 h-40 w-full rounded object-cover"
      style={{ aspectRatio: '300/200', objectFit: 'cover', objectPosition: 'top' }}
    />
  </a>
  <div className="flex flex-col gap-2 items-center justify-between">
    <div>
    <a href={resource.link} target="_blank" rel="noopener noreferrer">
      <h3 className="text-green-900 text-lg font-bold dark-green-grad ">
        {resource.name}
      </h3>
    </a></div>

    <div className="about-resource dark:text-gray-200 break-words">
        {resource.about}
    </div>
  </div>
</div>

      ))}
      <MERN_Resources/>
      </div></div>
      </section>
      <Footer/>
    </>
  );
};
export default Resources;
