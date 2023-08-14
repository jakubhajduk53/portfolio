import Header from "../components/Header";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./Contact";

function MainPage() {
  return (
    <div className="bg-ivory">
      <Header />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainPage;
