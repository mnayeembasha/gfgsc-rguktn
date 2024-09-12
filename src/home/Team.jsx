import { teamMembers } from "../data/data";

const Team = () => {
    return (
        <section data-aos="fade-up" id="team" className="py-8 md:py-16">
            <div  data-aos="fade-up" className="container mx-auto px-4 md:px-6 ">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">Faculty Coordinator</h2>
          <div className="flex justify-center items-center">
  <div
    data-aos="fade-up"
    className="grid grid-cols-1 w-full py-4 md:py-8 gap-4"
  >
    <div
      data-aos="fade-up"
      key={11}
      className="team-member-card col-span-1 px-4 md:px-16 md:py-8 relative image-container rounded-lg bg-green-200 md:bg-green-300 p-2 md:p-4 shadow-lg transition-colors duration-2000 ease-in-out"
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
      <h3 className="mb-1 md:mb-2 text-lg font-bold text-green-900">
        Dr. D.V. Nagarjuna Devi
      </h3>
      <p className="text-gray-800 font-semibold text-green-700">
        HOD - Dept of CSE
      </p>
    </div>
  </div>
</div>



        </div>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Core Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
               <div
                data-aos="fade-up"
                key={index}
                className={`team-member-card relative image-container rounded-lg bg-green-200 md:bg-green-300 p-2 md:p-4 shadow-lg  transition-colors duration-2000 ease-in-out`}

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

                <h3 className="mb-1 md:mb-2 text-lg font-bold text-green-900">
                  {member.name}
                </h3>
                <p className="font-semibold text-green-700">
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