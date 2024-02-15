import { MDXRemote } from 'next-mdx-remote';
import { BlogDetailPageProps } from '@/pages/blog/[slug]';
import { TAG } from '@/contants/tag';

export default function BlogDetailTemplate({ source }: BlogDetailPageProps) {
    return (
        <article className="markdown-body">
            <div>
                <MDXRemote {...source} scope={TAG} />
            </div>
        </article>
    );
}
