/**
 * Build custom media
 * --xs-max
 * --sm-min
 * --sm-max
 * --sm-only
 * --md-min
 * --md-max
 * --md-only
 * --lg-min
 */
(function() {
  const customMedia = {},
        prefix = '--',
        names = [
          'xs',
          'sm',
          'md',
          'lg'
        ],
        minWidth = [
          // skip first is 0
          768,
          1280,
          1640
        ];

  names.forEach(function(el, i, arr) {
    const j = i - 1,
          next = j + 1;

    let min = max = '';

    i === 0 || (customMedia[`${prefix}${el}-min`] = min = `(min-width: ${minWidth[j]}px)`);
    i === arr.length - 1 || (customMedia[`${prefix}${el}-max`] = max = `(max-width: ${minWidth[next] - 1}px)`);

    min && max && (customMedia[`${prefix}${el}-only`] = `${min} and ${max}`);
  });
  module.exports = { customMedia };
})();
