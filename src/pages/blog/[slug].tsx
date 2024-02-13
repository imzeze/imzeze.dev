import { BlogDetailTemplate } from '@/components/templates';
import { getAllPostsMeta, getPostDetail } from '@/utils/post';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';

export interface BlogDetailPageProps {
    source: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPostsMeta();
    const fileNams = posts.map((post) => {
        return { params: { slug: post.fileName } };
    });

    return {
        paths: fileNams,
        fallback: true,
    };
};

export const getStaticProps: GetServerSideProps<BlogDetailPageProps> = async (
    context,
) => {
    const fileName = context.params?.slug;
    const { content } = await getPostDetail(fileName as string);
    const source = await serialize(content);

    return { props: { source } };
};

export default function Page({ source }: BlogDetailPageProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return <BlogDetailTemplate source={source} />;
}
