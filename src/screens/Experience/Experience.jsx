// Experience.jsx

import React, { useEffect, useState } from 'react';
import styles from './Experience.module.css';
import { UseActiveOnScroll } from '../../hooks/useActiveOnScroll';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.4); // Adjust the scroll threshold as needed

  useEffect(() => {
    import('../../assets/data/Experience.json')
      .then((data) => {
        setExperience(data.experience || []);
      })
      .catch((error) => {
        console.error('Error fetching experience data:', error);
      });
  }, []);

  return (
    <section
      className={`${styles.experience} ${isVisible ? 'active' : ''}`}
      name="Experience"
      ref={sectionRef}
    >
      <h1 className={`section-header ${isVisible ? 'active' : ''}`}  style={{ "--x": "5%", "--y": "1rem" }}>
        Experience
      </h1>
      <div className={styles.content}>
        {experience.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3>{exp.position}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.duration}>{exp.duration}</p>
            <p className={styles.description}>{exp.description}</p>
            {exp.certificateLink && (
              <a href={exp.certificateLink} target="_blank" rel="noopener noreferrer">
                View Completion Certificate
              </a>
            )}
          </div>

        ))}
      </div>
    </section>
  );
};

export default Experience;
