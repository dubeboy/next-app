import aboutStyles from '../styles/About.module.css'
import {server} from '../config'

export const about = ({about}) => {
    return (
        <div className={aboutStyles.about}>
            <h1 className={aboutStyles.center}>About </h1>
            <p >{about.body}</p>
        </div>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/about`)
    const about = await res.json()
  
    return {
      props: {
        about: about
      }
    }
}

export default about
