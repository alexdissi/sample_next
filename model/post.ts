"use server"
import prisma from "@/prisma/prisma";
import {Post} from "@/lib/interface";

export async function getAllPosts() {
    return prisma.post.findMany();
}

export async function createPost(data: Post) {
    await prisma.post.create({
        data: {
            title : data.title,
            content: data.content,
            author: data.author,
            published: data.published
        }
    })
}

export async function deletePost(id: number) {
    await prisma.post.delete({
        where: {
            id: id
        }
    })
}

export async function getPost(id: number) {
    return prisma.post.findUnique({
        where: {
            id: id
        }
    })
}