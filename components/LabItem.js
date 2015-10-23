var React = require('react-native');
var {
    StyleSheet,
    Text,
    View
} = React;

var LabItem = React.createClass({
    render: function() {
        return (
                <View style={styles.row}>
                    <Text style={styles.labName}>
                        {this.props.lab.name}
                    </Text>
                    <Text style={styles.labStatus}>
                        {this.props.lab.status}
                    </Text>
                </View>
               );
    }
});

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 150,
        padding: 20
    },
    labName: {
        alignSelf: 'flex-start',
        fontSize: 24,
        fontWeight: 'bold'
    },
    labStatus: {
        alignSelf: 'flex-end',
        fontSize: 20,
    },
    openLab: {
        color: '#00FF00'
    },
    restrictedLab: {
        color: '#FF0000'
    }
});

module.exports = LabItem;
