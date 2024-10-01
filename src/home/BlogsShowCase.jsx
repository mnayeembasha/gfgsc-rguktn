import {blogs} from '../data/blog.js'
const BlogsShowCase = () => {
  return (
    <section id="blogs" className="py-4 pt-8 md:pt-2">
      <div
        data-aos="fade-up"
        className="container mx-auto px-4 md:px-12 md:pt-4 md:pb-4 rounded-2xl"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl text-[#1a5a1a] dark-green-grad">
          Blogs
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              data-aos="fade-up"
              key={blog.id}
              className="rounded-lg bg-[#f0f8f0] bg-green-100 md:bg-green-200 card-light-green-grad p-4 shadow-md dark:bg-[#252525]"
            >
              <a href={blog.link} rel="noopener noreferrer">
                <img
                  src={blog.image}
                  alt={blog.name}
                  width={100}
                  height={300}
                  className="mb-2 h-40 w-full rounded object-cover"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: blog.objectFit,
                    objectPosition: "center",
                  }}
                />
              </a>
              <div className="">
                <div>
                  <a href={blog.link} rel="noopener noreferrer">
                    <h3 className="text-[#1a5a1a] text-center text-green-900  text-2xl font-bold  text-[#1a5a1a] dark-green-grad">
                      {blog.name}
                    </h3>
                  </a>
                </div>

                <div className="about-blog dark:text-gray-200">
                  {blog.about}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BlogsShowCase;
