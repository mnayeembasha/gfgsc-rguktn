const ExploreMoreButton = ({destination})=>{
    return (
        <div className="container flex justify-center mx-auto">
        <a
          href={destination}
          className="px-2"
        >
          <span className="relative font-semibold px-3.5 py-3.5 transition-all ease-in duration-75 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-center ">
            Explore more
          </span>
        </a>
      </div>
    );
}
export default ExploreMoreButton;