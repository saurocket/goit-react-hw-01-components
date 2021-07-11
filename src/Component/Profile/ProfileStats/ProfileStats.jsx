import PropTypes from 'prop-types';

import styles from './ProfileStats.module.css'

export const ProfileStats = ({stats}) => {
    return (
        <ul className={styles.statsList}>
            {Object.entries(stats)
                .map(item => <li
                    key={item[1]}
                    className={styles.item}
                >
                    <p className={styles.itemHeader}>{item[0]}</p>
                    <span className={styles.itemDescription}>{item[1]}</span>
                </li>)}
        </ul>
    )
}

ProfileStats.propTypes = {
    stats: PropTypes.object

};