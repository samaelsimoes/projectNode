const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    //criando rotas
    server.use('/api', router);
    
    const billingCycleService = require('../api/billingCycle/billingCycleService')
    billingCycleService.register(router, '/billingCycles');

    const billingSummaryService = require('../api/billingSummary/billingSummaryService');
    router.route('/billingSummary').get(billingSummaryService.getSummary);
}