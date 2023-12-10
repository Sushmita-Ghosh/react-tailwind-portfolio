import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [expandNavBar, setExpandNavBar] = useState(false);
  return (
    <div className="flex justify-between gap-10 p-5 bg-peach text-lg font-bold  w-[100%]">
      <div className="flex flex-row gap-10">
        <div className="">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div>
          <Link to="/projects">
            <span>Project</span>
          </Link>
        </div>
        <div>
          <Link to="/experience">Experience</Link>
        </div>
      </div>

      {/* toggleButton */}
      <div className="flex justify-end">
        <button onClick={() => setExpandNavBar(!expandNavBar)}>
          <svg
            onClick={() => setExpandNavBar(!expandNavBar)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
