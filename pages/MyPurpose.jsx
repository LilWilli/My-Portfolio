import React from 'react';
import { motion } from 'framer-motion';

const MyPurpose = () => {
  return (
    <div className="w3-container w3-padding-32 w3-light-grey">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w3-card w3-round-large w3-padding w3-white"
      >
        <h2 className="w3-center w3-animate-top">🎯 My Purpose</h2>
        <p className="w3-large w3-margin-top">
          I’m a young, determined aspiring <strong>entrepreneur in Game Development</strong>, driven by the goal of building immersive experiences that inspire and entertain. My passion isn’t just about playing games—it’s about understanding what makes them great and using that knowledge to bring ideas to life.
        </p>
        <p className="w3-large">
          My background as a <strong>Fullstack Web Developer</strong> gave me hands-on experience with frontend and backend technologies that translate seamlessly into game development. Whether it’s manipulating data, structuring logic, or crafting interactive components, these skills give me a strong technical edge.
        </p>
        <p className="w3-large">
          I’m confident working with the <strong>Command Line Interface</strong>, understanding how systems operate beneath the surface, and solving technical problems with precision. My experience navigating complex architecture helps me design and build with purpose—and I bring that mindset into every game I plan.
        </p>
        <p className="w3-large">
          I believe coding isn’t just a skill—it’s a bridge between imagination and reality. The tools I’ve learned in web development—from JavaScript logic to deployment practices—fuel my ability to create games that are smart, scalable, and engaging.
        </p>
        <p className="w3-large w3-margin-top w3-center">
          <strong>I’m ready to take the next step—because this isn’t just ambition. It’s preparation, determination, and passion combined.</strong>
        </p>
      </motion.div>
    </div>
  );
};

export default MyPurpose;
