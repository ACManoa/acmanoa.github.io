self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(
      unregisterAllServiceWorkers()
        .then(() => self.registration.unregister())
        .then(() => self.clients.claim())
    );
  });
  
  function unregisterAllServiceWorkers() {
    const currentUrl = new URL(self.registration.scope);
    const currentScope = currentUrl.origin + currentUrl.pathname;
    
    return self.registration.unregister().then(() => {
      return self.clients.matchAll();
    }).then(clients => {
      clients.forEach(client => {
        const clientUrl = new URL(client.url);
        const clientScope = clientUrl.origin + clientUrl.pathname;
        if (clientScope === currentScope) {
          client.navigate(client.url);
        }
      });
    });
  }
  
  // Register itself
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  }