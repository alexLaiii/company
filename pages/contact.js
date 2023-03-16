// pages/contact.js
import React from 'react';
import styles from '../styles/contact.module.css';
import { AiOutlinePhone, AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa'; // Add this import

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2>聯絡我們</h2>
        <div className={styles.contactInfoItem}>
        <AiOutlinePhone className={`${styles.icon} ${styles.phoneIcon}`} size="1.5em" />
          <span>+(852) 2668 3893 / 9777 8892 / 9601 4882</span>
        </div>
        <div className={styles.contactInfoItem}>
          <div className={styles.mailIcon}>
            <AiOutlineMail className={styles.icon} size="1.5em" />
          </div>
          <a href="mailto:kin-lik@hotmail.com" className={styles.HideLink}>
            kin-lik@hotmail.com
          </a>
        </div>
        <div className={styles.contactInfoItem}>
        <AiOutlineEnvironment className={styles.icon} size="1.5em" />
            <a
                href="https://www.pronhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.HideLink}
            >
                <span>元朗新田石湖圍新村 DD 102 LOT 1574</span>
            </a>
        </div>
        <div className={styles.contactInfoItem}>
            <FaWhatsapp className={`${styles.icon} ${styles.whatsappIcon}`} size="1.5em" />
            <a
                href="https://wa.me/85297778892" // Change this to the full phone number you want to use, including the country code
                target="_blank"
                rel="noopener noreferrer"
                className={styles.HideLink}
            >
                <span>+(852) 9777 8892 / 9601 4882</span>
            </a>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.formInput} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" className={styles.formInput}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}
