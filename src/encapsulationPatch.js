/**
 * Encapsulation patch
 */

  if (false === (gWindow === window)) {
    window = window || {};

    window.setTimeout = gWindow.setTimeout.bind(gWindow);
    window.addEventListener = gWindow.addEventListener.bind(gWindow);
    window.removeEventListener = gWindow.removeEventListener.bind(gWindow);
    window.navigator = gWindow.navigator;
    window.matchMedia = gWindow.matchMedia.bind(gWindow);
    if(gWindow.requestAnimationFrame) { window.requestAnimationFrame = gWindow.requestAnimationFrame.bind(gWindow); }
    if(gWindow.cancelAnimationFrame) { window.cancelAnimationFrame = gWindow.cancelAnimationFrame.bind(gWindow); }

    gWindow[vendor] = gWindow[vendor] || {};
    gWindow[vendor].mdl = window;
  }
