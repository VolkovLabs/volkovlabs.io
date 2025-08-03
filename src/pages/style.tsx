import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

/**
 * Header Component
 * Displays the style guide intro and last updated date
 */
const Header = () => (
  <header className="hero hero--primary">
    <div className="container margin-vert--lg">
      <div className="row">
        <div className="col col--12">
          <h1 className="hero__title">Style Guide</h1>
          <p className="hero__subtitle margin-vert--md">
            This style guide provides best practices for crafting clear,
            consistent, and engaging documentation and blog posts for Volkov
            Labs. Following these guidelines ensures content reflects our brand
            values and resonates with our audience—developers, admins, and
            users.
          </p>
          <p className="hero__subtitle">
            <em>Last Updated: April 10, 2025</em>
          </p>
        </div>
      </div>
    </div>
  </header>
);

/**
 * Main Component
 * Contains the style guide content with Docusaurus enhancements
 */
const Main = () => (
  <main>
    <div id="style-guide" className="container margin-vert--lg">
      <section>
        <h2>General Writing Principles</h2>
        <ul>
          <li>
            Keep language <strong>clear</strong> and <strong>concise</strong>.
          </li>
          <li>
            Prefer <strong>active voice</strong> (e.g., "Write the code" vs.
            "The code is written").
          </li>
          <li>Limit sentences to 20 words and paragraphs to 4 sentences.</li>
          <li>
            Use <strong>headings</strong> and <strong>subheadings</strong> for
            structure.
          </li>
          <li>
            Enhance explanations with <strong>examples</strong> or{" "}
            <strong>code snippets</strong>.
          </li>
        </ul>
      </section>

      <section>
        <h2>Documentation Style</h2>
        <h3>Structure</h3>
        <ul>
          <li>
            Follow a consistent layout: <strong>Introduction</strong>,{" "}
            <strong>Main Content</strong>, <strong>Conclusion</strong>.
          </li>
          <li>Use numbered steps for tutorials or procedures.</li>
          <li>
            Include prerequisites in a <code>:::info</code> admonition.
          </li>
        </ul>

        <h3>Formatting</h3>
        <ul>
          <li>
            Use Markdown with Docusaurus syntax (e.g., front matter, tabs).
          </li>
          <li>
            Wrap code in blocks with language specified:
            <pre>```bash npm install @volkovlabs/plugin ```</pre>
          </li>
          <li>
            Present data in tables for clarity:
            <table>
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>timeout</code>
                  </td>
                  <td>Sets connection timeout (ms)</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>

        <h3>Language</h3>
        <ul>
          <li>Explain technical terms for broader accessibility.</li>
          <li>
            Define acronyms on first use (e.g., "Grafana Query Language (GQL)").
          </li>
          <li>
            Maintain consistent terminology (e.g., "plugin" not "add-on").
          </li>
        </ul>
      </section>

      <section>
        <h2>Blog Post Style</h2>
        <h3>Structure</h3>
        <ul>
          <li>
            Start with an <strong>engaging intro</strong> to hook readers.
          </li>
          <li>
            Break content into sections with <strong>subheadings</strong>.
          </li>
          <li>
            End with a <strong>call to action</strong> (e.g., "Try it now").
          </li>
        </ul>

        <h3>Formatting</h3>
        <ul>
          <li>
            Enhance with <strong>images</strong> or <strong>diagrams</strong>{" "}
            (stored in <code>/static/img/</code>).
          </li>
          <li>
            Use blockquotes for emphasis:
            <blockquote>Consistency is key to great content.</blockquote>
          </li>
        </ul>

        <h3>Language</h3>
        <ul>
          <li>
            Adopt a <strong>conversational tone</strong> to engage readers.
          </li>
          <li>
            Use <strong>storytelling</strong> to connect (e.g., "We faced this
            challenge...").
          </li>
          <li>
            Add <strong>personal insights</strong> where relevant.
          </li>
        </ul>
      </section>

      <section>
        <h2>Branding and Tone</h2>
        <ul>
          <li>
            Embody Volkov Labs’ values: <strong>innovation</strong>,{" "}
            <strong>collaboration</strong>, <strong>excellence</strong>.
          </li>
          <li>
            Keep tone <strong>professional</strong> yet{" "}
            <strong>approachable</strong>.
          </li>
          <li>
            Use the Volkov Labs logo and colors (#9d70f9, #ffffff) consistently.
          </li>
        </ul>
      </section>

      <section>
        <h2>SEO Best Practices</h2>
        <ul>
          <li>
            Weave <strong>keywords</strong> naturally into text.
          </li>
          <li>
            Add meta descriptions in front matter (e.g.,{" "}
            <code>description: "Guide to plugin setup"</code>).
          </li>
          <li>
            Use <strong>H1</strong> (title), <strong>H2</strong>, and{" "}
            <strong>H3</strong> tags logically.
          </li>
          <li>Link to internal docs and external resources.</li>
        </ul>
      </section>

      <section>
        <h2>Accessibility</h2>
        <ul>
          <li>Ensure readability for all users (e.g., high-contrast text).</li>
          <li>
            Add <strong>alt text</strong> to images (e.g.,{" "}
            <code>
              ![Settings Panel](/img/settings.png "Plugin settings UI")
            </code>
            ).
          </li>
          <li>Provide transcripts for multimedia.</li>
          <li>
            Use descriptive link text (e.g., "Read the [guide](/docs/guide)")
          </li>
        </ul>
      </section>

      <section>
        <h2>Version Control and Updates</h2>
        <ul>
          <li>
            Manage content with <strong>Git</strong> in a{" "}
            <a href="https://github.com/VolkovLabs/volkovlabs.io">repository</a>
            .
          </li>
          <li>
            Review and update quarterly, noting versions (e.g., "v2.1.0").
          </li>
        </ul>
      </section>
    </div>
  </main>
);

/**
 * Home Component
 * Renders the full style guide page
 */
const Home = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Style Guide | Volkov Labs"
      description="Best practices for creating consistent, engaging documentation and blog posts for Volkov Labs."
    >
      <Head>
        <meta property="og:image" content="/img/suite.png" />
        <meta
          name="keywords"
          content="Volkov Labs, documentation, blog, style guide, Docusaurus"
        />
      </Head>
      <Header />
      <Main />
    </Layout>
  );
};

export default Home;
