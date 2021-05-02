import styles from "./mainHome.module.scss";

const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
