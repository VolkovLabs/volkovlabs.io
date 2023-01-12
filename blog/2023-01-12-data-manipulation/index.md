---
authors: [daria, mikhail]
slug: data-manipulation-grafana-20230112
tags: [Data Manipulation, API]
keywords: [Data Manipulation, API, Grafana]
---

# Observability without Data Manipulation is a lost opportunity

It was a rainy, gloomy day. Billy has been working on a presentation for a critical client since early morning. He spent hours carefully inspecting all formulas and calculation algorithms. The presentation looked impeccable. All numbers copied from the Grafana dashboard were added up adequately. To spice things up, Billy has added a copy of some visualizations. The only little component he did not comprehend completely was the coefficient that had to be applied to all formulas. Still, he did not seem worried since the client, in the last communication, confirmed it was supposed to be **0.3**.

<!--truncate-->

The rain outside kept up, and thunders added worrisome tunes to the late night. Yet, everything was ready. The clock showed 6 pm.
At 6:04 pm, the phone rang, and Peter, the client representative, without any excitement, declared that it was a mistake. The coefficient should have been **0.6** all along. He said that he hoped Billy did not start working on the deck just yet. Otherwise, Billy would have to redo everything. The rain now was pouring, and the sounds of thunder followed one another. After saying his goodbyes, Billy went back to his chair. The long night was ahead.

Billy had to redo everything, but not before he got a hold of a database developer to help him update the coefficient value in the database.

The only thought that circulated in Billy's head in the morning was how great it could have been if the client could have entered a coefficient value straight into the database and triggered the recalculation of everything from the Grafana dashboard. 

## A new chapter

In general, data visualizations are guarded against the clients' interventions. But occasionally, use cases occur when giving access to some elements of the database is beneficial for performance, accuracy, and convenience.

The following day, after the presentation, Billy learned about the Data Manipulation plugin for Grafana, and a new chapter in his life began.

Grafana is a fantastic tool for visualizing a broad spectrum of metrics. The Grafana journey started in the observability realm. However, flexible architecture paved the road to many industrial and commercial domains far beyond displaying system monitoring metrics.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/HNCKbGfAU0Q" title="How to create your Business Grafana dashboard | Step by step for analysts | Grafana Tutorial" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Grafana, among other areas, is gaining popularity as a platform for software development. Many use cases that took Grafana onboard work with users directly. On top of reviewing the Grafana dashboard to make informed analytical decisions, users seek the ability to interact with the database, enter data instantly, and have it available on the dashboard right away.

Initially, Grafana inventors did not include such functionality on the roadmap. Regardless, they made sure of the clever Grafana architecture, which allows any modifications by stacking up plugins using Grafana toolkit to go above and beyond Observability. 

Following the community demand, the [Data Manipulation plugin](/blog/data-manipulation-panel-plugin-for-grafana-97f9af2c67e0) was developed earlier this year in May-June. It is open source under [Apache License Version 2.0](https://github.com/volkovlabs/volkovlabs-form-panel/blob/main/LICENSE).

## Installation

There are various ways to install it. The easiest one is to use the Configuration -> Plugins menu when you are in the Grafana Catalog with admin permissions. The plugin can also be downloaded from the Grafana website or [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel).

<iframe width="100%" height="500" src="https://www.youtube.com/embed/DXALVG8GijM" title="Data Manipulation Plugin for Grafana | Manual data entering and User input into Dashboard" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

The most adventurous approach is, nonetheless, to open the [Data Manipulation plugin page](/plugins/volkovlabs-form-panel). You are destined to discover valuable tidbits along with tips and tricks there.

The Data Manipulation plugin allows you to insert and update data along with configuration modifications straight from your Grafana dashboard.

## API Server

The Data Manipulation plugin requires the API server to be installed on the database server. The API server is an excellent way to ensure only the approved data manipulation is allowed.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/SHN2S-dRIEM" title="How to Manipulate Data using Grafana dashboard | API Node.js Server and Deno Deploy Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Look at a simple API server, which returns the same JSON in `GET` request as was updated in `POST`.

```javascript reference
https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/server/server.ts
```

If you use [Deno](https://deno.land), this is an excellent example of how to connect it with a panel.

```javascript reference
https://github.com/VolkovLabs/volkovlabs-form-panel/blob/main/deno/server.ts
```

In the [GitHub repository](https://github.com/VolkovLabs/volkovlabs-form-panel), you can find more examples of PostgreSQL and MySQL databases.

We recommend running Grafana behind NGINX reverse proxy for a further security layer. The reverse proxy also allows you to expose additional API endpoints and static files in the same domain, which makes it CORS-ready. You can read about it in [How to connect the Data Manipulation plugin for Grafana to API Server](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904).

## Static and Dynamic interface elements

Following the Grafana lead, the Data Manipulation plugin was designed to embrace flexibility. You can start with static forms and end up with dynamic ones. A static form is hard-coded and created once and for all. A dynamic one allows creating a form on the fly from a data source (such as a database or a CSV file) per rules and configurations.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/RSVH1bSBNl8" title="Static and dynamic interface elements of Data Manipulation plugin | DML using data source in Grafana" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

For instance, your application might display different forms depending on the logged user, time of the day, IP address, etc.

```javascript
const feedback = data.series.find((serie) => serie.refId === 'Feedback');
const typeOptions = data.series.find((serie) => serie.refId === 'Types');

if (feedback?.fields.length) {
  const ids = feedback.fields.find((f) => f.name === 'id').values.buffer;
  const titles = feedback.fields.find((f) => f.name === 'title').values.buffer;
  const types = feedback.fields.find((f) => f.name === 'type').values.buffer;

  /**
   * Set Elements
   */
  elements = ids.map((id, index) => {
    return { id, title: titles[index], type: types[index] };
  });

  /**
   * Find Type element
   */
  const typeSelect = elements.find((element) => element.id === 'type');
  if (typeSelect && typeOptions?.fields.length) {
    const labels = typeOptions.fields.find((f) => f.name === 'label').values.buffer;
    const values = typeOptions.fields.find((f) => f.name === 'value').values.buffer;

    /**
     * Update Types
     */
    typeSelect.options = labels.map((label, index) => {
      return { label, value: values[index] };
    });
  }

  /**
   * Update Panel Options
   */
  onOptionsChange({ ...options, elements });
}
```

The Data Manipulation Panel is a conceptually new plugin for Grafana. It is the first plugin that allows inserting and updating application data, as well as modifying configuration directly from your Grafana dashboard. You can read more about it in the [Documentation](/plugins/volkovlabs-form-panel).

Any feedback and comments are welcome. Feel free to challenge us with your questions. It helps us to stay sharp!
