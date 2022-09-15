var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 
const stripe = require('stripe')('sk_test_51IFCZMCgALYZd2y9gmZqhmTIOcQYaWbR5JX7IDwhtpdVGueF7McgGw5Z07SJpxN34SDFhWq2LHOOpRbPQlB0430z00dIW4JhLY');
 
var app = express();
var port = process.env.PORT || 4000;
 
// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// confirm the paymentIntent
app.post('/pay', async (request, response) => {
  try {
    // Create the PaymentIntent
    let intent = await stripe.paymentIntents.create({
      payment_method: request.body.payment_method_id,
      description: "Test payment",
      amount: request.body.amount * 100,
      currency: 'inr',
      confirmation_method: 'manual',
      confirm: true
    });
    // Send the response to the client
    response.send(generateResponse(intent));
  } catch (e) {
    // Display error on client
    return response.send({ error: e.message });
  }
});
 
const generateResponse = (intent) => {
  if (intent.status === 'succeeded') {
    // The payment didn’t need any additional actions and completed!
    // Handle post-payment fulfillment
    return {
      success: true
    };
  } else {
    // Invalid status
    return {
      error: 'Invalid PaymentIntent status'
    };
  }
};
 
// request handlers
app.get('/', (req, res) => {
  res.send('Stripe Integration! - Clue Mediator');
});