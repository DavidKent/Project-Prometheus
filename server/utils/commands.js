    var fs = require('fs');
    exports.Commands = function(winreq) {
        this.winreq = winreq;
    }
    exports.Commands.prototype.parseInput = function(inp){
                var t = inp.substring(0,inp.length-2);
                switch(t)
                {
                    case "exit":
                    case "e":
                        this.winreq.con.alert("Exiting the server...");
                        this.setCont(false);
                    break;
                    case "sprint":
                    case "statprint":
                    case "stat":
                    case "stat print":
                        h.statPrint();
                    break;
                    case "test":
                        
                    break;
                    case "restart":
                    case "r":
                        this.winreq.con.alert("Restarting the server...");
                        this.setCont(true);
                    break;
                    default:
                        this.winreq.con.error("'"+t+"' is an unrecognized command.");
                    break;
                }
        };
    exports.Commands.prototype.setCont = function(restart){
        if(restart)
        fs.writeFile("./cont.ctr", "1", function(){process.exit(1);});
        else
        fs.writeFile("./cont.ctr", "0", function(){process.exit(1);});
    }
    exports.Commands.prototype.start = function(){
        fs.writeFile("./cont.ctr", "2", function(){});
    };