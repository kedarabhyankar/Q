var bodyParser  = require('body-parser'),
    express     = require('express'),
    path        = require('path'),
    app         = express();

    var RTM = require("satori-rtm-sdk");

    var endpoint = "wss://open-data.api.satori.com";
    var appKey = "080D33DFf38cf796F16AdFC9ECCE310f";
    var channel = "full-weather";
    var messages = [];

    var client = new RTM(endpoint, appKey);

    client.on('enter-connected', function () {
      console.log('Connected to Satori RTM!');
    });

    const CHANNEL_OPTS = {
      history: {
        count: 1000,
      },
    };

    var subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE, CHANNEL_OPTS);

    subscription.on('rtm/subscription/data', function (pdu) {
      pdu.body.messages.forEach(function (msg) {
        messages.push(msg);
        console.log('Got message:', msg);
      });
    });

    client.start();

app.use(bodyParser.json());

app.get('/', function() {
  res.json(messages);
});

app.listen(8000, function() {
  console.log('Server running on port 8000!');
})
