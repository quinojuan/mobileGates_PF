const Stripe = require('stripe');
const cors = require('cors');

const stripe = new Stripe("sk_test_51Lm1TVK1EwVhNCq6eEgsHN6onfdau7VdEZy2EwgkW5q2G0lpgA9TiFJJ4m2AgNOemkqDLeGQkJxixl79Qdr4oz1T00838Pgcji");
// private key from Stripe
const checkoOut = async (req, res) =>{
    try {
        const {id, amount} = req.body;
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        
        payment_method: id,
        confirm: true
    });
    console.log(payment);
    res.json(payment)
    
        
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = {checkoOut}