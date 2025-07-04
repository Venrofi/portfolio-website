import "./index.scss";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

import NavBar from "../../components/NavBar";
import LiveSite from "../../components/LiveSite";
import DesignSimple from "../../components/DesignSimple";
import DesignPrototype from "../../components/DesignPrototype";
import ReDesign from "../../components/ReDesign";

import SpaceTourismPreview from "../../assets/portfolio/preview-space-tourism.png";
import CepikCarDatabasePreview from "../../assets/portfolio/preview-cepik-car-database.png";
import HipHopHubPreview from "../../assets/portfolio/preview-hip-hop-hub.png";
import PlanningPokerPreview from "../../assets/portfolio/preview-planning-poker.png";
import HuddlePreview from "../../assets/portfolio/preview-huddle.png";
import PhloxPreview from "../../assets/portfolio/preview-phlox.png";
import GlassWebsitePreview from "../../assets/portfolio/preview-glass-website.png";
import SNN_newPreview from "../../assets/portfolio/preview-stare-na-nowo-new.png";
import SNN_oldPreview from "../../assets/portfolio/preview-stare-na-nowo-old.png";

const Portfolio = () => {
	return (
		<>
			<NavBar />
			<main className="portfolio-main">
				<header className="portfolio-header">
					<h2>
						My <span className="text-highlight">Portfolio</span>.
					</h2>
					<p>Here are some projects that I am proud of.</p>
				</header>
				<h2 className="portfolio-section-heading">
					WEB <span className="text-highlight">DEV</span>.
				</h2>
				<LiveSite
					name="Space Tourism Website"
					tech1="Vanilla JavaScript"
					tech2="SASS"
					siteLink="https://space-tourism-website-venrofi.netlify.app/"
					codeLink="https://github.com/Venrofi/2022/tree/main/WEB%20DEV/FrontEnd%20Mentor/space-tourism-website-main%203.04.2022"
					imgSrc={SpaceTourismPreview}
					imgAlt="A Screenshot of Space Tourism Home Page"
				/>

				<LiveSite
					name="Hip-Hop Hub"
					tech1="Angular"
					tech2="Typescript"
					siteLink="https://hip-hop-hub.netlify.app/"
					codeLink="https://github.com/Venrofi/praca-inzynierska/tree/standalone-fe-firebase/wortal-app"
					imgSrc={HipHopHubPreview}
					imgAlt="A Screenshot of Hip-Hop Hub Home Page"
				/>

				<LiveSite
					name="Planning Poker"
					tech1="Angular"
					tech2="Typescript"
					siteLink="https://planning-poker-venrofi.netlify.app/"
					codeLink="https://github.com/Venrofi/planning-poker/"
					imgSrc={PlanningPokerPreview}
					imgAlt="A Screenshot of Planning Poker room"
				/>

				<LiveSite
					name="CEPiK Car Database"
					tech1="Angular"
					tech2="Typescript"
					siteLink="https://cepik-car-database-venrofi.netlify.app/"
					codeLink="https://github.com/Venrofi/2022/tree/main/WEB%20DEV/Angular/CEPiK%20Car%20Database%2030.10.2022"
					imgSrc={CepikCarDatabasePreview}
					imgAlt="A Screenshot of CEPiK Car Database Main Page"
				/>

				<LiveSite
					name="Huddle Landing Page"
					tech1="React"
					tech2="Styled Components"
					siteLink="https://huddle-venrofi.netlify.app/"
					codeLink="https://github.com/Venrofi/2022/tree/main/WEB%20DEV/FrontEnd%20Mentor/huddle-landing-page-with-curved-sections-master%2021.04.2022"
					imgSrc={HuddlePreview}
					imgAlt="A Screenshot of Huddle Home Page"
				/>

				<h2 className="portfolio-section-heading">
					WEB <span className="text-highlight">DESIGN</span>.
				</h2>

				<DesignSimple
					name="Glass Website"
					tech="Figma"
					imgSrc={GlassWebsitePreview}
					imgAlt="A Screenshot of Glass Website Design"
				/>

				<DesignPrototype
					name="Phlox Landing Page"
					tech="Figma"
					prototypeLink="https://www.figma.com/proto/UaLF9n6LKc3z0u4oI2pWrw/Phlox-Landing-Page-Tutorial?node-id=20%3A422&scaling=min-zoom&page-id=13%3A19&starting-point-node-id=55%3A952"
					imgSrc={PhloxPreview}
					imgAlt="A Screenshot of Phlox Website Design"
				/>

				<ReDesign
					name="Stare na Nowo"
					imgSrcOld={SNN_oldPreview}
					imgAltOld="A Screenshot of old Stare na Nowo Website Design"
					imgSrcNew={SNN_newPreview}
					imgAltNew="A Screenshot of new Stare na Nowo Website Design"
				/>
				<div className="portfolio-buttons">
					<Link to="/contact" className="button-outline">
						Contact Me
					</Link>
				</div>
			</main>
			<Loader type="ball-clip-rotate" />
		</>
	);
};

export default Portfolio;
