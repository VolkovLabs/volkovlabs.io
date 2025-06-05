import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

/**
 * Header Component
 * Introduces the EULA and last updated date
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--12 margin-vert--md">
          <h1 className="hero__title">End-User License Agreement (EULA)</h1>
          <p className="hero__subtitle margin-vert--md">
            Please review this agreement carefully before downloading or using
            Business Intelligence for Grafana.
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
 * Contains the EULA sections and contact information
 */
const Main = () => (
  <main>
    <div id="EULA" className="container margin-vert--md">
      <section>
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Capitalized terms have specific meanings defined below, applicable in
          both singular and plural forms.
        </p>

        <h3>Definitions</h3>
        <p>For this End-User License Agreement:</p>
        <ul>
          <li>
            <strong>Agreement:</strong> This End-User License Agreement between
            you and the Company governing the Application’s use.
          </li>
          <li>
            <strong>Application:</strong> The software “Business Intelligence
            for Grafana,” provided by the Company and downloaded by you to a
            Device.
          </li>
          <li>
            <strong>Company:</strong> (also "We," "Us," or "Our") Volkov Labs
            LLC, 7901 4th St N., Ste 300, St. Petersburg, FL 33702.
          </li>
          <li>
            <strong>Content:</strong> Text, images, or other information you
            post, upload, link to, or make available via the Application.
          </li>
          <li>
            <strong>Country:</strong> Florida, United States.
          </li>
          <li>
            <strong>Device:</strong> Any tool (e.g., computer, cellphone,
            tablet) used to access the Application.
          </li>
          <li>
            <strong>Third-Party Services:</strong> Third-party content or
            services (e.g., data, applications) displayed or available through
            the Application.
          </li>
          <li>
            <strong>You:</strong> The individual, company, or entity accessing
            or using the Application.
          </li>
        </ul>
      </section>

      <section>
        <h2>Acknowledgment</h2>
        <p>
          Downloading or using the Application binds you to this Agreement’s
          terms. If you do not agree, do not download or use it.
        </p>
        <p>
          This Agreement is a legal contract between you and Volkov Labs LLC,
          governing your use of the Application, which is licensed—not sold—to
          you under these terms.
        </p>
      </section>

      <section>
        <h2>License</h2>
        <h3>Scope of License</h3>
        <p>
          We grant you a revocable, non-exclusive, non-transferable, limited
          license to download, install, and use the Application, strictly per
          this Agreement’s terms.
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          The Application may include or link to third-party content or
          services. We are not responsible for their accuracy, legality, or
          quality, and bear no liability for them.
        </p>
        <p>
          You use Third-Party Services at your own risk, subject to their terms,
          which you must comply with.
        </p>
      </section>

      <section>
        <h2>Term and Termination</h2>
        <p>
          This Agreement remains effective until terminated by you or us. We may
          suspend or terminate it at our discretion, with or without notice.
        </p>
        <p>
          It terminates automatically if you breach any term. You may terminate
          by deleting the Application and all copies from your Device. Upon
          termination, you must cease use and remove all copies.
        </p>
        <p>
          Termination does not limit our legal rights or remedies for your
          breaches during the term.
        </p>
      </section>

      <section>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold Volkov Labs LLC, its affiliates,
          officers, employees, agents, and licensors harmless from claims,
          including legal fees, arising from: (a) your use of the Application;
          (b) your violation of this Agreement or laws; or (c) your infringement
          of third-party rights.
        </p>
      </section>

      <section>
        <h2>No Warranties</h2>
        <p>
          The Application is provided "AS IS" and "AS AVAILABLE," with all
          faults and no warranties. We disclaim all implied or statutory
          warranties (e.g., merchantability, fitness for purpose) to the fullest
          extent allowed by law.
        </p>
        <p>
          We do not guarantee the Application will meet your needs, operate
          uninterrupted, or be error-free, nor that it’s free of harmful
          components. Where disclaimers can’t apply, we’re solely responsible
          for any mandatory warranties.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          Our liability, and that of our suppliers, is limited to the amount you
          paid for the Application regardless of damages incurred.
        </p>
        <p>
          To the fullest extent allowed by law, we are not liable for special,
          incidental, or consequential damages (e.g., loss of profits, data, or
          privacy) related to the Application, even if advised of such
          possibilities.
        </p>
        <p>
          Some jurisdictions may not allow these limitations, so they apply to
          the maximum extent permitted.
        </p>
      </section>

      <section>
        <h2>Severability and Waiver</h2>
        <h3>Severability</h3>
        <p>
          If any provision is unenforceable, it will be adjusted to meet its
          intent as legally possible, with remaining provisions unaffected.
        </p>
        <h3>Waiver</h3>
        <p>
          Failing to enforce a right or obligation does not waive it for the
          future, nor does waiving a breach waive subsequent breaches.
        </p>
      </section>

      <section>
        <h2>Product Claims</h2>
        <p>
          We make no warranties about the Application beyond what’s stated here.
        </p>
      </section>

      <section>
        <h2>United States Legal Compliance</h2>
        <p>
          You confirm you are not in a U.S.-embargoed country or on any U.S.
          prohibited/restricted parties list.
        </p>
      </section>

      <section>
        <h2>Changes to This Agreement</h2>
        <p>
          We may modify this Agreement at our discretion, providing at least 30
          days’ notice for material changes. Continued use after changes implies
          acceptance; otherwise, stop using the Application.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          Florida, U.S. law governs this Agreement and your use of the
          Application, excluding conflict of law rules. Other local, state,
          national, or international laws may also apply.
        </p>
      </section>

      <section>
        <h2>Entire Agreement</h2>
        <p>
          This Agreement is the full understanding between you and Volkov Labs
          LLC regarding the Application, superseding prior agreements.
          Additional terms may apply to other Company services, provided at the
          time of use.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions about this Agreement? Reach out via our{" "}
          <a href="https://support.volkovlabs.io">Support Portal</a>.
        </p>
      </section>
    </div>
    <div className={clsx("container margin-vert--xl")} />
  </main>
);

/**
 * Home Component
 * Renders the full EULA page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="EULA | Volkov Labs"
      description="Review the End-User License Agreement for Business Intelligence for Grafana by Volkov Labs."
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
