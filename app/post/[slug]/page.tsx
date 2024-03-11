import DeleteBtn from "@/app/post/create/deletebtn";
import {notFound} from "next/navigation";
import {getPost} from "@/model/post";

export default async function Post({params}:{ params: { slug: number } } ) {

    const postId = Number(params.slug)
    if (isNaN(postId)) {
     return notFound()
    }

    const post = await getPost(postId)

    return (
        <div>
            <h1>Post {postId}</h1>
            <h2 className={"text-red-600"}>{post?.title}</h2>
            <h2 className={"text-red-600"}>{post?.content}</h2>
            <h2 className={"text-red-600"}>{post?.author}</h2>
            <DeleteBtn id={postId} />
        </div>
    )
}