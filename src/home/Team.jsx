import { teamMembers } from "../data/data";

const Team = () => {
    return (
        <section data-aos="fade-up" id="team" className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                data-aos="fade-up"
                key={index}
                // hover:bg-green-500
                className={`team-member-card relative image-container rounded-lg bg-green-300 p-2 md:p-4 shadow-lg  transition-colors duration-2000 ease-in-out`}
              >
                <img
                  src={member.img_link}
                  alt={`Team Member ${index + 1}`}
                  width="300"
                  height="300"
                  // h-40 w-40
                  className="mb-4 h-40 w-40 md:h-[13rem] md:w-[13rem] rounded-full object-cover  border-green-900 border-transparent transition-border duration-2000 ease-in-out"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                    objectPosition:
                      member.img_link === "nayeem.jpg" ? "top" : "top",
                  }}
                />

                <h3 className="mb-1 md:mb-2 text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                {/* text-[#1a5a1a] */}
                <p className="text-gray-800">
                  {member.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Team;