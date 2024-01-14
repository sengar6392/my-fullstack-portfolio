import { useEffect, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { client, urlFor } from "../../client";
import { motion } from "framer-motion";
import "./portfolio.scss";
import AppWrapper from "../../utils/wrappers/AppWrapper";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [works, setWorks] = useState([]);
  const [filteredWorks, setFilteredWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  console.log(activeTab);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };
  console.log("works", works);
  return (
    <div>
      <div className="head-text">
        My Creative <span>Portfolio</span> Section
      </div>
      <div className="app__work-filter">
        {["All", "React", "Javascript", "Static"].map((tab) => (
          <div
            key={tab}
            className={`app__work-filter-item app__flex ${
              activeTab === tab ? "item-active" : ""
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <motion.div
        className="app__work-portfolio"
        animate={animateCard}
        whileInView={{ scale: [0.8, 1] }}
        transition={{ duration: 0.5 }}
      >
        {filteredWorks.map((work) => (
          <div key={work._id} className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                className="app__work-hover app__flex"
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">
                {work.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags.join(" | ")}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrapper(Portfolio);
