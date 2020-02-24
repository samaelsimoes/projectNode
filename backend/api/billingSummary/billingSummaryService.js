const _ = require('lodash');
const BillingCycle = require('../billingCycle/billingCycle');

function getSummary(req, res) {
    BillingCycle.aggregate({
        $project: {
            credit: {$sum: "$credits.value"},
            debt: {$sum: "$debts.value"}
        },
    },{
        //Agrupa os documentos os tipos dele, doc MONGO $group
        $group: {
            _id: null,
            credit: {$sum: "$credit"},
            debt: {$sum: "$debt"}
        }
    }, {
        $project: {
            _id: 0,
            credit:1,
            debt: 1
        }
    },
    (error, value) => {
        if (error) {
            res.status(500).json({
                erros:[error]
            });   
        } else {
            res.json(_.defaults(result[0], {
                credit: 0,
                debt: 0
            }));
        }         
    });
}

module.exports = { getSummary }