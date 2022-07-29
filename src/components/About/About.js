import styles from '../About/About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    
    return(
    <div>
        <PageTitle title={'About'} />
        <p className={styles.text}>A <span>To-Do List</span> to Organize Your <span>Work & Life</span></p>
    </div>
    )
}

export default About; 