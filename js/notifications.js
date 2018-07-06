const messaging = firebase.messaging();

  messaging.usePublicVapidKey("BHX3DJ5HVziGhx0MYl0fo8LUitK6B6fC4uHg43LbYYsTzkaKjlRZalWhsssIwb7PH6zQL9u7K6avVz5VS111aEQ");

  messaging.requestPermission()
  .then(function() {
  console.log('Notification permission granted.');
  return messaging.getToken();
})
  .then(function(token){
  	if(token)
    {
      //sendTokenToServer(token);
      console.log("token sent");
      console.log(token);
      //updateUIForPushEnabled();
    }
    else
    {
      console.log('permission denied');
      //updateUIForPushPermissionRequired();
      //setTokenSentToServer(false);
    }
  })
  .catch(function(err) {
  console.log('Unable to get permission to notify.', err);
  setTokenSentToServer(false);
})

  messaging.onMessage(function(payload){
    console.log('onMessage: ', payload);
    alert(payload);
  });