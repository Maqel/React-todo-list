import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/listsReducer';
import { getColumnsById } from '../../redux/columnsReducer';
import { useParams } from 'react-router';
import SearchForm from "../SearchForm/SearchForm";
import { Navigate } from 'react-router';



const List = () => {

    const { listId } = useParams();
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsById(state, listId));
    if(!listData) return <Navigate to="/" />

	return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span className={styles.span}>soon!</span></h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} {...column}  /> )}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;