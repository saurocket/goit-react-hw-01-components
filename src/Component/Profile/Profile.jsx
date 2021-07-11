import styles from './Profile.module.css'
import {ProfileStats} from "./ProfileStats/ProfileStats";
import avatarDefault from '../../assets/avatar.jpg'
import PropTypes from 'prop-types';

export const Profile = ({data}) => {
    const {avatar = avatarDefault, location = 'New-York', name = 'Donald', stats = 'exPresident', tag = '@tramp'} = data
    return (
        <>
            <div className={styles.avatar}>
                <img className="profile_image" src={avatar} alt='alt' width='100px' height='100'/>
            </div>
            <div className="card-content darken-2-text">
                <h3 className="center-align">
                    {name}
                </h3>
                <p className={styles.avatarTag}>
                    @{tag}
                </p>
                <p className={styles.avatarLocation}>
                    {location}
                </p>
            </div>
            <ProfileStats stats={stats}/>
        </>

    )
}
Profile.propTypes = {
    data: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stats: PropTypes.object.isRequired,
        tag: PropTypes.string.isRequired
    })
}

