import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        <div className={styles.buttons}>
        <Button variant="contained" startIcon={<DownloadIcon />} size="large" href="/docs/versions/latest">立即下载</Button>
        
          <div className={styles.buttonSpacing}>
          <Button variant="contained" endIcon={<ArrowForwardIcon />} size="large" href="/docs/intro">快速开始</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="音流是一款跨平台的 NAS 音乐播放器。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
