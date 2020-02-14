const BillingCycle = require('./billingCycle');

//Node criar uma api rest usando o padrão do node
BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    });
});

module.exports = BillingCycle;