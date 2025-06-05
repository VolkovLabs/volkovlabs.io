import clsx from "clsx";
import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

/**
 * Header Component
 * Displays the privacy policy intro and last updated date
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--md">
      <div className="row">
        <div className="col col--12 margin-vert--md">
          <h1 className="hero__title">Privacy Policy</h1>
          <p className="hero__subtitle margin-vert--md">
            This policy outlines how Volkov Labs LLC collects, uses, and
            discloses your information when you use our Service. It also
            explains your privacy rights and legal protections.
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
 * Contains the privacy policy sections and contact information
 */
const Main = () => (
  <main>
    <div id="PrivacyPolicy" className="container margin-vert--md">
      <section>
        <p>
          We use your Personal Data to deliver and enhance our Service. By using
          the Service, you consent to the collection and use of your information
          as described in this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          Capitalized terms have specific meanings defined below, applicable in
          both singular and plural forms.
        </p>

        <h3>Definitions</h3>
        <p>For this Privacy Policy:</p>
        <ul>
          <li>
            <strong>Account:</strong> A unique profile created for you to access
            our Service or its features.
          </li>
          <li>
            <strong>Affiliate:</strong> An entity controlling, controlled by, or
            under common control with a party, where "control" means owning 50%
            or more of voting shares or securities.
          </li>
          <li>
            <strong>Company:</strong> (also "We," "Us," or "Our") Volkov Labs
            LLC, 7901 4th St N., Ste 300, St. Petersburg, FL 33702.
          </li>
          <li>
            <strong>Cookies:</strong> Small files placed on your device by a
            website, storing browsing history and other details.
          </li>
          <li>
            <strong>Country:</strong> Florida, United States.
          </li>
          <li>
            <strong>Device:</strong> Any tool (e.g., computer, cellphone,
            tablet) used to access the Service.
          </li>
          <li>
            <strong>Personal Data:</strong> Information relating to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> The Website.
          </li>
          <li>
            <strong>Service Provider:</strong> A third party processing data on
            our behalf to facilitate or analyze the Service.
          </li>
          <li>
            <strong>Usage Data:</strong> Automatically collected data from
            Service use (e.g., page visit duration).
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
        <h2>Collecting and Using Your Personal Data</h2>

        <h3>Types of Data Collected</h3>
        <h4>Personal Data</h4>
        <p>
          We may collect personally identifiable information to contact or
          identify you, including but not limited to:
        </p>
        <ul>
          <li>Email address</li>
          <li>First and last name</li>
          <li>Address (State, Province, ZIP/Postal code, City)</li>
          <li>Usage Data</li>
        </ul>

        <h4>Usage Data</h4>
        <p>
          Usage Data is gathered automatically and may include your Device’s IP
          address, browser type, pages visited, visit times, and diagnostic
          data. For mobile access, this may extend to device type, unique ID,
          and operating system.
        </p>

        <h4>Tracking Technologies and Cookies</h4>
        <p>
          We use Cookies, web beacons, and similar tools to track activity and
          improve our Service:
        </p>
        <ul>
          <li>
            <strong>Cookies:</strong> Small files on your Device. You can refuse
            them, but this may limit Service functionality.
          </li>
          <li>
            <strong>Web Beacons:</strong> Electronic files in our Service or
            emails to track usage and statistics.
          </li>
        </ul>
        <p>We use Session (temporary) and Persistent (stored) Cookies for:</p>
        <ul>
          <li>
            <strong>Necessary Cookies:</strong> Session-based, essential for
            Service features and security.
          </li>
          <li>
            <strong>Notice Acceptance Cookies:</strong> Persistent, to note your
            cookie consent.
          </li>
          <li>
            <strong>Functionality Cookies:</strong> Persistent, to personalize
            your experience (e.g., login details).
          </li>
        </ul>
        <p>See our Cookies Policy for details and options.</p>
      </section>

      <section>
        <h3>Use of Your Personal Data</h3>
        <p>We may use your Personal Data to:</p>
        <ul>
          <li>Provide and maintain the Service, monitoring its usage.</li>
          <li>Manage your Account and access to Service features.</li>
          <li>Fulfill contracts for purchased products or services.</li>
          <li>
            Contact you via email, SMS, or push notifications about updates or
            services.
          </li>
          <li>Offer news and promotions (opt-out available).</li>
          <li>Handle your requests to us.</li>
          <li>Support business transfers (e.g., mergers).</li>
          <li>Analyze data, trends, and improve our Service and marketing.</li>
        </ul>

        <p>We may share your Personal Data:</p>
        <ul>
          <li>With Service Providers for analysis and communication.</li>
          <li>During business transfers (e.g., acquisitions).</li>
          <li>With Affiliates, bound by this policy.</li>
          <li>With business partners for offers.</li>
          <li>Publicly, if you share in public areas.</li>
          <li>With your consent for other purposes.</li>
        </ul>
      </section>

      <section>
        <h3>Retention of Your Personal Data</h3>
        <p>
          We retain Personal Data only as long as needed for this policy’s
          purposes, legal obligations, dispute resolution, or policy
          enforcement. Usage Data is kept shorter-term for analysis, unless
          required for security or legal reasons.
        </p>
      </section>

      <section>
        <h3>Transfer of Your Personal Data</h3>
        <p>
          Your data may be processed and stored outside your jurisdiction, where
          privacy laws differ. Your consent to this policy agrees to such
          transfers. We ensure secure handling per this policy.
        </p>
      </section>

      <section>
        <h3>Delete Your Personal Data</h3>
        <p>
          You may delete your data via your Account settings or by contacting
          us. We may retain some data for legal or lawful purposes.
        </p>
      </section>

      <section>
        <h3>Disclosure of Your Personal Data</h3>
        <h4>Business Transactions</h4>
        <p>
          In mergers or sales, your data may be transferred with prior notice.
        </p>
        <h4>Law Enforcement</h4>
        <p>We may disclose data if legally required by authorities.</p>
        <h4>Other Legal Requirements</h4>
        <p>We may disclose data to:</p>
        <ul>
          <li>Comply with legal obligations</li>
          <li>Protect our rights or property</li>
          <li>Prevent or investigate Service wrongdoing</li>
          <li>Safeguard users or the public</li>
          <li>Address legal liability</li>
        </ul>
      </section>

      <section>
        <h3>Security of Your Personal Data</h3>
        <p>
          We prioritize your data’s security but cannot guarantee absolute
          protection due to internet limitations. We use commercially reasonable
          safeguards.
        </p>
      </section>

      <section>
        <h2>Children’s Privacy</h2>
        <p>
          Our Service is not for those under 13. We do not knowingly collect
          their data and will remove it if discovered, requiring parental
          consent where applicable.
        </p>
      </section>

      <section>
        <h2>Links to Other Websites</h2>
        <p>
          We link to third-party sites we don’t control. Review their privacy
          policies, as we’re not responsible for their practices.
        </p>
      </section>

      <section>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this policy, notifying you via email or a Service notice
          before changes take effect. Review periodically—updates apply once
          posted.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions about this Privacy Policy? Reach out via our{" "}
          <a href="https://support.volkovlabs.io">Support Portal</a>.
        </p>
      </section>
    </div>
    <div className={clsx("container margin-vert--xl")} />
  </main>
);

/**
 * Home Component
 * Renders the full privacy policy page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Privacy Policy | Volkov Labs"
      description="Learn how Volkov Labs collects, uses, and protects your personal data."
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
