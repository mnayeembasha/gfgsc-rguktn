import {Link} from 'react-router-dom';
const Announcement = () => {
    return (
        // bg-green-100 dark:bg-green-800 py-3
      <div className="overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-lg font-medium text-green-800 dark:text-green-200">
          <Link to='/dsa-contest' className="mx-4">
            🚀 <strong>GfG 160 Program</strong>, your ultimate companion to mastering DSA (Data Structures & Algorithms) in a way that's fun, rewarding, and designed just for YOU!
          </Link>
          {/* <span className="mx-4">
            🎓 Complete 160 handpicked problems with step-by-step guides and video tutorials.
          </span> */}
          {/* <span className="mx-4">
            🏆 Compete with your peers and win exclusive GeeksforGeeks swag!
          </span> */}
        </div>
      </div>
    );
  };

  export default Announcement;
