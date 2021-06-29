import profileStyles from '../styles/Profile.module.css'


export const Profile = ({ author }) => {
    console.log(author)

    return (
       <div className={profileStyles.profile}>
            <img src={author.profile_photo.thumbnailUrl} alt={author.name} /> 

            <span className={profileStyles.tooltiptext}>{author.name}</span>
        </div> 
    )
}

export default Profile
