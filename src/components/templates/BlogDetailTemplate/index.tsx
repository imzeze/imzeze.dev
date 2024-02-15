import { MDXRemote } from 'next-mdx-remote';
import { BlogDetailPageProps } from '@/pages/blog/[slug]';

export default function BlogDetailTemplate({ source }: BlogDetailPageProps) {
    return (
        <article className="markdown-body">
            <div>
                <MDXRemote {...source} />
            </div>
        </article>
    );
}
