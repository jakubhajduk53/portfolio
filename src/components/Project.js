function Project({ value, image, description, site, repository }) {
  return (
    <div className="grid justify-items-center md:w-[20rem] md:h-[40rem] bg-cornsilk hover:bg-vanilla rounded-xl shadow-md">
      <img
        src={image}
        alt={value}
        className=" w-[5rem] h-[5rem] md:w-[15rem] md:h-[15rem] rounded-xl shadow-md mt-2  transition-colors"
      />
      <div className="text-xl md:text-3xl text-center">{value}</div>
      <div className="flex flex-col text-center text-blue-700 text-sm md:text-lg">
        <a href={site}>Project Website</a>
        <a href={repository}>GitHub Repository</a>
      </div>
      <div className="pr-5 pl-5 row-span-5 text-sm sm:text-base w-full overflow-y-scroll sm:overflow-hidden	">
        {description}
      </div>
    </div>
  );
}

export default Project;
