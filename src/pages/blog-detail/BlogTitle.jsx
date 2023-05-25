import styles from './BlogTitle.module.scss';

export default function BlogTitle({ title }) {
  return <div className={styles.container}>{title}</div>;
}
