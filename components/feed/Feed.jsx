
import BlogCard from '../blogCard/BlogCard';
import classes from '../../app/page.module.css';

const  fetchBlogs=  async()=>{
    const res = await fetch('http:localhost:3000/api/blog', {cache: 'no-store'})
  
    return res.json()
  }

export default async function Feed() {
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
  );
}
