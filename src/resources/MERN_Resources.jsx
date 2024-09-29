const MERN_Resources = () => {
    const tutorials = [
        {
          name: "MongoDB",
          link: "https://www.geeksforgeeks.org/courses/mongodb-developers-toolkit-crud-mastery",
        },
        {
          name: "Express",
          link: "https://www.geeksforgeeks.org/learn-express/",
        },
        {
          name: "React",
          link: "https://www.geeksforgeeks.org/react-tutorial/",
        },
        {
          name: "Node.js",
          link: "https://www.geeksforgeeks.org/nodejs/",
        },
      ];
  return (
    <>
      <div
        data-aos="fade-up"
        className="rounded-lg bg-[#f0f8f0] bg-green-100 md:bg-green-200 card-light-green-grad p-4 shadow-md dark:bg-[#252525]"
      >
        <img
          src={
            "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
          }
          width={100}
          height={300}
          className="mb-4 h-40 w-full rounded object-cover"
          style={{
            aspectRatio: "300/200",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-start justify-evenly">
  {tutorials.map((tutorial, index) => (
    <a href={tutorial.link} target="_blank" rel="noopener noreferrer">
    <div
      key={index}
      className="flex flex-col gap-2 justify-center items-center px-6 py-2 rounded-lg shadow-lg bg-green-100 dark:bg-[#353535]
                 hover:bg-green-200 dark:hover:bg-[#484848] transition-colors duration-300"
    >

        <h3 className="text-green-900 text-lg font-bold text-center dark-green-grad hover:text-green-700 dark:hover:text-gray-100">
          {tutorial.name}  Tutorial
        </h3>
    </div>
      </a>
  ))}
</div>


      </div>
    </>
  );
};

export default MERN_Resources;
