import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.scss';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={styles.introContainer}>
          <div className={styles.titleWrapper}>
              <div className={styles.titleContent}>
                  <span>{siteConfig.tagline}</span>
                  <span>최대한 정확한 정보를 공유하고, 소통할 수 있는 사이트로 발전하고 싶습니다.</span>
              </div>

              <div className={styles.titleCharacter}>
                  <img alt="깃 허브 아바타" src="https://github.com/elrdan.png"/>
              </div>
          </div>
      </header>
  );
}

export default function Home() {
    return (
        <Layout>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
