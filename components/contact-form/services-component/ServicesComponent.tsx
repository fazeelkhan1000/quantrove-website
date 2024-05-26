"use client";
import styles from "./servicesComponent.module.scss";
import { useState } from "react";
import services1 from "../../../public/assets/site-images/ServicesImg1.svg";
import services2 from "../../../public/assets/site-images/ServicesImg2.svg";
import services3 from "../../../public/assets/site-images/ServicesImg3.svg";
import { servicesArray } from "../staticData";

const ServicesComponent = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (serviceId: any) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesMain}>
        <div className={styles.imagesDiv}>
          <div className={styles.LeftImageDiv}>
            <img className={styles.leftImage} src={services1.src} alt="" />
          </div>
          <div className={styles.rightImagesDiv}>
            <img src={services2.src} alt="" />
            <img src={services3.src} alt="" />
          </div>
        </div>
        <div className={styles.contentDiv}>
          <h1>Our Services</h1>
          <div className={styles.servicesDiv}>
            {servicesArray.map((service) => (
              <div
                className={`${styles.singleServiceDiv} ${
                  activeService === service.id ? styles.active : ""
                }`}
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
              >
                <span>{`0${service.id}/`}</span>
                <h2>
                  <div style={{ display: "flex" }}>
                    {service.title}
                    {
                      activeService === service.id ? (
                        <img
                          style={{ marginLeft: "10px" }}
                          src={service.isActive.src}
                          alt=""
                        /> // Assuming activeIcon is the property containing the active icon component
                      ) : (
                        <img
                          style={{ marginLeft: "10px" }}
                          src={service.isInActive.src}
                          alt=""
                        />
                      ) // Assuming inactiveIcon is the property containing the inactive icon component
                    }
                  </div>
                </h2>

                {
                  <div
                    className={`${styles.descriptionDiv} ${
                      activeService === service.id ? styles.show : ""
                    }`}
                  >
                    {service.description}
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
