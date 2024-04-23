import React from 'react'

import styles from "./Partner.module.css";
import { getImageUrl } from "../../utils";

export const Partner = () => {
    return (
        <section className={styles.container} id="partner">
          <h2 className={styles.title}>Partner Industry</h2>
          <div className={styles.content}>
            <div className={styles.partnerImage}>
            <img src= {getImageUrl("schooldept/DAR.png")} alt='Partner image' className={styles.partnerImage}/>
            </div>
            <p className={styles.content}> DAR stands for the Department of Agrarian Reform, which is a governmental body in the Philippines responsible for implementing agrarian reform programs. These programs aim to promote social justice and equitable distribution of agricultural lands to landless farmers and farmworkers.
            DAR's role includes land acquisition and distribution, support services for agrarian reform beneficiaries, land tenure improvement, and agrarian justice delivery. Despite facing various challenges such as resistance from landowners and inadequate resources, DAR has made progress in redistributing land and empowering farmers over the years.
            DAR was created in response to the need for agrarian reform in the Philippines, aiming to address issues of land inequality and improve the lives of landless farmers and farmworkers through land redistribution and support services.
            </p>
          </div>
        </section>
      );
}
