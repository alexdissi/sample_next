import {Post} from "@/lib/interface";
import Form from "@/app/post/create/form";
import DeleteBtn from "@/app/post/create/deletebtn";
import {getAllPosts} from "@/model/post";

export default async function CreatePost() {
    const result = await getAllPosts()

    return (
        <>
            <Form/>

            <ul>
                {result.map((post: Post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{post.author}</p>
                        <a href={`post/${post.id}`}>+</a>
                    </div>
                ))}
            </ul>
        </>

    )
}
