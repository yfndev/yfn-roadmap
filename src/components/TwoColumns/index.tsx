import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

const TwoColums = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default TwoColums;
