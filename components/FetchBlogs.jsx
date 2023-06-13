const  fetchBlogs=  async()=>{
    const res = await fetch('http:localhost:3000/api/blog', {cache: 'no-store'})
  
    return res.json()
  }
  
  export default fetchBlogs;