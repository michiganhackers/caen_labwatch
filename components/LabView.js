var React = require('react-native');
var LabItem = require('./LabItem.js');
var { ListView } = React;

var LabView = React.createClass({
    getDataSource: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(this.props.labs);
    },

    render: function() {
        return (
                <ListView
                    dataSource={this.getDataSource()}
                    renderRow={(rowData) => <LabItem lab={rowData}/>}
                />
               );
    }
});

module.exports = LabView;
