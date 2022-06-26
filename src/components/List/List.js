import styles from './List.module.scss';
import Column from '../Column/Column.js';
const List = () => {
  return (
    <div className={styles.List}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do<span className={styles.span}>soon</span></h1>
        <p className={styles.description}>Interesting things I want to check out</p>
      </header>
      <section className={styles.columns}>
        <Column icon="book" title="Books" />
        <Column icon="gamepad" title="Movies" />
        <Column icon="film" title="Games" />
      </section>
    </div>
  );
};

export default List;