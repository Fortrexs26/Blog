import React from 'react'

import styles from "./Program.module.css";

export const Program = () => {
  return (
    <section className={styles.container} id="partner">
          <h2 className={styles.title}>Program/Degree</h2>
          <div className={styles.content}>
            <div className={styles.partnerImage}>
            </div>
            <p className={styles.content}> BSIT stands for Bachelor of Science in Information Technology. It's a four-year undergraduate degree program designed to equip students with the knowledge and skills to become IT professionals. The curriculum typically covers a broad range of topics related to information technology, including hardware, software, operating systems, networking, database management, and web development.
            BSIT degree prepares students for a variety of careers in the ever growing field of information technology.
            </p>
          </div>
        </section>
  )
}
