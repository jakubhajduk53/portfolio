function HobbyDescription({ selectedHobby }) {
  const showHobbyDescription = (hobby) => {
    switch (hobby) {
      case "Chess":
        return "I love Chess";
      case "Football":
        return "I love Football";
      case "Gaming":
        return "I love Gaming";
      case "Coding":
        return "I love Coding";
      default:
        return;
    }
  };

  return (
    <div className="max-w-12 h-36 border rounded-xl text-left break-words">
      <p className="text-lg">{showHobbyDescription(selectedHobby)}</p>
    </div>
  );
}

export default HobbyDescription;
