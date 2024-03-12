import { ProjectListItem } from '@/components/organisms';
import styles from './ProjectListTemplate.module.scss';

export default function ProjectListTemplate() {
    return (
        <div>
            <h1>프로젝트</h1>
            <div className={styles.wrapper}>
                <ProjectListItem title="플랫타익스체인지" />
                <ProjectListItem title="플랫타익스체인지 회사소개 페이지" />
                <ProjectListItem title="더프라이빗" />
                <ProjectListItem title="바캉스팟" />
                <ProjectListItem title="MBTI survey 2022" />
                <ProjectListItem title="imzeze.dev" />
            </div>
        </div>
    );
}
