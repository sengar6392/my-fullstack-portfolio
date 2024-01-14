import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";
import "./skills.scss";
import AppWrapper from "../../utils/wrappers/AppWrapper";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'skills']";
    client.fetch(query).then((data) => setSkills(data));
  }, []);
  return (
    <div className="app__skills">
      <h2 className="head-text">Skills</h2>

      <motion.div
        className="app__skills-list"
        whileInView={{ scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={skill.name}
          >
            <div className="app__flex" style={{ backgroundColor: "#fff" }}>
              <img src={urlFor(skill.icon)} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Skills);
