import React from 'react';
import { motion } from 'framer-motion';

const WilliamLikes = () => {
  const activities = [
    {
      icon: '🎮',
      text: 'Playing games to discover new components for my projects',
    },
    {
      icon: '🎧',
      text: 'Listening to music to soothe and reset my mind',
    },
    {
      icon: '📖',
      text: 'Reading Unity update articles to spark new ideas',
    },
    {
      icon: '🤝',
      text: 'Helping others through troubleshooting and support',
    },
  ];

  return (
    <div className="w3-container w3-padding-32 w3-white">
      <h2 className="w3-center w3-animate-top">🌟 Things That Inspire Me</h2>
      <div className="w3-row-padding w3-stretch">
        {activities.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w3-col s12 m6 l3"
          >
            <div className="w3-card w3-round-large w3-hover-shadow w3-padding w3-center w3-light-grey">
              <h3 style={{ fontSize: '2rem' }}>{item.icon}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WilliamLikes;
