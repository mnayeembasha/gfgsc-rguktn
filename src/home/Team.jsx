import { teamMembers } from "../data/data";

const Team = () => {
    return (
        <section data-aos="fade-up" id="team" className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* hover:bg-green-500 */}
              {/* <div
                data-aos="fade-up"
                key={index}
                className={`team-member-card relative image-container rounded-lg bg-green-200 md:bg-green-300 p-2 md:p-4 shadow-lg  transition-colors duration-2000 ease-in-out`}
                style={{ backgroundImage: `url('/assets/green_grad_bg.avif')` }}
              >
                <img
                  src={member.img_link}
                  alt={`Team Member ${index + 1}`}
                  width="300"
                  height="300"
                  className="mb-4 h-40 w-40 md:h-[13rem] md:w-[13rem] rounded-full object-cover   transition-border duration-2000 ease-in-out"
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
                <p className="text-gray-800">
                  {member.position}
                </p>
              </div> */}
            {teamMembers.map((member, index) => (
              <div
     data-aos="flip-left"
     data-aos-duration="15000"
     data-aos-delay="3000"
  key={index}
  className={`team-member-card relative image-container rounded-lg bg-green-200 md:bg-green-300 p-2 md:px-4 shadow-lg transition-colors duration-2000 ease-in-out`}
  style={{
    backgroundImage: `url('/assets/event_card_bg.jpg')`,
    backgroundSize: 'cover', // Adjust size as per your need
    backgroundPosition: 'center ', // Position it correctly
    backgroundRepeat: 'no-repeat', // Ensure the background doesn't repeat

  }}
>
  {/* Team Member Image */}
  <img
    src={member.img_link}
    alt={`Team Member ${index + 1}`}
    width="300"
    height="300"
    className="team-member-image mb-2 h-40 w-40 md:h-[13rem] md:w-[13rem] rounded-full  object-cover transition-border duration-2000 ease-in-out"
    style={{
      aspectRatio: '300/300',
      objectFit: 'cover',
      objectPosition: member.img_link === 'nayeem2.jpg' ? 'top' : 'top',
    }}
  />

  {/* Team Member Name */}
  <h3 className="mb-1 md:mb-2 text-xl font-bold text-gray-900 text-green-100">
    {member.name}
  </h3>

  {/* Team Member Position */}
  <p className="text-gray-800 text-lg text-green-300 font-semibold">{member.position}</p>
</div>

            ))}
          </div>
        </div>
      </section>
    );
}

export default Team;