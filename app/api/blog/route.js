import {connectToDB} from "../../../utils/db";
import  {signJwtToken, verifyJwtToken}  from "../../../utils/jwt"
import Blog from '../../../models/blog'

export async function GET(req) {
    await connectToDB()

    try {
        const blogs = await Blog.find({}).limit(16).populate("authorId")
        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST (req){
    await connectToDB();

    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token);

    if(!accessToken || !decodedToken){
        return new Response(JSON.stringify({error: "unauthorized"}),{status: 403})
    }

    try {
        const body = await req.json()
        const newBlog = await Blog.create(body);
        return new Response(JSON.stringify(newBlog), {status: 200});

    } catch (error) {
        return new Response(JSON.stringify(), {status: 500});
    }
}