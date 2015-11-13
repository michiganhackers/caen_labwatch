var observable = require("data/observable");

var refresh = require("./lab-status")

var LabViewModel = (function (_super) {
    __extends(LabViewModel, _super);
    function LabViewModel() {
        _super.call(this);
	var self = this;
	this.set("labs", []);
	refresh.refreshLabTotals().then(function(labs) {
	    self.set("labs", labs);
	});
	/*
        this.set("labs", [
                {
                    room: "Beyster 1620",
                    ratio: "11 / 44"
                },
                {
                    room: "Beyster 1695",
                    ratio: "15 / 48"
                }
        ]);
	*/
    }
    return LabViewModel;
})(observable.Observable);
exports.LabViewModel = LabViewModel;
exports.mainViewModel = new LabViewModel();
