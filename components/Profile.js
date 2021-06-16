import profileStyles from '../styles/Profile.module.css'
import Image from 'next/image'
import { server } from '../config'


export const Profile = ({ author }) => {
    console.log("here")
    console.log(author)

    return (
       <div className={profileStyles.profile} >
            <Image
                src={server + author.profile_photo.thumbnailUrl}
                layout="responsive"
                alt={author.name}
                width={50}
                height={50}
            > 
            </Image>
            <span className={profileStyles.tooltiptext}>{author.name}</span>
        </div> 
    )
}

export default Profile
