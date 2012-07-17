    exports.waitForInput = function(winreq){
            stdin = process.openStdin();
            stdin.on('data', function(inp) { var u = ""+inp; winreq.com.parseInput(u); });
        };