import styles from "./callToAction.module.scss";
import images from "../../../public/assets/site-images/circularImg.svg";
const callToAction = () => {
  return (
    <section className={styles.callToActionSection}>
      <div className={styles.mainDiv}>
        <div className={styles.pRelative}>
          <h2>
            We Are The Fastest Growing <br />
            Software Development Company
          </h2>
        </div>
        <div className={styles.pRelative}>
          <h1>
            Let’s Build The <br />
            Future Together
          </h1>
        </div>
      </div>
    </section>
  );
};

export default callToAction;
