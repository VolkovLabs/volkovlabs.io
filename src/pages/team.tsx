import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import Image from "@theme/Image";
import styles from "../css/index.module.css";

/**
 * Header Component
 * Introduces Volkov Labs’ open-source mission and achievements
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col margin-vert--md">
          <h1 className="hero__title margin-bottom--md">About Volkov Labs</h1>
          <p className="hero__subtitle margin-vert--md">
            Open source is our core. At Volkov Labs, we’re driven by the freedom
            to share and collaborate without limits.
          </p>
          <p className="hero__subtitle">
            Over the past three years, we’ve led a major open-source effort,
            crafting 11 Grafana plugins with over{" "}
            <strong>35 million downloads</strong>. Our dedication shines through
            in top-tier documentation, a vibrant YouTube channel, and robust
            community support.
          </p>
          <p className="hero__subtitle">
            Our name is now a staple in the Grafana community—a recognition
            we’re proud of. This journey reflects our team’s unwavering
            commitment to open-source excellence.
          </p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Showcases the team and Business Gazette link
 */
const Main = () => (
  <main>
    <section id="Team" className="container margin-vert--xl">
      <h2 className="hero__title text--center margin-vert--lg">
        Meet Our Team
      </h2>
      <div className="row margin-vert--lg text--center">
        <div className="col col--4">
          <a href="/blog/authors/mikhail/">
            <Image
              src="/img/team/mikhail.png"
              alt="Mikhail, Founder and Grafana Champion"
              zoom={false}
            />
            <h3>Mikhail</h3>
            <p>Founder & Grafana Champion</p>
          </a>
        </div>
        <div className="col col--4">
          <a href="/blog/authors/alex/">
            <Image
              src="/img/team/alex.png"
              alt="Alex, Director of Engineering"
              zoom={false}
            />
            <h3>Alex</h3>
            <p>Director of Engineering</p>
          </a>
        </div>
        <div className="col col--4">
          <a href="/blog/authors/daria/">
            <Image
              src="/img/team/daria.png"
              alt="Daria, Co-Founder and Grafana Champion"
              zoom={false}
            />
            <h3>Daria</h3>
            <p>Co-Founder & Grafana Champion</p>
          </a>
        </div>
      </div>
      <div className="row margin-vert--lg text--center">
        <div className="col col--4">
          <a href="/blog/authors/vitali/">
            <Image
              src="/img/team/vitali.png"
              alt="Vitali, Community Engineer"
              zoom={false}
            />
            <h3>Vitali</h3>
            <p>Community Engineer</p>
          </a>
        </div>
        <div className="col col--4">
          <Image
            src="/img/team/mikhail-ulasevich.png"
            alt="Mikhail, Senior Engineer"
            zoom={false}
          />
          <h3>Mikhail</h3>
          <p>Senior Engineer</p>
        </div>
      </div>
    </section>
  </main>
);

/**
 * Home Component
 * Renders the team page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Our Team | Volkov Labs"
      description="Meet the Volkov Labs team behind 35M+ Grafana plugin downloads."
    >
      <Head>
        <meta property="og:image" content="/img/honeycomb.png" />
        <script
          id="ze-snippet"
          src="https://static.zdassets.com/ekr/snippet.js?key=3103acc1-cdc9-4af8-a87c-b9a5c1eaa54d"
        />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
