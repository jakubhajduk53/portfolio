function HobbyDescription({ selectedHobby }) {
  const showHobbyDescription = (hobby) => {
    switch (hobby) {
      case "Chess":
        return "I am playing chess since 2021. My favourite opening is Sicilian Defense. I like watching when Hikaru Nakamura or Magnus Carlsen plays in top level tournaments.";
      case "Football":
        return "I grown up playing football with my brother and friends. When we were kids, we used to play everyday on local stadium. Now we are meeting only sometimes at weekend.";
      case "Gaming":
        return "I like playing strategy games such as Europa Universalis IV or Sid Meier's Civilization V. I also play CS:GO and League of Legends a lot. My biggest achievement is reaching Global Elite rank in CS:GO in 2020.";
      case "Coding":
        return "I started coding in 2019 in school. I was fascinated with HTML at first lessons. Later, we had JavaScript that became my favourite language. In 2022 I was learning my first framework which was Angular. ";
      default:
        return;
    }
  };

  return (
    <div className="h-36 w-[33ch] sm:w-[49ch] md:w-[70ch] max-h-auto border rounded-xl text-left break-words">
      <p className="text-sm sm:text-base md:text-lg p-2">
        {showHobbyDescription(selectedHobby)}
      </p>
    </div>
  );
}

export default HobbyDescription;
