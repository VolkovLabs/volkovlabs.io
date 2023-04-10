export const BlogPosts = [
  {
    id: "native-grafana-plugins-20230409/",
    metadata: {
      permalink: "/blog/native-grafana-plugins-20230409/",
      source: "@site/blog/2023-04-09-native-grafana-plugins/index.mdx",
      title: "Hey, it is time for spring cleaning your Grafana",
      description:
        "In this article, I explain how to remove unnecessary native Grafana plugins from your build. It is an easy way to avoid clutter in the Grafana UI. Moreover, as a tempting bonus for keeping only operating parts, you will end up with a lighter package attuned to your needs only.",
      date: "2023-04-09T00:00:00.000Z",
      formattedDate: "April 9, 2023",
      tags: [
        {
          label: "Configuration",
          permalink: "/blog/tags/configuration",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "native-grafana-plugins-20230409/",
        tags: ["Configuration"],
        image: "/img/blog/2023-04-09-native-grafana-plugins/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        draft: true,
      },
      nextItem: {
        title: "RSS/Atom Data Source 2.4.0",
        permalink: "/blog/rss-datasource-2.4.0-20230408/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn this article, I explain how to remove unnecessary native Grafana plugins from your build. It is an easy way to avoid clutter in the Grafana UI. Moreover, as a tempting bonus for keeping only operating parts, you will end up with a lighter package attuned to your needs only.\n\n:::info Less is More.\nThis approach involves stripping a design down to its bare essentials and casting aside any elements that do not contribute to the pure beauty or function of an object or space.\n\n:::\n\nThe default Grafana package includes many data sources and visualizations panels, such as Timeseries, Logging, Traces, etc. Having it all installed at the beginning of the Grafana journey is no doubt impressive and convenient.\n\nScrolling through a long list of available plugins is a simple way to discover what is within immediate reach.\nHowever, the list of essential plugins is relatively laconic for functioning applications. Searching for that one plugin in the list should not be a hefty task worthy of blocking your calendar.\n\nThe obvious question for any production environment is:\n\n- How to remove unused native plugins from the Grafana installation package and, therefore, get rid of unwanted weight?\n\n## Grafana Customization\n\nThe customization topic is among the most frequently looked at and asked questions on the Grafana Forum.\n\nIn July last year, we produced a short video sharing our experience with customization using Docker containers. It explains the basics in 90 seconds.\n\n<Video\n  src="https://www.youtube.com/embed/3GRoa8TzIxY"\n  title="Change titles, icons, footer, default dashboard in Grafana 9."\n/>\n\nIn addition, we published a blog post with similar material [How to customize the Grafana user interface](/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/).\n\n## Native Data Sources\n\nTo add a new data source, go to Administration -> Data Sources and click "+ Add a new data source". Then scroll through the list, hoping to spot what you need.\n\nAs we mentioned, it is beneficial to limit the selection when you already know your environment. The list could go down to as few as 3-4 native data sources, plus some from the community. The result might look like a concise one-pager.\n\n<Image\n  title="Concise one-pager with only data sources that are needed for the project."\n  src="/img/blog/2023-04-09-native-grafana-plugins/datasources.png"\n/>\n\n:::note Downside\nThe downside to this approach is that deleted data sources can\'t be installed, and a new Docker image is required.\n:::\n\nHere is the example from our Dockerfile, which removes all native data sources except Prometheus, Loki and PostgreSQL we use in our environment. Also, it drops Cloud and Enterprise hardcoded groups.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-04-09-native-grafana-plugins/datasources.docker"\n  language="docker"\n/>\n\n## Native Panels\n\nIn some of our projects, we do not use Annotation List, Dashboard List, News, Candlestick, Node Graph, and Traces.\nNarrowing down the selection to work with is a simple and elegant idea.\n\n<Image\n  title="Smaller number of panels helps to concentrate on the dashboard."\n  src="/img/blog/2023-04-09-native-grafana-plugins/panels.png"\n/>\n\nYou can pick and choose native panels using the same concepts.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-04-09-native-grafana-plugins/panels.docker"\n  language="docker"\n/>\n\n## Docker file\n\nThe docker file below includes all Grafana customization instructions as they exist now. That means all we mentioned in the previous blog post and the 90 seconds video are included below.\n\nYou can find our collection of various customizations in the Docker file on GitHub. Thank you to the community for sharing ideas and helping us to improve the list.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile"\n  language="docker"\n/>\n\nRest assured that we constantly update the list with all the latest configuration commands we can identify.',
  },
  {
    id: "rss-datasource-2.4.0-20230408/",
    metadata: {
      permalink: "/blog/rss-datasource-2.4.0-20230408/",
      source: "@site/blog/2023-04-08-rss-datasource-2.4.0/index.mdx",
      title: "RSS/Atom Data Source 2.4.0",
      description:
        "We released a new version of RSS/Atom Data Source 2.4.0. This feature release",
      date: "2023-04-08T00:00:00.000Z",
      formattedDate: "April 8, 2023",
      tags: [
        {
          label: "RSS/Atom Data Source",
          permalink: "/blog/tags/rss-atom-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "rss-datasource-2.4.0-20230408/",
        tags: ["RSS/Atom Data Source", "Release Notes"],
        image: "/img/blog/2023-04-08-rss-datasource-2.4.0/banner.png",
        keywords: ["Data Source", "RSS", "Atom", "Grafana"],
      },
      prevItem: {
        title: "Hey, it is time for spring cleaning your Grafana",
        permalink: "/blog/native-grafana-plugins-20230409/",
      },
      nextItem: {
        title: "Environment Data Source 2.3.0",
        permalink: "/blog/env-datasource-2.3.0-20230405/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of RSS/Atom Data Source 2.4.0. This feature release\n\n- Added URL parameters with dashboard variables support.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nThe data Source was submitted to the Grafana team for review.\n:::\n\n<Image\n  title="RSS/Atom Data Source allows displaying any News Feeds on your dashboard."\n  src="/img/blog/2023-04-08-rss-datasource-2.4.0/dashboard.png"\n  lazy={false}\n/>\n\n## URL parameters\n\nURL parameters allow reusing the data source for news feeds with the same URL.\n\nFor example, a data source can be set to YouTube. You can display specific or multiple news feeds using a dashboard variable.\n\n<Image\n  title="Dashboard variables can be used in URL parameters."\n  src="/img/blog/2023-04-08-rss-datasource-2.4.0/parameters.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nRSS/Atom data source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-rss-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-rss-datasource\n```\n\n## YouTube Tutorial\n\nThe RSS/Atom data source is a plugin for Grafana that retrieves RSS/Atom feeds and allows visualizing them using Dynamic Text and other panels.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.4.7 (#44)\n- Update CI and Release workflows (#45)\n- Update Documentation, Provisioning (#46)\n- Add URL parameters with variables support (#47, #48)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-rss-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "env-datasource-2.3.0-20230405/",
    metadata: {
      permalink: "/blog/env-datasource-2.3.0-20230405/",
      source: "@site/blog/2023-04-05-env-datasource-2.3.0/index.mdx",
      title: "Environment Data Source 2.3.0",
      description:
        "We released a new version of Environment Data Source 2.3.0. This maintenance release",
      date: "2023-04-05T00:00:00.000Z",
      formattedDate: "April 5, 2023",
      tags: [
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "env-datasource-2.3.0-20230405/",
        tags: ["Environment Data Source", "Release Notes"],
        image: "/img/blog/2023-04-05-env-datasource-2.3.0/banner.png",
        keywords: ["Data Source", "Environment", "Grafana"],
      },
      prevItem: {
        title: "RSS/Atom Data Source 2.4.0",
        permalink: "/blog/rss-datasource-2.4.0-20230408/",
      },
      nextItem: {
        title: "Annotations, Alerts and Annotation Queries in Grafana",
        permalink: "/blog/annotations-grafana-api-20230401/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Environment Data Source 2.3.0. This maintenance release\n\n- Added deployment options to Documentation and NGINX examples.\n- Updated to Go 1.19 and the latest Go SDK.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nEnvironment Data Source is not included in the Grafana Catalog.\n:::\n\n<Image\n  title="Environment Variables displayed on the Grafana dashboard."\n  src="/img/blog/2023-04-05-env-datasource-2.3.0/dashboard.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Environment Data Source can be installed manually from our Private Repository or downloaded directly from GitHub.\n\n```bash\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\n## YouTube Tutorial\n\nThe Environment Data Source is a plugin for Grafana that returns environment variables to display on your dashboard or use as Variables in your code.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update README to explain how to use data source for a custom domain (#18)\n- Add NGINX configuration example (#18)\n- Update to Grafana 9.3.6 (#19)\n- Update to Grafana 9.4.7 (#20)\n- Update backend and workflows to Go 1.19 (#21)\n- Update Documentation (#22)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-env-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "annotations-grafana-api-20230401/",
    metadata: {
      permalink: "/blog/annotations-grafana-api-20230401/",
      source: "@site/blog/2023-04-01-annotations-grafana-api/index.mdx",
      title: "Annotations, Alerts and Annotation Queries in Grafana",
      description:
        "Grafana's time series visualization is designed to display one-dimensional data arrays. In most cases that we have come across, a time series panel shows data points collected from a device.",
      date: "2023-04-01T00:00:00.000Z",
      formattedDate: "April 1, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "annotations-grafana-api-20230401/",
        tags: ["Grafana HTTP API Data Source", "Getting Started"],
        image: "/img/blog/2023-04-01-annotations-grafana-api/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        updated: "2023-04-08T00:00:00.000Z",
      },
      prevItem: {
        title: "Environment Data Source 2.3.0",
        permalink: "/blog/env-datasource-2.3.0-20230405/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.2.0",
        permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana\'s time series visualization is designed to display one-dimensional data arrays. In most cases that we have come across, a time series panel shows data points collected from a device.\n\nOut of the box, Grafana allows adding native annotations, alert rules for your time series, and visualizing annotation queries.\n\n## Native Annotations\n\nNative annotation is a simple commentary on a data point. Users with at least Editor privileges can add a native annotation manually by clicking on the data point of interest, typing a description, and specifying tags.\n\nAlternatively, you can create HTTP API calls to automate the entry process.\n\n<Image\n  title="Editors and Administrator can add native annotations."\n  src="/img/blog/2023-04-01-annotations-grafana-api/native.png"\n  lazy={false}\n/>\n\n## Alerts\n\nAlerts might seem like a different kind of animal, but under the hood, alerts are very similar to native annotations.\n\nAlerts are created by the Grafana alert manager according to the alert rules you put in place. Here is an example of an alert rule:\n\n:::note Alert Rule\n\nWatch the Value column from the Metric table, PostgreSQL data source. Evaluate\nevery 10 seconds for 30 seconds for the condition greater than 100.\n\n:::\n\nThe rule means to capture three values (30 seconds/10 seconds).\n\n- If all three are above 100, then fire an alert.\n- In addition to generating an annotation, fire (or create) an alert means to send a notification via the configured channels.\n  Your options are Email, Slack messenger, and OnCall.\n\n## Alerts vs Native annotations\n\nNative annotations serve well for non-time-critical comments, while alerts work best for vigilant data monitoring. The alert manager creates alerts according to the rules you put in place. Alerts immediately signal if something is off (the value is outside of the expected range).\n\nPeople tend to reference both alerts and native annotations simply as annotations. This, unfortunately, confuses things a little further.\n\n<Image\n  title="Annotations, Alerts, and Annotation queries in Grafana."\n  src="/img/plugins/grafana/annotations.png"\n/>\n\nThis introductory video highlights the differences and similarities between Grafana alerts, annotations, and annotation queries.\n\n<Video\n  src="https://www.youtube.com/embed/4asWJ_Dhcmw"\n  title="Annotations, Alerts, and Annotation queries in Grafana explained."\n/>\n\n## Grafana configuration database\n\nBoth alerts and native annotations are stored in the Grafana configuration database. Please, refer to another blog post where I explained in detail what that is.\n\nIn short, every Grafana needs a configuration database to capture its settings, including native annotations and alerts. If you do not configure otherwise, you will end up with sqlite3 as your configuration database. The other choices are PostgreSQL and MySQL.\n\n<a href="/blog/grafana-setup-20230122/">\n  <Image\n    title="Blog post about Grafana configuration database."\n    src="/img/blog/2023-01-22-grafana-setup/banner.png"\n    zoom={false}\n  />\n</a>\n\n## Configuration Menu\n\nTo access the configuration menu for alerts and native annotation use the \'Annotations\' section of the dashboard setting menu.\n\n<Image\n  title="Example of what you see under Annotations menu."\n  src="/img/blog/2023-04-01-annotations-grafana-api/annotation-menu.png"\n/>\n\nTo work with alert rules, go under the Alerting menu.\n\n<Image\n  title="Alerting rules are periodically evaluated and fired if the threshold is reached."\n  src="/img/blog/2023-04-01-annotations-grafana-api/alerting.png"\n/>\n\n## Annotations queries\n\nAnnotation queries are an advanced way to work with annotation records. You can store annotation records in a database like PostgreSQL or any other storage of your choice and access them using a corresponding data source.\n\nAnnotation queries could be divided into two types, built-in and user-defined.\n\n<Image\n  title="Get access to built-in and user-defined annotation queries in the Annotations menu "\n  src="/img/blog/2023-04-01-annotations-grafana-api/built-in.png"\n/>\n\n### Annotations & Alerts (Built-in)\n\nThe built-in Annotation Query, is used to display native annotations, and does not provide features like filters and support for dashboard variables.\n\n:::info Time Series\nTime Series do not rely on built-in Annotations and use internal API calls to get Alert Annotations with the same limitations as built-in annotations query.\n:::\n\n### User-defined\n\nTo overcome the mentioned limitations for the built-in annotation query, we created the Grafana HTTP API Data Source.\n\n## Grafana HTTP API Data Source\n\nThe [Grafana HTTP API Data Source](/plugins/volkovlabs-grapi-datasource) allows:\n\n- Work with local and remote Grafana instances.\n- Use API Keys or Tokens to request information from the configuration database and visualize in panels or use in annotations.\n- Work with user-defined annotation types.\n- Work with dashboard variables and utilize them as panel filters.\n- Avoid the broken heart emoji, which is usually shown if at least one alert rule has been triggered.\n\n<Image\n  title="Grafana HTTP API Data Source works with Grafana configuration database."\n  src="/img/blog/2023-04-01-annotations-grafana-api/schema-around-config.png"\n  lazy={false}\n/>\n\nThe query options where you specify which annotations to display using Grafana HTTP API Data source look like this.\n\n<Image\n  title="Display annotation using Grafana HTTP API Data Source for the selected dashboard variable."\n  src="/img/blog/2023-04-01-annotations-grafana-api/annotations.png"\n/>\n\n## We healed a broken heart\n\nAs you know, if an alerting rule has a Dashboard and Panel Ids set, the Time Series panel will display the broken heart emoji. It is expected behavior for particular graphs which do not depend on the Dashboard variables.\n\nHowever, when you display data points from multiple devices the broken heart emoji might be a misleading overkill. The broken heart emoji will not be displayed, but your alerts and annotations will if you use Grafana HTTP API Data Source and configure dashboard filters.\n\n## Alerting History\n\nThe Grafana HTTP API Data Source can be used with any native or community plugin. Our community member sent us a screenshot of his alerting history for Timescale Linux memory usage over time.\n\n<Image\n  title="Grafana HTTP API Data Source used to display Alerting History."\n  src="/img/blog/2023-04-01-annotations-grafana-api/history.png"\n/>\n\nWe are looking forward to seeing what you can do with it.',
  },
  {
    id: "grapi-datasource-1.2.0-20230331/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      source: "@site/blog/2023-03-31-grapi-datasource-1.2.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.2.0",
      description:
        "We released a new version of Grafana HTTP API Data Source 1.2.0. This feature release",
      date: "2023-03-31T00:00:00.000Z",
      formattedDate: "March 31, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.2.0-20230331/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-31-grapi-datasource-1.2.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
      },
      prevItem: {
        title: "Annotations, Alerts and Annotation Queries in Grafana",
        permalink: "/blog/annotations-grafana-api-20230401/",
      },
      nextItem: {
        title: "Static Data Source 2.2.0",
        permalink: "/blog/static-datasource-2.2.0-20230327/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Grafana HTTP API Data Source 1.2.0. This feature release\n\n- Added formatted Annotation labels for Alerts.\n- Added Alert Rules and Alert UID field to Alert Annotations.\n- Added Variables support.\n- Updated Scoped Variables for Annotations.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 31, 2023.\n:::\n\n## Alert labels\n\nWe added formatted Alert labels in the `labels` field, which can be parsed using `Extract field` transformation to sort, filter, and display by values.\n\n<Image\n  title="Grafana HTTP API Data Source used to display Alerting History."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/history.png"\n  lazy={false}\n/>\n\n## Alert Rules and UID\n\nBased on the alert rules Annotations will return the Alert name and UID fields. Alert UID can be used for data links to quickly direct to the rules configuration.\n\n<Image\n  title="Alert Name and UID displayed for each Alert annotation."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/alerts.png"\n/>\n\n## Annotations\n\nAnnotations might seem different from the Alerts, but under the hood, they are very similar. With a little help from the Grafana HTTP API data source, you can easily work with both.\n\nThis is an introductory video for anyone interested in Grafana Alerts and Annotations.\n\n<Video\n  src="https://www.youtube.com/embed/4asWJ_Dhcmw"\n  title="Annotations, Alerts, and Annotation queries in Grafana explained."\n/>\n\n## Variables support\n\nWe added initial Variables support to the data source. You can select Alert Rules, Data Sources, and Annotations by UID or text fields.\n\n<Image\n  title="Grafana HTTP API Data Source can be used for Dashboard Variables."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/variables.png"\n/>\n\n## Calendar\n\nThe Grafana HTTP API Data Source can be used together with [Calendar panel](/plugins/volkovlabs-calendar-panel) to visualize alerts that happened in a week or month.\n\n<Image\n  title="Alerts for this week displayed using Calendar panel."\n  src="/img/blog/2023-03-31-grapi-datasource-1.2.0/calendar.png"\n/>\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\nWill be available soon.\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add formatted Annotation labels for Alerts (#19)\n- Update Annotation Limit to 100 by default (#19)\n- Add Alert Rules and UID for Alerts Annotations (#20)\n- Update Scoped Variables for Annotations (#21)\n- Add Variable Support (#25)\n- Update provisioning for testing Alerts (#26, #28)\n- Add Annotations Tutorial (#29)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "static-datasource-2.2.0-20230327/",
    metadata: {
      permalink: "/blog/static-datasource-2.2.0-20230327/",
      source: "@site/blog/2023-03-27-static-datasource-2.2.0/index.mdx",
      title: "Static Data Source 2.2.0",
      description:
        "We released a new version of Static Data Source 2.2.0. This maintenance release",
      date: "2023-03-27T00:00:00.000Z",
      formattedDate: "March 27, 2023",
      tags: [
        {
          label: "Static Data Source",
          permalink: "/blog/tags/static-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "static-datasource-2.2.0-20230327/",
        tags: ["Static Data Source", "Release Notes"],
        image: "/img/blog/2023-03-27-static-datasource-2.2.0/banner.png",
        keywords: ["Data Source", "Static", "Storage", "Grafana"],
        updated: "2023-03-30T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.2.0",
        permalink: "/blog/grapi-datasource-1.2.0-20230331/",
      },
      nextItem: {
        title: "Data Manipulation Panel 2.8.0",
        permalink: "/blog/form-panel-2.8.0-20230316/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Static Data Source 2.2.0. This maintenance release\n\n- Added examples for Node Graph, Base64, Pie Chart, and Logs panels in Documentation.\n- Updated Variable replacement to support Scoped Variables.\n- Updated to the latest Grafana 9.4.7 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 29, 2023.\n:::\n\n## Half a Million downloads\n\nThe Static Data Source was downloaded more than half a million times. We plan exciting new features for the upcoming release to get it to a million and become a go-to data source for JavaScript enthusiasts.\n\n<Image\n  title="More than half a million downloads in 2 years."\n  src="/img/blog/2023-03-27-static-datasource-2.2.0/downloads.png"\n  lazy={false}\n/>\n\n## Examples\n\nWe added various examples in the [Documentation](/plugins/volkovlabs-static-datasource/) to get started with Static Data Source.\n\n<Image\n  title="Pie Chart panel visualized data from the Static Data Source."\n  src="/img/blog/2023-03-27-static-datasource-2.2.0/pie.png"\n/>\n\n## Variables\n\nThe Static Data Source supports dashboard and global variables in the String fields. In this release, we added support for the Scoped variables used when repeating panels based on multi-select variables.\n\nTo learn about three types of variables take a look at [Variables](/plugins/grafana/variables).\n\n## Getting Started\n\nThe Static Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-static-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-static-datasource\n```\n\n## YouTube Tutorial\n\nThe Static Data Source is a plugin for Grafana that allows you to store and emulate any data.\n\n<Video\n  src="https://www.youtube.com/embed/QOV8ECOUjWs"\n  title="Mimic any data with Static data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update CI and Release workflows (#33)\n- Update to Grafana 9.4.7 (#34)\n- Update README with Documentation (#35)\n- Add Scoped Variables for Variables replacement (#35)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-static-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "form-panel-2.8.0-20230316/",
    metadata: {
      permalink: "/blog/form-panel-2.8.0-20230316/",
      source: "@site/blog/2023-03-16-form-panel-2.8.0/index.mdx",
      title: "Data Manipulation Panel 2.8.0",
      description:
        "We released a new version of the Data Manipulation Panel 2.8.0. This feature release",
      date: "2023-03-16T00:00:00.000Z",
      formattedDate: "March 16, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-2.8.0-20230316/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2023-03-16-form-panel-2.8.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-03-23T00:00:00.000Z",
      },
      prevItem: {
        title: "Static Data Source 2.2.0",
        permalink: "/blog/static-datasource-2.2.0-20230327/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.1.0",
        permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of the Data Manipulation Panel 2.8.0. This feature release\n\n- Added String, Number Type selection for Select and Radio options.\n- Added Lookup options for Disabled elements.\n- Added support for DELETE requests.\n- Added "Buttons only" Layout to do GET/POST/DELETE requests.\n- Added panel padding configuration to allow using of panel\'s space corner to corner.\n- Refactored documentation and API Servers examples for MySQL, PostgreSQL, and Deno.\n- Updated to the latest Grafana 9.4.3 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 23, 2023.\n:::\n\n<Image\n  title="Data Manipulation panel allows to input and edit all kinds of data."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/panel.png"\n  lazy={false}\n/>\n\n## Layout\n\nThe new "Buttons Only" layout does not require any elements and allows performing Update Requests.\n\n<Image\n  title="Layout can be Basic, Buttons only, and Sections with no or extra padding if required."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/layout.png"\n/>\n\nPadding can be decreased or increased from 0 to 20 pixels depending on your use case.\n\n## Select and Radio options\n\nThe Select and Radio options can be set as a string or a number type to correctly visualize returned value and update using API.\n\n<Image\n  title="Select a string or a number type for each option."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/options.png"\n/>\n\n## Lookup for Read-only (Disabled) elements\n\nWe added a lookup for Read-only elements similar to Radio and Select elements to implement control forms and verify initial values before updating.\n\n<Image\n  title="Add options to lookup labels for returned values."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/readonly.png"\n/>\n\n### Control Form\n\nControl Form is a special form with multiple sections consisting of Read-Only and input elements.\n\n<Image\n  title="Control form to verify and update Id and Type."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/control.png"\n/>\n\n## DELETE requests\n\nUpdate request supports DELETE, PATCH, POST, and PUT methods.\n\n<Image\n  title="DELETE update requests allows to execute DELETE API calls."\n  src="/img/blog/2023-03-16-form-panel-2.8.0/update.png"\n/>\n\n## Magic (JavaScript) Trio\n\nData Manipulation is one of the three plugins that make Grafana complete. Dynamic Text, Data Manipulation and Apache ECharts are all you need to create functional real-world web applications.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Getting Started\n\nThe Data Manipulation panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nThe Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add String, Number Type for Select and Radio options (#120)\n- Add Lookup options for Disabled element (#121)\n- Add Server API with MYSQL for Feedback Dashboard (#125)\n- Update to Grafana 9.3.1 (#129)\n- Add Option for DELETE request (#130)\n- Add "Buttons only" Layout to do GET/POST/DELETE requests (#131)\n- Update README and move Documentation to docs.volkovlabs.io (#132)\n- Update README and Documentation (#134)\n- Refactor API Servers (#128)\n- Update CI and Release workflows (#145)\n- Update to Grafana 9.4.3 (#146)\n- Add NoPadding to remove extra padding around and make it configurable (#146)\n- Update README and Documentation (#147)\n\n### Bug fixes\n\n- Fix Password and Boolean elements confirmation (#120)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "grapi-datasource-1.1.0-20230315/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      source: "@site/blog/2023-03-15-grapi-datasource-1.1.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.1.0",
      description:
        "We released a new version of Grafana HTTP API Data Source 1.1.0. This maintenance release",
      date: "2023-03-15T00:00:00.000Z",
      formattedDate: "March 15, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.1.0-20230315/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-15-grapi-datasource-1.1.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
      },
      prevItem: {
        title: "Data Manipulation Panel 2.8.0",
        permalink: "/blog/form-panel-2.8.0-20230316/",
      },
      nextItem: {
        title: "Dynamic Text Panel 3.1.0",
        permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Grafana HTTP API Data Source 1.1.0. This maintenance release\n\n- Signed as a community plugin and available in Grafana Cloud and On-Premises.\n- Updated Plugin configuration, types and README.\n- Updated to the latest Grafana 9.4.3 toolkit.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 15, 2023.\n:::\n\n## We just started\n\nThe first release can retrieve\n\n- Health information.\n- List of Data Sources.\n- Annotations and Alarms with filter capabilities.\n\n<Image\n  title="Dashboard displays Data sources, annotations and health information of the Grafana instance."\n  src="/img/blog/2023-03-15-grapi-datasource-1.1.0/dashboard.png"\n  lazy={false}\n/>\n\n## Roadmap\n\nWe are planning to add most of the HTTP API endpoints for Dashboards, Users management, and Configuration. You are welcome to open feature requests in the repository.\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\nWill be available end of March.\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.4.3 (#13)\n- Update Bearer token plugin configuration (#13)\n- Signed as community plugin (#14)\n- Update Grafana types and description (#15)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "dynamictext-panel-3.1.0-20230312/",
    metadata: {
      permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      source: "@site/blog/2023-03-12-dynamictext-panel-3.1.0/index.mdx",
      title: "Dynamic Text Panel 3.1.0",
      description:
        "We released a new version of Dynamic Text Panel 3.1.0. This feature release",
      date: "2023-03-12T00:00:00.000Z",
      formattedDate: "March 12, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-3.1.0-20230312/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-03-12-dynamictext-panel-3.1.0/banner.png",
        keywords: [
          "Dynamic Text",
          "Panel",
          "Data",
          "Code",
          "Highlight",
          "Grafana",
        ],
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.1.0",
        permalink: "/blog/grapi-datasource-1.1.0-20230315/",
      },
      nextItem: {
        title: "Calendar Panel 1.3.0",
        permalink: "/blog/calendar-panel-1.3.0-20230311/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Dynamic Text Panel 3.1.0. This feature release\n\n- Added Time Zone and Range parameters for JavaScript Code.\n- Added Replace variables and Location service parameters for Javascript Code.\n- Updated replace variables with scoped function. Variables in repeat panels are supported.\n- Updated to the latest Grafana 9.4.3 toolkit.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 13, 2023.\n:::\n\n## Time Range and Zone\n\nAdded Time Zone and Range parameters allow displaying selected time zone using custom handlers.\n\nHere is an example of how to display the selected dashboard, browser time zone and range in Grafana.\n\n### Content\n\n````\n<h2>Dashboard {{tz}}</h1>\n<h2>Browser {{browser}}</h1>\n\n```json\n{{{json (range)}}}\n```\n````\n\n### JavaScript Code\n\n```\nhandlebars.registerHelper(\'tz\', () => timeZone);\nhandlebars.registerHelper(\'range\', () => timeRange);\nhandlebars.registerHelper(\'browser\', () => Intl.DateTimeFormat().resolvedOptions().timeZone);\n```\n\n<Image\n  title="Dynamic Text allows displaying updated time zone and range in Grafana."\n  src="/img/blog/2023-03-12-dynamictext-panel-3.1.0/time.png"\n  lazy={false}\n/>\n\n## Replace Variables\n\nReplace variables functionality was updated to use the scoped function and support repeat panels.\n\nDynamic text panel provides a helper `{{variable}}` to work with the dashboard and global variables. Alternatively, you can create a custom Handlebars helper to introduce additional logic and formats.\n\n### Content\n\n```md\n- Native helper **{{variable "test"}}**\n- Custom helper **{{myVariable "test"}}**\n```\n\n### JavaScript Code\n\n```js\nhandlebars.registerHelper("myVariable", (name) => replaceVariables(`$${name}`));\n```\n\n## Magic (JavaScript) Trio\n\nDynamic Text is one of the three plugins that make Grafana complete. Dynamic Text, Data Manipulation and Apache ECharts are all you need to create functional real-world web applications.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Getting Started\n\nThe Dynamic Text visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text visualization panel lets you define a text template using the data from your data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in the Dynamic text panel."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add Time Zone and Range parameters for Javascript Code (#155)\n- Update to Grafana 9.4.3 (#156)\n- Add Magic (JavaScript) Trio tutorial in README (#157)\n- Update replace variables with scoped function (#160)\n- Add Replace variables and Location service parameters for Javascript Code (#160)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "calendar-panel-1.3.0-20230311/",
    metadata: {
      permalink: "/blog/calendar-panel-1.3.0-20230311/",
      source: "@site/blog/2023-03-11-calendar-panel-1.3.0/index.mdx",
      title: "Calendar Panel 1.3.0",
      description:
        "A new version of the Calendar panel 1.3.0 was released today. This feature release",
      date: "2023-03-11T00:00:00.000Z",
      formattedDate: "March 11, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.3.0-20230311/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-03-11-calendar-panel-1.3.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-03-13T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 3.1.0",
        permalink: "/blog/dynamictext-panel-3.1.0-20230312/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
        permalink: "/blog/image-panel-3.5.0-20230307/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA new version of the Calendar panel 1.3.0 was released today. This feature release\n\n- Added option to display colors based on Event or Frame id if the Color field is not specified.\n- Added support for Color schemes.\n- Added labels split to display in the drawer.\n- Added Annotation tags as labels.\n- Updated multi-day intervals to auto-align events weekly.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 13, 2023.\n:::\n\n## Configuration\n\nOur latest video tutorial explains how to configure the Calendar plugin in Grafana. We keep our events in the PostgreSQL database, but you can use any storage!\n\n<Video\n  src="https://www.youtube.com/embed/6WGmm5y4fs4"\n  title="How to display events from PostgreSQL."\n/>\n\n### Events Duration\n\nEvents can be instantaneous, has duration, multi-day and ongoing.\n\n- If the event has only the Start time field configured, events are considered instantaneous.\n- If the event has Start and End time fields configured, events are considered to have a duration.\n- Any events that have an End time field configured and equal NULL are considered ongoing.\n\n<Image\n  title="Schema explains how events will look like depends on the end time field."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/schema.png"\n  lazy={false}\n/>\n\n## Multi-day events\n\nWe improved aligning of multi-day events. In the latest version events are aligned weekly, which helps avoid gaps in-between for events longer than a week.\n\nThe oldest events are always on the top.\n\n<Image\n  title="Release Management dashboard using the Calendar panel for Grafana."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/release.png"\n/>\n\n## Event colors\n\nWe improved color options for the events. If the color field is not specific events can be colored based on the Frame or Events id.\n\nYou can also choose a Color scheme in the Standard options.\n\n<Image\n  title="Releases colored based on event id using the Classic palette."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/colors.png"\n/>\n\n## Event details\n\nEvents details were improved to split comma-separated values in the labels field. The description values support HTML elements for formatting.\n\n<Image\n  title="Event details with HTML-formatted description and labels."\n  src="/img/blog/2023-03-11-calendar-panel-1.3.0/drawer.png"\n/>\n\nAnnotation tags will be displayed as labels as well.\n\n## Getting Started\n\nThe calendar panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nThe Calendar visualization panel is a Grafana plugin created to display calendar events from data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from JSON API data source."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Rebuild using Grafana 9.4.3 (#87)\n- Add labels split to display in the drawer (#88)\n- Add annotation tags as labels (#88)\n- Refactor multi-day interval (#89)\n- Add display colors based on Event or Frame id if the Color field is not specified (#90)\n- Add support for Color schemes (#91)\n- Add video configuration tutorial (#92)\n\n### Bug fixes\n\n- Fix scrollable content in the Day drawer (#93)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "image-panel-3.5.0-20230307/",
    metadata: {
      permalink: "/blog/image-panel-3.5.0-20230307/",
      source: "@site/blog/2023-03-07-image-panel-3.5.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
      description:
        "We released a new version of Base64 Image/Video/Audio/PDF Panel 3.5.0. This maintenance release",
      date: "2023-03-07T00:00:00.000Z",
      formattedDate: "March 7, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-3.5.0-20230307/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-03-07-image-panel-3.5.0/banner.png",
        keywords: ["Base64", "Panel", "PDF", "Images", "Video", "Audio"],
        updated: "2023-03-08T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.3.0",
        permalink: "/blog/calendar-panel-1.3.0-20230311/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.2.0",
        permalink: "/blog/echarts-panel-4.2.0-20230304/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Base64 Image/Video/Audio/PDF Panel 3.5.0. This maintenance release\n\n- Removed panel padding allowing to use of panel\'s space corner to corner.\n- Updated to the latest Grafana 9.4.3 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 8, 2023.\n:::\n\n## No Padding\n\nRemoved panel padding allows using of the panel space from corner to corner and displays images, pdf and media files in the full width and height of the panel.\n\n<Image\n  title="How to use Base64 Panel to display Base64 PNG image."\n  src="/img/blog/2023-03-07-image-panel-3.5.0/panel.png"\n  lazy={false}\n/>\n\n## MQTT Data source\n\nThe Base64 panel works with any data source. It was successfully used with the MQTT data source to view the live camera feed by the community.\n\n## Getting Started\n\nBase64 Image/Video/Audio/PDF visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nThe Base64 Image/Video/Audio/PDF visualization panel is a plugin for Grafana that displays Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF formats.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update CI and Release workflows (#64)\n- Update to Grafana 9.4.3 (#65)\n- Set NoPadding to use panel corner to corner (#66)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "echarts-panel-4.2.0-20230304/",
    metadata: {
      permalink: "/blog/echarts-panel-4.2.0-20230304/",
      source: "@site/blog/2023-03-04-echarts-panel-4.2.0/index.mdx",
      title: "Apache ECharts Panel 4.2.0",
      description:
        "We released a new version of the Apache ECharts Panel 4.2.0 for Grafana. This maintenance release",
      date: "2023-03-04T00:00:00.000Z",
      formattedDate: "March 4, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.2.0-20230304/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-03-04-echarts-panel-4.2.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-03-08T00:00:00.000Z",
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.5.0",
        permalink: "/blog/image-panel-3.5.0-20230307/",
      },
      nextItem: {
        title: "Grafana HTTP API Data Source 1.0.0",
        permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of the Apache ECharts Panel 4.2.0 for Grafana. This maintenance release\n\n- Added `EventBus` parameter to publish events.\n- Removed panel padding allowing to use of panel\'s space corner to corner.\n- Updated default background to `transparent` for Light and Dark themes.\n- Updated to the latest Grafana 9.4.3 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 8, 2023.\n:::\n\n## No Padding\n\nRemoved panel padding allows using of the panel space from corner to corner and displays charts, maps, and graphics in the full width and height of the panel.\n\n<Image\n  title="GeoJSON Map displays requests from users around the world."\n  src="/img/blog/2023-03-04-echarts-panel-4.2.0/map.png"\n  lazy={false}\n/>\n\n## Community Use cases\n\nWe are impressed with the everyday creations from the community using the latest features in the Apache ECharts panel for Grafana.\n\n### Dynamic toolbox\n\nOne of the interesting use cases is displaying complex ECharts objects like a sunburst with the toolbox, strongly dynamic and dependent on many variables by [ftasso](https://github.com/ftasso).\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/dynamic.js"\n  language="js"\n/>\n\n### Preserve Visual Map selected range\n\nSaving the `visualMap` range slider settings across Dashboard refreshes by [Barryetter](https://github.com/Barryetter).\n\n1. Create two dashboard variables. Constants are fine, and they should be hidden from the user. Name them `datarangeStart` and `datarangeEnd` and set them to some initial values.\n2. In the EChart panel code editor (before the return), add an event handler for the `datarangeselected` event. Remove any event handler to prevent creating duplicate handlers.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/range.js"\n  language="js"\n/>\n\n3. In the `visualMap` definition, set the `range` property to the Dashboard variables using the `replaceVariables` method as described in the [documentation](/plugins/volkovlabs-echarts-panel/variables).\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/visual-map.js"\n  language="js"\n/>\n\n## Create DOM (Document Object Model) Elements\n\nIt\'s possible to add elements (button, checkbox, select, etc.) to the DOM (Document Object Model) using `echartsInstance` by [Lroy](https://github.com/Lroy).\n\n<Image\n  title="Add a button to add Events on the Apache ECharts container."\n  src="/img/blog/2023-03-04-echarts-panel-4.2.0/dom.png"\n/>\n\nFor example, you can add a button with an event handler.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-03-04-echarts-panel-4.2.0/dom.js"\n  language="js"\n/>\n\n## Getting Started\n\nApache ECharts visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nApache ECharts is one of the three plugins that make Grafana complete. Dynamic Text, Data Manipulation and Apache ECharts are all you need to create functional real-world web applications.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add `EventBus` to the available parameters to publish events (#122)\n- Update to Grafana 9.3.6 (#132)\n- Update CI and Release workflows (#134)\n- Add NoPadding to remove extra padding around (#138)\n- Set Background color to Transparent by default (#139)\n- Add Magic (JavaScript) Trio tutorial (#141)\n- Update to Grafana 9.4.3 (#142)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "grapi-datasource-1.0.0-20230302/",
    metadata: {
      permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      source: "@site/blog/2023-03-02-grapi-datasource-1.0.0/index.mdx",
      title: "Grafana HTTP API Data Source 1.0.0",
      description:
        "A new plugin Grafana HTTP API Data Source 1.0.0 was released today. This first release",
      date: "2023-03-02T00:00:00.000Z",
      formattedDate: "March 2, 2023",
      tags: [
        {
          label: "Grafana HTTP API Data Source",
          permalink: "/blog/tags/grafana-http-api-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "grapi-datasource-1.0.0-20230302/",
        tags: ["Grafana HTTP API Data Source", "Release Notes"],
        image: "/img/blog/2023-03-02-grapi-datasource-1.0.0/banner.png",
        keywords: ["Grafana", "HTTP API", "Data Source", "Annotations"],
        updated: "2023-03-17T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.2.0",
        permalink: "/blog/echarts-panel-4.2.0-20230304/",
      },
      nextItem: {
        title: "Calendar Panel 1.2.0",
        permalink: "/blog/calendar-panel-1.2.0-20230223/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA new plugin Grafana HTTP API Data Source 1.0.0 was released today. This first release\n\n- Allows connecting to Local and Remote Grafana instances via HTTP API using API Keys and Tokens.\n- Tested with Grafana HTTP API versions 8.5+. It may work with previous versions.\n- Allows retrieving Health information, Annotations, Alerts, and Data Sources.\n- Supports Dashboard annotations to display filtered annotations and alerts.\n- Based on the Grafana 9.3.6 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on March 15, 2023.\n:::\n\n## Why?\n\nImagine you have many Grafana instances and you want to\n\n- Quickly check information, configuration and usage reports from all of them.\n- Validate users and teams across all instances.\n- Display annotations collected from many instances on a Time Series panel.\n\nEven if you have a single Grafana instance and you want to display Alerting Annotations filtered by variable on a Time Series panel, which was one of the reasons we created this data source. We will discuss this use case in the upcoming blog.\n\n## First release\n\nThis is the first release of the Grafana HTTP API Data Source. It is a game-changer to retrieve annotations, check health information, and verify the configuration of the local and remote Grafana instances, including Grafana Cloud.\n\nGrafana HTTP API requires API Key or Token to access local and remote instances.\n\n<Image\n  title="Grafana HTTP API Data Source allows to connect to Grafana Cloud instances."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/cloud.png"\n  lazy={false}\n/>\n\n## Features\n\nThe first release can retrieve\n\n- Health information.\n- List of Data Sources.\n- Annotations and Alarms with filter capabilities.\n\n<Image\n  title="Dashboard displays Data sources, annotations and health information of the Grafana instance."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/dashboard.png"\n/>\n\n## Annotations\n\nGrafana HTTP API Data Source supports Dashboard annotations to display filtered annotations and alerts.\n\n| Filter       | Options                                     |\n| ------------ | ------------------------------------------- |\n| Type         | All, Annotation, or Alert.                  |\n| Dashboards   | All or This.                                |\n| Time Range   | None or Selected in the dashboard.          |\n| Prev State   | All, Normal, Pending, or Alerting.          |\n| Next State   | All, Normal, Pending, or Alerting.          |\n| Text Pattern | Supports Regular expressions and variables. |\n| Max Limit    | Maximum number of annotations to retrieve.  |\n\n<Image\n  title="Dashboard annotations use Grafana HTTP API Data Source to retrieve Alerting annotations filtered with text pattern."\n  src="/img/blog/2023-03-02-grapi-datasource-1.0.0/annotations.png"\n/>\n\n## Getting Started\n\nThe Grafana HTTP API Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-grapi-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-grapi-datasource\n```\n\n## YouTube Tutorial\n\nWill be available end of March.\n\n## Release Notes\n\n### Features / Enhancements\n\n- Initial release based on Volkov Labs Abc Data source template\n- Update README and configuration (#1)\n- Add Postgres for Alerting (#2)\n- Add Annotations (#3)\n- Update name to Grafana HTTP API (#4)\n- Improve Annotations and update to Timescale (#5)\n- Improve Data Source to check Organization (#6)\n- Add Notifications and increase Test Coverage (#7)\n- Add Annotation filters (#8)\n- Add Annotation Alert States filter (#9)\n- Add Health and Data Sources (#10)\n- Update README to prepare for the release (#11, #12)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-grapi-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "calendar-panel-1.2.0-20230223/",
    metadata: {
      permalink: "/blog/calendar-panel-1.2.0-20230223/",
      source: "@site/blog/2023-02-23-calendar-panel-1.2.0/index.mdx",
      title: "Calendar Panel 1.2.0",
      description:
        "A new version of the Calendar panel 1.2.0 was released today. This feature release",
      date: "2023-02-23T00:00:00.000Z",
      formattedDate: "February 23, 2023",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.2.0-20230223/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2023-02-23-calendar-panel-1.2.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Time Range", "Grafana"],
        updated: "2023-02-24T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana HTTP API Data Source 1.0.0",
        permalink: "/blog/grapi-datasource-1.0.0-20230302/",
      },
      nextItem: {
        title: "Dynamic Text Panel 3.0.0",
        permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA new version of the Calendar panel 1.2.0 was released today. This feature release\n\n- Added event colors based on Threshold configuration.\n- Added support for the Week Start (Monday, Sunday) configured in Grafana.\n- Added an option to display the time for the events.\n- Updated Drawer (Sidebar) for the new design using Cards.\n- Updated to the latest Grafana 9.3.6 toolkit and workflows.\n- Refactored legacy code and migrated to Theme v2.\n- Removed panel padding and updated styles for a modern look and feel.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on February 24, 2023.\n:::\n\n## 1 Million downloads\n\nThe Calendar panel was downloaded more than one million times.\n\n<Image\n  title="More than one million downloads in two years."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/downloads.png"\n  lazy={false}\n/>\n\n## Display Events from PostgreSQL\n\nThis video explains how to configure the Calendar plugin in Grafana. We keep our events in the PostgreSQL database, but you can use any storage!\n\n<Video\n  src="https://www.youtube.com/embed/6WGmm5y4fs4"\n  title="How to display events from PostgreSQL."\n/>\n\n## Updated Styles\n\nOutdated Theme v1 was updated to v2 and most styles were updated for a modern look and feel similar to the Google Calendar experience. An additional option Display Time allows displaying the time of the event in front of the title.\n\n<Image\n  title="Calendar panel displays the latest updates in the Grafana Catalog."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/dashboard.png"\n/>\n\n## Week Start\n\nDepending on the Week Start configured in the Grafana preferences the first day of the week will be Sunday (default) or Monday.\n\n<Image\n  title="Monday and Sunday week start adjusted in the User or Organization preferences."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/week-start.png"\n/>\n\n## Event colors\n\nThe most requested feature! A new Color field option was added to display events using different colors controlled by Threshold configuration.\n\n<Image\n  title="Day and Multiday events with different colors configured using Thresholds."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/duration.png"\n/>\n\n## Event details\n\nWhen day events don\'t fit into the day space an entry `N more` appears at the bottom. When clicking on it you can see a full list of the day\'s events in a drawer. You can select the event and a new tab will be opened with the details for the specific event.\n\n<Image\n  title="Calendar panel displays the latest updates in the Grafana Catalog."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/drawer.png"\n/>\n\nYou can also click on the event directly on the panel to see the details or navigate to the first data link if the `On Click` option is set to `Open Link`.\n\n<Image\n  title="Event details with links are displayed using card components."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/event.png"\n/>\n\n## Time Range\n\nIt is possible to update the Time Range by selecting days on the Calendar panel. Click on the day\'s number and holding the Shift key click on another day selecting the period.\n\nWhen the period is selected click on the Apply time range to adjust the time range for the dashboard.\n\n<Image\n  title="Update Time Range by selecting days on the Calendar panel."\n  src="/img/blog/2023-02-23-calendar-panel-1.2.0/time-range.png"\n/>\n\n## Getting Started\n\nThe calendar panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nThe Calendar visualization panel is a Grafana plugin created to display calendar events from data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from JSON API data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring and Styles migration may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Select color for calender entry queries (#67)\n- Filtering out undefined events (#69)\n- Update CI and Release Workflows (#72)\n- Rebuild using 9.3.6 (#73)\n- Refactor Options Editors to use Field pickers (#74)\n- Refactor Day and Events Drawer (#75)\n- Set No Padding for the Panel (#75)\n- Refactor Day and update Styles (#76)\n- Migrate Styles to v2 (#79)\n- Match Grafana settings for Week Start (#80)\n- Skip undefined events in Drawer (#81)\n- Add Display Time (#82)\n- Update Styles and Screenshot (#83)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "dynamictext-panel-3.0.0-20230219/",
    metadata: {
      permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      source: "@site/blog/2023-02-19-dynamictext-panel-3.0.0/index.mdx",
      title: "Dynamic Text Panel 3.0.0",
      description:
        "We released a new version of Dynamic Text Panel 3.0.0. This major release",
      date: "2023-02-19T00:00:00.000Z",
      formattedDate: "February 19, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-3.0.0-20230219/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-02-19-dynamictext-panel-3.0.0/banner.png",
        keywords: [
          "Dynamic Text",
          "Panel",
          "Data",
          "Code",
          "Highlight",
          "Grafana",
        ],
        updated: "2023-03-02T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.2.0",
        permalink: "/blog/calendar-panel-1.2.0-20230223/",
      },
      nextItem: {
        title: "Grafana Development Templates 2.2.0",
        permalink: "/blog/development-templates-2.2.0-20230216/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Dynamic Text Panel 3.0.0. This major release\n\n- Added Styles editor.\n- Added Code Syntax Highlight.\n- Introduced selecting optional editors to display, which are hidden by default. Editors with updated values are always displayed.\n- Removed panel padding. Padding can be added using the Styles editor.\n- Updated to the latest Grafana 9.3.6 toolkit and workflows.\n\n:::info Grafana Catalog\nThe plugin was updated in Grafana Catalog on February 21, 2023.\n:::\n\n## 2 Million downloads\n\nThe Dynamic Text panel was downloaded more than two million times.\n\n<Image\n  title="Two million downloads in two years."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/downloads.png"\n  lazy={false}\n/>\n\n## Community Use case\n\nWe are impressed with the everyday creations from the community using the latest features in the Dynamic Text panel for Grafana.\n\nOne of the interesting use cases is creating tabs with styles, JavaScript Code, and a mix of Handlebars with HTML. Previously it can be possible only with custom panels.\n\n<Image\n  title="JavaScript code with Styles and a mix of Handlebars with HTML to display navigation tabs."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/example.png"\n/>\n\n## Magic (JavaScript) Trio\n\nDynamic Text is one of the three plugins that make Grafana complete. Dynamic Text, Data Manipulation and Apache ECharts are all you need to create functional real-world web applications.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Select Editor to display\n\nTo simplify panel options we decided to hide Default Content, JavaScript Code and Styles editors by default.\n\nIf you changed the value of Default Content or already using the JavaScript Code, then editors will be displayed even if not selected.\n\n<Image\n  title="Select optional editors for Default Content and JavaScript Code to display."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/select.png"\n/>\n\nIn many cases, you don\'t need to update the Default Content or use JavaScript Code and Styles. We love the minimalistic design with only the Content editor displayed and I hope you will too.\n\n## Styles editor\n\nYou can add custom styles or override the default using the dedicated code editor with CSS syntax highlight.\n\n<Image\n  title="Add custom styles for table cells and bold text."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/styles.png"\n/>\n\n<details>\n  <summary>Default styles</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/blob/main/src/styles.ts"\n  language="js"\n/>\n\n</details>\n\n### Padding and margins\n\nTo display content without padding and margins override the parent CSS style.\n\n```css\n& {\n  padding: 0;\n  margin: 0;\n}\n```\n\n## Code Syntax Highlight\n\nThe code syntax highlight is based on the `highlight.js` library, which supports major languages.\n\n<Image\n  title="Random Walk data displayed with highlight and no margins or paddings."\n  src="/img/blog/2023-02-19-dynamictext-panel-3.0.0/highlight.png"\n/>\n\n### Styling\n\nWe included the Accessibility (a11y) syntax highlight style for light and dark themes. You can override it in the Styles editor by copying one of the styles from the [project source files](https://github.com/highlightjs/highlight.js/tree/main/src/styles).\n\n<details>\n  <summary>a11y Light</summary>\n\n<Code\n  url="https://github.com/highlightjs/highlight.js/blob/main/src/styles/a11y-light.css"\n  language="css"\n/>\n\n</details>\n\n<details>\n  <summary>a11y Dark</summary>\n\n<Code\n  url="https://github.com/highlightjs/highlight.js/blob/main/src/styles/a11y-dark.css"\n  language="css"\n/>\n\n</details>\n\n## Getting Started\n\nThe Dynamic Text visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text visualization panel lets you define a text template using the data from your data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in the Dynamic text panel."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nThe default Content and JavaScript editors are not displayed by default unless values were modified.\nTo display required editors, including the new Styles, they should be selected in the list.\n\n### Features / Enhancements\n\n- Update README features with new JavaScript Code Editor tutorial (#141)\n- Update to Grafana 9.3.6 (#147)\n- Update CI and Release workflows (#147)\n- Update README to include JavaScript tutorial (#148)\n- Add custom styles (#149)\n- Add option to display optional editors (#149)\n- Remove Panel Padding (#150)\n- Add Code Syntax Highlight (#151)\n- Add Breaking Changes for displaying optional editors (#152)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "development-templates-2.2.0-20230216/",
    metadata: {
      permalink: "/blog/development-templates-2.2.0-20230216/",
      source: "@site/blog/2023-02-16-development-templates-2.2.0/index.mdx",
      title: "Grafana Development Templates 2.2.0",
      description:
        "We released a new version of Grafana Development Templates (Panel, Data Source and Application) 2.2.0. This maintenance release",
      date: "2023-02-16T00:00:00.000Z",
      formattedDate: "February 16, 2023",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "development-templates-2.2.0-20230216/",
        tags: ["Development", "Release Notes"],
        image: "/img/blog/2023-02-16-development-templates-2.2.0/banner.png",
        keywords: [
          "Panel",
          "Data Source",
          "Application",
          "Grafana",
          "Development",
        ],
        updated: "2023-03-26T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 3.0.0",
        permalink: "/blog/dynamictext-panel-3.0.0-20230219/",
      },
      nextItem: {
        title:
          "Romance of documentation and blog produced a story-telling analytics",
        permalink: "/blog/documentation-updates-20230214/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Grafana Development Templates (Panel, Data Source and Application) 2.2.0. This maintenance release\n\n- Updated to the latest Grafana toolkit 9.3.6.\n- Updated CI and Release workflows.\n- Updated README, and configuration.\n- Added screenshots and updated plugin JSON file.\n\n<Image\n  title="The Abc panel uses Static Data Source to display value from the field."\n  src="/img/blog/2023-02-16-development-templates-2.2.0/dashboard.png"\n  lazy={false}\n/>\n\n## Grafana Plugin Tools\n\n:::info Improvements\nGrafana Team did some improvements in the tools and added deprecated messaging to the Grafana Toolkit.\n\nWe will migrate our plugins to Grafana tools for Grafana 10 release.\n:::\n\nGrafana recently released `@grafana/create-plugin@1.0.0`, which will eventually replace the plugin development parts of `@grafana/toolkit`. There is no timeline for when it happens.\n\nPlugin Tools are supposed to be\n\n- Easy to Use.\n- Focus on What Matters.\n- Provides Transparency.\n\nWe created a new plugin and migrated the existing one. I don\'t see any reason to migrate from the toolkit yet considering\n\n- Project is not well maintained with legacy issues still open.\n- Project has separate [documentation](https://grafana.github.io/plugin-tools/) from the Grafana docs.\n- Released version is based on an older version of libraries when the toolkit is built on 9.3.6.\n\nUntil we have a clear direction, we will continue using the toolkit in our templates.\n\n## GitHub Actions\n\nIn our Continuous Integration (CI) and Release GitHub Actions we used `Is Compatible` and custom `plugin-validator` steps, which were removed.\n\nBoth of them we consider as works in progress and use on-demand when required.\n\n- `Is Compatible` GitHub Action is outdated based on Node 12 and set-output commands, which will stop working soon. The open issue to migrate has not been fixed since October.\n- Plugin Validator requires setup of Golang environment and we have not seen any valuable feedback from it using our templates.\n\n## Getting Started\n\nWe created many Grafana panels, data sources and applications to this moment. To make the creation process efficient, starting with a well-constructed template is always easier.\n\n- Application [https://github.com/VolkovLabs/volkovlabs-abc-panel/generate](https://github.com/VolkovLabs/volkovlabs-abc-panel/generate).\n- Data source [https://github.com/VolkovLabs/volkovlabs-abc-datasource/generate](https://github.com/VolkovLabs/volkovlabs-abc-datasource/generate).\n- Panel [https://github.com/VolkovLabs/volkovlabs-abc-panel/generate](https://github.com/VolkovLabs/volkovlabs-abc-panel/generate).\n\n## Documentation\n\n- [Abc Application template](/plugins/volkovlabs-abc-app/)\n- [Abc Data Source template](/plugins/volkovlabs-abc-datasource/)\n- [Abc Panel template](/plugins/volkovlabs-abc-panel/)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "documentation-updates-20230214/",
    metadata: {
      permalink: "/blog/documentation-updates-20230214/",
      source: "@site/blog/2023-02-14-documentation-updates/index.mdx",
      title:
        "Romance of documentation and blog produced a story-telling analytics",
      description:
        "When Volkov Labs initiated multiple online channels to share our Grafana experience, we could not even think our documentation and blog would be in such grand demand.",
      date: "2023-02-14T00:00:00.000Z",
      formattedDate: "February 14, 2023",
      tags: [
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["daria", "mikhail"],
        slug: "documentation-updates-20230214/",
        tags: ["Volkov Labs", "Analytics"],
        image: "/img/blog/2023-02-14-documentation-updates/banner.png",
        keywords: ["Documentation", "Grafana", "Analytics"],
        updated: "2023-03-02T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana Development Templates 2.2.0",
        permalink: "/blog/development-templates-2.2.0-20230216/",
      },
      nextItem: {
        title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
        permalink: "/blog/nginx-loki-grafana-20230129/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWhen Volkov Labs initiated multiple online channels to share our Grafana experience, we could not even think our documentation and blog would be in such grand demand.\n\nI personally never liked what documentation is in its classic flavor. And I am not alone. No one from the problem-solving gang wants to "Learn Grafana". People who get things done need specific answers to particular questions.\n\nThat\'s why in December, we realized it was time to shake up the standard approach to documentation. Little did we know two months later, when we got visitors from 100+ countries.\n\n<Image\n  title="Users\' feedback has immense potential when collected and analyzed right."\n  src="/img/blog/2023-02-14-documentation-updates/analytics.png"\n  lazy={false}\n/>\n\nAll that time for face-lifting and organizing various READMEs, existing doc files, issues, examples and blog posts paid off with worthwhile dividends. Now we have structured educational materials with meticulously tuned web analytics on top.\n\n<Video\n  src="https://www.youtube.com/embed/0EyFmMlIXPo"\n  title="How to tell the story with Grafana dashboard. Apache ECharts, Bar Chart, Logs, and Heatmap."\n/>\n\nWe can move toward new projects while still having a firm grasp on the current web resources state, simultaneously getting little hints on what to work on next.\n\n## Blog\n\nA year ago, we started with the idea that having a technical blog describing personal experience and development thought processes could be a viable way of telling the world who we are.\n\nAt the time, Volkov Labs did not have its platform and, indeed, outsourcing was invented by good Gods.\n\nWe chose Medium, an excellent platform for mostly technological blogging. It served us well until we studied Google Analytics and Search tools to realize that Medium competes with our flimsy (back then) documentation instead of helping.\n\nMoreover, the obligation to follow the stylistic requirements prevents us from having one recognizable visual appearance.\n\n<Image\n  title="Our fully remodeled blog, collecting helpful use cases, tutorials, new release notes, big announcements and more."\n  src="/img/blog/2023-02-14-documentation-updates/blog.png"\n/>\n\nMedium is a great platform. We have been and will be using it as readers to educate ourselves and stay tuned to the ever-changing technological world. However, business wit whispers to post all our materials in one place, where we have complete control over all aspects from style to analytics.\n\n## Documentation\n\nDocumentation and blog are two sides of one platform, ideally complementing each other.\n\n<Image\n  title="We collected answers to questions from the community in one place."\n  src="/img/blog/2023-02-14-documentation-updates/docs.png"\n/>\n\nDocumentation is a quick WHAT and HOWTO, while blog posts range from entry-level step-by-step tutorials to groundbreaking use cases, from release notes to big announcements and other projects we are working on.\n\nBoth our blog and documentation are living things. We improve them daily following requests and questions from the community.\n\n## Analytics Dashboard\n\nThe [analytics dashboard](/blog/nginx-loki-grafana-20230129/) is on our main office display. A quick glance tells us many things.\n\n- How many users are reading us right now.\n- What countries they are from.\n- If there are any delays in our responses (are we still online and responsive).\n- If anyone is trying to break in.\n- What is the topic that people are interested in the most?\n\n<Image\n  title="We collected answers to questions from the community in one place."\n  src="/img/blog/2023-02-14-documentation-updates/tv.jpg"\n/>\n\n<details>\n  <summary>Grafana dashboard source code</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-02-14-documentation-updates/analytics.json"\n  language="json"\n/>\n\n</details>\n\n## Search\n\nSearch should not be painful and sometimes we got lost ourselves. We implemented Algolia Search for our Blog and Documentation and couldn\'t be happier with the outcome.\n\n<Image\n  title="Searching for PostgreSQL across documentation and blog posts."\n  src="/img/blog/2023-02-14-documentation-updates/search.png"\n/>\n\nDuring installation, the Algolia Crawler helped us to fix multiple internal issues and was easy to configure with an intuitive UI.\n\nAlgolia Search provides us with valuable information on what visitors are looking for and having a hard time finding.\n\n## Tutorial\n\nWe explained how to set up Nginx, Loki, Promtail and Grafana in the article [Website Analytics based on Nginx, Loki, Promtail, and Grafana](/blog/nginx-loki-grafana-20230129/). It\'s up to date with our latest findings.\n\nIn the following video, I will walk you through the visual panel configuration. Please be aware demonstrated dashboard is a little different from the one we use in our production.\n\n<Video\n  src="https://www.youtube.com/embed/cgu3wMOo03w"\n  title="Tutorial on how to create a website analytics dashboard in Grafana."\n/>\n\n## Summary\n\nDocumentation is a skeleton, blog posts are the meat. The documentation is an outline, and blog posts are coloring. They complement each other.\n\nWhen one gives direction, the other explains why. We believe that both are equally important. That is why we improve them daily.\n\nThe analytical dashboard is our web heart rate monitor that helps us to maneuver in the sea of questions and requests.',
  },
  {
    id: "nginx-loki-grafana-20230129/",
    metadata: {
      permalink: "/blog/nginx-loki-grafana-20230129/",
      source: "@site/blog/2023-01-29-nginx-loki-grafana/index.mdx",
      title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
      description:
        "In this weekend's project, we found a way to collect and visualize the content metrics for our website. Who, What, and from Where requested our resources, like our blog and documentation. To achieve this goal, we assembled Nginx, Loki, and Promtail into a pipeline to work together, showing all required metrics on a Grafana dashboard.",
      date: "2023-01-29T00:00:00.000Z",
      formattedDate: "January 29, 2023",
      tags: [
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
        {
          label: "Loki",
          permalink: "/blog/tags/loki",
        },
        {
          label: "Nginx",
          permalink: "/blog/tags/nginx",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "nginx-loki-grafana-20230129/",
        tags: ["Analytics", "Loki", "Nginx"],
        image: "/img/blog/2023-01-29-nginx-loki-grafana/banner.png",
        keywords: ["NGINX", "Loki", "Grafana", "Analytics"],
        updated: "2023-03-26T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Romance of documentation and blog produced a story-telling analytics",
        permalink: "/blog/documentation-updates-20230214/",
      },
      nextItem: {
        title:
          "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
        permalink: "/blog/grafana-postgresql-20230123/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIn this weekend\'s project, we found a way to collect and visualize the content metrics for our website. Who, What, and from Where requested our resources, like our blog and documentation. To achieve this goal, we assembled Nginx, Loki, and Promtail into a pipeline to work together, showing all required metrics on a Grafana dashboard.\n\n<Image\n  title="Website Analytics based on NGINX, Loki and Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/dashboard.png"\n  lazy={false}\n/>\n\nIf you google how to collect Nginx logs using Promtail and Loki, you most likely will find various dashboards, outdated GitHub repositories, and other fragments of information. None of them represent a solution as a whole, covering all steps from collecting to visualizing.\n\n## Google Analytics\n\nInitially, we used Google Analytics to track activities on our website. Whenever I opened it, I wanted to close it. Why? The interface is too cluttered with campaigns, revenue, retention, and channels. I am forced to dig through a pile of distracting information to find a single useful tidbit. Yet, even after spending time configuring existing custom dashboards and reports, one vital piece was still missing: user activities.\n\nThe one that set me on this endeavor of creating story-telling analytics, to begin with. User activities are often blocked on firewalls, security, and VPN devices. All that made me look elsewhere, surfacing a simple idea of collecting user activities directly from the web server. That approach will help to keep the essential data.\n\n## Log flow\n\nBelow is the schema of the system we came up with. It illustrates what pieces come together in our puzzle and the data flow.\n\nLet\'s examine each component\'s functions and take a closer look at each one.\n\n- Nginx serves the website and produces log files.\n- Promtail collects, and processes log files from Nginx and pushes them to Loki.\n- Loki aggregates log files.\n- Grafana displays content metrics along with some technical details. The data comes from Loki via the Loki data source.\n\n<Image\n  title="System architecture where tailored metrics lead to decision making."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/flow.png"\n/>\n\n## Nginx\n\nNginx is a web server that can be a reverse proxy, load balancer, and cache. We use it in front of all our projects. For optimal performance, we chose to install it on the host.\n\nNginx configuration allows you to choose the data elements you want to store. You can keep everything and gift yourself a pass to think later about what you will do with all that data. On the downside of this, the volume of data snowballs. Are you willing to take on the extra task of keeping everything up and running?\n\nFrom the beginning of this project, I had a clear vision of what data elements are required. Therefore, our minimalist set of cherry-picked variables are:\n\n| Variable             | Description                                              |\n| -------------------- | -------------------------------------------------------- |\n| `time_local`         | Local time.                                              |\n| `remote_addr`        | Client IP.                                               |\n| `request_uri`        | Full path and arguments for the request.                 |\n| `status`             | Response status code.                                    |\n| `http_referer`       | HTTP referer.                                            |\n| `http_user_agent`    | HTTP clients - user agents.                              |\n| `server_name`        | The name of the server handling the request.             |\n| `request_time`       | Request processing time in seconds with msec resolution. |\n| `geoip_country_code` | Geo location based on client IP.                         |\n\nWe also added additional configuration to the main configuration file `nginx.conf` to get as clean input data as possible and avoid further processing in Promtail and Grafana.\n\n- Replace empty values in `http_referer` with `(direct)` similar to Google Analytics.\n- Replace empty values in `http_user_agent` with `Unknown`.\n- Replace empty values in `geoip_country_code` with `Unknown`.\n- Use preinstalled Geo IP database `/usr/share/GeoIP/GeoIP.dat`.\n- Add `json_analytics` logging JSON format with provided variables, which we will use for server blocks.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/nginx.conf"\n  language="nginx"\n/>\n\nA produced JSON record from the log file looks like this.\n\n```json title=analytics.log\n{\n  "time_local": "29/Jan/2023:02:57:08 +0000",\n  "remote_addr": "111.222.334.444",\n  "request_uri": "/plugins/volkovlabs-form-panel/request/",\n  "status": "200",\n  "http_referer": "(direct)",\n  "http_user_agent": "Mozilla/5.0",\n  "server_name": "volkovlabs.io",\n  "request_time": "0.000",\n  "geoip_country_code": "CZ"\n}\n```\n\n### Geo IP database\n\nA Geo IP database is a database of IP addresses with their locations tagged, which we use in Nginx to perform geolocation using an IP address.\n\nPreinstalled Geo IP database on our Linux server is outdated, but works great for this project and does not require additional configuration. To be able to do geolocation, Nginx should have the module [`ngx_http_geoip_module`](http://nginx.org/en/docs/http/ngx_http_geoip_module.html) enabled.\n\n```sh\n/usr/share/GeoIP# ls -lrt\ntotal 7912\n-rw-r--r-- 1 root root 6426573 Nov  8  2018 GeoIPv6.dat\n-rw-r--r-- 1 root root 1672893 Nov  8  2018 GeoIP.dat\n```\n\nModern [GeoIP2 database](https://www.maxmind.com/en/geoip2-databases) can be used instead of outdated Geo IP. It requires:\n\n- Set up an account.\n- Additional configuration for daily updates.\n- Compile Nginx with an additional module supporting GeoIP2.\n\nYou can easily find instructions on how to do it and go this route if required.\n\n### Server configuration\n\nServer blocks in Nginx can be used to encapsulate configuration details and host more than one domain on a single server. In the configuration file for the website we added additional logging in the file `analytics.log` using discussed JSON format.\n\n```nginx\nserver {\n  access_log /var/log/nginx/analytics.log json_analytics;\n}\n```\n\n## Loki\n\nLoki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus. It does not index the contents of the logs, but rather a set of labels for each log stream.\n\nIn our environment we are running Loki in a Docker container orchestrated using `docker-compose`.\n\n- The data folder `/loki` stored in the volume folder on a local drive.\n- Configuration file `/etc/loki/local-config.yaml` stored in the `loki` folder next to the data.\n- Uses the latest stable version `2.7.1`.\n\n```docker title=docker-compose.yml\n  loki:\n    container_name: loki\n    image: grafana/loki:2.7.1\n    restart: always\n    network_mode: host\n    volumes:\n      - ./loki/data:/loki\n      - ./loki/loki.yml:/etc/loki/local-config.yaml\n```\n\nLoki, Promtail, and Grafana containers are distributed on separate hosts, and we run them in the network host mode.\n\n### Configuration\n\nThe configuration file is based on the default file shipped with the `2.7.1` release. We updated the configuration to increase the number of maximum outstanding requests to accommodate the Grafana dashboard.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/loki.yml"\n  language="yaml"\n/>\n\nYou can learn more about Loki configuration in the [Documentation](https://grafana.com/docs/loki/latest/configuration/).\n\n## Promtail\n\nPromtail is an agent which ships the contents of local logs to a private Grafana Loki instance. It is usually deployed to every machine that has applications needed to be monitored.\n\nSimilar to Loki we are running Promtail in a Docker container orchestrated with `docker-compose`.\n\n- Configuration file `/etc/promtail/config.yml` stored in the `loki` folder.\n- The Nginx log folder `/var/log/nginx` was added to the container.\n- Uses the latest stable version `2.7.1`.\n\n```docker title=docker-compose.yml\n  promtail:\n    image: grafana/promtail:2.7.1\n    restart: always\n    container_name: promtail\n    network_mode: host\n    volumes:\n      - ./loki/promtail.yml:/etc/promtail/config.yml\n      - /var/log/nginx:/var/log/nginx\n```\n\n### Configuration\n\nThe configuration file is based on the default file shipped with the `2.7.1` release. We updated the configuration for Nginx analytics log files to add labels `job`, `host`, and `agent` and watch for `analytics.log` files.\n\nPromtail push logs to the Loki specified in the configuration file `http://LOKI-IP:3100/loki/api/v1/push`, which is located on a separate host in our configuration.\n\nWe added Pipeline stages to drop records we are not interested in.\n\n- Requests from Googlebot, inspectors, test, network devices and RSS collectors.\n- Requests for images and assets (Javascript, CSS) in the special folders.\n- Requests for particular files for browsers and indexing engines.\n- Malicious request from scanners to find PHP and XML files.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/promtail.yml"\n  language="yaml"\n/>\n\nThe [Pipelines](https://grafana.com/docs/loki/latest/clients/promtail/pipelines/) can be changed and updated based on your requirements.\n\n## Grafana\n\nWe love Grafana and use it for all our projects. We covered the installation process in the video.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\n### Loki data source\n\nA Loki data source is preinstalled in Grafana. We used the URL `http://localhost:3100` to connect to the private Loki instance without authorization.\n\n<Image\n  title="Loki data source configuration in Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/loki.png"\n/>\n\n## Analytics Dashboard\n\nWebsite Analytics dashboard was inspired by [Grafana Loki Dashboard for NGINX Service Mesh](https://grafana.com/grafana/dashboards/12559-grafana-loki-dashboard-for-nginx-service-mesh/?pg=dashboards&plcmt=featured-main), one of the most interesting and updated dashboards we can find for Nginx.\n\nEach panel and query was updated according to our styling guidelines and requirements. In this video, Daria will guide you through the process of creating the dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/cgu3wMOo03w"\n  title="Tutorial on how to create a website analytics dashboard in Grafana."\n/>\n\n### Content metrics\n\nThe first part of the dashboard provides content metrics - Who, What and from Where requested resources.\n\n- Geomap displays a number of requests for each Geo location, except unrecognized countries replaced with `Unknown`.\n- Requests panel displays the total number of requests in the selected Time Range.\n- Visitors per Hour displays a number of unique remote IP addresses per hour.\n- A list of countries as a sorted table with values mapping. The list of countries can be updated if required.\n- Referers display the location from where requested resources are being used.\n- Successfully Requested Pages displays the most frequently requested resources.\n\n<Image\n  title="Content metrics for the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/content.png"\n/>\n\n### Technical metrics\n\nThe second part of the dashboard contains technical information.\n\n- Processing Time (95th Percentile and Max latency) to diagnose any technical issues with delivering content.\n- Status of the HTTP requests in 5 minutes blocks displayed as bars.\n- The most frequently used User Agents with information about browsers and platforms.\n- Logs to display raw logging information and verify that we are collecting only required fields and records.\n\n<Image\n  title="Technical metrics for the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/technical.png"\n/>\n\n### Heatmap\n\nThe third part of the dashboard contains heatmaps, which help to understand when and from where resources were requested in the selected Time Range.\n\n- Country displays requests per country.\n- Requested pages display requests per resource.\n\n<Image\n  title="Heatmap of the website requests."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/heatmap.png"\n/>\n\n### Import\n\nTo import the created dashboard, find the `Import` menu. The location might differ depending on your installed Grafana version, but that menu should always be somewhere.\n\n<Image\n  title="Import dashboard file into Grafana."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/import-menu.png"\n/>\n\nFor the dashboard to function correctly, you must have the Loki data source installed and configured.\n\n<details>\n  <summary>Grafana dashboard source code</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-29-nginx-loki-grafana/dashboard.json"\n  language="json"\n/>\n\n</details>\n\n## Apache ECharts\n\nWe started with the default GeoMap panel to display requests per country. It worked as expected, plotting markers on the map with city-level precision. I prefer the country look from Google Analytics.\n\n<Image\n  title="Apache ECharts panel displays requests per country."\n  src="/img/blog/2023-01-29-nginx-loki-grafana/echarts.png"\n/>\n\nCountry Heatmap is not supported in the GeoMap, and we used the [Apache ECharts panel](/plugins/volkovlabs-echarts-panel) instead. In the following video, we demonstrated how we did it.\n\n<Video\n  src="https://www.youtube.com/embed/0EyFmMlIXPo"\n  title="How to tell the story with Grafana dashboard. Apache ECharts, Bar Chart, Logs, and Heatmap."\n/>\n\n## Summary\n\nThe proposed solution beat our expectations, and we are looking forward to updating the Grafana dashboard based on the collected data in the upcoming weeks.\n\nEliminating unnecessary data allows us to laser focus on the metrics we are looking for. The created dashboard is clean without unnecessary clutter — an excellent example of pure elegance.',
  },
  {
    id: "grafana-postgresql-20230123/",
    metadata: {
      permalink: "/blog/grafana-postgresql-20230123/",
      source: "@site/blog/2023-01-23-postgres-in-grafana/index.mdx",
      title:
        "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
      description:
        "You landed at the right article if you wonder what database to choose for your commercial Grafana-based web application. I will share my thoughts on when it should be PostgreSQL, and you can decide if your use case is any close.",
      date: "2023-01-23T00:00:00.000Z",
      formattedDate: "January 23, 2023",
      tags: [
        {
          label: "Configuration",
          permalink: "/blog/tags/configuration",
        },
        {
          label: "PostgreSQL",
          permalink: "/blog/tags/postgre-sql",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-postgresql-20230123/",
        tags: ["Configuration", "PostgreSQL"],
        image: "/img/blog/2023-01-23-postgres-in-grafana/banner.png",
        keywords: ["PostgreSQL", "Timescale", "Configuration", "Storage"],
        updated: "2023-03-19T00:00:00.000Z",
      },
      prevItem: {
        title: "Website Analytics based on Nginx, Loki, Promtail, and Grafana",
        permalink: "/blog/nginx-loki-grafana-20230129/",
      },
      nextItem: {
        title: "From default Grafana setup to the real deal",
        permalink: "/blog/grafana-setup-20230122/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nYou landed at the right article if you wonder what database to choose for your commercial Grafana-based web application. I will share my thoughts on when it should be PostgreSQL, and you can decide if your use case is any close.\n\nThis article is written to supplement the YouTube video we recently published on our channel. I will add source code to all my examples below.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="Ultimate storage partner for Grafana."\n/>\n\n## Grafana configuration\n\nGrafana stores its configuration (connected data sources, employed visualizations, variables, etc.) in the configuration storage. You end up with an SQLite database after downloading and installing the default Grafana package.\n\nThe [default setup is excellent for discovering Grafana](/blog/grafana-setup-20230122), but for the Next level (when you design the actual application) you would need to switch to either PostgreSQL or MySQL. PostgreSQL is an excellent choice for capturing Grafana configuration.\n\n<Image\n  title="Grafana management basics: Configuration, Provisioning and Data storage."\n  src="/img/blog/2023-01-23-postgres-in-grafana/basics.png"\n  lazy={false}\n/>\n\nBoth databases are open-source, and both are supported by Grafana. The benefits are.\n\n- Configuration in a separate container (or host) makes your application design flexible and manageable, with a more straightforward backup/restoration process.\n- The separated configuration storage does not get lost when the Grafana UI container is acting up.\n- You also can use it for as many UI instances as needed when switching to the High-Availability setup.\n\n## PostgreSQL\n\nIn the video above, I demonstrated how to redirect Grafana UI to a PostgreSQL database. Below I leave the same instructions.\n\nMake sure you have a dedicated PostgreSQL database created. You can surely use the one that is already part of your application ecosystem. Creating a brand new PostgreSQL database is preferable to keep things clean and organized.\n\nStart the PostgreSQL container with TimescaleDB.\n\n```sh\ndocker run -d --name timescaledb -p 5432:5432 \\\n  -e POSTGRES_PASSWORD=password \\\n  timescale/timescaledb:latest-pg14\n```\n\nStart the `psql` to connect to the database.\n\n```sh\ndocker exec -it timescaledb psql -h localhost -p 5432 -U postgres -w\n```\n\n### Create database\n\nCreate a new database to store Grafana UI configuration.\n\n```sql\ncreate database grafana_configuration_database;\n```\n\nVerify the database is created. It should appear in the output listing.\n\n```sql\n\\l\n\n                                        List of databases\n              Name              |  Owner   | Encoding | Collate |  Ctype  |   Access privileges\n--------------------------------+----------+----------+---------+---------+-----------------------\n grafana_configuration_database | postgres | UTF8     | C.UTF-8 | C.UTF-8 |\n postgres                       | postgres | UTF8     | C.UTF-8 | C.UTF-8 |\n template0                      | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +\n                                |          |          |         |         | postgres=CTc/postgres\n template1                      | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +\n                                |          |          |         |         | postgres=CTc/postgres\n(4 rows)\n```\n\nMake the new database current.\n\n```sql\n\\c grafana_configuration_database\n\nYou are now connected to database "grafana_configuration_database" as user "postgres".\n```\n\nReview the list of existing relations. It should be none.\n\n```sql\n\\d\n\nDid not find any relations.\n```\n\n### Start Grafana\n\nNext, run your Grafana UI container and point it to the PostgreSQL database.\n\n```sh\ndocker run --network=host -e GF_DATABASE_TYPE=postgres \\\n -e GF_DATABASE_HOST=localhost:5432 \\\n -e GF_DATABASE_NAME=grafana_configuration_database \\\n -e GF_DATABASE_USER=postgres \\\n -e GF_DATABASE_PASSWORD=password grafana/grafana:latest\n```\n\nYou need to reassign five environment variables. Ensure to prefix each with `-e`. Do not forget all environment variables\' names should be in upper case.\n\nNow, if you switch back to the `psql` and run the command to list all relations, you should see ~114 objects (in Grafana v9.3.X).\n\n```sql\n\\d\n\n                       List of relations\n Schema |              Name               |   Type   |  Owner\n--------+---------------------------------+----------+----------\n public | alert                           | table    | postgres\n public | alert_configuration             | table    | postgres\n public | alert_configuration_id_seq      | sequence | postgres\n public | alert_id_seq                    | sequence | postgres\n public | alert_instance                  | table    | postgres\n public | alert_notification              | table    | postgres\n ....\n```\n\nThat\'s it. Your Grafana UI will now work with the PostgreSQL database. Go ahead, make some changes in Grafana and find them in the database.\n\n## TimescaleDB is a PostgreSQL extension\n\nThe second reason to love PostgreSQL is its particular extension for time-series data Timescale. The huge Timescale advantage is its SQL support. You are free to mix two data formats, relational and time-series, in the same instance and query both via familiar and dearly loved SQL.\n\nAll time-series-specific functions are designed in a way to fit into SQL clauses. Combining two very needed formats is simply genius and, honestly, satisfying.\n\n### Aggregation\n\nIn the video above, I briefly explain one possible data aggregation. My original table has 5-minute stock ticks. The data comes from the [twelvedata](https://twelvedata.com) website via API calls.\n\nTimescale does aggregations by creating Materialized views. You need to specify which field from your original table is `time` and convert it into `bucket`. The materialized view will be updated on any original table data changes without slowing down anything.\n\nIn my example, I chose to aggregate 5-minute ticks into 1-hour ticks.\n\n```sql\nCREATE MATERIALIZED VIEW one_hour_candle\nWITH (timescaledb.continuous) AS\n    SELECT\n        time_bucket(\'1 hour\', datetime) AS bucket,\n        stock_symbol,\n        FIRST(open, datetime) AS "open",\n        MAX(high) AS high,\n        MIN(low) AS low,\n        LAST(close, datetime) AS "close",\n        LAST(volume, datetime) AS volume\n    FROM stocks\n    GROUP BY bucket, stock_symbol;\n```\n\n### Hypertable\n\nThe table `stocks` to capture stock data is a hyper table. I created it as a regular and converted it into a hyper table. The first parameter is a table name to convert, and the second is a column name with a timestamp.\n\n```sql\ncreate table stocks (\n  datetime timestamptz,\n  open real,\n  high real,\n  low real,\n  close real,\n  volume integer,\n  stock_symbol text\n);\n\nSELECT create_hypertable(\'stocks\', \'datetime\');\n```\n\n## Relational data\n\nAnd the third reason we love PostgreSQL is that it is the world\'s most advanced open-source relational database.\n\nThis fact, along with time-series ability and using PostgreSQL for configuration storage, makes it an ultimate choice for Grafana. Working with one database for all your needs is more accessible than with many different kinds.\n\nLoad stock data from a file into the `stocks` table.\n\n```sql\nCOPY stocks FROM \'/tmp/time_series-TSLA-5min.csv\' (DELIMITER(\';\'), HEADER TRUE, FORMAT CSV);\nupdate tesla_stocks set stock_symbol = \'TSLA\';\n```\n\nCreate a table to capture descriptive information along with logo images.\n\n```sql\ncreate table stock_image (\n  stock_symbol text,\n  stock_name text,\n  scaleX real,\n  scaleY real,\n  image_svgxml text\n);\n```\n\nPopulate the `stock_image` table.\n\n:::info Replace\nNote, I replaced the symbol `#` with `%23` in the `fill` attribute.\n\n`fill="#f90"` change to `fill="%23f90"`\n:::\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-23-postgres-in-grafana/image.sql"\n  language="sql"\n/>\n\n## Grafana dashboard\n\nTo import the dashboard, find the Import menu. The location might differ depending on your installed Grafana version, but that menu should always be somewhere.\n\n<Image\n  title="Import dashboard file into Grafana."\n  src="/img/blog/2023-01-23-postgres-in-grafana/import-menu.png"\n/>\n\nFor the code to function correctly, you will need to have the PostgreSQL data source setup and have the same tables and materialized view in your database.\n\n<details>\n  <summary>Grafana dashboard source code from the video</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2023-01-23-postgres-in-grafana/dashboard.json"\n  language="json"\n/>\n\n</details>\n\nFeel free to ask questions and let me know if I forgot any steps. I will gladly alter the instructions accordingly.\n\n## Summary\n\nPostgreSQL combines the three most required storage needs:\n\n- Configuration,\n- Time-series,\n- Relational.\n\nThose are the three primary storage needs for our commercial applications. PostgreSQL was an easy and obvious choice.',
  },
  {
    id: "grafana-setup-20230122/",
    metadata: {
      permalink: "/blog/grafana-setup-20230122/",
      source: "@site/blog/2023-01-22-grafana-setup/index.mdx",
      title: "From default Grafana setup to the real deal",
      description:
        "I did not find much-organized information about Grafana configuration from the management point of view. There is this famous default setup, but it is not clear what its limits are. Also, for those who would want to take the next step to an actual application, what direction should it be, or in other words, what should be modified in the default Grafana installation package to convert it into the real deal?",
      date: "2023-01-22T00:00:00.000Z",
      formattedDate: "January 22, 2023",
      tags: [
        {
          label: "Configuration",
          permalink: "/blog/tags/configuration",
        },
        {
          label: "PostgreSQL",
          permalink: "/blog/tags/postgre-sql",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-setup-20230122/",
        tags: ["Configuration", "PostgreSQL"],
        image: "/img/blog/2023-01-22-grafana-setup/banner.png",
        keywords: ["PostgreSQL", "Setup", "Grafana", "High-Availability"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title:
          "PostgreSQL with Timescale is the ultimate storage partner for Grafana",
        permalink: "/blog/grafana-postgresql-20230123/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.1.0",
        permalink: "/blog/echarts-panel-4.1.0-20230113/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nI did not find much-organized information about Grafana configuration from the management point of view. There is this famous default setup, but it is not clear what its limits are. Also, for those who would want to take the next step to an actual application, what direction should it be, or in other words, what should be modified in the default Grafana installation package to convert it into the real deal?\n\nThis article consists of the notes I took during my research. I share them to save the reader\'s time and effort.\n\nIn any setup, Grafana can be installed directly on the host or in a Docker container. That\'s why every rectangle representing Grafana has the docker slash host symbol on the diagram below.\n\n<Image\n  title="The Default, Next level and High Availability setups side-by-side."\n  src="/img/blog/2023-01-22-grafana-setup/setup.png"\n  lazy={false}\n/>\n\nLet\'s review every level and who can benefit from each.\n\n## Default setup\n\nYou get the default setup when you download Grafana and follow the simple installation steps.\n\n<Image\n  title="In the default setup, Grafana is bundled with the SQLite database."\n  src="/img/blog/2023-01-22-grafana-setup/default.png"\n  height="400px"\n/>\n\nGrafana configuration is a set of parameters describing\n\n- Dashboards.\n- Data sources.\n- Installed plugins.\n- Variables.\n- Users and permissions, etc.\n\nGrafana configuration is stored in a database. In the default setup, Grafana is bundled with the SQLite database.\n\n### Provisioning\n\n[Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/) is a mechanism to push dashboards and data source configuration using JSON files into Grafana UI. This mechanism is a simplified way to create applications with embedded/preset data sources, plugins, and dashboards.\n\nUsers cannot introduce changes to the provisioned dashboard and data sources unless it\'s allowed in the configuration.\n\n### SQLite database\n\nSQLite is designed explicitly for small applications and is widely employed in myriads of applications across the globe. The database is meant to be coupled with an application, ensuring high reliability and efficiency.\n\nThe database is so tiny and fast that some people do not even realize it exists side by side with their favorite applications on the phone or computer. The code of SQLite is open for anyone to use for any purpose.\n\nThe default setup suits beginners well since it eliminates the maintenance needs allowing them to start exploring Grafana instantly, literally minutes after they learned about Grafana\'s existence.\n\n### Skills level\n\nThe skill level required for this setup is relatively minimal. An inquisitive beginner-to-intermediate developer or analyst can tackle the task with ease.\n\n## Next Level\n\nThe next level setup is the lowest level you must be on for any commercial and industrial applications.\n\n<Image\n  title="In the Next level setup, Grafana UI connects to the external PostgreSQL or MySQL database."\n  src="/img/blog/2023-01-22-grafana-setup/next-level.png"\n  height="600px"\n/>\n\nOn that setup, the Grafana UI and the configuration storage (which is NOT the same as application data storage) are separated and dwell in two segregated containers and/or hosts. When Grafana users make any changes (for instance, adding data sources and visualizations), these changes go into a separate entity, namely, configuration storage.\n\nYou can choose between databases\n\n- PostgreSQL.\n- MySQL.\n\nWe discussed how to update Grafana environment variables to use the PostgreSQL database in our recent video.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nThis architecture allows solving any challenging problems as long as developers are willing to think out of the box and do not tend to stay on the paved trail.\n\n### Skill level\n\nYour best bet is someone who knows Grafana deeply and is capable of following changes from one version to another.\n\n## High Availability\n\nLogically, this architecture should have at least two separate Grafana UI.\n\n<Image\n  title="High Availability setup to support the heavy 24/7 load with many users."\n  src="/img/blog/2023-01-22-grafana-setup/high-availability.png"\n  height="600px"\n/>\n\nIt is everything that the next level is, plus a load balancer. A load balancer will redirect the traffic between multiple Grafana UI depending on the load or other parameters.\n\nThe [High-Availability configuration](https://grafana.com/docs/grafana/latest/setup-grafana/set-up-for-high-availability/)\n\n- Allows connecting many Grafana UI to the same configuration storage. Therefore, to have a matching experience across all of Grafana UI.\n- Requires maintaining only one configuration database instance, regardless of the Grafana UI number.\n\n### Skill level\n\nIt would be best to have a whole team of tech pros to support the web application with high upstream/downstream traffic and unstoppable 24/7 user requests.\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "echarts-panel-4.1.0-20230113/",
    metadata: {
      permalink: "/blog/echarts-panel-4.1.0-20230113/",
      source: "@site/blog/2023-01-13-echarts-panel-4.1.0/index.mdx",
      title: "Apache ECharts Panel 4.1.0",
      description:
        "We released a new version of the Apache ECharts Panel 4.1.0 for Grafana. This feature release",
      date: "2023-01-13T00:00:00.000Z",
      formattedDate: "January 13, 2023",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.1.0-20230113/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2023-01-13-echarts-panel-4.1.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-03-02T00:00:00.000Z",
      },
      prevItem: {
        title: "From default Grafana setup to the real deal",
        permalink: "/blog/grafana-setup-20230122/",
      },
      nextItem: {
        title: "Observability without Data Manipulation is a lost opportunity",
        permalink: "/blog/data-manipulation-grafana-20230112/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of the Apache ECharts Panel 4.1.0 for Grafana. This feature release\n\n- Added Streaming Support for WebSockets and Grafana Live.\n- Added Data Zoom feature updating Time Range similar to TimeSeries panel.\n- Updated Documentation answering community questions.\n\n## Streaming\n\nStreaming allows real-time data updates using streaming Data Sources and Grafana Live. You can find examples and configurations in the [Documentation](/plugins/volkovlabs-echarts-panel/streaming).\n\n### Grafana Live\n\nGrafana Live is a real-time messaging engine introduced in Grafana 8. With Grafana Live, you can push event data to a frontend as soon as an event occurs.\n\n<Image\n  title="Apache ECharts allows displaying messages from Grafana Live real-time engine."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/live.png"\n  lazy={false}\n/>\n\n### WebSocket API\n\nTo stream real-time data, we used the [WebSocket Data Source for Grafana](https://grafana.com/grafana/plugins/golioth-websocket-datasource/).\n\n<Image\n  title="Streaming real-time events from WebSocket data source."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/websocket.png"\n/>\n\n## Data Zoom feature\n\nThe data zoom feature allows selecting the time range on the chart. When the time range is selected the event can trigger updating the dashboard\'s time range using the `locationService` parameter similar to Grafana behavior.\n\n<Image\n  title="Data Zoom feature for Random Walk allows updating Time Range for the selected range."\n  src="/img/blog/2023-01-13-echarts-panel-4.1.0/data-zoom.png"\n/>\n\nYou can find the code in the [Event Handling](/plugins/volkovlabs-echarts-panel/events) section.\n\n## Getting Started\n\nApache ECharts visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate the popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nApache ECharts is one of the three plugins that make Grafana complete. Dynamic Text, Data Manipulation and Apache ECharts are all you need to create functional real-world web applications.\n\n<Video\n  src="https://www.youtube.com/embed/wPr4gZYzUVA"\n  title="Dynamic Text, Data Manipulation and Apache ECharts plugins."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Synchronize the README file with Documentation (#111)\n- Add Streaming Support for WebSockets and Grafana Live (#113)\n- Move InfluxDB Example to the Guest Blog post (#115)\n- Update Documentation and Tutorials in README (#116)\n- Add Data Zoom to default Line Example (#117)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "data-manipulation-grafana-20230112/",
    metadata: {
      permalink: "/blog/data-manipulation-grafana-20230112/",
      source: "@site/blog/2023-01-12-data-manipulation/index.mdx",
      title: "Observability without Data Manipulation is a lost opportunity",
      description:
        "It was a rainy, gloomy day. Billy has been working on a presentation for a critical client since early morning. He spent hours carefully inspecting all formulas and calculation algorithms. The presentation looked impeccable. All numbers copied from the Grafana dashboard were added up adequately. To spice things up, Billy has added a copy of some visualizations. The only little component he did not comprehend completely was the coefficient that had to be applied to all formulas. Still, he did not seem worried since the client, in the last communication, confirmed it was supposed to be 0.3.",
      date: "2023-01-12T00:00:00.000Z",
      formattedDate: "January 12, 2023",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["daria", "mikhail"],
        slug: "data-manipulation-grafana-20230112/",
        tags: ["Data Manipulation", "API"],
        image: "/img/blog/2023-01-12-data-manipulation/banner.png",
        keywords: ["Data Manipulation", "API", "Grafana", "Observability"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.1.0",
        permalink: "/blog/echarts-panel-4.1.0-20230113/",
      },
      nextItem: {
        title: "Dynamic Text Panel 2.2.0",
        permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nIt was a rainy, gloomy day. Billy has been working on a presentation for a critical client since early morning. He spent hours carefully inspecting all formulas and calculation algorithms. The presentation looked impeccable. All numbers copied from the Grafana dashboard were added up adequately. To spice things up, Billy has added a copy of some visualizations. The only little component he did not comprehend completely was the coefficient that had to be applied to all formulas. Still, he did not seem worried since the client, in the last communication, confirmed it was supposed to be 0.3.\n\nThe rain outside kept up, and thunders added worrisome tunes to the late night. Yet, everything was ready. The clock showed 6 pm.\nAt 6:04 pm, the phone rang, and Peter, the client representative, without any excitement, declared that it was a mistake. The coefficient should have been 0.6 all along. He said that he hoped Billy did not start working on the deck just yet. Otherwise, Billy would have to redo everything. The rain now was pouring, and the sounds of thunder followed one another. After saying his goodbyes, Billy went back to his chair. The long night was ahead.\n\nBilly had to redo everything, but not before he got a hold of a database developer to help him update the coefficient value in the database.\n\nThe only thought that circulated in Billy\'s head in the morning was how great it could have been if the client could have entered a coefficient value straight into the database and triggered the recalculation of everything from the Grafana dashboard.\n\n## A new chapter\n\nIn general, data visualizations are guarded against the clients\' interventions. But occasionally, use cases occur when giving access to some elements of the database is beneficial for performance, accuracy, and convenience.\n\nThe following day, after the presentation, Billy learned about the [Data Manipulation plugin for Grafana](/plugins/volkovlabs-form-panel), and a new chapter in his life began.\n\nGrafana is a fantastic tool for visualizing a broad spectrum of metrics. The Grafana journey started in the observability realm. However, flexible architecture paved the road to many industrial and commercial domains far beyond displaying system monitoring metrics.\n\n<Video\n  src="https://www.youtube.com/embed/HNCKbGfAU0Q"\n  title="How to create your Business Grafana dashboard."\n/>\n\nGrafana, among other areas, is gaining popularity as a platform for software development. Many use cases that took Grafana onboard work with users directly. On top of reviewing the Grafana dashboard to make informed analytical decisions, users seek the ability to interact with the database, enter data instantly, and have it available on the dashboard right away.\n\nInitially, Grafana inventors did not include such functionality on the roadmap. Regardless, they made sure of the clever Grafana architecture, which allows any modifications by stacking up plugins using the Grafana toolkit to go above and beyond Observability.\n\nFollowing the community demand, the [Data Manipulation plugin](/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0) was developed earlier this year in May-June. It is open source under [Apache License Version 2.0](https://github.com/volkovlabs/volkovlabs-form-panel/blob/main/LICENSE).\n\n## Data Manipulation plugin\n\nThere are various ways to install it. The easiest one is to use the Plugins Configuration menu when you are in the Grafana Catalog with admin permissions. The plugin can also be downloaded from the Grafana website or [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel).\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\nThe most adventurous approach is, nonetheless, to read the [Data Manipulation plugin page](/plugins/volkovlabs-form-panel). You are destined to discover valuable tidbits along with tips and tricks there.\n\nThe Data Manipulation plugin allows you to insert and update data along with configuration modifications straight from your Grafana dashboard.\n\n## API Server\n\nThe Data Manipulation plugin requires the API server to be installed on the database server or a separate host.\n\n<Image\n  title="Data Manipulation panel uses GET, POST/PUT requests to interact with API Server."\n  src="/img/blog/2023-01-12-data-manipulation/form-api.png"\n  lazy={false}\n/>\n\nThe API server is an excellent way to ensure only the approved data manipulation is allowed.\n\n<Video\n  src="https://www.youtube.com/embed/SHN2S-dRIEM"\n  title="API Node.js server and Deno Deploy."\n/>\n\n### PostgreSQL\n\nLook at a simple API server, which returns submitted feedback from the PostgreSQL database.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-pg/server.ts"\n  language="js"\n/>\n\n### Deno\n\nIf you use Deno (The easiest, most secure JavaScript runtime), this is an excellent example of how to connect it with a panel.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-deno/server.ts"\n  language="js"\n/>\n\nIn the [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel), you can find more examples of PostgreSQL and MySQL databases.\n\nWe recommend running Grafana behind NGINX reverse proxy for a further security layer. The reverse proxy also allows you to expose additional API endpoints and static files in the same domain, which makes it CORS-ready. You can read about it in [How to connect the Data Manipulation plugin for Grafana to API Server](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904).\n\n## Static and Dynamic forms\n\nFollowing the Grafana lead, the Data Manipulation plugin was designed to embrace [flexibility](/plugins/volkovlabs-form-panel/code). You can start with static forms and end up with dynamic ones.\n\n- A static form is hard-coded and created once and for all.\n- A dynamic one allows creating a form on the fly from a data source (such as a database or a CSV file) per rules and configurations.\n\n<Video\n  src="https://www.youtube.com/embed/RSVH1bSBNl8"\n  title="Static and dynamic interface elements of the Data Manipulation plugin."\n/>\n\nFor instance, your application might display different forms depending on the logged user, time of the day, IP address, etc.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/docs/volkovlabs-form-panel/dynamic-elements.js"\n  language="js"\n/>\n\nThe Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard. You can read more about it in the [Documentation](/plugins/volkovlabs-form-panel).\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "dynamictext-panel-2.2.0-20230110/",
    metadata: {
      permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      source: "@site/blog/2023-01-10-dynamictext-panel-2.2.0/index.mdx",
      title: "Dynamic Text Panel 2.2.0",
      description:
        "We released a new version of Dynamic Text Panel 2.2.0. This feature release",
      date: "2023-01-10T00:00:00.000Z",
      formattedDate: "January 10, 2023",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-2.2.0-20230110/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2023-01-10-dynamictext-panel-2.2.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "Data", "Grafana"],
        updated: "2023-02-12T00:00:00.000Z",
      },
      prevItem: {
        title: "Observability without Data Manipulation is a lost opportunity",
        permalink: "/blog/data-manipulation-grafana-20230112/",
      },
      nextItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
        permalink: "/blog/image-panel-3.4.0-20230108/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Dynamic Text Panel 2.2.0. This feature release\n\n- Added JavaScript Code Editor to add Handlebars helpers and Event handlers.\n- Finished refactoring of internal components.\n- Migrate Styles to Grafana Theme v2.\n- Added `{{json @root}}` and `{{split String \',\'}}` helpers.\n- Updated CSS to fit images to the screen.\n- Supported Internationalization using custom helpers.\n\n## JavaScript Code\n\nCommunity asked - we delivered JavaScript Code Editor to add Handlebars helpers and Event handlers. Take a look at the [documentation](/plugins/volkovlabs-dynamictext-panel/code) for examples.\n\n<Video\n  src="https://www.youtube.com/embed/lJqk5Gobec4"\n  title="JavaScript code in the Dynamic text panel."\n/>\n\n### Define Custom Handlebars helper\n\nA custom handlebars helper can be added to replace the field\'s value using a pattern.\n\n```handlebars\n{{replace Test "Pattern" "Replaced"}}\n```\n\nJavaScript Code:\n\n```js\nhandlebars.registerHelper("replace", (context, pattern, replacement) =>\n  context.replace(pattern, replacement)\n);\n```\n\n<Image\n  title="How to create a helper to replace text in the returned data."\n  src="/img/blog/2023-01-10-dynamictext-panel-2.2.0/replace.png"\n  lazy={false}\n/>\n\n### Add Internationalization\n\nGrafana 9 added Internationalization, which is not provided to plugins yet. Meanwhile, we can use the `getLocale()` method to get a value for the selected locale and show messages from a defined dictionary.\n\nContent:\n\n```handlebars\n{{translate "Hello"}}\n```\n\nDefault Content:\n\n```handlebars\n{{translate "Default"}}\n```\n\nJavaScript Code:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/docs/volkovlabs-dynamictext-panel/translate.js"\n  language="js"\n/>\n\n## Getting Started\n\nThe Dynamic Text visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text visualization panel lets you define a text template using the data from your data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Add JSON helper to show objects and arrays (#121)\n- Update to Grafana 9.3.1 (#122)\n- Update Documentation links (#130, #131)\n- Add Split Helper (#132)\n- Refactor Text Component and Styles (#133)\n- Add JavaScript Code to add Handlebars helpers and Event handlers (#134)\n- Update default Content to `{{json @root}}` and Code Editor height to `200px` (#134)\n- Update CSS to fit images to screen (#135)\n- Add `getLocale()` parameter to JavaScript Code (#137)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "image-panel-3.4.0-20230108/",
    metadata: {
      permalink: "/blog/image-panel-3.4.0-20230108/",
      source: "@site/blog/2023-01-08-image-panel-3.4.0/index.mdx",
      title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
      description:
        "We released a new version of Base64 Image/Video/Audio/PDF Panel 3.4.0. This maintenance release",
      date: "2023-01-08T00:00:00.000Z",
      formattedDate: "January 8, 2023",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "image-panel-3.4.0-20230108/",
        tags: ["Base64 Image/Video/Audio/PDF", "Release Notes"],
        image: "/img/blog/2023-01-08-image-panel-3.4.0/banner.png",
        keywords: ["Base64", "Panel", "PDF", "Images", "Video", "Audio"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 2.2.0",
        permalink: "/blog/dynamictext-panel-2.2.0-20230110/",
      },
      nextItem: {
        title: "JSON API Data sources in Grafana",
        permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Base64 Image/Video/Audio/PDF Panel 3.4.0. This maintenance release\n\n- Updated to the latest Grafana toolkit 9.3.2.\n- Updated README and [documentation](/plugins/volkovlabs-image-panel) to explain how to use the panel with data sources and supported formats.\n- "New Year" edition.\n\n<Image\n  title="How to use Base64 Panel to display Base64 PNG image."\n  src="/img/blog/2023-01-08-image-panel-3.4.0/image.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nBase64 Image/Video/Audio/PDF visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\n## YouTube Tutorial\n\nThe Base64 Image/Video/Audio/PDF visualization panel is a plugin for Grafana that displays Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF formats.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.3.2 (#60)\n- Add Documentation links (#61)\n- Update README and documentation (#62)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-image-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "json-api-data-sources-in-grafana-20230104/",
    metadata: {
      permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      source: "@site/blog/2023-01-04-json-api-data-sources/index.mdx",
      title: "JSON API Data sources in Grafana",
      description:
        "Grafana is a visualization tool with all blows and whistles you can think of. Yet, by definition, Grafana never stands alone. Grafana displays, it does not generate, it does not store (with some exceptions, a.k.a. Static data source, storage function). It always has to interact with another artifact: the data storage, whatever that storage is.",
      date: "2023-01-04T00:00:00.000Z",
      formattedDate: "January 4, 2023",
      tags: [
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "json-api-data-sources-in-grafana-20230104/",
        tags: ["Getting Started", "Analytics", "API", "Apache ECharts"],
        image: "/img/blog/2023-01-04-json-api-data-sources/banner.png",
        keywords: [
          "JSON",
          "API",
          "Data Source",
          "Infinity",
          "Simpod",
          "Grafana",
        ],
        updated: "2023-03-16T00:00:00.000Z",
      },
      prevItem: {
        title: "Base64 Image/Video/Audio/PDF Panel 3.4.0",
        permalink: "/blog/image-panel-3.4.0-20230108/",
      },
      nextItem: {
        title: "Static Data Source 2.1.0",
        permalink: "/blog/static-datasource-2.1.0-20221229/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana is a visualization tool with all blows and whistles you can think of. Yet, by definition, Grafana never stands alone. Grafana displays, it does not generate, it does not store (with some exceptions, a.k.a. [Static data source, storage function](/plugins/volkovlabs-static-datasource)). It always has to interact with another artifact: the data storage, whatever that storage is.\n\nAccess via API is one possible approach a visualization tool can use to connect to data storage. This article will share my analysis of the existing API Grafana data sources.\n\n## What is an API data source?\n\nLet\'s start with the basics to ensure we are on the same page.\n\n> Data source in Grafana is an interpreter between the data storage format and a Grafana data frame.\n\n> Grafana data frame is a table-like data structure you can reference using column names while configuring your Grafana visualization panel or any other Grafana aspects. You can think of the Grafana data frame as a data table within Grafana.\n\nThe abbreviation API (for Application Programming Interface) is an overused term in technology discussions. The definition of API is so vague you might think people talk about magic. If you are unfamiliar with API, you could feel lost and bewildered.\n\nThe reality is, however, not frightening at all. API, conceptually, is a mechanism allowing two systems to interact (I know, still mysterious). Regarding Grafana as a visualization tool, API is when a file is generated by another software (in most cases, it is an extract from a database) and then displayed on the Grafana dashboard.\n\nSimply put, a file gets created somewhere else. You give instructions to Grafana on where to get the file (usually a URL) and how to read it (usually by specifying columns and/or data elements\' names).\n\nAll that above brings me to the API data source definition. API data source in Grafana is a plugin that downloads a file via a provided link and then, following the given instructions, reads the file and converts it into a Grafana data frame.\n\n<Image\n  title="API Data Source use GET/POST request to retrieve data from external systems."\n  src="/img/blog/2023-01-04-json-api-data-sources/api-concept.png"\n  lazy={false}\n/>\n\nBoom! That was your API 101 crash course.\n\n## The most popular API data sources\n\nI have them on my schema above. They are\n\n- JSON API,\n- Infinity,\n- SimPod.\n\nLet\'s crack them one by one.\n\n## [JSON API Data source](https://grafana.com/grafana/plugins/marcusolsson-json-datasource/)\n\nYeah, this is its name. Something more distinctive would make things easier. Arugula is a good name for a data source, so why not. But no, we have two super-overused words combined. Brilliant. It surely does not help with Internet searches. Anyways.\n\n<Image\n  title="A JSON API data source plugin for loading JSON APIs into Grafana using JSONPath."\n  src="/img/blog/2023-01-04-json-api-data-sources/json-api.png"\n/>\n\nMarcus Olsson has created the plugin. Now Grafana Labs has taken over and maintains it. Unfortunately, no new features are expected.\n\n### Supported formats\n\nJSON API data source works with JSON format only. So, the system you want to retrieve this file from must create a JSON file for you, with no exceptions.\n\n### Access\n\nIf you are new to API, the good news is the topics of access and CORS restrictions could be omitted. I have to mention it in this article because Grafana does not explicitly notify you when an external system rejects your request due to CORS restrictions. Grafana will behave like nothing is happening, leaving you in limbo.\n\nOpen data sets, by definition, do not have CORS restrictions, which makes JSON API data source an excellent choice to work with them. Especially given that JSON API data source has fewer parameters and a straightforward interface.\n\nThere are many open datasets available to everybody interested in their free data. To name a few:\n\n- [U.S. Bureau of Labor Statistics](https://www.bls.gov/),\n- [American Economic Association](https://www.aeaweb.org/),\n- [NASA Open Data Portal](https://data.nasa.gov/).\n\n## [Infinity API data source](https://grafana.com/grafana/plugins/yesoreyeram-infinity-datasource/)\n\nThe name is outstanding. It is unique, memorable, and has a good meaning.\n\n<Image\n  title="An Infinity data source plugin for loading JSON APIs into Grafana."\n  src="/img/blog/2023-01-04-json-api-data-sources/infinity.png"\n/>\n\nSriramajeyam Sugumaran has created this plugin. He maintains and supports it to this moment.\n\n### Supported formats\n\nI believe the name of this data source comes from the idea of supporting an unlimited number of exchange file formats. Let\'s create a data source that will work with every data structure possible, the author thought. That is my pure speculation.\n\nThe supported formats are JSON, CSV, XML, GraphQL, HTML, UQL, RSS, ATOM and others.\n\n### Access\n\nLike JSON API data source, Infinity can seamlessly work with open data sets (they have no CORS restrictions). In some cases, when CORS restrictions are on, Infinity can bypass them. And here you go, let\'s get more technical and dive an inch deep into Internet security.\n\nTo better understand CORS, I start with\n\n**Same-Origin** is a policy allowing interaction with resources ONLY from the same domain, host and port. For instance, `abc.com` can retrieve data from `abc.com/page1`, but is not permitted to access `anyotherdomain.com`.\n\n**Cross-Origin Resource Sharing (CORS)** policy is more flexible. It was created to allow different domains to interact. If CORS restrictions are off, any domain is allowed to request data. If CORS restrictions are ON, only whitelisted domains are permitted.\n\nThe Infinity data source might bypass that rule since CORS exists on the frontend layer, the layer of browsers. The Infinity data source can access other domains via the backend.\n\nYou can look for a rejection error in your browser Console window.\n\n<Image\n  title="Rejection error in the browser\'s Console."\n  src="/img/blog/2023-01-04-json-api-data-sources/cors.png"\n/>\n\nUnfortunately, Grafana will not be explicit. Nothing will notify you about a CORS restrictions error.\n\n## [SimPod API data source](https://grafana.com/grafana/plugins/simpod-json-datasource/)\n\nThis API data source is for advanced users. This data source is tightly coupled with Grafana core functionality, like tags, variables, range filters, etc. For all that to work, SimPod expects a specific data format. That means you will have to create your API server to interact with external resources. That server will retrieve data in the original layout and convert it into SimPod format.\n\nŠimon Podlipský has created this plugin. He maintains and supports it to this moment.\n\n## Summary schema\n\nThe schema below summarizes the comparative analysis. It shows four data sources, JSON API, Infinity, Simpod, and all other specific data sources combined in the specific data source category. Colors highlight scenarios for each data source.\n\n<Video\n  src="https://www.youtube.com/embed/h1Mx4UvtKGY"\n  title="JSON API, Infinity, Simpod compared."\n/>\n\n**Red** highlights the JSON API data source. It shows that\n\n- This data source is awesome for beginners.\n- Works in no CORS restrictions environment.\n- Supports only one format (JSON).\n- Great for interacting with open datasets.\n\n**Yellow** highlights the Infinity data source, showing that\n\n- Infinity can work with CORS and no CORS environments (since it could access the data domains from frontend and backend).\n- Supports various formats.\n- Great to work with both open and corporate datasets.\n\nSimPod in **Green** color adds extra functionality on top of the core Grafana dashboard for the price of your API server to provide a specific data format (I called it the `JSON+simpod` format in my schema).\n\nIn the **Purple** color, the schema has all corporate scenarios where direct access to the database is permitted.\n\n<Image\n  title="JSON API Data Sources schema summarizes the comparative analysis."\n  src="/img/blog/2023-01-04-json-api-data-sources/json-api-schema.png"\n/>\n\n## How to display the unemployment rate\n\nWatch this video to get a detailed tutorial on displaying data on your Grafana dashboard using JSON API and Infinity data sources.\n\n<Video\n  src="https://www.youtube.com/embed/B4Uj1n4Cr88"\n  title="How to use JSON Data Sources for Grafana."\n/>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "static-datasource-2.1.0-20221229/",
    metadata: {
      permalink: "/blog/static-datasource-2.1.0-20221229/",
      source: "@site/blog/2022-12-29-static-datasource-2.1.0/index.mdx",
      title: "Static Data Source 2.1.0",
      description:
        "We released a new version of Static Data Source 2.1.0. This feature release",
      date: "2022-12-29T00:00:00.000Z",
      formattedDate: "December 29, 2022",
      tags: [
        {
          label: "Static Data Source",
          permalink: "/blog/tags/static-data-source",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "static-datasource-2.1.0-20221229/",
        tags: ["Static Data Source", "Release Notes"],
        image: "/img/blog/2022-12-29-static-datasource-2.1.0/banner.png",
        keywords: ["Data Source", "Static", "Storage", "Grafana"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "JSON API Data sources in Grafana",
        permalink: "/blog/json-api-data-sources-in-grafana-20230104/",
      },
      nextItem: {
        title: "Apache ECharts Panel 4.0.0",
        permalink: "/blog/echarts-panel-4.0.0-20221220/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Static Data Source 2.1.0. This feature release\n\n- Finished refactoring.\n- Updated to the latest Grafana toolkit 9.3.2.\n- Introduced new features for the `Time`, `Number`, and `String` fields.\n\nThe Static Data Source was initially developed and positioned to emulate data for testing and developing new plugins. Still, there is another compelling use case for storing data inside the dashboard, which we see utilized by the community.\n\n<Image\n  title="Apache ECharts panel can visualize wind speed with direction."\n  src="/img/blog/2022-12-29-static-datasource-2.1.0/wind.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Static Data Source can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-static-datasource/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-static-datasource\n```\n\n## YouTube Tutorial\n\nThe Static Data Source is a plugin for Grafana that allows you to store and emulate any data.\n\n<Video\n  src="https://www.youtube.com/embed/QOV8ECOUjWs"\n  title="Mimic any data with Static data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Update CI to upload signed artifacts (#23)\n- Add the "Static data source for Grafana | Mimic any data source | Tutorial and examples" video in README (#23)\n- Update to Grafana 9.3.2 (#24)\n- Refactoring and improving Test Coverage for the data source (#25)\n- Update Field and Values Editors to labels and fields structure (#27)\n- Remove Frame Reducer to simplify code (#28)\n- Refactoring frame, field utilities (#29)\n- Add Date, Time Picker, Number, and Text Area Inputs (#30)\n- Update Value Input component (#31)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-static-datasource/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "echarts-panel-4.0.0-20221220/",
    metadata: {
      permalink: "/blog/echarts-panel-4.0.0-20221220/",
      source: "@site/blog/2022-12-20-echarts-panel-4.0.0/index.mdx",
      title: "Apache ECharts Panel 4.0.0",
      description:
        "We released a new version of the Apache ECharts Panel 4.0.0 for Grafana. This major release",
      date: "2022-12-20T00:00:00.000Z",
      formattedDate: "December 20, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "echarts-panel-4.0.0-20221220/",
        tags: ["Apache ECharts", "Release Notes"],
        image: "/img/blog/2022-12-20-echarts-panel-4.0.0/banner.png",
        keywords: [
          "Apache ECharts",
          "Panel",
          "Chart",
          "Visualization",
          "Grafana",
        ],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "Static Data Source 2.1.0",
        permalink: "/blog/static-datasource-2.1.0-20221229/",
      },
      nextItem: {
        title: "Calendar Panel 1.1.0",
        permalink: "/blog/calendar-panel-1.1.0-20221212/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of the Apache ECharts Panel 4.0.0 for Grafana. This major release\n\n- Introduced breaking changes with loading GeoJSON maps, which are disabled by default.\n- Documentation and examples were updated and moved to https://docs.volkovlabs.io and https://echarts.volkovlabs.io.\n\nWe are enthusiastic about the new release and will continue improving the panel introducing support for Annotations and custom themes in the upcoming versions.\n\n<Image\n  title="Apache ECharts visualizes Pie Chart from the Static Data Source."\n  src="/img/blog/2022-12-20-echarts-panel-4.0.0/pie-chart.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nApache ECharts visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-echarts-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-echarts-panel\n```\n\n## YouTube Tutorial\n\nThe Apache ECharts plugin is a visualization panel for Grafana that allows you to incorporate popular Apache ECharts library into your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\n## Release Notes\n\n### Breaking changes\n\n- World and USA GeoJSON maps are not loaded by default. Please select `JSON` in the Maps option.\n\n### Features / Enhancements\n\n- Update ECharts Examples on https://echarts.volkovlabs.io (#103)\n- Add Calendar Examples on https://echarts.volkovlabs.io (#105)\n- Update README and move Documentation to https://docs.volkovlabs.io (#107)\n\n### Bug fixes\n\n- Fix javascript code in documentation (#102)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-echarts-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "calendar-panel-1.1.0-20221212/",
    metadata: {
      permalink: "/blog/calendar-panel-1.1.0-20221212/",
      source: "@site/blog/2022-12-12-calendar-panel-1.1.0/index.mdx",
      title: "Calendar Panel 1.1.0",
      description:
        "A new version of the Calendar panel 1.1.0 was released today. This maintenance release",
      date: "2022-12-12T00:00:00.000Z",
      formattedDate: "December 12, 2022",
      tags: [
        {
          label: "Calendar",
          permalink: "/blog/tags/calendar",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "calendar-panel-1.1.0-20221212/",
        tags: ["Calendar", "Release Notes"],
        image: "/img/blog/2022-12-12-calendar-panel-1.1.0/banner.png",
        keywords: ["Calendar", "Panel", "Events", "Grafana"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "Apache ECharts Panel 4.0.0",
        permalink: "/blog/echarts-panel-4.0.0-20221220/",
      },
      nextItem: {
        title: "Dynamic Text Panel 2.1.0",
        permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA new version of the Calendar panel 1.1.0 was released today. This maintenance release\n\n- Updated to the latest Grafana toolkit 9.3.1.\n- Added Annotations support.\n- Refactored legacy code, and increased test coverage.\n\nWe have already started working on the upcoming version to finish refactoring, fix outstanding issues, and looking forward to your feedback.\n\n<Image\n  title="Calendar panel displays the latest updates in the Grafana Catalog."\n  src="/img/blog/2022-12-12-calendar-panel-1.1.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe calendar panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-calendar-panel\n```\n\n## YouTube Tutorial\n\nThe Calendar visualization panel is a Grafana plugin created to display calendar events from data sources.\n\n<Video\n  src="https://www.youtube.com/embed/iPJ122x0oos"\n  title="Display events from JSON API data source."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nRefactoring may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Update Panel options in README (#53)\n- Add Youtube tutorial for Calendar with JSON API data source (#54)\n- Update CI to Node 16 and Synchronize with Release workflow (#56)\n- Update to Grafana 9.2.2 (#57)\n- Code Refactoring (#58)\n- Update to Grafana 9.3.1 (#59)\n- Update CI to upload signed artifacts (#60)\n- Refactor panel options and increase test coverage (#61)\n- Add annotation support (#8)\n- Refactoring and Removing legacy code (#62)\n- Refactor Panel Options and add Annotations options (#63)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "dynamictext-panel-2.1.0-20221127/",
    metadata: {
      permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      source: "@site/blog/2022-11-27-dynamictext-panel-2.1.0/index.mdx",
      title: "Dynamic Text Panel 2.1.0",
      description:
        "We released a new version of Dynamic Text Panel 2.1.0. This feature release",
      date: "2022-11-27T00:00:00.000Z",
      formattedDate: "November 27, 2022",
      tags: [
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "dynamictext-panel-2.1.0-20221127/",
        tags: ["Dynamic Text", "Release Notes"],
        image: "/img/blog/2022-11-27-dynamictext-panel-2.1.0/banner.png",
        keywords: ["Dynamic Text", "Panel", "Data", "Grafana"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "Calendar Panel 1.1.0",
        permalink: "/blog/calendar-panel-1.1.0-20221212/",
      },
      nextItem: {
        title: "Data Manipulation Panel 2.7.0",
        permalink: "/blog/form-panel-2.7.0-20221110/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of Dynamic Text Panel 2.1.0. This feature release\n\n- Includes Community-submitted PRs and features.\n- Added Monaco Code Editor.\n- Major refactoring and increased test coverage to continue improving the plugin with the requested functionality.\n\n<Image\n  title="Dynamic Text panel visualize cards with people information."\n  src="/img/blog/2022-11-27-dynamictext-panel-2.1.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Dynamic Text visualization panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-dynamictext-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install marcusolsson-dynamictext-panel\n```\n\n## YouTube Tutorial\n\nThe Dynamic Text visualization panel lets you define a text template using the data from your data source query.\n\n<Video\n  src="https://www.youtube.com/embed/MpNZ4Yl-p0U"\n  title="Markdown, HTML and Handlebars to transform data visualizations."\n/>\n\n## Release Notes\n\n### Breaking changes\n\nMajor refactoring may introduce breaking changes. Please test before upgrading in Production.\n\n### Features / Enhancements\n\n- Fix broken link in README (#111)\n- Update CI to upload signed artifacts (#113)\n- Add feature of parsing time formatting syntax (#86)\n- Fix data rendering when using transformations (#98)\n- Update Panel Options to Monaco Code Editor (#114)\n- Increase Test Coverage (#114)\n- Refactor and update images (#116)\n- Refactor Alert Message and Text Options (#117)\n- Add Support for Disable Sanitize HTML configuration (#118)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-dynamictext-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "form-panel-2.7.0-20221110/",
    metadata: {
      permalink: "/blog/form-panel-2.7.0-20221110/",
      source: "@site/blog/2022-11-10-form-panel-2.7.0/index.mdx",
      title: "Data Manipulation Panel 2.7.0",
      description:
        "We released a new version of the Data Manipulation Panel 2.7.0. This feature release",
      date: "2022-11-10T00:00:00.000Z",
      formattedDate: "November 10, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "form-panel-2.7.0-20221110/",
        tags: ["Data Manipulation", "Release Notes"],
        image: "/img/blog/2022-11-10-form-panel-2.7.0/banner.png",
        keywords: ["Data Manipulation", "Form Panel", "Data", "Grafana"],
        updated: "2023-02-07T00:00:00.000Z",
      },
      prevItem: {
        title: "Dynamic Text Panel 2.1.0",
        permalink: "/blog/dynamictext-panel-2.1.0-20221127/",
      },
      nextItem: {
        title:
          "Create Stacked Bars using the Apache ECharts visualization panel",
        permalink: "/blog/stacked-bar-graph-20221004/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe released a new version of the Data Manipulation Panel 2.7.0. This feature release\n\n- Includes community-requested updates for Payload.\n- Updated request parameters.\n- Grafana-style success/error notifications.\n- The code editor for Initial and Update requests was improved with suggestions for variables and parameters.\n\nWe are impressed with the increasing number of use cases from the community and looking forward to the feedback to continue improving it.\n\n<Image\n  title="Data Manipulation panel allows to input and edit all kinds of data."\n  src="/img/blog/2022-11-10-form-panel-2.7.0/panel.png"\n  lazy={false}\n/>\n\n## Getting Started\n\nThe Data Manipulation panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-form-panel/) or utilizing the Grafana command line tool.\n\nFor the latter, use the following command.\n\n```bash\ngrafana-cli plugins install volkovlabs-form-panel\n```\n\n## YouTube Tutorial\n\nThe Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\n## Release Notes\n\n### Features / Enhancements\n\n- Update to Grafana 9.2.2 (#113)\n- Update CI to upload signed artifacts (#116)\n- Allow sending all or updated only values in Payload (#116)\n- Add Initial values parameter to Update Request parameters (#117)\n- Add Status notification after submitting the form (#98)\n- Add Monaco Code Editor suggestions for available parameters (#88)\n\n## Feedback\n\nWe love to hear from you. There are various ways to get in touch with us.\n\n- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-form-panel/issues/new/choose).\n- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).\n- Star the repository to show your support.',
  },
  {
    id: "stacked-bar-graph-20221004/",
    metadata: {
      permalink: "/blog/stacked-bar-graph-20221004/",
      source: "@site/blog/2022-10-04-stacked-bar-graph/index.mdx",
      title: "Create Stacked Bars using the Apache ECharts visualization panel",
      description:
        "Sineos opened an issue in the Apache ECharts repository asking for help with Stacked Bar Graph:",
      date: "2022-10-04T00:00:00.000Z",
      formattedDate: "October 4, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Community",
          permalink: "/blog/tags/community",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Sineos",
          image_url: "https://github.com/Sineos.png",
          title: "Community member.",
          imageURL: "https://github.com/Sineos.png",
        },
      ],
      frontMatter: {
        authors: [
          {
            name: "Sineos",
            image_url: "https://github.com/Sineos.png",
            title: "Community member.",
            imageURL: "https://github.com/Sineos.png",
          },
        ],
        slug: "stacked-bar-graph-20221004/",
        tags: ["Apache ECharts", "Community"],
        image: "/img/blog/2022-10-04-stacked-bar-graph/banner.png",
        keywords: ["Apache ECharts", "Grafana", "Visualization"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title: "Data Manipulation Panel 2.7.0",
        permalink: "/blog/form-panel-2.7.0-20221110/",
      },
      nextItem: {
        title:
          "Grafana variables at a glance, Environment data source explained",
        permalink:
          "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\n\n\n[Sineos](https://github.com/Sineos) opened an [issue in the Apache ECharts repository](https://github.com/VolkovLabs/volkovlabs-echarts-panel/issues/47) asking for help with Stacked Bar Graph:\n\n> "I have three queries returning aggregated monthly values, which I would like to display as a Stacked bar graph. Turning it into a simple bar graph works but dividing the data too differently styled bars just ends up with errors."\n\nThe issue was successfully resolved, and Sineos created this example and attached\n\n- Apache ECharts function,\n- InfluxDB queries to retrieve data,\n- Ready-to-go Dashboard using the Static Data Source.\n\n<Image\n  title="Energy balance visualized in Apache ECharts panel for Grafana."\n  src="/img/blog/2022-10-04-stacked-bar-graph/panel.png"\n  lazy={false}\n/>\n\n## InfluxDB Data Source\n\n- `createEmpty: true` makes sure that the data of the individual bar segments stay aligned when data is missing in the series.\n- `set(key: "Source", value: "Self Consumption")` manipulates the field used for naming the series.\n\n### Query A\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SML_Energy_Out")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Grid Feed")\n```\n\n### Query B\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SML_Energy_In")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Grid Consumption")\n```\n\n### Query C\n\n```sql\nfrom(bucket: "home")\n  |>  range(start: v.timeRangeStart, stop: v.timeRangeStop)\n  |>  filter(fn: (r)  => r["_measurement"] == "vzlogger")\n  |>  filter(fn: (r)  => r["Source"] == "SelfConsumption")\n  |>  filter(fn: (r)  => r["_field"] == "Energy")\n  |>  aggregateWindow(every: 1d, fn: sum, createEmpty: true)\n  |>  set(key: "Source",  value: "Self Consumption")\n```\n\n## Apache ECharts function\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-10-04-stacked-bar-graph/panel.js"\n  language="js"\n/>\n\n## Dashboard to Try\n\nThe following dashboard is a ready-to-go example that can be imported into Grafana as JSON. It requires\n\n- [Static data source](/plugins/volkovlabs-static-datasource/)\n- Apache ECharts visualization panel plugin.\n\nMake sure to install the Static data source via the Plugins Configuration and then add it to the Data Sources.\n\n### Import dashboard\n\nOnce the Static data source is installed and added and the Apache ECharts visualization panel is installed, go to the Dashboard menu and select Import.\n\nIn the Import dashboard window, insert the JSON code into the Import via the panel JSON field. Copy the JSON code from below.\n\n<Image\n  title="Import dashboard window."\n  src="/img/blog/2022-10-04-stacked-bar-graph/import-dashboard.png"\n/>\n\nSpecify the dashboard name and Static data source, and click Import.\n\n<Image\n  title="Provide Name and datasource in the import menu window."\n  src="/img/blog/2022-10-04-stacked-bar-graph/import-dashboard-step2.png"\n/>\n\nYou should see the visualization working right away.\n\n<Image\n  title="Apache ECharts and data sources configuration."\n  src="/img/blog/2022-10-04-stacked-bar-graph/dashboard.png"\n/>\n\n<details>\n  <summary>Dashboard</summary>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-10-04-stacked-bar-graph/dashboard.json"\n  language="json"\n/>\n\n</details>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
    metadata: {
      permalink:
        "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      source: "@site/blog/2022-09-13-grafana-variables/index.mdx",
      title: "Grafana variables at a glance, Environment data source explained",
      description:
        "After a brief acquaintance with Grafana in sandboxes, production application developers come to the need to work with variables serving different architectural levels. This article outlines three logical levels with corresponding variables and their purposes.",
      date: "2022-09-13T00:00:00.000Z",
      formattedDate: "September 13, 2022",
      tags: [
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
        tags: ["Getting Started", "Environment Data Source", "Variables"],
        image: "/img/blog/2022-09-13-grafana-variables/banner.png",
        keywords: ["Variables", "Grafana", "Visualization"],
        updated: "2023-02-13T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Create Stacked Bars using the Apache ECharts visualization panel",
        permalink: "/blog/stacked-bar-graph-20221004/",
      },
      nextItem: {
        title: "How to customize the Grafana user interface",
        permalink:
          "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nAfter a brief acquaintance with Grafana in sandboxes, production application developers come to the need to work with variables serving different architectural levels. This article outlines three logical levels with corresponding variables and their purposes.\n\nLet\'s start with the schema below. It provides a fantastic summary of the subject.\n\nDashboard variables serve the analytical dashboards, and global Grafana variables rule in the Grafana instance. Environment variables help in configuring system processes where Grafana is installed.\n\n<Image\n  title="Three logical layers and their corresponding variable."\n  src="/img/blog/2022-09-13-grafana-variables/schema.png"\n  lazy={false}\n/>\n\nThe YouTube version of this article is on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables in Grafana."\n/>\n\n## Dashboard variables\n\nAs the name implies, they are created for a dashboard. Only users with Edit permissions or higher can maintain them. The dashboard variables configuration menu is located in the Dashboard settings, Variables menu.\n\n<Image\n  title="How to access the Variables management panel in Grafana. Edit permission is required."\n  src="/img/blog/2022-09-13-grafana-variables/menu.png"\n/>\n\nOnce a variable is created, it is displayed on the top of your dashboard as a drop-down list unless you made it hidden. Multi-selection and Select All are optional and configurable in the Variable management panel.\n\n<Image\n  title="The dashboard variable is displayed as a drop-down list on the top of your dashboard."\n  src="/img/blog/2022-09-13-grafana-variables/dropdown.png"\n/>\n\nTo reference a dashboard variable in the queries and panels\' code, add a `$` (dollar sign) as a prefix.\n\n<Image\n  title="Add a dollar sign when referencing a dashboard variable in a panel\'s code."\n  src="/img/blog/2022-09-13-grafana-variables/prefix.png"\n/>\n\nMost of the time a dashboard variable plays a filter role to limit the displayed data on your panels. If that is the purpose, add it to all your dashboard queries accordingly.\n\n<Image\n  title="Types of Grafana dashboard variables."\n  src="/img/blog/2022-09-13-grafana-variables/edit.png"\n/>\n\nAny dashboard variable is a one-dimensional array of data elements.\n\n### Hard-coded\n\nMeaning set up when you create a variable. The types for these are:\n\n- Constant. It is one value. Example: `1`.\n- Custom. It is many values. Example: `1, 2, 3, 56`.\n- Interval. It is a built-in Grafana type designed to use as a time interval parameter. Examples are `500ms`, `30m`, `1h`, `6h`, `1d`, `14d`, etc.\n\n### Text box\n\nI am not aware of a good business case for the use of this one. If you do, please, share. This type of dashboard variable allows the user to enter any value in a text box.\n\nOne concerning issue with that it is not a foolproof concept. A dashboard creator would need to add an extra validation for any limitation of characters to ensure meaningful parameters.\n\nThe other concerning detail, this type also might give a wrong impression that the entered value can be stored in the data source. It is not true.\n\nThe time span of the entered value is limited until the next dashboard refresh. The text box is just plainly what it is, the values are not stored anywhere, and the user can not reuse the entered values without typing them again, nor could they be sent down the pipeline for processing.\n\n### Query\n\nThis is my favorite type of dashboard variable. They are populated from the connected data source according to your query.\n\n## Global variables\n\nGrafana Global variables are read-only and designed to store the statuses of the working Grafana instance. You can think of them as process indicators.\n\n| Variable          | Description                               |\n| ----------------- | ----------------------------------------- |\n| `${__dashboard}`  | Name of the current dashboard.            |\n| `${__from}`       | From of Time Range in epoch milliseconds. |\n| `${__interval}`   | Parameter to group by time.               |\n| `${__org.name}`   | Name of the current organization.         |\n| `${__org}`        | Id of the current organization.           |\n| `${__to}`         | To of Time Range in epoch milliseconds.   |\n| `${__user.email}` | Email for the current user.               |\n| `${__user.id}`    | Id of the current user.                   |\n| `${__user.login}` | Login handle of the current user.         |\n\nYou can find the complete list of all global variables in the [Grafana Documentation](https://grafana.com/docs/grafana/latest/variables/variable-types/global-variables/).\n\n## Environment variables\n\nGrafana could be installed in a Docker container or directly on the operating system. If you need more details, watch the following YouTube video demonstrating two types of Grafana installation in a Docker container and on Windows/Mac.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\nIn both types of installation, an environment variable is a key-value parameter that is designed to either capture a descriptive system element or value to impact the running process. In other words, those variables can keep the system configuration secrets and statuses. That imposes the need for extra caution while working with them.\n\n## Environment Data Source\n\nTo stay out of trouble, Grafana core chose not to support the environment variables at this time. Yet, many industrial cases require the ability to display environment variables, for instance, in cases where the goal is to manage numerous remote devices (ex, IoT networks).\n\nFollowing the community demand, we created an Environment data source to supplement that ability. Employing the Environment data source allows you to display and use the environment variables of all your devices in one spot, the Grafana dashboard.\n\n### Installation\n\nEnvironment Data Source is not included in the Grafana Catalog. It can be installed manually from our Private Repository or downloaded directly from GitHub.\n\n```bash\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nMore information about features and installation can be found in the [documentation](/plugins/volkovlabs-env-datasource).\n\nFor demo purposes below, I use the standard Table panel. Here is what the list of all my environment variables looks like:\n\n<Image\n  title="The listing of all environment variables displayed in Grafana via the Environment data source."\n  src="/img/blog/2022-09-13-grafana-variables/dashboard.png"\n/>\n\n### Configuration\n\nTo make the environmental data source more secure, you can restrict the variables that are allowed to be shown in the Environment data source configuration. For the endless possibilities, the filter utilizes a regex pattern\n\n<Image\n  title="Use the Regex pattern to restrict the available environment variables."\n  src="/img/blog/2022-09-13-grafana-variables/regex.png"\n/>\n\nOne more exciting thing to point out. Any environment variable your dashboard gets access to via the Environment data source can be used as a dashboard variable!\n\nFor that, when you create a dashboard variable, select the Environment data source.\n\n<Image\n  title="How to use the environment variable as a dashboard variable."\n  src="/img/blog/2022-09-13-grafana-variables/variable.png"\n/>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
    metadata: {
      permalink:
        "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      source: "@site/blog/2022-08-14-customize-grafana/index.mdx",
      title: "How to customize the Grafana user interface",
      description:
        "This article collects various commands to help you play with the Grafana in your style. It's constantly updated with the latest version of Grafana.",
      date: "2022-08-14T00:00:00.000Z",
      formattedDate: "August 14, 2022",
      tags: [
        {
          label: "Configuration",
          permalink: "/blog/tags/configuration",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
        tags: ["Configuration"],
        image: "/img/blog/2022-08-14-customize-grafana/banner.png",
        keywords: [
          "Business",
          "Grafana",
          "Visualization",
          "Customization",
          "Docker",
        ],
        updated: "2023-03-19T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Grafana variables at a glance, Environment data source explained",
        permalink:
          "/blog/grafana-variables-at-a-glance-environment-data-source-explained-102b8e05e1a5/",
      },
      nextItem: {
        title:
          "The missing plugin to create business and industrial charts in Grafana",
        permalink:
          "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThis article collects various commands to help you play with the Grafana in your style. It\'s constantly updated with the latest version of Grafana.\n\nIf you are here, you probably know what Grafana is and have already been playing with it for quite some time. And you are already quite aware that Grafana is a remarkable open-source tool for observability.\n\nThe installation of Grafana directly on the operating system takes a minute or two. However, working with Grafana in a Docker container is more advantageous.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\nOnce installed, Grafana delivers a broad spectrum of built-in visualization panels and data sources. You most likely know that if the out-of-the-box features do not yet endure your use case, the friendly community has plenty of add-ons in the shape of plugins you can download from the Grafana Catalog.\n\nStarting from Grafana 8, access to Grafana Catalog was made a click away when the Plugins section was added under the Configuration menu. Following that path, you can find and install the extra functionality on top of the standard features in a blink of an eye.\n\nSo, here you are, at the point of knowing that Grafana architecture and functionality suit your needs and realizing the necessity to adjust the basic graphical elements to make your application look more like your own.\n\nThe truth is the fundamental UI components are pre-defined. There is no straightforward way to adjust them.\n\n<Video\n  src="https://www.youtube.com/embed/3GRoa8TzIxY"\n  title="Change titles, icons, footer, default dashboard in Grafana 9."\n/>\n\nIn this article, we collected all commands that will help you to play with UI in style. Let\'s go!\n\n:::info Docker\n\nFirst and foremost, we recommend working with Grafana in a Docker container. Once it is settled, all that is left is to rebuild your current container, ensuring to include the following commands.\n\n:::\n\n## Default theme\n\nThere are two types of people in this world: people with the Light theme preference and the Dark one. Grafana started with dark colors, initially designed to provide for observability demand.\n\n<Image\n  title="You can set the default theme to be either Light or Dark."\n  src="/img/blog/2022-08-14-customize-grafana/theme.png"\n  lazy={false}\n/>\n\nThe Light option was introduced in version 7 and became equally famous as the Dark one. This is the only setting that is configurable in a user profile. You can, however, make the UI style coherent by specifying the default theme for the whole Docker container by clearly assigning a value to the following environment variable.\n\n```docker\nENV GF_USERS_DEFAULT_THEME=light\n```\n\n## Home Dashboard\n\n<Image\n  title="Balena application Home dashboard in Grafana."\n  src="/img/blog/2022-08-14-customize-grafana/home.png"\n/>\n\nTo set the dashboard of your choice as a Home dashboard, you would need to replace the `default.json` file located in `../usr/share/grafana/public/dashboards/default.json` with the file containing your JSON code.\n\nYou can do so by running the following command.\n\n```docker\nCOPY dashboards/home.json /usr/share/grafana/public/dashboards/default.json\n```\n\nIf the dashboard is ever modified, the Docker container has to be rebuilt with a new JSON file.\n\nIf your dashboard is a part of the Application plugin, you can override the environment variable to specify a new file.\n\n```docker\nENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/var/lib/grafana/plugins/volkovlabs-balena-app/dashboards/supervisor.json\n```\n\n## Disable Alerting and Explore\n\nMore and more applications are being built to utilize Grafana as a platform for data visualization. Those applications do not require Alerting nor Explore components.\n\nTo simplify your Grafana interface, consider disabling those features by including the following environment variables.\n\n```docker\n# Explore\nENV GF_EXPLORE_ENABLED=false\n\n# Alerting\nENV GF_ALERTING_ENABLED=false\nENV GF_UNIFIED_ALERTING_ENABLED=false\n```\n\n## Sanitize HTML\n\nHTML sanitizing is enabled by default. If you need to use the HTML tags in the panels, this command is for you.\n\n```docker\nENV GF_PANELS_DISABLE_SANITIZE_HTML=true\n```\n\n## Anonymous Authentication\n\nIn some cases, you might need to remove the login page completely and make a dashboard available for the public. For that, you would need to allow Anonymous access.\n\n```docker\nENV GF_AUTH_ANONYMOUS_ENABLED=true\nENV GF_AUTH_BASIC_ENABLED=false\n```\n\n## Bookmark Icon (Favicon)\n\nThe favicon is the icon next to the application title on the browser tab.\n\n<Image\n  title="The favicon is the icon next to the application title on the browser tab."\n  src="/img/blog/2022-08-14-customize-grafana/favicon.png"\n/>\n\nTo have your own, you can replace `fav32.png` and `apple-touch-icon.png` with the images of your choice.\n\nUse the following command for that.\n\n```docker\nCOPY img/fav32.png /usr/share/grafana/public/img/fav32.png\nCOPY img/fav32.png /usr/share/grafana/public/img/apple-touch-icon.png\n```\n\n## Logo\n\nThe logo on the Login page is the first graphical element that users want to change.\n\nThe big Grafana icon, the first image that draws users\' attention when they open the application, can be customized by substituting the `grafana_icon.svg` file located in `../usr/share/grafana/public/img/`.\n\n```docker\nCOPY img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg\n```\n\n## Login Background\n\n<Image\n  title="The background image is configurable for Light and Dark themes."\n  src="/img/blog/2022-08-14-customize-grafana/background.png"\n/>\n\nWhen customizing the background image, replace images for both themes. You can go with the same picture, but both files need to be replaced.\n\n```docker\nCOPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg\nCOPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg\n```\n\n## Grafana Server\n\n### Main Organization\n\nTo update the name of the Main Organization, update the binary file `grafana-server`. The new name should be exactly 9 letters to avoid memory issues.\n\n```docker\nRUN sed -i \'s|Main Org.|VolkovLab|g\' /usr/share/grafana/bin/grafana-server\n```\n\n### Help menu\n\nApplication name and version are hard-coded in the `grafana-server` and hard to replace in the Docker container. It can be replaced in JavaScript when rendering.\n\n```docker\nRUN sed -i "s|\\[\\[.NavTree\\]\\],|nav,|g; \\\n    s|window.grafanaBootData = {| \\\n    let nav = [[.NavTree]]; \\\n    nav[nav.length -1][\'subTitle\'] = \'Custom name version\'; \\\n    window.grafanaBootData = {|g" \\\n    /usr/share/grafana/public/views/index.html\n```\n\n## Javascript\n\nThe application title (the name that appears on the browser tab), login page title, and bottom-page links are trickier than others. The files keeping those settings are scattered in various locations depending on the Grafana version.\n\nTo simplify customization, we use a Regex pattern to find all occurrences and alter them accordingly.\n\n### Application Title\n\n<Image\n  title="Application title (the name that appears in the browser tab)."\n  src="/img/blog/2022-08-14-customize-grafana/application-title.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|"AppTitle","Grafana")|"AppTitle","Star Application")|g\' {} \\;\n```\n\n### Login Title\n\n<Image\n  title="The title on the Grafana login page."\n  src="/img/blog/2022-08-14-customize-grafana/login-title.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|"LoginTitle","Welcome to Grafana")|"LoginTitle","Welcome to Star Application")|g\' {} \\;\n```\n\n### Login Footer\n\n<Image\n  title="The bottom-placed links are configurable (names/URLs). You as well can remove them altogether."\n  src="/img/blog/2022-08-14-customize-grafana/footer.png"\n/>\n\n```docker\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"documentation",text:(0,r.t)("nav.help/documentation","Documentation"),icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer"},{target:"_blank",id:"support",text:(0,r.t)("nav.help/support","Support"),icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer"},{target:"_blank",id:"community",text:(0,r.t)("nav.help/community","Community"),icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer"}||g\' {} \\;\n\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"version",text:`${e.edition}${s}`,url:t.licenseUrl}||g\' {} \\;\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"version",text:`v${e.version} (${e.commit})`,url:i?"https://github.com/grafana/grafana/blob/main/CHANGELOG.md":void 0}||g\' {} \\;\nRUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i \'s|{target:"_blank",id:"updateVersion",text:"New version available!",icon:"download-alt",url:"https://grafana.com/grafana/download?utm_source=grafana_footer"}||g\' {} \\;\n```\n\n## Docker file\n\nIf you did not find the configuration you need, please, check out the Docker file on GitHub.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-app/blob/main/Dockerfile"\n  language="docker"\n/>\n\nWe constantly update it with all the latest configuration commands we were able to identify.',
  },
  {
    id: "the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
    metadata: {
      permalink:
        "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      source: "@site/blog/2022-08-01-missing-plugin/index.mdx",
      title:
        "The missing plugin to create business and industrial charts in Grafana",
      description:
        "Grafana is a de-facto one of the best observability visualization tools with various chart panels and many community plugins like Plotly. Still, no none of them can compare with Apache ECharts' flexibility.",
      date: "2022-08-01T00:00:00.000Z",
      formattedDate: "August 1, 2022",
      tags: [
        {
          label: "Apache ECharts",
          permalink: "/blog/tags/apache-e-charts",
        },
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
        tags: ["Apache ECharts", "Getting Started"],
        image: "/img/blog/2022-08-01-missing-plugin/banner.png",
        keywords: [
          "ECharts",
          "Business",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-04-09T00:00:00.000Z",
      },
      prevItem: {
        title: "How to customize the Grafana user interface",
        permalink:
          "/blog/how-to-customize-the-grafana-user-interface-8d70a42dc2b6/",
      },
      nextItem: {
        title: "Balena NFS Server Project",
        permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana is a de-facto one of the best observability visualization tools with various chart panels and many community plugins like Plotly. Still, no none of them can compare with Apache ECharts\' flexibility.\n\nApache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts. It is written in pure JavaScript and based on zrender.\n\n<Image\n  title="Apache ECharts Examples Grafana instance."\n  src="https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/examples.png"\n  lazy={false}\n/>\n\nThe Apache ECharts visualization panel is a plugin for Grafana that allows you to incorporate the Apache ECharts library into your Grafana dashboard. The original plugin was developed for Grafana 6.3/7.0 and Apache ECharts library 4.9.0. It has not been maintained since then.\n\nVolkov Labs adapted and updated it based on the latest Grafana 9 with Apache ECharts library 5.3.3, introducing new features like Monaco Code Editor and supporting SVG and Canvas renderer.\n\nThe Apache ECharts visualization panel can be installed from the Grafana Catalog (Plugins Configuration menu). Alternatively, you can install it manually [downloading from GitHub](https://github.com/volkovlabs/volkovlabs-echarts-panel).\n\n## Apache ECharts\n\nApache ECharts library is a mighty tool. You do not need a senior Javascript developer to start displaying modern-looking animated visualizations. And if your use case is unique, Apache ECharts provides an excellent venue to develop visualizations of any complexity.\n\nThe Apache ECharts visualization panel for Grafana is a bridge that has been missing and finally arrived. You can use the benefits of two great open-source products Grafana and Apache ECharts in one solution tailored to your needs.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nAccording to the [press release](https://www.globenewswire.com/fr/news-release/2021/01/26/2164391/17401/en/The-Apache-Software-Foundation-Announces-Apache-ECharts-as-a-Top-Level-Project.html)\n\n> "Apache ECharts is in use at Alibaba, Amazon, Baidu, GitLab, Intel, and Tencent, among others, as well as solutions such as Apache Superset data visualization software."\n\nThe project continues to grow in popularity, with more than 50,000 stars on GitHub and 450,000 weekly downloads on [npm](https://www.npmjs.com/package/echarts).\n\n## Wind Speed\n\nWind speed visualization is one of many exciting examples of what the Apache ECharts library can do.\n\n- Every data element is displayed using the custom arrow.\n- The arrow color signifies the speed.\n- The direction where the arrow points - shows the wind direction.\n\nSo much information is geniusly packed in a single display.\n\n<Image\n  title="Visualizing Wind Speed using custom Arrows on the Grafana dashboard."\n  src="/img/blog/2022-08-01-missing-plugin/wind-speed.png"\n/>\n\n## Directed Graph\n\nWe at Volkov Labs spent some time researching the options for displaying directed graphs. The Apache ECharts satisfied every single requirement we had in mind effortlessly.\n\nThe video below demonstrates the Apache ECharts directed/undirected graphs capabilities.\n\n<Video\n  src="https://www.youtube.com/embed/BcW7iyTadWE"\n  title="Can Apache ECharts render a directed graph?"\n/>\n\n### Tutorial\n\nThe launch of the [Live Project](https://live.volkovlabs.io/) triggered many how-to questions. To answer them all by explaining how we created this project, the following two parts tutorial was put together.\n\nIn this project, we employed directed graph visualization to track company activities across Blog (Medium), GitHub, YouTube, and various external resources.\n\n<Video\n  src="https://www.youtube.com/embed/e3VHgpuzEF0"\n  title="Build directional graph in Grafana using Apache ECharts. Tutorial part 1."\n/>\n\n<Video\n  src="https://www.youtube.com/embed/oM7XAVlsOio"\n  title="Build directional graph in Grafana using Apache ECharts. Tutorial part 2."\n/>\n\n## Live Project\n\nThe [Live Project](https://live.volkovlabs.io) is ALIVE. The directed graphs are built dynamically. We daily update the underlying data, so, at any point in time, the visualization gives the freshest possible update on our articles, releases, videos and other activities.\n\n<Image\n  title="Live Updated project helps us to track our activities across all mediums."\n  src="/img/blog/2022-08-01-missing-plugin/live.png"\n/>\n\nDirected graphs use the force layout to adjust nodes\' location automatically. In addition, nodes have different icons/styling depending on their type. Clicking on the elements allows you to open an external URL or take a closer look at the subgraphs.\n\nThe tutorial above gives a complete picture of the achieved functionality.\n\nThe picture below displays all our GitHub projects. When this picture was taken, we had the following projects.\n\n- [Apache ECharts panel](https://live.volkovlabs.io/d/tXQ9_367z/apache-echarts-panel?orgId=1)\n- [Calendar panel](https://live.volkovlabs.io/d/0fgJcb4Vz/calendar-panel?orgId=1)\n- [Dynamic Text panel](https://live.volkovlabs.io/d/2L2sYjVVz/dynamic-text-panel?orgId=1)\n- [Data Manipulation panel](https://live.volkovlabs.io/d/h5IJk66nk/data-manipulation-panel?orgId=1)\n- [Environment data source](https://live.volkovlabs.io/d/B0kLhzR4k/environment-data-source?orgId=1)\n- [RSS-Atom data source](https://live.volkovlabs.io/d/zUDs5zRVk/rss-atom-data-source?orgId=1)\n- [Static data source](https://live.volkovlabs.io/d/heM1lTN4z/static-data-source?orgId=1)\n\nYou can see all releases we published for each project.\n\n<Image\n  title="The directed Graph for GitHub displays all major and minor releases for our Grafana plugins."\n  src="/img/blog/2022-08-01-missing-plugin/github.png"\n/>\n\nYou are welcome to take a look and learn about our [Grafana plugins at Live Project](https://live.volkovlabs.io).\n\n## Apache ECharts visualization panel in the wild\n\nSince we adopted and improved the Apache ECharts visualization panel, we have received great positive feedback from the community. Thank you!\n\nOur clients gladly accepted our help in upgrading from an older version of the library.\n\nIn addition, Volkov Labs migrated industrial Plotly dashboards to Apache ECharts. We were able to keep all existing functionality and as well added all desired extra features like a custom toolbox button (to dynamically change the charts) and support of the multiple Y-axis.',
  },
  {
    id: "balena-nfs-server-and-client-project-5d5de6dd47ca/",
    metadata: {
      permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      source: "@site/blog/2022-07-04-balena-nfs/index.mdx",
      title: "Balena NFS Server Project",
      description:
        "A week ago, Volkov Labs and Theia Scientific published a blog post about using NFS (Network File System) Server as a solution to share external storage between containers on balenaCloud. This problem is long-standing, and this article demonstrates a solution.",
      date: "2022-07-04T00:00:00.000Z",
      formattedDate: "July 4, 2022",
      tags: [
        {
          label: "Balena Application",
          permalink: "/blog/tags/balena-application",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "balena-nfs-server-and-client-project-5d5de6dd47ca/",
        tags: ["Balena Application"],
        image: "/img/blog/2022-07-04-balena-nfs/banner.png",
        keywords: ["Balena", "NFS", "IoT"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "The missing plugin to create business and industrial charts in Grafana",
        permalink:
          "/blog/the-missing-plugin-to-create-business-and-industrial-charts-in-grafana-1d8f7304229f/",
      },
      nextItem: {
        title: "Our plugins are ready for Grafana 9",
        permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nA week ago, Volkov Labs and Theia Scientific published a [blog post about using NFS (Network File System) Server](https://www.balena.io/blog/using-nfs-server-to-share-external-storage-between-containers-balena/) as a solution to share external storage between containers on balenaCloud. This problem is long-standing, and this article demonstrates a solution.\n\nLet\'s set the stage, aka the problem.\n\n> Following containerization best practices, the Theiascope™ platform is separated into containers deployed in host network mode and interacts with each other using TCP and/or UDP ports. The Theia web application running on the Theiascope™ hardware powered by balenaOS deals with massive data, where exporting results can reach gigabytes in size. To prevent caching and delay in transferring files between containers, each container should have access to the same storage.\n\n<Video\n  src="https://www.youtube.com/embed/_kyNSLeAT84"\n  title="Share external storage between containers in balenaCloud."\n/>\n\nThe blog post described a docker file with the entry point scripts we used to build containers for the NFS Server. We also explained how NFS clients indefinitely try to mount NFS exports to ensure that NFS storage is available before the application starts.\n\nWe encourage you to read the article before continuing.\n\nThis article will showcase the Project registered in the [balenaHub](https://hub.balena.io/organizations/volkovlabs/projects/balena-nfs), which you can try by forking.\n\n## balenaCloud and balenaHub\n\n[BalenaCloud](https://www.balena.io/cloud/) is the container-based platform for deploying IoT (The Internet of things) fleets. It allows you to develop and deploy IoT fleets quickly and remotely update and monitor your devices and code from anywhere in the world.\n\nBalena created a [balenaHub](https://hub.balena.io) a couple of years ago to make life easier for everyone working with IoT, edge, and physical computing. If you have never worked with balena before, please look at the video from Ayan Pahwa, Developer Advocate for balena.\n\n<Video\n  src="https://www.youtube.com/embed/1B2gyBSuvlE"\n  title="Getting started with balena. Add your first device to balenaCloud."\n/>\n\nbalenaHub provides plenty of community fleets for you to add your device for testing and experimenting. Some fleets are not joinable and are called Projects. You can easily fork them and start exploring as other fleets.\n\n## Architecture\n\nBalena NFS Server and client project consists of three containers and can be forked from the [balenaHub project\'s page](https://hub.balena.io/organizations/volkovlabs/projects/balena-nfs).\n\n<Image\n  title="PostgreSQL container has NFS Server. NGINX container utilizes NFS Client to connect and access files on the NFS drive."\n  src="/img/blog/2022-07-04-balena-nfs/balena-nfs.png"\n  lazy={false}\n/>\n\nFirst, the project includes an NFS Server built on top of the PostgreSQL Alpine image. It uses OpenRC (dependency-based init system) to manage NFS services, which is the recommended way to start NFS service for Alpine Linux.\n\nSecond, it includes NFS Client build on top of the NGINX Alpine image with a custom entry point script to mount NFS export and provide direct access to the files on the storage.\n\n## Environment variables\n\nThe project supports various environment variables to specify storage labels and mount points that are defined in the `balena.yml` configuration file:\n\n| Environment Variable | Value                     | Description                                                      |\n| -------------------- | ------------------------- | ---------------------------------------------------------------- |\n| STORAGE_LABEL        | storage                   | External Storage ID, if not found `tmpfs` will be used instead.  |\n| STORAGE_MOUNT_POINT  | /mnt/nvme                 | Local mount point to mount Storage or `tmpfs`.                   |\n| POSTGRES_PASSWORD    | postgres                  | Password for the PostgreSQL database.                            |\n| PGDATA               | /mnt/nvme/postgresql/data | PostgreSQL path on the Storage or `tmpfs` mount point.           |\n| NFS_HOST             | localhost                 | NFS host, should be `localhost` for the local container.         |\n| NFS_HOST_MOUNT       | /                         | NFS exported mount. Set full path `/mnt/nvme` for NFS version 3. |\n| NFS_MOUNT_POINT      | /mnt/nvme                 | Mount point to mount NFS export.                                 |\n| NFS_SYNC_MODE        | async                     | Async or Sync mode.                                              |\n| NFS_VERSION          | nfs                       | Set `nfs4` to force use NFS version 4.                           |\n\nWhen you fork the project, you will have a chance to update all environment variables.\n\n<Image\n  title="You can override provided environment variables according to your setup."\n  src="/img/blog/2022-07-04-balena-nfs/fleet.png"\n/>\n\n## Grafana Dashboard\n\nTo manage running services and display device configuration, we added Grafana with the Balena Application plugin. The developed dashboard displays journal logs in real-time and will help troubleshoot any issues.\n\nIt\'s comparable to the functionality of the balenaCloud UI and can be extremely valuable in a network-constrained environment when the device is not connected to the Internet.\n\n<Image\n  title="Grafana dashboard allows managing running services and displaying device configuration."\n  src="/img/blog/2022-07-04-balena-nfs/dashboard.png"\n/>\n\nYou can access Grafana from the local network or public URL if it\'s enabled in the device configuration.\n\nLearn more about the Balena Application plugin in the [Documentation](/plugins/volkovlabs-balena-app).',
  },
  {
    id: "our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
    metadata: {
      permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      source: "@site/blog/2022-06-20-grafana-9/index.mdx",
      title: "Our plugins are ready for Grafana 9",
      description:
        "Grafana 9 was released at GrafanaCONline 2022 on June 14, and it's the best version so far. Our open-source and commercial plugins were successfully tested using the 9.0.0-beta3 released weeks ago and updated using the latest Grafana 9 toolkit on the day it was released.",
      date: "2022-06-20T00:00:00.000Z",
      formattedDate: "June 20, 2022",
      tags: [
        {
          label: "Release Notes",
          permalink: "/blog/tags/release-notes",
        },
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
        tags: ["Release Notes", "Volkov Labs"],
        image: "/img/blog/2022-06-20-grafana-9/banner.png",
        keywords: [
          "ECharts",
          "Business",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Balena NFS Server Project",
        permalink: "/blog/balena-nfs-server-and-client-project-5d5de6dd47ca/",
      },
      nextItem: {
        title:
          "Using Grafana and machine learning for real-time microscopy image analysis",
        permalink:
          "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana 9 was released at GrafanaCONline 2022 on June 14, and it\'s the best version so far. Our open-source and commercial plugins were successfully tested using the 9.0.0-beta3 released weeks ago and updated using the latest Grafana 9 toolkit on the day it was released.\n\nOne of the topics I heard from the Grafana community it\'s the hesitation to use third-party plugins:\n\n- Community plugins are not updated constantly and stopped being maintained after a while.\n- It is better not to use them and stick to the plugins supported by the Grafana team.\n\nVolkov Labs regularly updates our open-source, commercial plugins and templates based on the latest version of Grafana to stay up-to-date. With every significant Grafana release, we increase the major number in the plugin\'s version.\n\nBelow I want to highlight the latest updates with tutorials on how to hit the ground running.\n\n## Base64 Image/Video/Audio/PDF panel\n\nThe Base64 Image/Video/Audio/PDF Panel is a plugin for Grafana that displays Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, and PDF formats.\n\nThe popular plugin was recently updated to support Video and Audio files in modern formats. You can learn more about this plugin through the newly revamped video on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\nThe [Base64 panel version 3.0.0](/plugins/volkovlabs-image-panel/release) is updated in the Grafana Catalog and supports Grafana 8.5+.\n\n## RSS/Atom Data Source\n\nCreated to display a Blog news feed on our demo server, the RSS/Atom data source became popular when Grafana removed proxy support in the News panel.\n\nThe data source supports different RSS and Atom formats with logic to extract various fields making it the most straightforward plugin to visualize news and updates.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\nThe [RSS/Atom Data Source 2.0.0](/plugins/volkovlabs-rss-datasource/release) is updated in the Grafana Catalog and supports Grafana 8.5+. For older versions of Grafana, please use version 1.7.0.\n\n## Environment Data Source\n\nThe Environment data source is a plugin for Grafana that returns environment variables to visualize or use as Dashboard Variables. It\'s a unique plugin we created for The Internet of Things (IoT) devices in the balenaCloud.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\nBecause of security reasons, the Environment Data Source can not be included in the Grafana Catalog.\n\nIt can be installed manually from our private repository or downloaded directly from GitHub.\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nThe [Environment Data Source 2.0.0](/plugins/volkovlabs-env-datasource/release) supports Grafana 8.5+. For older versions of Grafana, please use version 1.2.0.\n\n## Data Manipulation Panel\n\nThe Data Manipulation Panel is a plugin for Grafana that can be used to insert, update application data, and modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\nWe understand the risk of data manipulation and take security concerns seriously. We recently published an [article exploring three secure ways](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904) to connect the Data Manipulation panel to the API Server.\n\nThe Data Manipulation panel is under Grafana team review and not included in the Grafana Catalog. It can be installed manually from our Private Repository or downloaded directly from GitHub.\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-form-panel\n```\n\nPlease let us know if you have any questions or feature requests for this plugin in the [GitHub Issues](https://github.com/VolkovLabs/volkovlabs-form-panel/issues).\n\n## Apache ECharts Panel\n\nApache ECharts is a free, powerful charting and visualization library offering easy ways to add intuitive, interactive, and highly customizable charts. It is written in pure JavaScript and based on zrender.\n\nThe ECharts panel is a plugin for Grafana that allows visualizing Apache ECharts on your Grafana dashboard.\n\n<Image\n  title="Apache ECharts Examples Grafana instance."\n  src="https://github.com/VolkovLabs/volkovlabs-echarts-panel/raw/main/src/img/examples.png"\n  lazy={false}\n/>\n\nThe original plugin was developed for Grafana 6.3/7.0 and ECharts 4.9.0. It has not been maintained since then. Volkov Labs adapted and updated it based on the Grafana 9 with ECharts 5.3.3, introducing new features like Monaco Code Editor and supporting SVG and Canvas renderer.\n\n<Video\n  src="https://www.youtube.com/embed/DxqCrBEmrQw"\n  title="How to create modern dashboards in Grafana."\n/>\n\nThe Apache ECharts panel was recently submitted to the Grafana Catalog. Meanwhile, it can be installed manually from our private repository or downloaded directly from GitHub.\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-echarts-panel\n```',
  },
  {
    id: "using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
    metadata: {
      permalink:
        "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      source: "@site/blog/2022-06-17-machine-learning/index.mdx",
      title:
        "Using Grafana and machine learning for real-time microscopy image analysis",
      description:
        "On June 15, 2022, Mikhail Volkov from Volkov Labs and Christopher Field from Theia Scientific headlined their innovative session on the second day of GrafanaCONline 2022.",
      date: "2022-06-17T00:00:00.000Z",
      formattedDate: "June 17, 2022",
      tags: [
        {
          label: "Machine Learning",
          permalink: "/blog/tags/machine-learning",
        },
        {
          label: "Volkov Labs",
          permalink: "/blog/tags/volkov-labs",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
        tags: ["Machine Learning", "Volkov Labs"],
        image: "/img/blog/2022-06-17-machine-learning/banner.png",
        keywords: [
          "Machine Learning",
          "Industrial",
          "Charts",
          "Grafana",
          "Visualization",
        ],
        updated: "2023-03-24T00:00:00.000Z",
      },
      prevItem: {
        title: "Our plugins are ready for Grafana 9",
        permalink: "/blog/our-plugins-are-ready-for-grafana-9-2bc257db92eb/",
      },
      nextItem: {
        title: "Connect the Data Manipulation plugin for Grafana to API Server",
        permalink:
          "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nOn June 15, 2022, Mikhail Volkov from Volkov Labs and Christopher Field from [Theia Scientific](https://www.theiascientific.com/) headlined their innovative session on the second day of GrafanaCONline 2022.\n\nA month ago, we published the article [How Theia Scientific and Volkov Labs used Grafana and AI to analyze scientific images](https://grafana.com/blog/2022/04/29/how-theia-scientific-and-volkov-labs-use-grafana-and-ai-to-analyze-scientific-images/) on Grafana Blog and were thrilled to showcase our work at GrafanaCONline 2022.\n\n## GrafanaCONline\n\nFor Mikhail, it was his third time presenting in front of the Grafana community, talking about his projects going beyond Observability by using Grafana as a platform to build modern applications.\n\n> "Theia\'s production team demonstrated the deployment of machine learning (ML) models on an edge computing device for real-time microscopy image analysis, using Balena for remote device management and Grafana for application control and visualization.\n>\n> Custom panel plugins and dashboards packaged as a Grafana application are combined with a container-based, multi-service architecture to present scientists and engineers using electron microscopes with a coherent and customizable platform for automated image analysis."\n\n<Image\n  title="The home dashboard of the Theiascope™ application includes Model and Job Management panels."\n  src="/img/blog/2022-06-17-machine-learning/dashboard.png"\n  lazy={false}\n/>\n\nWith the help of Grafana, the project cut labor costs by 80%, reduced training time and operational expertise needed, and accelerated the delivery of unbiased results from years, months, and days to just seconds.\n\n## Presentation\n\nYou can watch the presentation with a live demonstration on Grafana\'s Youtube channel.\n\n<Video\n  src="https://www.youtube.com/embed/WRPnTFBX4rg"\n  title="Using Grafana and machine learning for real-time microscopy image analysis."\n/>\n\nVolkov Labs continues to work closely with Theia Scientific to improve the Theiascope™ platform and has already updated the application to the latest Grafana 9 introduced at GrafanaCONline 2022.',
  },
  {
    id: "how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
    metadata: {
      permalink:
        "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      source: "@site/blog/2022-06-12-data-manipulation-api/index.mdx",
      title: "Connect the Data Manipulation plugin for Grafana to API Server",
      description:
        "We understand the risk of data manipulation and take security concerns seriously. This article explores three secure ways to connect the Data Manipulation panel to the API Server.",
      date: "2022-06-12T00:00:00.000Z",
      formattedDate: "June 12, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
        {
          label: "Nginx",
          permalink: "/blog/tags/nginx",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
        tags: ["Data Manipulation", "API", "Nginx"],
        image: "/img/blog/2022-06-12-data-manipulation-api/banner.png",
        keywords: ["Grafana", "Data Manipulation", "Forms"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Using Grafana and machine learning for real-time microscopy image analysis",
        permalink:
          "/blog/using-grafana-and-machine-learning-for-real-time-microscopy-image-analysis-9e78e210cddb/",
      },
      nextItem: {
        title:
          "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
        permalink:
          "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe understand the risk of data manipulation and take security concerns seriously. This article explores three secure ways to connect the Data Manipulation panel to the API Server.\n\nThe [recent article](/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0) and Youtube video showcased various use cases to bring your Grafana Dashboard game to the next level using the Data Manipulation plugin. This panel can insert, update application data, and modify configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\nBefore continuing to read, we recommend reading the introduction article to get familiar with the Data Manipulation plugin and its features.\n\n## Architecture\n\nData Manipulation panel options allow you to specify the URL for `GET` requests to receive initial values and `POST`, `PUT`, or `PATCH` requests to update values sent as a JSON.\n\n<Image\n  title="Data Manipulation panel uses GET, POST/PUT request to interact with API Server."\n  src="/img/blog/2022-06-12-data-manipulation-api/form-api.png"\n  lazy={false}\n/>\n\nThere are three methods to connect the panel to the API Server:\n\n- Publicly available server with additional header parameters (CORS restrictions).\n- API served using NGINX in the same domain as the Grafana server (CORS ready).\n- Custom Data Source using HTTP Proxy.\n\nLet\'s take a look at each of them closely.\n\n## Publicly available server\n\nIf your server is publicly available or in a private network, the simplest and easiest way is to connect to the API Server directly. Header parameters can be added to secure your REST API calls.\n\nThe disadvantage of this method is that API requests are visible to the end users. The REST API server should allow Cross-Origin Resource Sharing (CORS).\n\n> Cross-Origin Resource Sharing (CORS) is an HTTP-header-based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.\n\n### Example\n\nWe already explained how to configure the panel in the video mentioned above. If this method works for your use case, you can find server code examples in the plugin\'s GitHub repository.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server-json/server.ts"\n  language="js"\n/>\n\n## NGINX reverse proxy\n\nWe recommend running Grafana behind NGINX reverse proxy for an additional security layer. The reverse proxy also allows us to serve additional API endpoints and static files in the same domain, which makes it CORS-ready.\n\n<Image\n  title="Grafana and Server API behind NGINX reverse proxy."\n  src="/img/blog/2022-06-12-data-manipulation-api/form-nginx-api.png"\n/>\n\nTo learn how to configure Grafana to run behind a reverse proxy, take a look at the Grafana tutorial [Run Grafana behind a reverse proxy](https://grafana.com/tutorials/run-grafana-behind-a-proxy/).\n\n### Configuration\n\nYou can add a section to redirect requests `/api/data-form` to the docker container or server process in the NGINX configuration file. The rest of the requests should be redirected to Grafana.\n\nThe API server operates on the specific IP address and port accessible by NGINX, and end-users have no direct access to it.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-12-data-manipulation-api/nginx.conf"\n  language="nginx"\n/>\n\nThis option is CORS-ready as an endpoint is a part of the same domain, and API can be secured using Grafana or any other authentication method.\n\n## Custom Data Source\n\nThe last method is to use a custom Data Source with HTTP Proxy, which you can create following the Grafana tutorial [Add authentication for data source plugins](https://grafana.com/docs/grafana/latest/developers/plugins/add-authentication-for-data-source-plugins/#add-a-dynamic-proxy-route-to-your-plugin) and [our data source template](https://github.com/volkovlabs/volkovlabs-abc-datasource).\n\n> Grafana sends the proxy route to the server, where the data source proxy decrypts any sensitive data and interpolates the template variables with the decrypted data before making the request.\n\n### HTTP Proxy\n\nData sources with HTTP Proxy keep authentication information hidden from end-user performing server-side requests.\n\nTo retrieve and update data using HTTP Proxy, the required endpoint should be defined in the `routes` section of the `plugin.json` configuration file.\n\n```json\n{\n  "method": "GET",\n  "path": "feedback",\n  "reqRole": "Viewer",\n  "url": "{{ .JsonData.url }}/api/feedback"\n},\n{\n  "method": "POST",\n  "path": "feedback",\n  "reqRole": "Viewer",\n  "url": "{{ .JsonData.url }}/api/feedback"\n},\n```\n\n### Configuration\n\nEvery data source configured in Grafana has a sequential number and unique-string identifiers. In our case, API has an identifier `2` which we will be using for the proxy requests.\n\n<Image\n  title="Data Sources are provisioned in our Grafana as a part of the custom Application plugin."\n  src="/img/blog/2022-06-12-data-manipulation-api/datasources.png"\n/>\n\nLet\'s set up the Update Request options for the Data Manipulation panel. We set the URL as `/api/datasources/proxy/2/feedback/submissions` to proxy requests to the API Server instead of accessing directly.\n\n<Image\n  title="Update Request configuration for the Data source using HTTP Proxy."\n  src="/img/blog/2022-06-12-data-manipulation-api/update.png"\n/>\n\nWe continue to improve the Data Manipulation panel and gather feedback from the community looking for new use cases.\n\nThe upcoming version of the panel will be based on the Grafana 9 toolkit and will continue to support Grafana 8.5+ versions.',
  },
  {
    id: "we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
    metadata: {
      permalink:
        "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      source: "@site/blog/2022-06-10-pytorch-nvidia-gpu/index.mdx",
      title:
        "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
      description:
        "One of the commercial projects we are working on is based on Ray and uses PyTorch to process data using AI models. To create a development environment for the Grafana Application plugin, we built Docker images for the Backend. One of the requirements was to support PyTorch with CPU and NVIDIA GPU in the same image.",
      date: "2022-06-10T00:00:00.000Z",
      formattedDate: "June 10, 2022",
      tags: [
        {
          label: "Machine Learning",
          permalink: "/blog/tags/machine-learning",
        },
        {
          label: "Ray Framework",
          permalink: "/blog/tags/ray-framework",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
        tags: ["Machine Learning", "Ray Framework"],
        image: "/img/blog/2022-06-10-pytorch-nvidia-gpu/banner.png",
        keywords: ["PyTorch", "GPU"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Connect the Data Manipulation plugin for Grafana to API Server",
        permalink:
          "/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904/",
      },
      nextItem: {
        title: "Data Manipulation plugin for Grafana",
        permalink:
          "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nOne of the commercial projects we are working on is based on Ray and uses PyTorch to process data using AI models. To create a development environment for the Grafana Application plugin, we built Docker images for the Backend. One of the requirements was to support PyTorch with CPU and NVIDIA GPU in the same image.\n\nProcessing AI models with CPU in PyTorch works out of the box and can be an option for the Development environment. Still, it\'s slow and not applicable for real-time operations or performance testing. To test NVIDIA GPU, we used one of the Google Cloud instances with GPU support.\n\nThis article will share our experience building Docker images with [Ray](https://www.ray.io/) and PyTorch on Google Cloud instances with GPU support. Ray is an open-source project that makes it simple to scale any compute-intensive Python workload from deep learning to production model serving.\n\n[PyTorch](https://pytorch.org/) is an open-source machine learning framework that accelerates the path from research prototyping to production deployment.\n\n## Google Cloud instances\n\nIf you have never used Google Cloud instances with GPU support in your organization, you will need to increase the quota to start any instances. The default quota for GPU instances is 0. You can learn more about GPU quota and how to increase it in the [Documentation](https://cloud.google.com/compute/resource-usage#gpu_quota).\n\nDifferent regions and zones provide various NVIDIA GPU models, and some of them are not available when you try to start a new instance. It took us a couple of retries to choose the right mix of GPU model and region to create a new instance.\n\nWe selected:\n\n- US Central region, Zone A.\n- 1 x NVIDIA Tesla K80.\n- Type N1-Standard-1 with one vCPU and 3.75Gb memory, which we can upgrade at any time for performance testing up to 8 vCPU.\n- Ubuntu 20.04 LTS with 30Gb Size.\n\n<Image\n  title="Creating a new Google Cloud instance with NVIDIA Tesla K80 GPU."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/configuration.png"\n  lazy={false}\n/>\n\n### Installation\n\nWe followed the [Google Cloud documentation](https://cloud.google.com/compute/docs/gpus/install-drivers-gpu#verify-windows) for installing GPU drivers. Installation using automated scripts took a while, and drivers could not load after a restart.\n\nMost of the installed packages are not required for our deployment. We use Docker containers and have no plans to run applications on the host machine.\n\nInstead of using provided scripts, we installed the latest version of NVIDIA Drivers for Tesla K80 from the repository.\n\n```sh\nsudo apt update\nsudo apt install nvidia-driver-470\n```\n\nAfter the installation was completed, the command `nvidia-smi` displayed information about the GPU:\n\n<Image\n  title="Command `nvidia-smi` can locate NVIDIA GPU after NVIDIA drivers installation."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/nvidia-smi.png"\n/>\n\n## Support GPU in Docker\n\nAfter NVIDIA drivers are installed on the host and the command `nvidia-smi` was able to locate GPU, we could move forward to install Docker, Docker Compose, and NVIDIA Toolkit.\n\n```sh\nsudo apt install docker-compose\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\n\nsudo apt update\nsudo apt-get install -y nvidia-docker2\n\nsudo systemctl restart docker\n```\n\nAt this point, a working setup could be tested by running a base CUDA container and you should see the same output:\n\n```sh\ndocker run --rm --runtime=nvidia nvidia/cuda:11.0-base nvidia-smi\n```\n\n<Image\n  title="Running the `nvidia-smi` command in the Docker container."\n  src="/img/blog/2022-06-10-pytorch-nvidia-gpu/docker.png"\n/>\n\nYou can learn more about the NVIDIA Container toolkit installation in the [Documentation](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html).\n\n## Docker Compose with GPU support\n\nThe Docker-compose version 1.25 does not support NVIDIA runtime configuration and should be upgraded to version 1.27 or later.\n\nThe latest version of Docker Compose can be downloaded from GitHub.\n\n```sh\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\n```\n\nFor our tests, we created a file `docker-compose.yml` to run `nvidia-smi` command and image based on Ray with a test PyTorch application.\n\nThe environment variable `NVIDIA_VISIBLE_DEVICES: all` is essential for PyTorch to see all GPU devices.\n\n```yaml\nversion: "2"\nservices:\n  nvidia:\n    image: nvidia/cuda:11.0-base\n    runtime: nvidia\n    command: nvidia-smi\n  app:\n    container_name: app\n    build:\n      context: ./app\n    runtime: nvidia\n    environment:\n      NVIDIA_VISIBLE_DEVICES: all\n```\n\n### Configuration\n\nTo build a Docker image based on the latest version of Ray, we created `Dockerfile`:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-10-pytorch-nvidia-gpu/Dockerfile"\n  language="docker"\n/>\n\nFile `requirements.txt` to install the 1.10.0 version of the PyTorch:\n\n```python\ntorch==1.10.0\n```\n\nHere is the application we used to test PyTorch with CUDA support:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2022-06-10-pytorch-nvidia-gpu/torch.py"\n  language="python"\n/>\n\n### Docker container\n\nLet\'s build and test created application container:\n\n```sh\nroot@gpu:/app# docker-compose build app\nBuilding app\nSending build context to Docker daemon  4.096kB\nStep 1/6 : FROM rayproject/ray:1.10.0-py38\n---> 2f51f6f631dd\nStep 2/6 : WORKDIR /app\n---> Using cache\n---> bd1c46292a36\nStep 3/6 : COPY requirements.txt ./\n---> Using cache\n---> 360bbc5e895d\nStep 4/6 : RUN pip3 install -r requirements.txt\n---> Using cache\n---> 3379070d95d2\nStep 5/6 : COPY ./app.py ./\n---> 5661ce1b61fc\nStep 6/6 : CMD ["python3", "./app.py"]\n---> Running in 75c604e59d9f\nRemoving intermediate container 75c604e59d9f\n---> cdd7582c3ee2\nSuccessfully built cdd7582c3ee2\nSuccessfully tagged app_app:latest\n\nroot@gpu:/app# docker-compose up app\nRecreating app ... done\nAttaching to app\napp        | CUDA Available: True\napp        | CUDA Devices count: 1\napp        | CUDA Version:  10.2\napp exited with code 0\n```\n\n## Summary\n\nWe successfully tested PyTorch with CUDA 10.2 and 11.4 in the Docker containers on the Google Cloud instance with GPU.\n\nAt this point, we are ready to add the actual application with additional Python requirements and build a full-featured Backend image.\n\nThe next step is to create a [Custom Data Source for Grafana using one of our Templates](/plugins/grafana) and continue developing dashboards and panels to interact with the Backend.',
  },
  {
    id: "data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
    metadata: {
      permalink:
        "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      source: "@site/blog/2022-05-19-data-manipulation-panel/index.mdx",
      title: "Data Manipulation plugin for Grafana",
      description:
        "Working on a commercial project, we created a Data Manipulation panel plugin that can be used to insert, update application data, and modify configuration directly from your Grafana dashboard.",
      date: "2022-05-19T00:00:00.000Z",
      formattedDate: "May 19, 2022",
      tags: [
        {
          label: "Data Manipulation",
          permalink: "/blog/tags/data-manipulation",
        },
        {
          label: "API",
          permalink: "/blog/tags/api",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
        tags: ["Data Manipulation", "API"],
        image: "/img/blog/2022-05-19-data-manipulation-panel/banner.png",
        keywords: ["Grafana", "Data Manipulation", "Forms"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "PyTorch in Ray Docker container with NVIDIA GPU support on Google Cloud",
        permalink:
          "/blog/we-tried-pytorch-in-docker-container-with-nvidia-gpu-support-on-google-cloud-5e30c49d9864/",
      },
      nextItem: {
        title: "Installing Grafana plugins from a Private repository",
        permalink:
          "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWorking on a commercial project, we created a Data Manipulation panel plugin that can be used to insert, update application data, and modify configuration directly from your Grafana dashboard.\n\nThe Data Manipulation panel has been requested by the community multiple times. We decided to open-source it and submit it for review to the Grafana team to include in the Grafana Catalog.\n\nThe Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard.\n\n<Video\n  src="https://www.youtube.com/embed/DXALVG8GijM"\n  title="Manual data entering and User input into Dashboard."\n/>\n\n## Architecture\n\nPanel options allow you to specify the URL for GET requests to receive initial values and POST, PUT, or PATCH requests to update values sent as a JSON. Header parameters can be added to secure your REST API calls.\n\n<Image\n  title="Data Manipulation panel uses GET, POST/PUT request to interact with API Server."\n  src="/img/blog/2022-05-19-data-manipulation-panel/form-api.png"\n  lazy={false}\n/>\n\nThe plugin supports dashboard variables in the URL and header parameters.\n\nFor example, `http://localhost:3001/${var}`, where `${var}` is a dashboard variable.\n\n<Image\n  title="Panel options allow specifying URL, header parameters, and Custom code."\n  src="/img/blog/2022-05-19-data-manipulation-panel/panel.png"\n/>\n\n## Javascript Code\n\nYou can add the custom Javascript code, which will be executed after the browser\'s various requests, e.g. `GET`, `POST`, `PUT`, and `PATCH`.\n\nFor example, we added the browser\'s location reload in the provided screenshot after a successful `POST` request.\n\nThe custom code has access to\n\n- Panel options.\n- Response from the REST API call.\n- Form elements.\n- Grafana services.\n- Variables are replaced automatically.\n\nCheck out the [documentation](/plugins/volkovlabs-form-panel/code) for all parameters.\n\n## Form Elements\n\nThe Data Manipulation Form panel is actively improving and already supports this.\n\n| Element                          | Description                                                                          |\n| -------------------------------- | ------------------------------------------------------------------------------------ |\n| Date and Time                    | Drop-down to set and adjust date and time.                                           |\n| Disabled                         | Display values that can\'t be changed.                                                |\n| Number Input                     | Enter numbers with minimum and maximum options.                                      |\n| Number Slider                    | Slider element with minimum, maximum, and step options.                              |\n| Password Input                   | Enter sensitive information.                                                         |\n| Radio Group with Boolean options | Select `True` or `False`.                                                            |\n| Radio Group with Custom options  | Provide custom options.                                                              |\n| Select with Custom options       | Similar to Radio Group visualized as drop-down.                                      |\n| String Input                     | Enter any alphanumeric values.                                                       |\n| Text Area                        | Multiline text area with an adjustable number of rows for comments and descriptions. |\n\n<Image\n  title="Form elements can be moved up and down and provide individual options."\n  src="/img/blog/2022-05-19-data-manipulation-panel/elements.png"\n/>\n\nWe plan to include Code Editor, File, and Image Upload elements in upcoming versions.\n\nIf you are interested in additional elements, please [open an issue in the repository](https://github.com/volkovlabs/volkovlabs-form-panel).\n\n## Customization\n\nThe form provides Submit and Reset buttons which can be customized to use\n\n- Theme-specific sizes.\n- Types.\n- Icons.\n- Flexible combination of background and foreground colors.\n\n<Image\n  title="Submit and Reset buttons can be customized to use theme-specific types and icons."\n  src="/img/blog/2022-05-19-data-manipulation-panel/buttons.png"\n/>\n\nForm options can be displayed in a single column or split into multiple columns, and each element can be assigned to a specific column. This feature will be available in an upcoming version. The current version allows splitting editable and disabled elements only.\n\n## Feedback dashboard\n\nLet\'s take a look at the example of using the Data Manipulation panel to submit comments, issues, and feature requests integrated into the Application plugin.\n\n<Image\n  title="Feedback dashboard with Data Manipulation panel and native Grafana visualizations."\n  src="/img/blog/2022-05-19-data-manipulation-panel/feedback.png"\n/>\n\nFor a seamless user experience, the feedback form allows users to provide us with valuable feedback for the application. All submissions are stored in the database and sent out using various communication channels.',
  },
  {
    id: "installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
    metadata: {
      permalink:
        "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      source: "@site/blog/2022-03-14-private-repository/index.mdx",
      title: "Installing Grafana plugins from a Private repository",
      description:
        "The Grafana Catalog application is one of our favorite features introduced in Grafana 8. It allows installing registered plugins from the official Grafana repository when connected to the Internet, but how do you upgrade and manage Grafana plugins without access to the external network?",
      date: "2022-03-14T00:00:00.000Z",
      formattedDate: "March 14, 2022",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
        tags: ["Development"],
        image: "/img/blog/2022-03-14-private-repository/banner.png",
        keywords: ["Grafana", "Private Repository", "Plugins"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Data Manipulation plugin for Grafana",
        permalink:
          "/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0/",
      },
      nextItem: {
        title:
          "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
        permalink:
          "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      },
    },
    content:
      'The Grafana Catalog application is one of our favorite features introduced in Grafana 8. It allows installing registered plugins from the official Grafana repository when connected to the Internet, but how do you upgrade and manage Grafana plugins without access to the external network?\n\nWith an increasing number of companies moving to the Cloud, there are still many use cases when Grafana instances are deployed offline, have firewall restrictions, and cannot connect to the official repository. Working on such a project, we examined various options to install Grafana plugins.\n\nThis article will talk about installing plugins using Grafana CLI (Command-Line Interface) and explain how to create a Private repository.\n\n## Manual installation\n\nThe easiest way to distribute the plugin to a single Grafana instance is\n\n- Download from the Grafana or GitHub repository.\n- Extract it to the particular folder specified in the configuration.\n- Restart Grafana.\n\nThe advantage of this method is its simplicity. Deploying multiple Grafana instances with various plugins will require custom procedures to install and upgrade utilizing this solution.\n\n## Grafana CLI\n\nGrafana CLI is a tool bundled with the Grafana server, which allows the performing of various administrative tasks and managing plugins.\n\nBefore Grafana 8, it was the most convenient way to install plugins on Grafana instances from the Grafana repository. It is also used for automated installation.\n\nThe general syntax for commands in Grafana CLI is:\n\n```sh\ngrafana-cli [global options] command [command options] [arguments...]\n```\n\nGrafana CLI allows overriding\n\n- Location of the plugin\'s archive.\n- Repository URL to download from.\n- Plugins folder, etc.\n\nYou can learn more about all those options in the [Documentation](https://grafana.com/docs/grafana/latest/cli/).\n\n### Update from URL\n\nInstalling a plugin by overriding the location of the plugin\'s archive is the most effortless way, which requires copying the plugin\'s archive to the HTTP(S) server reachable from the Grafana instance and repeating the same step to upgrade in the future.\n\n```sh\ngrafana-cli --insecure --pluginUrl https://company.com/plugins/<plugin-id>-<plugin-version>.zip plugins install <plugin-id>\n```\n\n### Update from Repository\n\nThe ultimate solution is to create a Private repository with a list of available plugins and versions. Overriding the repository URL allows installing and updating all plugins with the latest versions at once.\n\nThe syntax is:\n\n```sh\ngrafana-cli --repo "https://example.com/plugins" plugins install <plugin-id>\n```\n\n## Private Repository\n\nLooking around, we couldn\'t find any information on creating a Private repository so decided to share this information with the community.\n\nGrafana CLI looks for the `/plugins/repo` subfolder when setting a repository location. If plugins are found, it will display their names with the latest versions.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-remote\nid: volkovlabs-env-datasource version: 2.2.0\nid: volkovlabs-rss-datasource version: 2.3.0\nid: volkovlabs-image-panel version: 3.3.0\nid: volkovlabs-form-panel version: 2.7.0\nid: volkovlabs-echarts-panel version: 4.0.0\nid: volkovlabs-balena-app version: 1.5.0\nid: marcusolsson-calendar-panel version: 1.1.0\nid: marcusolsson-dynamictext-panel version: 2.1.0\nid: marcusolsson-static-datasource version: 2.1.0\n```\n\nThe format for the index file is to create a JSON array with the definition of the plugin and the latest version.\n\n```json\n{\n  "plugins": [\n    {\n      "id": "volkovlabs-env-datasource",\n      "type": "datasource",\n      "url": "https://github.com/VolkovLabs/volkovlabs-env-datasource",\n      "versions": [\n        {\n          "version": "2.2.0"\n        }\n      ]\n    }\n  ]\n}\n```\n\n### Versions\n\nTo list available versions for the specific plugin, provide the plugin\'s name for the `list-versions` command.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins list-versions volkovlabs-env-datasource\n2.2.0\n2.1.0\n2.0.0\n1.2.0\n1.1.0\n```\n\nGrafana CLI will request a file `/plugins/repo/volkovlabs-env-datasource` and display available versions.\n\nBackend plugins can be stored as separate files for each architecture build or specified as any for an archive with all supporting architecture.\n\n```json\n{\n  "versions": [\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.2.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.1.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "2.0.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "1.2.0"\n    },\n    {\n      "arch": {\n        "any": {}\n      },\n      "version": "1.1.0"\n    }\n  ]\n}\n```\n\n### Download\n\nThe next step is to upload plugins to specific locations and install them. To install the latest version of the `volkovlabs-env-datasource` plugin Grafana CLI will look for the download file in the particular location.\n\n```sh\n/plugins/volkovlabs-env-datasource/versions/1.1.0/download\n```\n\nHere is an example of how to install the plugin from the Private repository we just created.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n✔ Downloaded volkovlabs-env-datasource v2.2.0 zip successfully\nPlease restart Grafana after installing plugins.\n```\n\nTo update all plugins at once, execute.\n\n```sh\n$ grafana-cli --repo https://volkovlabs.io/plugins plugins update-all\n```\n\n## Environment Data Source\n\nIf not used correctly, the Environment Data Source plugin might expose environment variables with sensitive information (password, access token, etc.). That limits it from being a part of the official Grafana repository.\n\nAs discussed in [our previous article](/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416), we utilize it for our IoT (Internet of Things) projects, and our Private repository helps us install and update this plugin.\n\nWe are constantly updating and improving our Grafana plugins. A private repository has become a part of our workflow to verify and test plugins on our demo server and projects.',
  },
  {
    id: "using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
    metadata: {
      permalink:
        "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      source: "@site/blog/2022-02-20-environment-datasource/index.mdx",
      title:
        "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
      description:
        "The number of use cases operating Grafana as a platform to build modern applications is increasing. Compared to a single central Grafana instance, we are looking at multiple distributed installations with new data sources.",
      date: "2022-02-20T00:00:00.000Z",
      formattedDate: "February 20, 2022",
      tags: [
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
        {
          label: "Environment Data Source",
          permalink: "/blog/tags/environment-data-source",
        },
        {
          label: "Variables",
          permalink: "/blog/tags/variables",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
        tags: ["Getting Started", "Environment Data Source", "Variables"],
        image: "/img/blog/2022-02-20-environment-datasource/banner.png",
        keywords: ["Variables", "Grafana", "Visualization"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Installing Grafana plugins from a Private repository",
        permalink:
          "/blog/installing-grafana-plugins-from-a-private-repository-805b54a1add3/",
      },
      nextItem: {
        title: "How to create your first Grafana Dashboard",
        permalink:
          "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe number of use cases operating Grafana as a platform to build modern applications is increasing. Compared to a single central Grafana instance, we are looking at multiple distributed installations with new data sources.\n\nOne example is the Environment Data Source, which we created for our customer, who uses balenaCloud, the container-based platform for deploying Internet of Things (IoT) fleets of connected Linux devices.\n\nIn balenaCloud each IoT device is independent of its own Grafana instance, and each device can be uniquely identified by environment variables exposed within the project.\n\nWatch this video to learn more about the dashboard, global, and environment variables in Grafana.\n\n<Video\n  src="https://www.youtube.com/embed/sczRq2lI3e4"\n  title="Dashboard, Global and Environment variables."\n/>\n\nBefore looking at the Environment Data Source, let\'s examine how you can utilize environment variables in Grafana.\n\n## Configuration\n\nGrafana has default and custom configuration files. You can customize your Grafana instance by modifying the configuration file or using environment variables.\n\nTo override an option, use a predefined pattern `GF_<SectionName>_<KeyName>` to name exported variables.\n\n```sh\nexport GF_DEFAULT_INSTANCE_NAME=my-instance\nexport GF_SECURITY_ADMIN_USER=owner\nexport GF_AUTH_GOOGLE_CLIENT_SECRET=newS3cretKey\n```\n\n### Docker\n\nIf you are using Docker and Docker Compose, then environment variables can be set in the command line or the `docker-compose.yml` file.\n\n```docker\ngrafana:\n  container_name: grafana\n  image: grafana/grafana:latest\n  ports:\n    - 3000:3000\n  environment:\n    - GF_AUTH_ANONYMOUS_ORG_ROLE=Admin\n    - GF_AUTH_ANONYMOUS_ENABLED=true\n    - GF_AUTH_BASIC_ENABLED=false\n    - GF_ENABLE_GZIP=true\n    - GF_USERS_DEFAULT_THEME=light\n```\n\nYou can find all available configuration options in the [Documentation](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/).\n\n## Provisioning\n\nIt is possible to use environment variable interpolation in all three provisioning configuration types. The allowed syntax is either `$ENV_VAR_NAME` or `${ENV_VAR_NAME}` and can be used only for values.\n\nDashboard\'s definition files do not support environment variables, just in the dashboard provisioning configuration.\n\nExample of using environment variables for data source provisioning.\n\n```yaml\ndatasources:\n  - name: Example\n    url: http://localhost:$PORT\n    user: $USER\n    secureJsonData:\n      password: $PASSWORD\n```\n\n## Display Environment Variables\n\nSurprisingly, we could not find a solution on how to display environment variables on the dashboard and decided to create a backend data source plugin that retrieves environment variables exposed to the Grafana instance.\n\n<Image\n  title="The Environment Data Source allows retrieving environment variables exposed to the Grafana instance."\n  src="/img/blog/2022-02-20-environment-datasource/dashboard.png"\n  lazy={false}\n/>\n\n### Configuration\n\nIn Settings, the data source has the Filter option to avoid exposing unnecessary or secured variables.\n\n<Image\n  title="The Data Source can filter out unnecessary or secured variables."\n  src="/img/blog/2022-02-20-environment-datasource/configuration.png"\n/>\n\n## Dashboard Variables\n\nDashboard variables allow you to create more interactive and dynamic dashboards. Instead of hard-coding things like server, application, and sensor names in your metric queries, you can use variables in their place. Variables are displayed as dropdown lists at the top of the dashboard.\n\nThe Environment Data Source supports querying environment variables and returns its value to retrieve metric queries or display them on the dashboard.\n\n<Image\n  title="The Environment Data Source supports querying environment variables."\n  src="/img/blog/2022-02-20-environment-datasource/variables.png"\n/>\n\n## balenaCloud\n\nBalena is a complete set of tools for building, deploying and managing fleets of connected Linux devices. As we mentioned, each IoT device in our project provides Grafana with a custom application plugin for end-users.\n\nVariables can be added to the device and assigned to a specific service or all services running on the device. You can use environment variables to store secrets and other sensitive values out of your codebase and configure them when needed.\n\n<Image\n  title="In balenaCloud, variables can be added to the device or fleet-wide."\n  src="/img/blog/2022-02-20-environment-datasource/balena-cloud.png"\n/>\n\nEmploying the Environment Data Source, you can retrieve custom and generic environment variables configured for the IoT device and display them on Grafana\'s Home page and improve other dashboards.\n\n<Image\n  title="Balena\'s environment variables configured for the IoT device and displayed in Grafana."\n  src="/img/blog/2022-02-20-environment-datasource/balena-variables.png"\n/>\n\n## Grafana Catalog\n\nBecause of the security risk, the Environment data source can not be included in the Grafana Catalog.\n\nIt can be installed manually from our Private Repository or downloaded directly from [GitHub](https://github.com/volkovlabs/volkovlabs-env-datasource).\n\n```sh\ngrafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-env-datasource\n```\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
    metadata: {
      permalink:
        "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      source: "@site/blog/2022-01-26-first-dashboard/index.mdx",
      title: "How to create your first Grafana Dashboard",
      description:
        "We all heard that to get a better grasp of something. It is better to see it once than to hear about it a thousand times. Could anything be better than seeing? Creating it yourself!",
      date: "2022-01-26T00:00:00.000Z",
      formattedDate: "January 26, 2022",
      tags: [
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
        {
          label: "Analytics",
          permalink: "/blog/tags/analytics",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
        tags: ["Getting Started", "Analytics"],
        image: "/img/blog/2022-01-26-first-dashboard/banner.png",
        keywords: ["Business", "Charts", "Grafana", "Visualization"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title:
          "Environment Variables for Configuration, Provisioning, and Dashboards in Grafana",
        permalink:
          "/blog/using-environment-variables-for-configuration-provisioning-and-dashboards-in-grafana-279661733416/",
      },
      nextItem: {
        title: "Grafana 101 - What, Why, Who?",
        permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe all heard that to get a better grasp of something. It is better to see it once than to hear about it a thousand times. Could anything be better than seeing? Creating it yourself!\n\nThe satisfying AHA moment, a.k.a. \'Now I get it\' moment sparks up just after you personally iron all little wrinkles along the way.\n\nLet\'s get started. After reading my article and following along, I hope you will arrive at the same results as I did.\n\n<Video\n  src="https://www.youtube.com/embed/HNCKbGfAU0Q"\n  title="How to create your Business Grafana dashboard."\n/>\n\nSuppose your brain works like mine and requires a high-level picture first, then before proceeding, I recommend you to take a look at [my previous article](/blog/grafana-101-what-why-who-6b25f0d0fd11). It lays out all key Grafana concepts and talks about\n\n- What Grafana is.\n- What components it consists of.\n- How they interact.\n\nIf you can not wait any longer, let\'s get to it!\n\n## Choose a dataset\n\nStart with deciding what exactly you will display on your first Grafana Dashboard. That question ventured me to the [Kaggle.com](https://kaggle.com) website. It is the largest online community for data scientists, which also provides a ton of datasets for free download.\n\nI was intrigued by the electric vehicle charging station locations dataset as I immediately imagined using the Geomap Grafana visualization. It takes latitude and longitude as parameters to draw data points on the world map. The dataset set has more than 50K entries and promises to look impressive on the map.\n\n<Image\n  title="Geomap Visualization in Grafana dropdown selection."\n  src="/img/blog/2022-01-26-first-dashboard/geomap.png"\n  lazy={false}\n/>\n\nThe Geomap visualization is currently in the Beta version. Should that have been a concern? Maybe for shy and hesitant, but I felt lucky that day! Adventure is my middle name, as they say.\n\nAfter I downloaded and eyeballed the dataset, I realized it might have had too many columns for a quick experiment. I went ahead and removed the columns that did seem unnecessary. It does not mean that the ones I kept are all important. The absolute must are only two of them: Latitude and Longitude. The rest is up to you. The list of what I kept is below.\n\n- Fuel Type Code\n- Station Name\n- Street Address\n- City\n- State\n- ZIP\n- Plus4\n- Status Code\n- Groups With Access Code\n- Access Days Time\n- Latitude\n- Facility Type\n- Longitude\n\nStep 1 is complete if you have your dataset ready. In my case, I had an `ev_locations.csv` file with described columns and the header row removed.\n\n## Choose a data storage\n\nFor the first Grafana Dashboard, I recommend using one of the standard data sources, meaning those already a part of the Grafana Platform and are installed automatically with the Grafana installation package.\n\nThe [CSV data source](https://grafana.com/grafana/plugins/marcusolsson-csv-datasource/) is not installed by default and does require a couple of extra steps in setting it up. You are indeed welcome to explore that route.\n\n### PostgreSQL\n\nMy idea was to perform as few steps as possible. Therefore, I chose the PostgreSQL database as a backend storage technology. It already has a data source embedded into the Grafana Platform, free and easy to use. It sounded like a good fit.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nBefore I continue, I have to mention something important. While preparing this article, I utilized Docker containers technology which essentially imitates multiple environments in one host. I used PostgreSQL in a Docker container, which means I have not directly installed it on my machine. The Docker approach is optional, I am fond of Docker since it keeps my workstation clean.\n\nThe question is open if I should write a Docker 101 article with all key concepts. Let me know if that interests you, and I will jot it down for you real quick. You do not have to use Docker, the good old ways of installing everything on your local machine directly also work just fine for this experiment.\n\n### Setup\n\nAlright, let\'s get back to where we left off. After I installed PostgreSQL, I ran two commands. The first command was to create a table.\n\n```sql\ncreate table ev_locations\n(\nFuel_Type_Code           varchar(400) NULL,\nStation_Name             varchar(400) NULL,\nStreet_Address           varchar(400) NULL,\nCity                     varchar(400) NULL,\nState                    varchar(400) NULL,\nZIP                      varchar(400) NULL,\nPlus4                    varchar(400) NULL,\nStatus_Code              varchar(400) NULL,\nGroups_With_Access_Code  varchar(400) NULL,\nAccess_Days_Time         varchar(400) NULL,\nLatitude                 varchar(400) NULL,\nFacility_Type            varchar(400) NULL,\nLongitude                varchar(400) NULL\n);\n```\n\nThe second command was to populate it with data from the `ev_locations.csv` file I had created earlier.\n\n```sql\ncopy ev_locations from \'/tmp/ev_locations.csv\' delimiter\',\' CSV header;\n```\n\nStep 2 is complete when you have loaded your data file into the PostgreSQL database.\n\n## Install Grafana\n\nLike PostgreSQL, you can install it directly on your machine or use Grafana in the Docker container. Either way works. The latter is cleaner to my taste.\n\n<Video\n  src="https://www.youtube.com/embed/xTQpV7B700w"\n  title="How to Install Grafana for Data Analysts and Data Scientists."\n/>\n\nDownload the Grafana Installation package of your choice. It could be Linux, Windows, Mac, or a Docker Container.\n\n<Image\n  title="Grafana can be installed on Linux, Windows, Mac, Docker, and ARM platforms."\n  src="/img/blog/2022-01-26-first-dashboard/download.png"\n/>\n\nOnce Grafana is installed, go to your browser and enter the following URL. That should open the Grafana web application with full functionality.\n\n```\nhttp://localhost:3000\n```\n\nStep 3 is complete when you can open Grafana on local port 3000.\n\n## Geomap visualization\n\nI will provide concise instructions to make it easier to follow. On the left-hand side, I saw the main menu, hovered the plus sign, and selected Create Dashboard. Next, I chose to add a new panel. Below is the window where I arrived at that moment.\n\n<Image\n  title="Navigate to Query Editor and update SQL to visualize data in the panel."\n  src="/img/blog/2022-01-26-first-dashboard/new-panel.png"\n/>\n\nThe screen looked overwhelming, but the more time I spent playing around with different options, the more comfortable I got. My usual preference is to write my SQL queries from scratch. I do not favor any helpers since I am a SQL champ and always "know better."\n\nFor that reason, I clicked Edit SQL and entered the simple `SELECT` statement that would be needed. I also changed Format As to Table. Another thing to point out is `limit 5` in my query. Since I was learning, I wanted to limit the volume of the fetched data. Once I had everything set up, I removed the limit.\n\n<Image\n  title="Query Editor with final SQL statement to retrieve data for Geomap."\n  src="/img/blog/2022-01-26-first-dashboard/sql.png"\n/>\n\nFinally, the time came for the fun part. On the right-hand side, under the Search for element, there are three tabs, and one is called Visualization. Yes! That was it. I chose it and reviewed the list of all available visualizations.\n\n<Image\n  title="I chose it and reviewed the list of all available visualizations."\n  src="/img/blog/2022-01-26-first-dashboard/panels.png"\n/>\n\nYou bet I hit the Geomap one. Every Grafana visualization has many properties to modify optionally. I did the bare minimum to complete this project swiftly. Here is what I altered. I chose North America for a Map View.\n\n<Image\n  title="I chose North America for a Map View."\n  src="/img/blog/2022-01-26-first-dashboard/map-view.png"\n/>\n\n## Dashboard variable\n\nThe little cherry on top was a filter by facility type. That is done via variables. I went to the gear icon for Dashboard Settings on the top right corner and then into the Variables menu.\n\nBelow is the picture showing how I set it up.\n\n- Following the naming convention best practice, I used the `v_` prefix since it was a variable name.\n- The label is how the filter is called on the dashboard.\n- Query determines what values for the filter are going to be.\n- Sort is to make sure the values are sorted in the filter.\n\n<Image\n  title="Add variables to filter data by State and facility type."\n  src="/img/blog/2022-01-26-first-dashboard/variables.png"\n/>\n\nThe last step is to save the Dashboard by clicking the Save button in the upper right corner. Vuala. The dashboard is ready.\n\nStep 4 is complete when you have a working dashboard on your local machine.\n\n## Let others access your Grafana dashboard\n\nThat step might be tricky, depending on how hard it is for you to access the user-facing server. You might likely need help from your Network teammates to help with setting this up. Web Servers are far beyond the scope of this article. I only can tell that I am lucky enough to have my Grafana Servers where I can experiment as I please.\n\nHowever, there is one trick that I would like to share with you. It is pretty easy to transfer the dashboard from one Grafana application to other.\n\nIn my case, from my local Grafana to the Grafana running on Google Cloud and powering our demo server. I clicked on the Share icon. It can be found in the View mode to the right of the Dashboard title.\n\n<Image\n  title="Click on the Share icon to export the dashboard."\n  src="/img/blog/2022-01-26-first-dashboard/share.png"\n/>\n\nThen I went to Export, next to the View JSON. I copied the JSON file from my local Grafana and pasted it into the Grafana on the demo server. That\'s all. BOOM! I did not have to recreate a new dashboard from scratch. I just copied the description file.\n\nHere how the dashboard looks like.\n\n<Image\n  title="Geomap visualization for Electric Vehicle Charging Station."\n  src="/img/blog/2022-01-26-first-dashboard/final.png"\n/>\n\nAny feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!',
  },
  {
    id: "grafana-101-what-why-who-6b25f0d0fd11/",
    metadata: {
      permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      source: "@site/blog/2022-01-21-grafana-101/index.mdx",
      title: "Grafana 101 - What, Why, Who?",
      description:
        "The Grafana community is constantly growing, and we are happy to welcome new professionals onboard this flexible and powerful tool. Grafana has been of interest to deep technology experts in the recent past. Although, lately, more and more people from different backgrounds and skill sets are turning heads toward it.",
      date: "2022-01-21T00:00:00.000Z",
      formattedDate: "January 21, 2022",
      tags: [
        {
          label: "Getting Started",
          permalink: "/blog/tags/getting-started",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Daria Volkova",
          title:
            "Translates ideas to elegant solutions and produces YouTube tutorials.",
          url: "https://youtube.com/@VolkovLabs",
          imageURL: "/img/team/daria.png",
          key: "daria",
        },
      ],
      frontMatter: {
        authors: ["daria"],
        slug: "grafana-101-what-why-who-6b25f0d0fd11/",
        tags: ["Getting Started"],
        image: "/img/blog/2022-01-21-grafana-101/banner.png",
        keywords: ["Business", "Charts", "Grafana", "Visualization"],
        updated: "2023-04-09T00:00:00.000Z",
      },
      prevItem: {
        title: "How to create your first Grafana Dashboard",
        permalink:
          "/blog/how-to-create-your-first-grafana-dashboard-bd0f68d631bd/",
      },
      nextItem: {
        title: "Be on top of the latest news while staying in Grafana",
        permalink:
          "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nThe Grafana community is constantly growing, and we are happy to welcome new professionals onboard this flexible and powerful tool. Grafana has been of interest to deep technology experts in the recent past. Although, lately, more and more people from different backgrounds and skill sets are turning heads toward it.\n\nThis article answers basic questions about Grafana and is designed to be the first step in your from zero to hero Grafana adventure. Let\'s discover together what made Grafana to be installed over 700.000 times across the world.\n\nWhat is Grafana? After researching publications, and documentation, and picking the brains of the renowned Grafana experts, it turned out it was a million-dollar question. This tool has so many facets that there is no one definite straightforward answer in the community. I took some liberty and came up with my definition and the basic explanations of Grafana architecture.\n\n## All key concepts to know\n\nGrafana is open-source software that allows you to combine many different data sources converting your data into graphical visualizations for observability. Observability is a new buzzword that means visualizations to help with answering ambiguously defined questions, providing enough analysis to make critical decisions quickly.\n\nIn its nutshell, Grafana consists of 3 logical components or layers\n\n- Grafana Platform\n- Data Source\n- Visualization\n\nData Sources and Visualizations are also widely called plugins. You can have Data Sources and Visualizations forged together into one plugin. In that case, it is called an Application plugin.\n\n### Grafana Platform\n\nThe Grafana Platform takes care of user authentication, authorization, and deployment on various operations systems and provides you with a venue where any number of plugins can be installed, managed, and shared with users according to your security policies.\n\n### Data Source\n\nData Source allows the Grafana Platform to talk with your data storage. For example, the PostgreSQL plugin allows the Grafana Platform to retrieve data from the PostgreSQL database and send it to Visualization components.\n\nWatch the video where I explain why PostgreSQL is the ultimate storage partner for Grafana.\n\n<Video\n  src="https://www.youtube.com/embed/SbjIWnrMIgk"\n  title="PostgreSQL with Timescale is the ultimate storage partner for Grafana."\n/>\n\nSupported Data Sources can be categorized:\n\n- Time-series: Prometheus, Graphite, OpenTSDB, InfluxDB\n- Logging & Document: Loki, Elasticsearch\n- Distributed Tracing: Jaeger, Zipkin, Tempo\n- SQL: MySQL, PostgreSQL, Microsoft SQL Server\n- Cloud: AWS CloudWatch, Azure Monitor, Google Cloud Monitoring\n\n### Visualizations\n\nVisualizations convert retrieved data frames into dynamic graphical representations such as histograms, geo maps, bars, and candlestick charts, to name a few.\n\n<Image\n  title="Website analytics using Apache ECharts, Bar chart, stats panels in Grafana."\n  src="/img/blog/2022-01-21-grafana-101/visualization.png"\n  lazy={false}\n/>\n\nTwo more key Grafana concepts are Panels and Dashboards. To me, they are the easiest of all. A Grafana Panel is a working visualization connected to your data source. A Grafana Dashboard is a combination of panels.\n\n## Plugins Dashboard\n\nEnthusiasts of the Grafana Community create new Data Sources and Visualizations every day. We at Volkov Labs created [an information dashboard](https://release.volkovlabs.io/d/hHK1qmpnk/grafana-catalog?orgId=1) with the number of downloads for all Grafana plugins.\n\n<Image\n  title="The information dashboard with the number of downloads for all Grafana plugins."\n  src="/img/blog/2022-01-21-grafana-101/dashboard.png"\n/>\n\nIt is a one-stop listing to simplify your Grafana plugin search. Such a simple solution made a big difference, especially given that there are no equivalents out there.\n\nYou can download any plugin as a code from GitHub or install it from the Grafana Catalog and easily mount it on top of the preinstalled Grafana. All plugins have been verified and went through rigorous peer review. This dashboard updates in real time.\n\n## How to get started with Grafana\n\nIf we sum up all key concepts in one workflow, here is what we get. You install the Grafana Platform and add the Grafana plugins for your data storage if it is not yet installed by default.\n\nNext, you create a Dashboard, add a Panel, connect it to the Data Source, choose a Visualization, configure it by composing your queries, adjust visuals (colors, sizes, title, etc.), save it and share the link with your peers. Boom! You can get as creative as humanely possible. This is the outstanding beauty of Grafana.\n\n## Quick facts to complete the picture\n\n- Super light-weighted software.\n- Presently, Grafana is primarily a read-only tool. Yet, that might change in the future. Check out the [Data Manipulation](/plugins/volkovlabs-form-panel) panel.\n- The visualizations could be refreshed as often as every 100 milliseconds. That, in particular, makes Grafana the ideal tool for monitoring any processes in real time.\n- Grafana does not store any data. Instead, it provides a secure path from your database and data storage to the visualization directly.\n- Grafana allows the dashboard creators to utilize the languages they are already familiar with. The queries that are used by the Grafana dashboards are transmitted to the databases in their native semantics.\n\n## Grafana Use Cases\n\nGrafana dashboards could be placed:\n\n- Locally. For instance, that could be a screen attached to a wall in the office or laboratory.\n- In Intranet. For internal use of the company\'s employees to display important KPIs like performance metrics, the progress of the current sprint, and real-time sales volumes for the just-launched merchandise.\n- On the Internet. To provide analytical services to the company\'s clients or share real-time analytics with fellow researchers in scientific communities.',
  },
  {
    id: "do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
    metadata: {
      permalink:
        "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      source: "@site/blog/2021-12-28-rss-datasource/index.mdx",
      title: "Be on top of the latest news while staying in Grafana",
      description:
        "What is the first panel you see when opening Grafana? It's probably the News panel on the Home dashboard with the latest blog posts from the Grafana team and community. The News panel fetches the RSS feed directly in the browser, and while it works for some feeds, it has manifold limitations.",
      date: "2021-12-28T00:00:00.000Z",
      formattedDate: "December 28, 2021",
      tags: [
        {
          label: "RSS/Atom Data Source",
          permalink: "/blog/tags/rss-atom-data-source",
        },
        {
          label: "Dynamic Text",
          permalink: "/blog/tags/dynamic-text",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
        tags: ["RSS/Atom Data Source", "Dynamic Text"],
        image: "/img/blog/2021-12-28-rss-datasource/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-02-14T00:00:00.000Z",
      },
      prevItem: {
        title: "Grafana 101 - What, Why, Who?",
        permalink: "/blog/grafana-101-what-why-who-6b25f0d0fd11/",
      },
      nextItem: {
        title: "Display Large PDF documents in Grafana",
        permalink:
          "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWhat is the first panel you see when opening Grafana? It\'s probably the News panel on the Home dashboard with the latest blog posts from the Grafana team and community. The News panel fetches the RSS feed directly in the browser, and while it works for some feeds, it has manifold limitations.\n\nLooking around, we found multiple discussions and issues opened regarding updating the News panel or creating an RSS and Atom data source. The question is, how to display data from such data sources? Time series or Table panels won\'t be the perfect candidates to demonstrate news with a custom layout.\n\nThe video version of this article is available on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/RAxqS2hpWkg"\n  title="News feed tutorial for Grafana Dashboard."\n/>\n\nWe maintain the [Dynamic Text panel](/plugins/volkovlabs-dynamictext-panel), which can display data frames using a custom layout based on Markdown, HTML, and Handlebars.\n\nRSS data source was created based on the recently released [data source plugin template](/plugins/volkovlabs-abc-datasource). This template is similar to the panel plugin template introduced in the previous articles. RSS/Atom data source retrieves feed and returns data frames to display news using Dynamic Text or other custom panels.\n\n## Data source plugin\n\n> Data source plugins communicate with external sources of data and return the data in a format that Grafana understands. By adding a data source plugin, you can immediately use the data in any of your existing dashboards.\n\nThere are 120 data source plugins available in the Grafana Catalog; 22 were added this year. When considering creating a new data source plugin, there are multiple questions you have to answer:\n\n- Can the data be retrieved using the HTTP(S) protocol?\n- Does the standard HTTP(S) backend fit your needs and provide all required authentication options?\n- Does the data source require Alerting support?\n\nRSS and Atom feed can be accessed using HTTP(S) protocol and, in most cases, do not require authentication at all. Authentication can be added in the future version, and default authentication options in the HTTP(S) backend should be sufficient.\n\nWe decided to create an RSS/Atom data source based on [our data source plugin template](/plugins/volkovlabs-abc-datasource) without a backend. This template is similar to the panel plugin template and provides Docker Compose, Initial Provisioning, and Continuous Integration with test coverage configuration out of the box.\n\n## Add Data Source\n\nLet\'s add a new RSS data source for the Grafana blog and create a panel to display the latest news similar to the News Panel.\n\nThe RSS/Atom data source can be added manually using the Data Sources Configuration menu or provisioned using configuration files.\n\n<Image\n  title="We are adding an RSS/Atom data source for Grafana Newsfeed."\n  src="/img/blog/2021-12-28-rss-datasource/datasource.png"\n  lazy={false}\n/>\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2021-12-28-rss-datasource/provisioning.yml"\n  language="yaml"\n/>\n\n## Dynamic Text panel\n\nThe next step is to add a Dynamic Text panel on the dashboard and set content with Markdown, HTML, and Handlebars.\n\n<Image\n  title="Adding a new Dynamic Text panel on the Dashboard for Grafana newsfeed."\n  src="/img/blog/2021-12-28-rss-datasource/dashboard.png"\n/>\n\nTo correctly display the date, it should have the type `Time`. All fields returned by the data source have a type `String` and can be transformed by converting field type with a specified input format to `Time` or `Number`.\n\n<Image\n  title="Convert field type transformation for the pubDate field as Time."\n  src="/img/blog/2021-12-28-rss-datasource/transformation.png"\n/>\n\nHere is the panel\'s content to achieve a look similar to the News panel:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs.io/blob/main/blog/2021-12-28-rss-datasource/table.html"\n  language="html"\n/>\n\nYou can read more about the Dynamic Text panel and various helpers you can use in the [Documentation](/plugins/volkovlabs-dynamictext-panel).\n\n## AWS feed\n\nWhen AWS has another outage, you can track the status directly on the Grafana dashboard.\n\n<Image\n  title="AWS CloudFront Service Status on the Grafana dashboard."\n  src="/img/blog/2021-12-28-rss-datasource/aws.png"\n/>\n\n## Redis Status page\n\nThe Redis Status page is based on the Atom format and can be displayed using this data source.\n\n<Image\n  title="Redis Status page based on the Atom format feed."\n  src="/img/blog/2021-12-28-rss-datasource/redis.png"\n/>\n\nUsing the RSS/Atom data source, you can combine your system and application metrics with newsfeeds from AWS, Redis, and other providers to be presently informed if they have any issues on their side.',
  },
  {
    id: "using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
    metadata: {
      permalink:
        "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      source: "@site/blog/2021-12-17-display-large-pdf/index.mdx",
      title: "Display Large PDF documents in Grafana",
      description:
        "We discussed the benefits of using Docker containers and initial Provisioning in the recent article about creating our panel plugin template for Grafana. While working on the current feature request for the Base64 image/PDF panel, this technique helped us quickly deliver solutions and improve the long-term support for the panel.",
      date: "2021-12-17T00:00:00.000Z",
      formattedDate: "December 17, 2021",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
        tags: ["Base64 Image/Video/Audio/PDF"],
        image: "/img/blog/2021-12-17-display-large-pdf/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-02-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Be on top of the latest news while staying in Grafana",
        permalink:
          "/blog/do-you-want-to-be-on-top-of-the-latest-news-staying-in-grafana-9abb064ed449/",
      },
      nextItem: {
        title: "Our panel plugin template for Grafana",
        permalink:
          "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nWe discussed the benefits of using Docker containers and initial Provisioning in [the recent article](/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e) about creating our panel plugin template for Grafana. While working on the current feature request for the Base64 image/PDF panel, this technique helped us quickly deliver solutions and improve the long-term support for the panel.\n\nWhen we created a Base64 image/PDF panel to display images for one of our projects, support for PDF documents was added as a feature. I am glad the panel is being used to display PDF documents stored in the databases like PostgreSQL.\n\nYou can learn more about the plugin in the video on our YouTube channel.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Video, Live Camera Feed on Grafana Dashboard."\n/>\n\n## PDF documents\n\nDepending on the size, PDF documents are classified as\n\n- Small (10-100kb)\n- Medium (100-1MB)\n- Large (1-16 MB)\n- Huge (16-128 MB).\n\nOur panel supported Small and Medium-sized PDF documents, which are easy to test and do not require any database to store. We used the [Static Data Source](/plugins/volkovlabs-static-datasource), and data was held in the dashboard.\n\nTo test support for Large documents, we\n\n- Installed PostgreSQL.\n- Loaded PDF documents into the database.\n- Created a data source and dashboard to validate and check performance.\n\nAlso, it has to be scripted, and easy to deploy for continuous integration and development.\n\n## PostgreSQL\n\nFrom Grafana\'s point of view, all data sources are the same while they return data frames. The panel\'s feature request was opened to support Large PDF documents retrieved from PostgreSQL.\n\n<Image\n  title="Large PDF document retrieved from the PostgreSQL database and displayed in Grafana."\n  src="/img/blog/2021-12-17-display-large-pdf/panel.png"\n  lazy={false}\n/>\n\nTo install PostgreSQL, we added a container with the latest version of the image `postgres`. We specified a volume for the folder `/docker-entrypoint-initdb.d`, which takes care of creating necessary tables and permissions when starting.\n\n```yaml\npostgres:\n  image: postgres\n  restart: always\n  environment:\n    POSTGRES_PASSWORD: postgres\n  ports:\n    - 5432:5432\n  volumes:\n    - ./postgres:/docker-entrypoint-initdb.d\n```\n\nIn our case, it was a table with `bytea` fields to store binary data with unique names. Images and PDF documents can be stored in base64 format or converted using the command `encode()` when retrieved from the database.\n\n```sql\nCREATE TABLE images (name text, img bytea, UNIQUE(name));\n```\n\n## Load PDF into the database\n\nTo load PDF documents and a test image into the database, we created a Node.js script:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/postgres/load.ts"\n  language="js"\n/>\n\n## Provisioning\n\nOur Panel plugin template already has the Initial Provisioning configuration in place to add a new dashboard for PostgreSQL.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/provisioning/dashboards/default.yaml"\n  language="yaml"\n/>\n\nAnd we additionally added configuration to provision PostgreSQL data source with SSL disabled, specific username, password, and URL.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/provisioning/datasources/postgres.yaml"\n  language="yaml"\n/>\n\nYou can learn more about the PostgreSQL data source in the official [Documentation](https://grafana.com/docs/grafana/latest/datasources/postgres/).\n\n## Load data\n\nThe last step is to start containers and load data, when starting, Grafana and PostgreSQL will be auto-provisioned and ready to go.\n\nOverall, a 13Mb PDF document with 2990 pages takes 1-2 seconds to display. The user confirmed the feature request, and the plugin was sent to the Grafana team to review and update in the Grafana Catalog.\n\nTake a look at [the repository](https://github.com/VolkovLabs/volkovlabs-image-panel) and let us know if you have any questions or future requests.',
  },
  {
    id: "we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
    metadata: {
      permalink:
        "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      source: "@site/blog/2021-12-10-panel-template/index.mdx",
      title: "Our panel plugin template for Grafana",
      description:
        "Grafana has excellent tutorials on building panel plugins, but we found ourselves repeating the same steps when creating custom plugins for our customers. Eventually, we decided to create our template for a panel plugin, which I hope can be helpful for the community.",
      date: "2021-12-10T00:00:00.000Z",
      formattedDate: "December 10, 2021",
      tags: [
        {
          label: "Development",
          permalink: "/blog/tags/development",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
        tags: ["Development"],
        image: "/img/blog/2021-12-10-panel-template/banner.png",
        keywords: ["Template", "Panel", "Grafana", "Visualization"],
        updated: "2023-02-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Display Large PDF documents in Grafana",
        permalink:
          "/blog/using-grafana-to-display-large-pdf-documents-weve-got-you-covered-4e654e8d4bce/",
      },
      nextItem: {
        title: "Display Base64 images from any data source",
        permalink:
          "/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
      },
    },
    content:
      'import Code from "@theme/Code";\nimport Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nGrafana has excellent tutorials on building panel plugins, but we found ourselves repeating the same steps when creating custom plugins for our customers. Eventually, we decided to create our template for a panel plugin, which I hope can be helpful for the community.\n\nGrafana\'s tutorial [Build a panel plugin](https://grafana.com/tutorials/build-a-panel-plugin/) provides information on setting up the environment, creating a new plugin, and explaining the basics of a panel development using data frames and options control. It\'s a great starting point, and we recommend reading it before continuing with this article.\n\nAs I mentioned before, we wanted to have a template, which can be used as a base for a new panel with everything in place and updated to the latest version of Grafana. We called it the [Abc panel](https://github.com/VolkovLabs/volkovlabs-abc-panel).\n\n## Panel plugins\n\nPanels allow visualizing of data received from data sources. While Grafana has several built-in panels like Table, Time Series, and Text, you can also create your custom panels.\n\n<Image\n  title="Panel plugins are registered in the Grafana Catalog and provide many visualization options and features."\n  src="/img/blog/2021-12-10-panel-template/panels.png"\n  lazy={false}\n/>\n\nThere are a lot of use cases that require custom visualization with additional logic implemented on the front end, which goes beyond standard and available panels.\n\n## Docker container\n\nFor all of our developments, we use Docker and Docker Compose to orchestrate containers. [Compose](https://docs.docker.com/compose/) is a tool for defining and running multi-container Docker applications.\n\nHere are some benefits of using Docker containers compared to locally installed Grafana.\n\n- Easy to deploy and share configuration with team members and customers.\n- Allows testing plugins against multiple versions and the main branch to be prepared for the upcoming release.\n- Docker always starts from a fresh configuration with initial Provisioning done automatically (more information below).\n\nOur typical configuration for Grafana is included in the template.\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-abc-panel/blob/main/docker-compose.yml"\n  language="yaml"\n/>\n\nIn this configuration, Grafana starts in Anonymous mode and does not require authentication. Any plugins can be installed at the start-up automatically.\n\nWe use the [Static Data Source](/plugins/volkovlabs-static-datasource/) to prototype the idea and then add additional services to Docker Compose and corresponding data sources to Grafana.\n\n## Building and Signing\n\nBefore starting the Grafana container, the plugin should be built and signed in the `/dist` folder. The other option is to enable the development mode.\n\nThe `/dist` folder is mounted to the Grafana container in the provided configuration. Plugin signing was introduced in Grafana 7.0 and became mandatory for Grafana 8.0. Take a look at the [Documentation](https://grafana.com/docs/grafana/latest/developers/plugins/sign-a-plugin/) to learn more about different signing levels.\n\nTo build and sign plugins as Private we use scripts configured in the `package.json` file. When the plugin is ready to release, the signature can be updated by the Grafana team to Community or Commercial and the parameter `rootUrls` can be removed.\n\n```json\n"scripts": {\n    "build": "grafana-toolkit plugin:build --coverage",\n    "sign": "grafana-toolkit plugin:sign --rootUrls http://localhost:3000/",\n  },\n```\n\n### Visual Studio Code\n\nScripts can be executed using the command line or Visual Studio Code, which is our preferred UI for development, and we recommend it to our clients who want to contribute and follow the process.\n\n<Image\n  title="Run build, sign script from the Visual Studio Code, our preferred UI for development."\n  src="/img/blog/2021-12-10-panel-template/vscode.png"\n/>\n\nYou may notice special `--coverage` flag added to the build command to generate coverage files, which are uploaded and reviewed as a part of Continuous Integration (CI).\n\n## Provisioning\n\nTo make the development process repeatable, transferrable, and easier for the Grafana team to Review, we create provisioning files to add data sources, application plugins, and dashboards in the `/provisioning` folder.\n\nHere is an example of how to add a Static Data Source:\n\n<Code\n  url="https://github.com/VolkovLabs/volkovlabs-abc-panel/blob/main/provisioning/datasources/datasources.yaml"\n  language="yaml"\n/>\n\nTo add or update dashboards, they should be exported as Global and placed in the `/provisioning/dashboards` folder. Detailed information can be found in the Grafana [Documentation](https://grafana.com/docs/grafana/latest/administration/provisioning/).\n\n## Testing and Continuous Integration\n\nValidating test coverage is included in the CI workflow. To track coverage, we use CodeCov - the leading Code Coverage solution.\n\n<Image\n  title="We are tracking and reviewing code coverage with the CodeCov."\n  src="/img/blog/2021-12-10-panel-template/codecov.png"\n/>\n\nOn every commit, GitHub CI Action checks the plugin\'s functionality by running tests and submitting coverage to CodeCov. With additional functionality, overall test coverage can decrease, and the action fails. The CodeCov can track it and help you keep the test coverage at an acceptable level.\n\nHere is a part of the GitHub Action to submit coverage to CodeCov.\n\n```yaml\n- name: Upload coverage to Codecov\n        uses: codecov/codecov-action@v2\n        with:\n          directory: ./coverage/\n          files: ./coverage/lcov.info\n          env_vars: OS,PYTHON\n          fail_ci_if_error: true\n```\n\n## Long-term Support\n\nEvery release of Grafana introduces new features, breaking changes, and minor updates. Depending on the features and complexity of the custom plugin, some tests can fail, and parts of the code should be replaced or improved with every major Grafana release.\n\nWe recommend doing manual testing of custom plugins and applications for each new release. As mentioned before, Docker with Provisioning and CI included in the template makes it effortless.',
  },
  {
    id: "display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
    metadata: {
      permalink:
        "/blog/display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
      source: "@site/blog/2021-09-27-image-panel/index.mdx",
      title: "Display Base64 images from any data source",
      description:
        "Base64 Image/PDF panel plugin was recently upgraded and has everything you need to display images from any data source on your dashboards.",
      date: "2021-09-27T00:00:00.000Z",
      formattedDate: "September 27, 2021",
      tags: [
        {
          label: "Base64 Image/Video/Audio/PDF",
          permalink: "/blog/tags/base-64-image-video-audio-pdf",
        },
      ],
      hasTruncateMarker: false,
      authors: [
        {
          name: "Mikhail Volkov",
          title: "Loves to work on innovative projects.",
          url: "https://github.com/VolkovLabs",
          imageURL: "/img/team/mikhail.png",
          key: "mikhail",
        },
      ],
      frontMatter: {
        authors: ["mikhail"],
        slug: "display-base64-encoded-images-from-any-data-source-on-your-dashboard-398a99ba5b5e/",
        description:
          "Base64 Image/PDF panel plugin was recently upgraded and has everything you need to display images from any data source on your dashboards.",
        tags: ["Base64 Image/Video/Audio/PDF"],
        image: "/img/blog/2021-09-27-image-panel/banner.png",
        keywords: ["Image", "PDF", "Base64", "Visualization"],
        updated: "2023-02-15T00:00:00.000Z",
      },
      prevItem: {
        title: "Our panel plugin template for Grafana",
        permalink:
          "/blog/we-created-our-own-panel-plugin-template-for-grafana-665f7e6760d1/",
      },
    },
    content:
      'import Image from "@theme/Image";\nimport Video from "@theme/Video";\n\n\nBase64 Image/PDF panel plugin was recently upgraded in the [Grafana Catalog](https://grafana.com/grafana/plugins/volkovlabs-image-panel/) and has everything you need to display images from any data source on your dashboards.\n\nThe initial version of the Base64 Image/PDF panel for Grafana was created for the project "Analyzing camera feed in real-time" and helped to streamline the original project by displaying AI-analyzed images on the Grafana dashboard.\n\n<Image\n  title="Analyzing camera feed in real-time using RedisAI, OpenCV-Python, and Redis plugins for Grafana."\n  src="/img/blog/2021-09-27-image-panel/bat-camera.png"\n  lazy={false}\n/>\n\n## Updates\n\nSince the original version, the Base64 panel was\n\n- Upgraded to support Grafana 8.\n- Downloaded more than 45,000 times.\n- Featured in the [Grafana Community Plugin Showcase (August 2021)](https://grafana.com/blog/2021/08/10/grafana-community-plugin-showcase-august-2021/).\n- Used for various projects like security camera monitoring.\n\n<Video\n  src="https://www.youtube.com/embed/1_bgLSehjhg"\n  title="Images, PDFs, Live Camera Feed on Grafana Dashboard."\n/>\n\n## Getting Started\n\nYou can use the `grafana-cli` tool to install from the command line for standalone Grafana or directly in the Grafana Cloud.\n\n```sh\ngrafana-cli plugins install volkovlabs-image-panel\n```\n\nIn the latest version of Grafana 8.1 standalone plugin can also be installed using the Grafana Catalog application.\n\n<Image\n  title="Grafana Catalog allows installing plugins directly from the Grafana dashboard without restarting the application."\n  src="/img/blog/2021-09-27-image-panel/installation.png"\n/>\n\n## Panel Features\n\nThe values returned from the data source can be Base64 encoded with or without definition in the format `data:image/jpg;base64,ENCODED-CONTENT` or `data:application/pdf;base64,ENCODED-CONTENT`.\n\nIf the definition is not provided, the file type is determined automatically based on the first Base64 symbol.\n\n<Image\n  title="Base64 Image/PDF panel displays an image using the Static data source."\n  src="/img/blog/2021-09-27-image-panel/panel.png"\n/>\n\nIf the data source returns more than one field with `string` type, you can select the Field Name in the panel\'s display options. If the data source returns multiple rows, the panel will display the image from the last row.\n\nThe height and width of the image can be auto-adjusted to the panel\'s size, kept original, or customized based on the field\'s value, or panel options.\n\nTake a look at [the repository](https://github.com/VolkovLabs/volkovlabs-image-panel) and let us know if you have any questions or future requests.',
  },
];
