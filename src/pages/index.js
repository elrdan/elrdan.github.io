import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.scss';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={styles.introContainer}>
          <div className={styles.titleWrapper}>
              <div className={styles.titleContent}>
                  <span className={styles.title}>{siteConfig.tagline}</span>
                  <span className={styles.subTitle}>정보 공유 및 소통할 수 있는 사이트입니다.</span>
              </div>
          </div>
      </header>
  );
}

function Home() {
    return (
        <Layout>
            <HomepageHeader/>
        </Layout>
    );
}

export default Home;