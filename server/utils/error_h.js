var cons = require('./console.js');   

exports.handleErrors = function(winreq){
        process.on('uncaughtException', function(err) {
            winreq.con.error(err.stack);
        });
        process.on('error', function(err) {
            winreq.con.error(err.stack);
        });
        winreq.con.info("Error handling")
    }