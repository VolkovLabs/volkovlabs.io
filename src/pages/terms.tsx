import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

/**
 * Header Component
 * Introduces the Terms and Conditions and last updated date
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--12 margin-vert--md">
          <h1 className="hero__title">Terms and Conditions</h1>
          <p className="hero__subtitle margin-vert--md">
            Please review these terms carefully before using our Service.
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
 * Contains the Terms and Conditions sections and contact information
 */
const Main = () => (
  <main>
    <div id="Terms" className="container margin-vert--md">
      <section>
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Capitalized terms have specific meanings defined below, applicable in
          both singular and plural forms.
        </p>

        <h3>Definitions</h3>
        <p>For these Terms and Conditions:</p>
        <ul>
          <li>
            <strong>Affiliate:</strong> An entity controlling, controlled by, or
            under common control with a party, where "control" means owning 50%
            or more of voting shares or securities.
          </li>
          <li>
            <strong>Country:</strong> Florida, United States.
          </li>
          <li>
            <strong>Company:</strong> (also "We," "Us," or "Our") Volkov Labs
            LLC, 7901 4th St N., Ste 300, St. Petersburg, FL 33702.
          </li>
          <li>
            <strong>Device:</strong> Any tool (e.g., computer, cellphone,
            tablet) used to access the Service.
          </li>
          <li>
            <strong>Service:</strong> The Website.
          </li>
          <li>
            <strong>Terms and Conditions:</strong> (or "Terms") This agreement
            between you and the Company governing Service use.
          </li>
          <li>
            <strong>Third-party Social Media Service:</strong> Content or
            services from third parties displayed or available via the Service.
          </li>
          <li>
            <strong>Website:</strong> Volkov Labs, accessible at{" "}
            <a
              href="https://volkovlabs.io"
              rel="external nofollow noopener"
              target="_blank"
            >
              https://volkovlabs.io
            </a>
            .
          </li>
          <li>
            <strong>You:</strong> The individual, company, or entity accessing
            or using the Service.
          </li>
        </ul>
      </section>

      <section>
        <h2>Acknowledgment</h2>
        <p>
          These Terms and Conditions govern your use of the Service and form the
          agreement between you and Volkov Labs LLC. They define the rights and
          obligations of all users.
        </p>
        <p>
          Your access and use of the Service require your acceptance and
          compliance with these Terms. They apply to all visitors and users. By
          using the Service, you agree to be bound by them. If you disagree, do
          not access the Service.
        </p>
        <p>
          You must be over 18 to use the Service—we do not permit use by those
          under 18.
        </p>
        <p>
          Your use also depends on accepting our{" "}
          <a href="/privacy/">Privacy Policy</a>, which details how we collect,
          use, and protect your personal information. Review it before using the
          Service.
        </p>
      </section>

      <section>
        <h2>Links to Other Websites</h2>
        <p>
          Our Service may link to third-party websites or services not owned or
          controlled by us. We are not responsible for their content, policies,
          or practices, nor liable for any resulting damage or loss.
        </p>
        <p>
          We recommend reviewing the terms and privacy policies of any
          third-party sites you visit.
        </p>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          We may terminate or suspend your access immediately, without notice or
          liability, for any reason, including if you breach these Terms. Your
          right to use the Service ends upon termination.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          Our liability, and that of our suppliers, is limited to the amount you
          paid through the Service, or $100 USD if you paid nothing, regardless
          of any damages you may incur.
        </p>
        <p>
          To the fullest extent allowed by law, we are not liable for special,
          incidental, indirect, or consequential damages (e.g., loss of profits,
          data, or privacy) related to the Service, third-party
          software/hardware, or these Terms, even if advised of such
          possibilities.
        </p>
        <p>
          Some states may not allow these limitations, so they will apply to the
          maximum extent permitted by local law.
        </p>
      </section>

      <section>
        <h2>"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p>
          The Service is provided "AS IS" and "AS AVAILABLE," with all faults
          and no warranties. We disclaim all implied or statutory warranties
          (e.g., merchantability, fitness for a purpose) to the fullest extent
          allowed by law.
        </p>
        <p>
          We do not guarantee the Service will meet your needs, operate
          uninterrupted, or be error-free, nor that it’s free of viruses or
          harmful components. Some jurisdictions may not allow these exclusions,
          so they’ll apply to the greatest enforceable extent.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms and your use of the Service are governed by Florida, U.S.
          law, excluding its conflict of law rules. Other local, state,
          national, or international laws may also apply.
        </p>
      </section>

      <section>
        <h2>Disputes Resolution</h2>
        <p>
          For any concerns or disputes about the Service, please first attempt
          an informal resolution by contacting us.
        </p>
      </section>

      <section>
        <h2>For European Union (EU) Users</h2>
        <p>
          EU consumers benefit from mandatory provisions of their resident
          country’s law.
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
        <h2>Severability and Waiver</h2>
        <h3>Severability</h3>
        <p>
          If any Term is unenforceable, it will be adjusted to meet its intent
          as legally possible, with remaining Terms unaffected.
        </p>
        <h3>Waiver</h3>
        <p>
          Failing to enforce a right or obligation does not waive it for the
          future, nor does waiving a breach waive subsequent breaches.
        </p>
      </section>

      <section>
        <h2>Translation Interpretation</h2>
        <p>
          If translated, the English version of these Terms prevails in
          disputes.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms and Conditions</h2>
        <p>
          We may update these Terms at our discretion. Material changes will
          include at least 30 days’ notice. Continued use after changes implies
          acceptance; otherwise, stop using the Service.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions about these Terms and Conditions? Reach out via our{" "}
          <a href="https://support.volkovlabs.io">Support Portal</a>.
        </p>
      </section>
    </div>
    <div className={clsx("container margin-vert--xl")} />
  </main>
);

/**
 * Home Component
 * Renders the full Terms and Conditions page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Terms and Conditions | Volkov Labs"
      description="Review the terms governing your use of Volkov Labs’ Service."
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
