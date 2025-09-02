import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-0 py-10"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-4 place-items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={`frontend-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-6 place-items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={`backend-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-6 place-items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={`fullstack-${index}`}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            name={image.skill_name}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 mt-6 place-items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={`other-${index}`}
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