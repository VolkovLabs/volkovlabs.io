import React, { useMemo } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useFilteredAndTreeifiedTOC, useTOCHighlight } from '@docusaurus/theme-common/internal';
import TOCItemTree from '@theme/TOCItems/Tree';

/**
 * TOC Items
 */
const TOCItems = ({
  toc,
  className = "table-of-contents table-of-contents__left-border",
  linkClassName = "table-of-contents__link",
  linkActiveClassName = undefined,
  minHeadingLevel: minHeadingLevelOption,
  maxHeadingLevel: maxHeadingLevelOption,
  ...props
}) => {
  const themeConfig = useThemeConfig();
  const minHeadingLevel =
    minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
  const maxHeadingLevel =
    maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
  const tocTree = useFilteredAndTreeifiedTOC({
    toc,
    minHeadingLevel,
    maxHeadingLevel,
  });

  /**
   * Hightlight
   */
  const tocHighlightConfig = useMemo(() => {
    if (linkClassName && linkActiveClassName) {
      return {
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel,
      };
    }
    return undefined;
  }, [linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel]);

  useTOCHighlight(tocHighlightConfig);

  return (
    <>
      <TOCItemTree
        toc={tocTree}
        className={className}
        linkClassName={linkClassName}
        {...props}
      />
      <br />
      <a href="https://www.youtube.com/@volkovlabs">
        <img src="/img/youtube.png" className="questions" />
      </a>
    </>
  );
}

export default TOCItems;
