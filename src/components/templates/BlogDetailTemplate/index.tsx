import { MDXRemote } from 'next-mdx-remote';
import styles from './index.module.scss';
import { BlogDetailPageProps } from '@/pages/blog/[slug]';

export default function BlogDetailTemplate({ source }: BlogDetailPageProps) {
    return (
        <article>
            <div className={styles.blog}>
                <MDXRemote {...source} />
            </div>
        </article>
    );
}
