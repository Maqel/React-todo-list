import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { addColumn } from '../../redux/columnsReducer';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
      e.preventDefault();
      // dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon ,id: shortid() }});
      dispatch(addColumn({ title, icon ,id: shortid(), listId: props.listId }));
      setTitle('');
      setIcon('');
};

	return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>Title:</label><TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <label>icon:</label><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default ColumnForm;