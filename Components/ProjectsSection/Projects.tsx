import OverlappingText from "../OverlappingText/OverlappingText";
import ProjectCard from "./ProjectCard";
import style from "./styles.module.css";
import project1 from "../../public/images/naps.jpg";
import project2 from "../../public/images/vsbuddies.png";
import project3 from "../../public/images/portfolio22.png";
import project4 from "../../public/images/portfolio20.png";

export default function Projects() {
	const project1content =
		"Built a website for NAPS society, BIT Mesra. The website featured member login and creation of new members.";
	const project2content =
		"This project aims to connect developers or college students with common interests, on the basis of common interests, skills and college. Also built a Visual Studio Code extenion for the chat component of the project. Got to top 10 at IEEE Megaproject";
	const project3content =
		"This is the code for the portfolio website you're on right now";
	const project4content =
		"This is my first website, built during IEEE Lead 2.0. Got 3rd postion at the event for portfolio building project.";
	return (
		<div className={style.Projects}>
			<OverlappingText
				backgroundtext="Projects"
				toptext="Check out what i have worked on"
			/>
			<div className="gap"></div>
			<ProjectCard
				content={project1content}
				github="https://github.com/lohit244/naps-website"
				image={project1}
				projecturl="https://github.com"
				title="Naps Website"
				tags={["NextJs", "ExpressJs", "MongoDB", "Typescript"]}
			/>
			<div className="gap"></div>
			<ProjectCard
				content={project2content}
				github="https://github.com/lohit244/vsbuddies-website"
				image={project2}
				projecturl="https://vsbuddies.netlify.app"
				title="VS Buddies"
				reverse
				tags={["ReactJs", "ExpressJs", "MongoDB", "VSCode Extension", "Firebase"]}
			/>
			<div className="gap"></div>
			<ProjectCard
				content={project3content}
				github="https://github.com/lohit244/portfolio22"
				image={project3}
				projecturl="https://lohit244.netlify.app"
				title="Portfolio Project '22"
				tags={["NextJs", "Typescript", "TailwindCSS"]}
			/>
			<div className="gap"></div>
			<ProjectCard
				content={project4content}
				github="https://github.com/lohit244/4"
				image={project4}
				projecturl="https://lohit244.github.io/4"
				title="Portfolio Project '20"
				reverse
				tags={["ReactJS"]}
			/>
		</div>
	);
}
