import { AsideInfo, BlogItem } from '@/components/organisms';
import styles from './index.module.scss';
import { BlogPageProps } from '@/pages/blog';

export default function BlogListTemplate({ posts }: BlogPageProps) {
    return (
        <div>
            <h1>블로그</h1>
            <div className={styles.wrapper}>
                <div className={styles.itemWrapper}>
                    {posts.map((post) => (
                        <BlogItem key={post.fileName} post={post} />
                    ))}
                </div>
                <div className={styles.asideWrapper}>
                    <AsideInfo />
                </div>
            </div>
        </div>
    );
}
