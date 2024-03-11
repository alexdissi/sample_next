"use client"
import {createPost} from "@/model/post";
import {FormEvent} from "react";
import {useRouter} from "next/navigation";

export default function Form() {
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
const formData = new FormData(e.currentTarget)
        const data = {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            author: formData.get("author") as string,
            published: true
        }
      await createPost(data)
        router.refresh()
    }
    return (
            <form onSubmit={handleSubmit} className="text-black">
                <label>
                    Title:
                    <input type="text" name="title"/>
                </label>
                <label>
                    Content:
                    <textarea name="content"/>
                </label>
                <select name="author">
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                </select>
                <button type="submit" className="bg-red-600">Create</button>
            </form>
)
}