import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <svg className={styles.star_wrapper}>
        <polygon
          points="50,0 65,35 100,40 75,65 80,100 50,80 20,100 25,65 0,40 35,35"
          className={styles.star}
        />
      </svg>
    </div>
  );
};

export default Loader;
