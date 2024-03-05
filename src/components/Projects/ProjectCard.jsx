import Card from "react-bootstrap/Card";
import { AiFillGithub } from "react-icons/ai";
import { BackgroundGradient } from "../ui/background-gradient";

const ProjectCard = ({ title, description, imgSrc, githubUrl }) => {
  return (
    <div className="project-card">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <div className="h-48 overflow-hidden rounded-lg">
          <Card.Img
            variant="top"
            src={imgSrc}
            alt="card-img"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <button className="rounded-full pl-4 pr-4 py-1 text-black flex items-center space-x-1 bg-white mt-4 text-xs font-bold dark:bg-zinc-800">
            <AiFillGithub className="mr-1" /> <span>Github</span>
          </button>
        </a>
      </BackgroundGradient>
    </div>
  );
};

export default ProjectCard;
