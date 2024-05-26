import { navigationPaths } from "../staticData";
import styles from "./mainNavigation.module.scss";
import Logo from "../../../public/assets/branding/siteLogo.svg";
const mainNavigation = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.siteLogo}>
        <img src={Logo.src} alt="" />
      </div>
      {navigationPaths.map((obj) => {
        return (
          <div key={obj.id} className={styles.servicesDiv}>
            <span>{obj.title}</span>
          </div>
        );
      })}
      <div className={styles.buttonDiv}>
        <button className={styles.customButton}>Start a Project</button>
      </div>
    </div>
  );
};

export default mainNavigation;
