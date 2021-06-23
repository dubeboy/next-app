import profileStyles from '../styles/Profile.module.css'
import { server } from '../config'


export const Profile = ({ author }) => {
    console.log("here")
    console.log(author)

    return (
       <div className={profileStyles.profile}>
            <img src={server + author.profile_photo.thumbnailUrl} alt={author.name} /> 

            <span className={profileStyles.tooltiptext}>{author.name}</span>
        </div> 
    )
}

export default Profile
