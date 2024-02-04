import { UseActiveOnScroll } from "../../hooks/useActiveOnScroll";
import styles from "./Skills.module.css";

const Skills = () => {
    const { observerRef: sectionRef, isVisible } = UseActiveOnScroll(0.2);

    return (
        <section
            className={`${styles.Skills} ${isVisible ? "active" : ""}`}
            name="Skills"
            ref={sectionRef}
        >
            <div className={styles.content}>
                <h1
                    className="section-header"
                    style={{ "--x": "5%", "--y": "0rem" }}
                >
                    Skills
                </h1>

                <div>
                    <h3>Web technologies</h3>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java Script</li>
                    <li>Jquery</li>
                    <li>React</li>
                    <li>Nojes js</li>
                    <li>Express js</li>
                    <li>MongoDB</li>
                </div>
                <div>
                    <h3>Machine Learning and Deep Learning</h3>
                    <li>Supervised Machine Learning</li>
                    <li>Unsupervised Machine Learning</li>
                    <li>Convolutional Neural Network</li>
                    <li>Artificial Neural Network</li>
                </div>
                <div>
                    <h3>Programming Languages</h3>
                    <li>C++</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                </div>
                <div>
                    <h3>Primary Tools</h3>
                    <li>Text Editor: VSCode</li>
                    <li>Postman</li>
                    <li>Git </li>
                    <li>GitHub</li>
                    <li>Power BI</li>
                    <li>Bash</li>
                </div>
            </div>
        </section>
    );
};

export { Skills };
