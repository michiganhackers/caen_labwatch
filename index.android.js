/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LabView = require('./components/LabView.js');
var LabActions = require('./actions/LabActions.js');
var LabStore = require('./stores/LabStore.js');
var {
    AppRegistry,
    StyleSheet,
    DrawerLayoutAndroid,
    Text,
    View,
} = React;

var caen_labwatch = React.createClass({
    getInitialState: function() {
        return LabStore.getState();
    },

    componentDidMount: function() {
        LabStore.listen(this.onChange);
        LabActions.fetchLabs();
    },

    onChange: function(state) {
        this.setState(state);
    },

    render: function() {
        var navView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                    CAEN LabWatch for Android
                </Text>
            </View>
        );
        return (
                <DrawerLayoutAndroid
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navView}>
                    <LabView labs={this.state.labs}/>
                </DrawerLayoutAndroid>
               );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FF0000'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('caen_labwatch', () => caen_labwatch);
