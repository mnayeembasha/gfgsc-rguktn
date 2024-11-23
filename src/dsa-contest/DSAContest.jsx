import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import RegisterButton from "./RegisterButton";

const DSAContest = () => {
  return (
    <section>
      <Navbar />
      <div  className="dsa-contest min-h-screen px-[5%] md:px-[20%] py-12 md:py-16 bg-[#E6F0E9] dark:text-white dark:bg-[#1a1c1f] dark:bg-none">        <div className="gate-image my-2 md:my-4">
        <div data-aos="fade-up"
         data-aos-duration="2500"
        data-aos-delay="300">
          <img
            src={"/assets/dsa-contest.jpeg"}
            width={500}
            height={500}
            className="mx-auto rounded-lg"
            style={{ aspectRatio: "250/250", objectFit: "contain" }}
          /></div>
        </div>
        <div data-aos="fade-up"
         data-aos-duration="1500"
        data-aos-delay="300" className="py-5 md:py-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Hello <span className="text-green-600">Geeks,</span>
          </h1>
          <p className="text-lg md:text-xl font-medium">
            Ready to ace coding interviews and elevate your DSA skills with
            GeeksforGeeks?
          </p>
          <p className="mt-4 text-lg">
            Enroll into the{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              GfG 160 Program
            </span>
            , your ultimate companion to mastering DSA (Data Structures &
            Algorithms) in a way that's fun, rewarding, and designed just for
            YOU!
          </p>
        </div>
        <div data-aos="zoom-in"
         data-aos-duration="1000"
        data-aos-delay="300"><RegisterButton/></div>

        <div data-aos="fade-up"
         data-aos-duration="1500"
        data-aos-delay="300" className="mt-8 ">
          <h2 className="text-2xl md:text-2xl font-bold mb-4">
            <span className="text-2xl">🎯</span> Why{" "}
            <span className="text-green-600 dark:text-green-400">GfG 160?</span>
          </h2>
          <table className="border-none">
            <tr className="align-top">
              <td className="py-2 px-1">
                <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
              </td>
              <td className="py-2 px-1">
                <span className="text-lg">
                  160 handpicked problems with step-by-step guides and video
                  tutorials.
                </span>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 px-1">
                <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
              </td>
              <td className="py-2 px-1">
                <span className="text-lg">
                  90 bonus problems to give your coding skills an extra edge!
                </span>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 px-1">
                <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
              </td>
              <td className="py-2 px-1">
                <span className="text-lg">
                  Free workshops on trending tech stacks like Full Stack
                  Development, DevOps, and more.
                </span>
              </td>
            </tr>
            <tr className="align-top">
              <td className="py-2 px-1">
                <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-400" />
              </td>
              <td className="py-2 px-1">
                <span className="text-lg">
                  Completion Certificate + Exclusive Rewards – because
                  consistency deserves celebration!
                </span>
              </td>
            </tr>
          </table>
        </div>

        <div  data-aos="fade-up"
         data-aos-duration="1500"
        data-aos-delay="300" className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Compete and <span className="text-green-500">Win!</span>
          </h3>
          <p className="text-lg">
            Rajiv Gandhi University Knowledge Technology, Nuzvid has its own
            leaderboard! Compete with your classmates, climb the ranks, and win
            exclusive GeeksforGeeks swags –
            <span className="font-semibold text-green-600 dark:text-green-400">
              {" "}
              T-shirts, stickers, and bragging rights!
            </span>
          </p>
          <p className="mt-4 text-lg">
            Tag{" "}
            <Link
              to="https://www.linkedin.com/in/geeksforgeeks-rgukt-nuzvid-854270325/"
              className="font-semibold text-green-600 dark:text-green-400"
            >
              GeeksforGeeks RGUKT NUZVID
            </Link>{" "}
            in your posts to enter the leaderboard.
          </p>
        </div>
        <div data-aos="fade-up"
         data-aos-duration="1500"
        data-aos-delay="300">
        <div   className="my-4 md:my-8 p-6 md:p-8 bg-gradient-to-b from-green-200 to-green-300 rounded-2xl  dark:text-gray-700 md:dark:text-gray-900">
          Note:Nov-30 is the last date for registration. Challenge will be
          active for 160 days! You should maintain minimum 80 consecutive days
          during challenge for the reward.
        </div>

        <div className="mt-10"><RegisterButton /></div> </div>
      </div>
    </section>
  );
};

export default DSAContest;
