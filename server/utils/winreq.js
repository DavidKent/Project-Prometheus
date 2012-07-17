    exports.WinReq = function() {
        this.con = require('./console.js');
        this.handling = require('./error_h.js').handleErrors(this);
        this.stat = require('./stat_print.js');
        this.com = require('./commands.js').Commands;
        this.com = new this.com(this);
        this.hook = require('./key_hook.js').waitForInput(this);
    }