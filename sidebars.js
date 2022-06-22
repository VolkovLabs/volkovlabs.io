// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc',
      id: 'index', 
      label: 'Private Repository',
    },
    {
      type: 'doc',
      id: 'grafana', 
      label: 'Grafana Tutorials',
    },
    {
      type: 'category',
      label: 'Portfolio',
      items: [    
        'volkovlabs-echarts-panel/index',
        'volkovlabs-balena-app/index',
        'volkovlabs-image-panel/index',
        'volkovlabs-form-panel/index',
        'volkovlabs-env-datasource/index',
        'volkovlabs-rss-datasource/index',
          ],
    },
    {
      type: 'category',
      label: 'Projects',
      items: [    
        'mesmerizing-flows/index',
        'theiascope/index',
          ],
    },
    {
      type: 'category',
      label: 'Development Templates',
      items: [    
        'volkovlabs-abc-panel/index',
        'volkovlabs-abc-datasource/index',
        'volkovlabs-abc-app/index',
          ],
    },
  ],
};

module.exports = sidebars;
