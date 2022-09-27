import type { NextPage } from "next";
import Head from "next/head";
import About from "@/components/Landing/AboutSection/About";
import Landing from "@/components/Landing/LandingSection/Landing";
import Projects from "@/components/Landing/ProjectsSection/Projects";
const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Lohitaksha | WebDev</title>
				<meta
					name="description"
					content="Lohitaksha Malhotra's portfolio website"
				/>
				{/* Icons */}
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/images/favicon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/images/favicon-512x512.png"
				/>
			</Head>
			<div className="container mx-auto">
				<Landing />
				<About />
				<Projects />
			</div>
		</>
	);
};

export default Home;
