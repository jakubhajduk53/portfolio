function HobbyDescription({ description }) {
  return (
    <div className="h-56 border rounded-xl text-left break-words shadow-md select-none">
      <p className="text-sm sm:text-base md:text-xl p-4">{description}</p>
    </div>
  );
}

export default HobbyDescription;
