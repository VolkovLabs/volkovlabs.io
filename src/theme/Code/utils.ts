import fetch from "node-fetch";

/**
 * GitHub Reference
 */
interface GitHubReference {
  url: string;
  title: string;
}

/**
 * Dispatch Types
 */
type DispatchTypes = "reset" | "loading" | "loaded" | "error";

/**
 * Dispatch Message
 */
export interface DispatchMessage {
  type: DispatchTypes;
  value: string | Error;
}

/**
 * Initial State
 */
export const initialFetchResultState = {
  code: "loading...",
  loading: null,
};

/**
 * Fetch Code
 */
export const fetchCode = async (
  { url }: GitHubReference,
  fetchResultStateDispatcher: React.Dispatch<DispatchMessage>
) => {
  let res: Response;

  try {
    res = await fetch(url);
  } catch (err) {
    return fetchResultStateDispatcher({ type: "error", value: String(err) });
  }

  if (res.status !== 200) {
    const error = await res.text();
    return fetchResultStateDispatcher({
      type: "error",
      value: error.toString(),
    });
  }

  const body = (await res.text()).split("\n");
  const preceedingSpace = body.reduce((prev: number, line: string) => {
    if (line.length === 0) {
      return prev;
    }

    const spaces = line.match(/^\s+/);
    if (spaces) {
      return Math.min(prev, spaces[0].length);
    }

    return 0;
  }, Infinity);

  return fetchResultStateDispatcher({
    type: "loaded",
    value: body.map((line) => line.slice(preceedingSpace)).join("\n"),
  });
};

/**
 * Code Reducer
 */
export const codeReducer = (
  prevState: any,
  { type, value }: DispatchMessage
) => {
  switch (type) {
    case "reset": {
      return initialFetchResultState;
    }
    case "loading": {
      return { ...prevState, loading: true };
    }
    case "loaded": {
      return { ...prevState, code: value, loading: false };
    }
    case "error": {
      return { ...prevState, code: value, loading: false };
    }
    default:
      return prevState;
  }
};
