// dependencies
import * as React from "react";

// components
import { MainSection } from "./main/MainSection";
import { ContactSection } from "./contact/ContactSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { AboutSection } from "./about/AboutSection";

// assets
import * as css from "./Homepage.module.css";
import ForAllLogo from "../../assets/project-icons/ForAllTn-Logo.png";
import HHRLogo from "../../assets/project-icons/HHR-Logo.png";
import EBLogo from "../../assets/project-icons/EB-Logo.png";
import DriveLogo from "../../assets/project-icons/Drive-Logo.png";

interface HomepageProps {}

/*

	Restaurant Demo : on hold until I get it hosted
							{
						title: "Restaurant Demo",
						description:
							"Restaurant menu website I developed as a selling point for potential clients.",
						myRole: [
							"Created content for a restaurant demo website.",
							"Utilized Gatsby to efficiently develop a static site built with React.",
							"Learned graphQL and Strapi to implement a content management layer.",
						],
						techStack: ["React", "Gatsby", "Strapi", "GraphQL"],
						link: "http://poop.com",
						ghLink: "https://github.com",
					},

*/

const Homepage: React.FC<HomepageProps> = ({}) => {
	return (
		<main id="Homepage" className={`${css.Homepage}`}>
			<Header
				title="Josiah Eakle"
				subtitle="Full Stack Developer"
				pages={[
					{ title: "Home", elemId: "Hero" },
					{ title: "About Me", elemId: "About" },
					{ title: "My Projects", elemId: "Projects" },
					{ title: "Contact Me", elemId: "Contact" },
				]}
			></Header>
			<MainSection />
			<AboutSection
				groups={[
					{
						title: "About Me",
						description: [
							"Based in Knoxville TN, I am both a self taught full stack developer with a love for TypeScript and a father of two with a love for my two boys. I assist small businesses and individuals design, develop and deploy their dream websites. Equipped with powerful content management solutions, my applications provide streamlined experiences for both administrators and users.",
						],
					},
					{
						title: "Front End",
						description: [
							"With over two years of experience developing client side web applications, I have worked with an array of different frameworks and languages. From vanilla JavaScript, CSS and HTML to JavaScript frameworks like React. While a majority of my JS framework experience is with React, I have utilized and look forward to learning more about Svelte and Vue. Additionally, I have worked with a few different templating languages, my favorite of which is EJS.",
						],
						skills: [
							"JavaScript",
							"CSS",
							"HTML",
							"TypeScript",
							"React",
							"Gatsby",
							"EJS",
							"Handlebars",
							"Pug",
						],
					},
					{
						title: "Back End",
						description: [
							"Dynamic information adds an extra layer of complexity to the web development process. My understanding of server side systems will prove to be crucial in developing user authentication and data management systems. Proficient in content management layers, my applications prove easy and simple to edit and update. While I have more time spent developing client facing websites, I thoroughly  understand and enjoy developing server side applications.",
						],
						skills: [
							"Node",
							"Express",
							"Deno",
							"PHP",
							"MySQL",
							"SQLite",
							"Sanity",
							"Strapi",
						],
					},
					{
						title: "Software ",
						description: [
							"As a self taught developer, I am constantly learning and finding fixes to issues with no outside guidance. From hosting my applications to customizing my OS, I am more than competent in the development and hosting process. I use Ubuntu and there have been many instances where the wifi or bluetooth drivers were not working properly. Understanding the problem, I have consistently been able to resolve the issue.",
						],
						skills: [
							"Linux",
							"Git",
							"Netlify",
							"Figma",
							"Trello",
							"Digital Ocean",
							"Heroku",
						],
					},
				]}
			/>
			<ProjectsSection
				projects={[
					{
						title: "For All TN",
						titleLogo: ForAllLogo,
						description:
							"For All Tennessee is a nonprofit created to mobilize communities around policies that empower people and limit government intervention.",
						myRole: [
							"Collaborated with a team to develop a WordPress site.",
							"Created an API to save, serve, and manage data of statewide legislators.",
							"Created an admin dashboard to securely update the data.",
							"Created a front end javascript component to responsively display the information on the WordPress site.",
						],
						techStack: ["WordPress", "Express", "React", "MongoDB"],
						link: "https://www.foralltn.org/",
						ghLink: "https://github.com/josiaheakle/for-all-tn-admin",
					},
					{
						title: "Hendersonville Home Remodel",
						icon: HHRLogo,
						description:
							"Hendersonville Home Remodel is a home remodel service business in Hendersonville, TN.",
						myRole: [
							"Created SSR website for a home remodel business based in Hendersonville, TN.",
							"Developed theme with custom CSS.",
							"Creating framework to easily develop serivce based business websites.",
						],
						techStack: ["Gatsby", "React", "Strapi"],
						isDsf: true,
						link: "https://www.hendersonvillehomeremodel.com/",
						ghLink:
							"https://github.com/josiaheakle/hendersonville-home-remodel-ds",
					},

					{
						title: "Plan Vision Podcast",
						description:
							"WordPress website built for a financial planning podcast.",
						myRole: [
							"Developed a WordPress site following given theme.",
							"Embedded podcast player with RSS feed.",
							"Customized components according to client's expectations.",
						],
						techStack: ["WordPress"],
						link: "https://planvisionpodcast.com/",
					},

					{
						title: "Drive Ventures",
						icon: DriveLogo,
						description:
							"A demo website for a potential client. The website is not production ready and was produced to show my design ideas.",
						myRole: [
							"Designed layout according to the client's needs.",
							"Implemented layout in React using CSS modules.",
						],
						techStack: ["React", "CSS modules"],
						link: "https://drive-ventures.netlify.com/",
					},
					{
						title: "My Climate",
						isSmall: true,
						description:
							"My Climate is a single page react application which implements the OpenWeather API.",
						myRole: [
							"Implemented the OpenWeather API to display current weather.",
							"Utilized user location data to display location based weather.",
						],
						techStack: ["React"],
						link: "https://josiaheakle.github.io/weather-app/",
						ghLink: "https://github.com/josiaheakle/weather-app",
					},
					{
						title: "Memory Game",
						isSmall: true,
						description:
							"Memory Game is a simple React app in which you try and remember each food item you click.",
						myRole: ["Styled app with CSS.", "Used React to implement the UI"],
						techStack: ["React"],
						link: "https://josiaheakle.github.io/memory-game/",
						ghLink: "https://github.com/josiaheakle/memory-game/",
					},
					{
						title: "Remi Assistant",
						isSmall: true,
						description:
							"Remi Assistant is a full stack application created to send email and text reminders.",
						myRole: [
							"Created a single page client facing React application.",
							"Developed a backend with Node to manage users and reminders.",
						],
						techStack: ["React", "Node", "MongoDB"],
						link: "https://www.remiassistant.com/login",
						ghLink: "https://github.com/josiaheakle/remi-client",
					},
					{
						title: "Eden Prairie Remodelers",
						icon: HHRLogo,
						description:
							"Eden Prairie Remodelers is a home remodel service business in Eden Prairie, MN. This is one of the websites being migrated to my service based website framework, which has an integrated content management layer using Strapi and GraphQL.",
						myRole: [
							"Created a static website for a home remodel business based in Eden Prairie, MN.",
							"Developed theme with custom CSS.",
							"Actively creating a framework to easily develop service based business websites with Gatsby and Strapi.",
						],
						isDsf: true,

						techStack: ["Gatsby", "React", "Strapi", "GraphQL"],
						link: "https://www.edenprairieremodelers.com/",
						ghLink: "https://github.com/josiaheakle/eden-prairie-remodelers",
					},
					{
						title: "Enid Bathroom",
						icon: EBLogo,
						description:
							"Enid Bathroom is a bathroom remodel service business in Enid, OK. This is one of the websites being migrated to my service based website framework, which has an integrated content management layer using Strapi and GraphQL.",
						myRole: [
							"Created a static website for a home remodel business based in Eden Prairie, MN.",
							"Developed theme with custom CSS.",
							"Actively creating a framework to easily develop service based business websites with Gatsby and Strapi.",
						],
						isDsf: true,
						techStack: ["Gatsby", "React", "Strapi", "GraphQL"],
						link: "https://enidbathroom.com/",
						ghLink: "https://github.com/josiaheakle/enid-bathroom",
					},
				]}
			/>
			<ContactSection />
			<Footer />
		</main>
	);
};

export { Homepage };
