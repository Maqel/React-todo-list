import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearching } from '../../redux/store';
const SearchForm = () => {
    const currentInputValue = useSelector(state=>state.searchString);
    const [newSearchString, setSearchString] = useState(currentInputValue);
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // dispatch({ type: 'UPDATE_SEARCHSTRING', newSearch: newSearchString});
        // dispatch(updateSearching({newSearch: newSearchString}));
        dispatch(updateSearching(newSearchString));
    }

    return (
        // <form className={styles.searchForm}>
        //     <TextInput placeholder="Search..." />
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." value={newSearchString} onChange={e=>setSearchString(e.target.value)}/>
        <Button>
            <span className="fa fa-search" />
        </Button>
        </form>
    );
};

export default SearchForm;