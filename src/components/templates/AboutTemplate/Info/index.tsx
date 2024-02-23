import styles from './index.module.scss';

export default function Info() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.career}>
                <h1>👩‍💻 경력</h1>
                <div>
                    <div>2021. 07. ~ 2023. 12.</div>
                    <div>
                        <strong>(주)플랫타이엑스</strong>
                        <p>프론트엔드 개발 (주임)</p>
                    </div>
                </div>
                <div>
                    <div>2021. 01. ~ 2021. 06.</div>
                    <div>
                        <strong>비버웍스(구 스파이더아이앤씨)</strong>
                        <p>백엔드 개발</p>
                    </div>
                </div>
            </div>
            <div className={styles.stack}>
                <h1>💡 기술 스택</h1>
                <div className={styles.head}>
                    <div>분야</div>
                    <div>기술</div>
                </div>
                <div>
                    <div>프론트엔드</div>
                    <div>
                        <span>React</span>
                        <span>NextJS</span>
                        <span>React-native</span>
                        <span>Expo</span>
                        <span>Typescript</span>
                        <span>Recoil</span>
                        <span>React-query</span>
                        <span>styled-components</span>
                        <span>emotion</span>
                    </div>
                </div>
                <div>
                    <div>백엔드</div>
                    <div>
                        <span>express</span>
                        <span>GraphQL</span>
                        <span>Sequelize</span>
                        <span>nodeJS</span>
                    </div>
                </div>
                <div>
                    <div>클라우드</div>
                    <div>
                        <span>AWS (RDS, EC2, AWS 등)</span>
                        <span>Firebase</span>
                        <span>Vercel</span>
                        <span>App center</span>
                    </div>
                </div>
                <div>
                    <div>협업도구</div>
                    <div>
                        <span>Github</span>
                        <span>Figma</span>
                        <span>XD</span>
                        <span>slack</span>
                    </div>
                </div>
            </div>
            <div className={styles.career}>
                <h1>📚 학력</h1>
                <div>
                    <div>2014. ~ 2019.</div>
                    <div>
                        <strong>경기대학교 경영정보학과 전공(학사)</strong>
                        <p>
                            DBMS과 JAVA, JS 등 프로그래밍 언어와 관련된 전공을
                            이수하였습니다.
                        </p>
                        <p>학점 3.81 / 4.5</p>
                    </div>
                </div>
            </div>
            <div className={styles.career}>
                <h1>🖊️ 자격증</h1>
                <div>
                    <div>2018</div>
                    <div>
                        <strong>정보처리기사</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}
