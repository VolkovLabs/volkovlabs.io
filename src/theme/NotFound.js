import React from "react";
import NotFound from "@theme-original/NotFound";

/**
 * Not Found
 */
export default function NotFoundWrapper(props) {
  window.location.replace("/plugins");

  return (
    <>
      <NotFound {...props} />
    </>
  );
}
