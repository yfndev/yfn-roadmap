import styles from "./TwoColumns.module.css";

type Props = {
  children: React.ReactNode;
};

export const TwoColumns = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
