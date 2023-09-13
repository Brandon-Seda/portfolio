import Header from "../components/header.js";
import ProjectCard from "../components/projectCard.js";
import AboutMe from "../components/aboutMe.js";
import ContactForm from "../components/ContactForm.js";


function HomePage() {
    return (
      <div>
        <Header />
        <div className="container mx-auto">
          <ProjectCard />
          <AboutMe />
          <ContactForm />
        </div>
      </div>
    );
  }
  
export default HomePage;
 