import blogStyles from '../styles/Blog.module.css'
import Link from 'next/Link'
import Profile from './Profile'
import { server } from '../config'

export const BlogItem = ({ blog }) => {
    return (
        <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
            <a className={blogStyles.card} >
            <h3>{blog.title} &rarr;</h3>
                <p>
                    {blog.previewText}
                </p>

                <div>
                    <Profile author={blog.author} />
                </div>
            </a>
        </Link>
    )
}

export default BlogItem
