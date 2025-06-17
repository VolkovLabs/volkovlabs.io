import React, { useReducer } from "react";
import CodeBlock from "@theme/CodeBlock";
import { codeReducer, fetchCode, initialFetchResultState } from "./utils";
import styles from "./styles.module.css";

/**
 * Properties
 */
type Props = {
  url?: string;
  language: string;
  title: string;
};

/**
 * Code
 */
const Code = ({ url, language, title }: Props) => {
  const [fetchResultState, fetchResultStateDispatcher] = useReducer(
    codeReducer,
    initialFetchResultState
  );

  /**
   * Parse URL
   */
  const [org, repo, blob, branch, ...pathSeg] = new global.URL(url).pathname
    .split("/")
    .slice(1);

  /**
   * Content
   */
  const content = {
    url: `https://raw.githubusercontent.com/${org}/${repo}/${branch}/${pathSeg.join(
      "/"
    )}`,
    title: pathSeg.join("/"),
  };

  /**
   * Loading
   */
  if (fetchResultState.loading !== false) {
    fetchCode(content, fetchResultStateDispatcher);
  }

  return (
    <CodeBlock
      className={styles.code}
      language={language}
      title={title ? title : content.title}
    >
      {fetchResultState.code}
    </CodeBlock>
  );
};

export default Code;
