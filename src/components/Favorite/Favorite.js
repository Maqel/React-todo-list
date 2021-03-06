import styles from '../Favorite/Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

const Favorite = () => {

    const favoriteCards = useSelector((state) => state.cards.filter(card => card.isFavorite === true));
    if (favoriteCards.length === 0)

    return (
        <div>
            <PageTitle title={'Favorite'} />
            <article className={styles.empty}>
                <p className={styles.text} >No <span>favorites</span> were added<span>...</span></p>
            </article>
        </div>
    )
    
    return (
        <div>
            <PageTitle title={'Favorite'}/>
            <p className={styles.par}>Lorem ipsum</p>
            <PageTitle title={'Favorite'} />
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} cardId={card.id} isFavorite={card.isFavorite} />)}
                </ul>
            </article>
        </div>
    )
};

export default Favorite; 