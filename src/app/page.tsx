import { libre } from "./fonts";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.home_container}>
          <div className={styles.name_container}>
            <h1 className={styles.firstName}>Richard</h1>
            <div className={styles.lastName_container}>
              <h2 className={styles.lastName}>Timergalejevs</h2>
            </div>
          </div>
          <div className={styles.img_container}>
            <img className={styles.img} src="zeus.png" alt="Zeus" />
          </div>
          <div className={styles.background_print}>
            <div className={styles.horizontal_line}>
              <p className={styles.horizontal_number}>01</p>
              <p className={`${styles.horizontal_text} ${libre.className}`}>
                by <span>go</span>thic
              </p>
              <p className={styles.horizontal_number}>10</p>
            </div>
            <div className={styles.background_outer_circle}>
              <div className={styles.vertical_line}></div>
              <div className={styles.background_inner_circle}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
