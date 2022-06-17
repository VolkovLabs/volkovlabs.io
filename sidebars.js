// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mySidebar: [
    {
      type: 'doc',
      id: 'index', 
      label: 'Intro',
    },
    {
      type: 'doc',
      id: 'grafana', 
      label: 'Grafana',
    },
    {
      type: 'category',
      label: 'Plugins',
      items: [    
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
