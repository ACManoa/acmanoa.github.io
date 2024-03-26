if ('serviceWorker' in navigator) {
    // Unregister service worker named 'sw.js'
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        registrations.forEach(function(registration) {
            if (registration.active && registration.active.scriptURL.endsWith('sw.js')) {
                registration.unregister().then(function(success) {
                    console.log('Service worker unregistered:', registration);
                }).catch(function(error) {
                    console.error('Failed to unregister service worker:', error);
                });
            }
        });
    });
}

else {
    console.log("no sw.js found");
}