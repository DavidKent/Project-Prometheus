var util = require('util');

exports.statPrint = function(winreq){
    var tabs = "\t\t\t"
    var str = "\n\t\t----------------STAT-PRINT----------------------\n";
    str += tabs+"MEMORY USAGE RSS: " + util.inspect(process.memoryUsage().rss) + "\n"; 
    str += tabs+"MEMORY USAGE HEAP TOTAL: " + util.inspect(process.memoryUsage().heapTotal) + "\n"; 
    str += tabs+"MEMORY USAGE HEAP USED: " + util.inspect(process.memoryUsage().heapUsed) + "\n"; 
    str += tabs+"TIME UP: " + (process.uptime() / 60) + " minutes\n";
    str += "\t\t----------------STAT-PRINT----------------------";
    winreq.con.info(str);
};