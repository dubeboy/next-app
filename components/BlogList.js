import blogStyles from '../styles/Blog.module.css'
import BlogItem from './BlogItem'

const BlogList = ({ blogs }) => {
    return (
        <div className={blogStyles.grid}>
              {blogs.map((blog) => (
                <BlogItem blog={blog}/>
            ))}
        </div>
    )
}

export default BlogList
