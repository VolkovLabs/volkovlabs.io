module.exports = function (context, options) {
  return {
    name: 'docusaurus-postcss-plugin',
    configurePostCss(postcssOptions) {
      // Appends new PostCSS plugin.
      postcssOptions.plugins.push(
        require('postcss-import'),
        require('postcss-each'),
        require('postcss-for'),
        require('postcss-custom-media')({
          importFrom: require('../../src/components/media-queries/media-queries.node.js')
        }),
        require('postcss-simple-vars'),
        require('postcss-em')(),
        require('postcss-pxtorem')({
          rootValue: 16,
          propList: [
            '--*',
            'font',
            'font-size',
            'line-height',
            'letter-spacing',
            'margin',
            'margin-top',
            'margin-left',
            'margin-right',
            'margin-bottom',
            'padding',
            'padding-top',
            'padding-left',
            'padding-right',
            'padding-bottom'
          ]
        }),
        require('postcss-calc')(),
        require('postcss-nested'),
        require('postcss-color-function'),
        require('postcss-reporter')
      );
      return postcssOptions;
    }
  };
};
