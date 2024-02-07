import { getAllPostsMeta, getPostDetail } from '@/utils/post';
import { GetServerSideProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface BlogDetailPageProps {
    source: MDXRemoteSerializeResult<
        Record<string, unknown>,
        Record<string, unknown>
    >;
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
    return <MDXRemote {...source} />;
}
