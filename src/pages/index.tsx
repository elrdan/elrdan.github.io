import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>

                {/* CTA 2개: 문서 시작하기 + 블로그 */}
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        시작하기
                    </Link>
                    <Link className={clsx('button button--outline button--lg', styles.ghost)} to="/blog">
                        최신 글 보기
                    </Link>
                </div>
            </div>
        </header>
    );
}

// QuickLinks 카드 섹션 (간단 컴포넌트)
function QuickLinks() {
    return (
        <section className={styles.quicklinks}>
            <div className="container">
                <h2 className={styles.qTitle}>바로가기</h2>
                <div className={styles.cards}>
                    <QCard title="문서 시작하기" to="/docs/intro" desc="핵심 개념부터 3분 컷" />
                    <QCard title="가이드 모아보기" to="/docs/guide/overview" desc="백엔드/프론트/DevOps" />
                    <QCard title="블로그" to="/blog" desc="업데이트와 튜토리얼" />
                    <QCard title="GitHub" to="https://github.com/elrdan/elrdan.github.io" desc="이슈/PR 환영" external />
                </div>
            </div>
        </section>
    );
}

function QCard({
                   title,
                   to,
                   desc,
                   external,
               }: {
    title: string;
    to: string;
    desc: string;
    external?: boolean;
}) {
    const props = external ? {target: '_blank', rel: 'noreferrer'} : {};
    return (
        <Link className={styles.card} to={to} {...props}>
            <span className={styles.cardTitle}>{title}</span>
            <span className={styles.cardDesc}>{desc}</span>
            <span className={styles.cardArrow}>→</span>
        </Link>
    );
}

export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="빠르게 찾고, 바로 적용하세요">
            <HomepageHeader />
            <main>
                {/* 기존 특장점 컴포넌트 유지 */}
                <HomepageFeatures />

                {/* 퀵 링크 섹션 추가 */}
                <QuickLinks />
            </main>
        </Layout>
    );
}
