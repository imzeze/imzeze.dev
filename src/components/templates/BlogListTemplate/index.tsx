import { BlogItem } from '@/components/organisms';
import styles from './index.module.scss';
import { BlogPageProps } from '@/pages/blog';
import { TAG } from '@/contants/tag';
import { useState } from 'react';

export default function BlogListTemplate({ posts }: BlogPageProps) {
    const [filterList, setFilterList] = useState(posts);

    const onClickTag = (key: string) => {
        setFilterList(posts.filter((post) => post.tag.includes(key)));
    };

    return (
        <div>
            <h1>블로그</h1>
            <div className={styles.wrapper}>
                <div className={styles.itemWrapper}>
                    {filterList.map((post) => (
                        <BlogItem key={post.fileName} post={post} />
                    ))}
                </div>
                <div className={styles.asideWrapper}>
                    <aside>
                        <ul>
                            {Object.keys(TAG).map((key) => (
                                <li key={key} onClick={() => onClickTag(key)}>
                                    {TAG[key]}
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    );
}
