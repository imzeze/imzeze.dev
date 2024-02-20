import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { postModel } from '@/models/postModel';

const postDirectory = path.join(process.cwd(), 'post');

// 블로그 전체 글 목록 조회
export const getAllPostsMeta = async () => {
    const files = fs.readdirSync(postDirectory);
    let posts = [];

    for (const file of files) {
        const { meta } = await getPostDetail(file);
        posts.push(meta);
    }

    return posts.sort((a, b) => Number(a.id) - Number(b.id));
};

// 블로그 상세 조회
export const getPostDetail = async (file: string) => {
    const fileName = file.replace(/\.mdx$/, '');
    const filePath = path.join(postDirectory, `${fileName}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return {
        meta: { ...data, fileName } as postModel & { fileName: string },
        content,
    };
};
