import * as React from "react";

type PossibleRef<T> = React.Ref<T> | undefined;

function setRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref !== null && ref !== undefined) {
    (ref as React.RefObject<T>).current = value;
  }
}

export function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => {
    for (const ref of refs) setRef(ref, node);
  };
}

/** Stable callback ref that forwards the node to every ref passed in. */
export function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  const latest = React.useRef(refs);
  React.useLayoutEffect(() => {
    latest.current = refs;
  });
  return React.useCallback((node: T) => {
    for (const ref of latest.current) setRef(ref, node);
  }, []);
}
