"use client"
import {deletePost} from "@/model/post";
import {useRouter} from "next/navigation";

export default function DeleteBtn(post: { id: number }) {
    const router = useRouter()
    const handleDelete = async () => {
        await deletePost(post.id)
        router.refresh()
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}