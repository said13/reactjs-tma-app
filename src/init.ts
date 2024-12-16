import {
  backButton,
  viewport,
  themeParams,
  miniApp,
  initData,
  $debug,
  swipeBehavior,
  init as initSDK,
} from '@telegram-apps/sdk-react';

// import {
//   viewport
// } from '@telegram-apps/sdk'
/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
  // Set @telegram-apps/sdk-react debug mode.
  $debug.set(debug);

  // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
  // Also, configure the package.
  initSDK();

  // Add Eruda if needed.
  debug && import('eruda')
    .then((lib) => lib.default.init())
    .catch(console.error);

  // Check if all required components are supported.
  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED');
  }

  // Mount all components used in the project.
  backButton.mount();
  miniApp.mount();
  themeParams.mount();

  if (swipeBehavior.mount.isAvailable()) {
    swipeBehavior.mount();
    swipeBehavior.isMounted(); // true

    if (swipeBehavior.disableVertical.isAvailable()) {
      swipeBehavior.disableVertical();
      swipeBehavior.isVerticalEnabled(); // false
    }    
  }

  initData.restore();
  void viewport
    .mount()
    .catch(e => {
      console.error('Something went wrong mounting the viewport', e);
    })
    .then(() => {
      if (viewport.requestFullscreen.isAvailable()) {
        viewport.requestFullscreen();
        viewport.isFullscreen(); // true
      }      
      viewport.bindCssVars();
    });

  // Define components-related CSS variables.
  miniApp.bindCssVars();
  themeParams.bindCssVars();
}