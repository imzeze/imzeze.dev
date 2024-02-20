import Image from 'next/image';
import styles from './index.module.scss';

export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div />
                <div className={styles.leftBox}>
                    <div className={styles.selfieWrapper}>
                        <div>
                            <Image
                                src="/assets/imzeze.png"
                                alt="Picture of the author"
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.intro}>
                    <h2>안녕하세요!</h2>
                    <h2>프론트엔드 개발자 김지혜입니다.</h2>
                    <p>
                        <span>
                            목표를 이루기 위해 팀원들과 고민하는 것을 즐기며,
                            맡은 업무에 대해 꼼꼼하고 책임감 있는 자세로 임하고
                            있습니다.{' '}
                        </span>
                        <span>
                            데이터베이스 관련 전공을 이수하였으며 실무에서
                            React와 React Native로 서비스를 개발/운영하였습니다.
                            개인적으로는 React Native, Next JS를 이용해
                            토이프로젝트를 출시 및 배포한 경험이 있습니다.
                        </span>
                    </p>
                </div>
            </div>
            <div className={styles.background} />
            <div className={`${styles.background} ${styles.background2}`}></div>
            <div className={`${styles.background} ${styles.background3}`}></div>
        </div>
    );
}
