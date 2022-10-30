if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then(function (registrations) {
      for (let registration of registrations) {
        console.log('UNREGISTERING SERVICE WORKER');
        //unregister service worker for old domain
        registration.unregister();
      }
    })
    .catch(function (err) {
      // fail state, which is fine as we just don't want a service worker.
      console.log('Fail: ', err);
    });
}
