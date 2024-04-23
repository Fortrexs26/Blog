import React from 'react'

import styles from "./SchoolDept.module.css";
import { getImageUrl } from "../../utils";

export const SchoolDept = () => {
    return (
        <section className={styles.container} id="schoolDept">
          <h2 className={styles.title}>School and Department</h2>
          <div className={styles.content}>
          <img src= {getImageUrl("schooldept/CCS.png")} alt='CSS image' className={styles.deptImage}/>
          <img src= {getImageUrl("schooldept/SCC.png")} alt='School image' className={styles.schoolImage1}/>
          </div>
          <div className={styles.buttonContainer}>
          <button className={styles.button}>See More</button>
          </div>
        </section>
        
      );
}
