import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const allSkills = [...Frontend_skill, ...Backend_skill, ...Full_stack, ...Other_skill];
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-0 py-10"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-5 mt-4 place-items-center">
        {allSkills.map((image, index) => (
          <SkillDataProvider
            key={`skill-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;