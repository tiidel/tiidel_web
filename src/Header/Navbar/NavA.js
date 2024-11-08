import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["Home", "Invest", "Blog", "About", "FAQ", "Register", "Login"];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="animated_nav_n">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <>
    {
      text === 'Blog' 
      ?
      <a href="https://blog.Tiidel.com.ng" target="_blank" rel="noreferrer" 
          className={`chip ${selected ? "selected" : ""}`}
      >
        <span className="nav_animated_text">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="animated_nav_select"
          ></motion.span>
        )}
      </a>
      :
      <Link
          to={`/${text.toLowerCase()}`}
          onClick={() => setSelected(text)}
          className={`chip ${selected ? "selected" : ""}`}
      >
        <span className="nav_animated_text">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="animated_nav_select"
          ></motion.span>
        )}
      </Link>
    }
    </>
  );
};

export default ChipTabs;