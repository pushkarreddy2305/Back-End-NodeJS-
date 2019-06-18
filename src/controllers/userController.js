'use strict';

function getTest(username) {
    try {
        return {
            'message': 'Logged in as: ' + username
        };
    } catch (err) {
        return {
            "error": err.message
        };
    }
}

module.exports = {
    getTest
};