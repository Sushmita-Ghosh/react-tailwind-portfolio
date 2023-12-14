import { experience } from "../../data/experience";
import { GoCheckCircleFill } from "react-icons/go";

const Experience = () => {
  return (
    <section className="mt-20 px-10">
      <h2 className="text-3xl font-burtons px-10 text-center mb-10 ">
        Experience
      </h2>

      <div className="flex justify-center items-center">
        <ul className=" border-gray-400 border-l-2">
          {experience.map((exp, id) => (
            <li key={id} className="m-2 md:m-10 shadow-lg relative">
              <div className="flex flex-col items-center justify-center my-10 before:content-[''] before:absolute before:w-5 before:h-5 before:right-[calc(100%+0px)] md:before:right-[calc(100%+30px)] before:top-0 before:bg-purple-400 before:rounded-full">
                <div className="p-5 w-[100%] ">
                  <h3 className="pb-1 font-bold font-burtons text-lg md:text-xl text-pink-400">
                    {exp.role}
                  </h3>
                  <h4 className=" pb-1 text-sm italic ">{exp.organisation}</h4>
                  <p className="text-sm">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <ul className="mt-4">
                    {exp.experiences.map((exp, id) => (
                      <div key={id} className="flex gap-3 items-center">
                        <GoCheckCircleFill className="h-2.5 w-2.5 md:h-4 md:w-4" />
                        <p className="text-xs md:text-sm">{exp}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
