import Link from 'next/link'
import { server } from '../../../config'

const blog = ({ blog } ) => {
    // const router = useRouter()
    // const {id} = router.query
    return( 
    <>
        <h1>{blog.title}</h1>
        <p>{ blog.body }</p>
        <br/>
        <Link href='/'>Go Back</Link>
     </>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/blogs/${context.params.id}`)
    const blog = await res.json()
  
    return {
      props: {
        blog: blog
      }
    }
}

export const  getStaticPaths = async () => {
    const res = await fetch(`${server}/blogs`)
    const blogs = await res.json()

    const ids = blogs.map(blog => blog.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
  
    return {
      paths,
      fallback: false
    }
}

export default blog
