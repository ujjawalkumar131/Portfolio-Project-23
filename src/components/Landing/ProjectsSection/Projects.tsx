import OverlappingText from "@/components/OverlappingText/OverlappingText";
import ProjectCard from "./ProjectCard";
import style from "./styles.module.css";
import project1 from "public/images/naps.jpg";
import project2 from "public/images/vsbuddies.png";
import project3 from "public/images/new.jpg";
import project4 from "public/images/portfolio22.jpg";

export default function Projects() {
  const project1content =
    "Worked on the  website  as WEB Dev team for News and Publication society, BIT Mesra. The website featured member login and creation of new members.";
  const project2content =
    "This project aims to connect developers or college students with common interests, on the basis of common interests, skills and college. Also built a Visual Studio Code extenion for the chat component of the project. Got to top 10 at IEEE Megaproject";
  const project3content =
    "This is the code for the portfolio website you're on right now";
  const project4content =
    "This is my ever first website, built during learning  Basics of Web devlopment. I only use HTML,CSS and Javascript to build this and sucessfully deployed in github.";
  return (
    <div className={style.Projects}>
      <OverlappingText
        backgroundtext="Projects"
        toptext="Check out what i have worked on"
      />
      <div className="a10vhgap"></div>
      <ProjectCard
        content={project1content}
        github="https://github.com/ujjawalkumar131/NAPS-Website"
        image={project1}
        projecturl="https://naps-website.vercel.app"
        title="Naps Website"
        tags={["NextJs", "ExpressJs", "MongoDB", "Typescript"]}
      />
      
      <div className="a10vhgap"></div>
      <ProjectCard
        content={project3content}
        github="https://github.com/ujjawalkumar131/Portfolio-Project-23"
        image={project3}
        projecturl="/"
        title="Portfolio Project '23"
        tags={["NextJs", "Typescript", "TailwindCSS"]}
      />
      <div className="a10vhgap"></div>
      <ProjectCard
        content={project4content}
        github="https://github.com/ujjawalkumar131/Personal-website"
        image={project4}
        projecturl="https://ujjawalkumar131.github.io/Personal-website/"
        title="Portfolio Project '22"
        reverse
        tags={["HTML","CSS","Javascript"]}
      />
    </div>
  );
}
