const BillingCycle = require('./billingCycle');

//Node criar uma api rest usando o padrão do node
BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new: true, runValidators: true});
BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle;

    if (bundle.errors) {
        var erros = parseErros(bundle.errors);
        res.status(500).json({errors});
    } else {
        next();
    }
}

function parseErros(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors(), error => errors.push(errors.message));
    return errors;
}

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