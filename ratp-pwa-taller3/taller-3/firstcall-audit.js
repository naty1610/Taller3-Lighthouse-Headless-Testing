'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class FirstCallAudit extends Audit {
    static get meta() {
        return {
            id: 'firstcall-audit',
            title: 'Tiempo de carga del primer llamado',
            category: 'MyPerformance',
            name: 'firstcall-audit',
            description: 'Tiempo de carga del primer llamado',
            failureDescription: 'Tiempo de carga supera los 3 segundos',
            failureTitle: 'Tiempo de carga supera los 3 segundos',
            helpText: 'Used to measure time from navigationStart to when the schedule' +
                ' card is shown.',

            requiredArtifacts: ['TimeToFirstCall'],

        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToFirstCall;

        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: Number(belowThreshold),

        };
    }
}

module.exports = FirstCallAudit;