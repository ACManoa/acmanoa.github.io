document.addEventListener("DOMContentLoaded", (event) => {


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => {
            if (registration.active && registration.active.scriptURL.endsWith('/sw.js')) {
              registration.unregister().then(success => {
                if (success) {
                  console.log('Service worker unregistered successfully');
                } else {
                  console.log('Failed to unregister service worker');
                }
              }).catch(error => {
                console.error('Error during service worker unregister:', error);
              });
            } else {
              console.log('No service worker registered with the URL ending with "/sw.js"');
            }
          });
        });
      } 
    else {
        console.log('Service workers are not supported in this browser.');
      }
});