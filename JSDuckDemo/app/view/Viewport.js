/**
 * Auto created Viewport, rendered to the body, to contain the PeopleDataView
 */
Ext.define('JSDuckDemo.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'PeopleDataView'
    }]
});