import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import styles from "./About.module.css";

import Resume from "../../assets/document/Resume.pdf";
import Button from "../../components/Button/Button";

const About = () => {
    const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.3);

    return (
        <section
            className={`${styles.About} ${isVisible ? "active" : ""}`}
            name="About"
            ref={sectionRef}
        >
            <h1
                className="section-header"
                style={{ "--x": "5%", "--y": "0rem" }}
            >
                About
            </h1>

            <div className={styles.content}>
                <p>
                    Hi!, I am Kovvuru Rajesh, and currently studying Computer Science
                    Engineering at SRM University AndhraPradesh.
                </p>
                <p>I am a Web-Development intern at Bharath Intern.</p>
                <p>I am a DataScience intern at CodeClause.</p>
                <p>I am a Research Intern at SRM Universituy AP</p>
                <p>I enjoy building websites and exploring new technologies.</p>
                <p className={styles.email}>
                    Let's Start a Conversation:
                    <a href="mailto:kovvururajesh8@gmail.com?subject=Hi!">
                        kovvururajesh8@gmail.com
                    </a>
                </p>
                <Button link={Resume}>Resume</Button>
            </div>
        </section>
    );
};

export { About };
