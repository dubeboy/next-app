import profileStyles from '../styles/Profile.module.css'
import Image from 'next/image'

export const Profile = ({ photoSrc }) => {
    return (
       <div className={profileStyles.profile}>
            <Image
                src={photoSrc}
                alt="Picture of the author"
                width={20}
                height={20}
            />
        </div> 
    )
}

export default Profile
