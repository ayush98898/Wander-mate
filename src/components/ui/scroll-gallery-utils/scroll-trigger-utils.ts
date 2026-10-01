export function isWindowScroller(scroller: Element | Window): scroller is Window {
  return typeof window !== "undefined" && scroller === window;
}

/** Resolves once fonts and layout are settled so ScrollTrigger measures correctly. */
export async function waitForScrollerReady(scroller: Element | Window) {
  if (typeof document === "undefined") return;
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      /* ignore */
    }
  }
  if (!isWindowScroller(scroller) && !(scroller as Element).isConnected) return;
  await new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  );
}

/** Debounced window resize listener. Returns an unsubscribe function. */
export function observeWindowResize(callback: () => void, delay = 150) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  let lastWidth = window.innerWidth;
  const handler = () => {
    // Ignore height-only changes (mobile URL bar show/hide)
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
  window.addEventListener("resize", handler);
  return () => {
    clearTimeout(timer);
    window.removeEventListener("resize", handler);
  };
}
