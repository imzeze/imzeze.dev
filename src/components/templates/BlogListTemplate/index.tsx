import { AsideInfo, BlogItem } from '@/components/organisms';
import styles from './index.module.scss';

export default function BlogListTemplate() {
    return (
        <div>
            <h1>블로그</h1>
            <div className={styles.wrapper}>
                <div className={styles.itemWrapper}>
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                    <BlogItem title="블로그 타이틀" />
                </div>
                <div className={styles.asideWrapper}>
                    <AsideInfo />
                </div>
            </div>
        </div>
    );
}
