
import BlogCard from '../components/blogCard/BlogCard';
import classes from './page.module.css';
import fetchBlogs from '../components/FetchBlogs'


export default async function Home() {
  const blogs = await fetchBlogs();

  return (
   <div className={classes.container}>
    {/* {blogs?.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>} */}
     <div className={classes.wrapper}>
      {blogs?.length > 0 
       ? blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}/>
      )) : <h3 className={classes.noBlogs}>No blogs are currently in the app</h3>}
     </div>
   </div>
  )
}
