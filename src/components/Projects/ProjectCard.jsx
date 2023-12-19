/* eslint-disable react/prop-types */

import { HiOutlineCodeBracket } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";

const ProjectCard = ({
  title,
  imageSrc,
  description,
  skills,
  //   demo,
  //   source,
}) => {
  return (
    <div className="m-5 md:m-10 rounded-lg">
      <div className="h-52 md:h-72 relative group">
        <img
          src={imageSrc}
          alt="project"
          className="rounded-lg h-full w-full object-cover"
        />
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full hidden bg-purple-400 bg-opacity-0  group-hover:flex group-hover:bg-opacity-80  group-hover:rounded-lg transition-all duration-200">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <HiOutlineEye className="text-3xl text-white m-5 cursor-pointer hover:text-gray-600" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <HiOutlineCodeBracket className="text-3xl text-white m-5 cursor-pointer hover:text-gray-600" />
          </a>
        </div>
      </div>

      <div className="py-6 px-4 mt-2">
        <h3 className="font-burtons text-xl mb-2 text-purple-600">{title}</h3>
        <p className="text-sm mb-3">{description}</p>
        {/* Skills */}
        <div className="flex flex-wrap gap-2 ">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm text-white bg-pink-400 rounded-full px-3 py-2 font-burtons"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
