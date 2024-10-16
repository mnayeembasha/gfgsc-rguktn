import { teamMembers } from "../data/data";

const Team = () => {
    return (
        <section data-aos="fade-up" id="team" className="py-10 md:py-8">
            <div  data-aos="fade-up" className="container mx-auto px-4 md:px-6 ">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl dark-green-grad">Faculty Coordinator</h2>
          <div className="flex justify-center items-center">
  <div
    data-aos="fade-up"
    className="grid grid-cols-1 w-full py-6 md:py-12 gap-4 place-items-center"
  >
    <div
      data-aos="fade-up"
      key={11}
      className="team-member-card dark:bg-[#202020] col-span-1 w-full sm:w-[100%] md:w-[50%] lg:w-[50%] px-4 md:px-16 py-4 relative image-container rounded-lg bg-green-200 md:bg-green-300 p-2 md:p-4 shadow-lg transition-colors duration-2000 ease-in-out"
    >
      <img
        src={"/assets/team/devi_mam.jpg"}
        width="300"
        height="300"
        className="mb-4 h-40 w-40 md:h-[15rem] md:w-[15rem] rounded-full object-cover transition-border duration-2000 ease-in-out"
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
          objectPosition: "right",
        }}
      />
      {/* dark:text-green-500 */}
      <h3 className="mb-1 md:mb-2 text-xl md-text-2xl font-bold text-green-900  dark:text-green-200">
        Dr. D.V. Nagarjuna Devi
      </h3>
      <p className="text-gray-800 text-lg md-text-xl font-semibold text-green-700 text-green-grad">
        HOD - Dept of CSE
      </p>
    </div>
  </div>
</div>



        </div>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl dark-green-grad">Core Team</h2>
          <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
               <div
                data-aos="fade-up"
                key={index}
                className={`team-member-card dark:bg-[#202020] bg-green-200 md:bg-green-300 shadow-lg relative image-container rounded-lg  p-2 md:p-4 shadow-lg  transition-colors duration-2000 ease-in-out`}

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
                    objectPosition:"top",
                  }}
                />

                <h3 className="mb-1 md:mb-2 md-text-xl text-lg font-bold md:font-bold dark:md:font-semibold text-green-900 text-[#1a5a1a] dark:text-green-200">
                  {member.name}
                </h3>
                <p className="font-semibold md-text-lg text-md text-green-700 text-green-grad">
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