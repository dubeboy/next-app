import Link from 'next/link'

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
    const res = await fetch(`http://localhost:1337/blogs/${context.params.id}`)
    const blog = await res.json()
  
    return {
      props: {
        blog: blog
      }
    }
}

export const  getStaticPaths = async () => {
    const res = await fetch(`http://localhost:1337/blogs`)
    const blogs = await res.json()

    const ids = blogs.map(blog => blog.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
  
    return {
      paths,
      fallback: false
    }
}

export default blog
