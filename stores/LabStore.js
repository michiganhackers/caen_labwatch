var alt = require('../alt');
var LabActions = require('../actions/LabActions');

class LabStore {
    constructor() {
        this.loading = false;
        this.labs = [];
        this.errorMessage = '';

        this.bindListeners({
            handleUpdateLabs: LabActions.UPDATE_LABS,
            handleFetchLabs: LabActions.FETCH_LABS,
            handleFetchFailed: LabActions.LAB_FETCH_FAILED
        });
    }

    handleUpdateLabs(labs) {
        this.errorMessage = '';
        this.loading = false;
        this.labs = labs;
    }

    handleFetchLabs() {
        this.errorMessage = '';
        this.loading = true;
        this.labs = [];
    }

    handleFetchFailed(errorMessages) {
        this.loading = false;
        this.errorMessage = errorMessages;
    }
}

module.exports = alt.createStore(LabStore, 'LabStore');
