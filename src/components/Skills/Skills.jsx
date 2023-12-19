import Marquee from "react-fast-marquee";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section className="mt-20 px-10 flex justify-center flex-col items-center">
      <h2 className="text-3xl font-burtons px-10 text-center mb-5">Skills</h2>
      {/* Skills */}
      <div className="flex items-center justify-center gap-5 w-[80%]">
        <Marquee autoFill direction="right">
          {skills.map((skill, id) => (
            <div key={id}>
              <div className="flex flex-col items-center p-5 gap-5">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full overflow-hidden p-5 mx-auto">
                  <img
                    src={skill.imageSrc}
                    alt=""
                    className="object-contain h-[100%]"
                  />
                </div>

                <h3 className="text-lg font-burtons">{skill.title}</h3>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
