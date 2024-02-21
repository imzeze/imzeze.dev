import { BlogListTemplate } from '@/components/templates';
import { postModel } from '@/models/postModel';
import { getAllPostsMeta } from '@/utils/post';

export interface BlogPageProps {
    posts: Array<{ fileName: string } & postModel>;
}

export const getStaticProps = async () => {
    const posts = await getAllPostsMeta();

    return { props: { posts } };
};

export default function Page({ posts }: BlogPageProps) {
    return <BlogListTemplate posts={posts} />;
}
