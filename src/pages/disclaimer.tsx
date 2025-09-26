import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

/**
 * Header Component
 * Displays the disclaimer notice and last updated date
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--12 margin-vert--md">
          <h1 className="hero__title">Disclaimer</h1>
          <p className="hero__subtitle margin-vert--md">
            The information on this Service is for general purposes only. Volkov
            Labs LLC assumes no responsibility for errors or omissions in the
            content.
          </p>
          <p className="hero__subtitle">
            <em>Last Updated: March 18, 2025</em>
          </p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Contains the disclaimer sections and contact information
 */
const Main = () => (
  <main>
    <div id="Disclaimer" className="container margin-vert--md">
      <section>
        <h2>Interpretation and Definitions</h2>

        <h3>Interpretation</h3>
        <p>
          Capitalized terms have specific meanings as defined below. These
          definitions apply whether used in singular or plural form.
        </p>

        <h3>Definitions</h3>
        <p>For the purposes of this Disclaimer:</p>
        <ul>
          <li>
            <strong>Company</strong> (also "We," "Us," or "Our") refers to
            Volkov Labs LLC, located at 7901 4th St N., Ste 300, St. Petersburg,
            FL 33702.
          </li>
          <li>
            <strong>Service</strong> means the Website.
          </li>
          <li>
            <strong>You</strong> refers to the individual, company, or legal
            entity accessing or using the Service.
          </li>
          <li>
            <strong>Website</strong> refers to Volkov Labs, accessible at{" "}
            <a
              href="https://volkovlabs.io"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://volkovlabs.io
            </a>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          The Service provides information for general use only. We do not
          guarantee its accuracy or completeness and are not responsible for any
          errors or omissions.
        </p>
        <p>
          The Company is not liable for any damages—special, direct, indirect,
          consequential, or incidental—arising from the use of the Service or
          its content, whether in contract, negligence, or other tort. We may
          update, remove, or alter content at any time without notice.
        </p>
        <p>
          The Service is not guaranteed to be free of viruses or harmful
          components.
        </p>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          The Service may link to external websites not controlled or maintained
          by us. We do not endorse or guarantee the accuracy, relevance, or
          timeliness of information on these sites.
        </p>
      </section>

      <section>
        <h2>Errors and Omissions</h2>
        <p>
          Content on the Service offers general guidance only. Despite our
          efforts to keep it accurate and current, errors may occur. Laws,
          rules, and regulations evolve, potentially leading to delays or
          inaccuracies.
        </p>
        <p>
          We are not liable for errors, omissions, or outcomes from using this
          information.
        </p>
      </section>

      <section>
        <h2>Fair Use</h2>
        <p>
          We may use copyrighted material for criticism, comment, news
          reporting, teaching, scholarship, or research, without specific
          authorization from the owner. We believe this qualifies as "fair use"
          under Section 107 of U.S. Copyright Law.
        </p>
        <p>
          For uses beyond fair use, you must obtain permission from the
          copyright owner.
        </p>
      </section>

      <section>
        <h2>Views Expressed</h2>
        <p>
          Opinions on the Service are those of the authors and do not
          necessarily reflect our official stance or that of any other entity.
        </p>
        <p>
          User comments are their sole responsibility. We are not liable for
          them and may remove any comment at our discretion.
        </p>
      </section>

      <section>
        <h2>No Professional Advice</h2>
        <p>
          The Service does not provide legal, accounting, tax, or other
          professional advice. Consult qualified professionals for such needs.
        </p>
        <p>
          We are not liable for damages arising from your use or inability to
          use the Service.
        </p>
      </section>

      <section>
        <h2>Use at Your Own Risk</h2>
        <p>
          All content is provided "as is," without guarantees of accuracy,
          completeness, or results. No warranties—express or implied—are
          offered, including for performance or fitness for a purpose.
        </p>
        <p>
          We are not liable for decisions or actions based on this information,
          even if advised of potential damages.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions about this Disclaimer? Reach out via our{" "}
          <a href="https://support.volkovlabs.io">Support Portal</a>.
        </p>
      </section>
    </div>
    <div className={clsx("container margin-vert--xl")} />
  </main>
);

/**
 * Home Component
 * Renders the full disclaimer page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Disclaimer" description={siteConfig.tagline}>
      <Head>
        <meta property="og:image" content="/img/suite.png" />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
