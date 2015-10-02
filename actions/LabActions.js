var alt = require('../alt');
var LabSource = require('../sources/LabSource').

class LabActions {
    updateLabs(labs) {
        this.dispatch(labs);
    }

    fetchLabs() {
        this.dispatch();
        LabSource.fetch()
            .then((labs) => {
                this.actions.updateLabs(labs);
            })
            .catch((errorMessage) => {
                this.actions.labFetchFailed(errorMessage);
            });
    }

    labFetchFailed(errorMessage) {
        this.dispatch(errorMessage);
    }
}

module.exports = alt.createActions(LabActions);
