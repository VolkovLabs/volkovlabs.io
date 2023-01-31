import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Redirect } from "@docusaurus/router";

/**
 * Not Found
 */
export default function NotFoundWrapper(props) {
  return <Redirect to={useBaseUrl("/")} />;
}
