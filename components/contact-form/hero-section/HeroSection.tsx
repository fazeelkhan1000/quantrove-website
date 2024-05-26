"use client";
import styles from "./heroSection.module.scss";
import buttonStyles from "../contact-us/contactForm.module.scss";
import ScaleComponent from "../scale-component/ScaleComponent";
import { heroData } from "../staticData";
import MainNavigation from "../main-navigation/mainNavigation";
const HeroSection = () => {
  return (
    <section className={styles.whFull}>
      <div className={styles.mainNavigation}>
        <MainNavigation />
      </div>
      {/* <div className={styles.gradient1}></div> */}
      <div className={styles.mainDiv}>
        <div className={styles.headingDiv}>
          <div className={styles.contentDiv}>
            <h1>Transforming Digital Vision into Profitable Realities</h1>
            <p>
              Quantrove Delivers Tailored Software Solutions for Businesses of
              Every <br /> Size, From Promising Startups to Established
              Enterprises
            </p>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.customButton}>Start a Project</button>
          </div>
        </div>
        <div>
          <ScaleComponent />
        </div>
      </div>
      <div className={styles.slidersDiv}>
        <div className={styles.slidersInner}>
          {heroData.map((obj, index) => (
            <img key={`original-${index}`} src={obj.logo.src} alt="" />
          ))}
          {heroData.map((obj, index) => (
            <img key={`duplicate-${index}`} src={obj.logo.src} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
