/**
 * Displays a list of Person model instances
 */
Ext.define('JSDuckDemo.view.PeopleDataView', {
	extend: 'Ext.view.View',
	alias: 'widget.PeopleDataView',

	config: {

		useFavouriteColour: true
	},

	constructor: function(config){
		this.initConfig(config);

		this.callParent([config]);
	},

	initComponent: function(){
		var me = this;

		Ext.apply(this, {
			store: 'People',
			itemTpl: Ext.create('Ext.XTemplate',
				'<div <tpl if="this.useFavouriteColour()">style="background-color: {FavouriteColour}"</tpl>>',
					'<div>{Name}</div>',
					'<div>{DateOfBirth:date("d/m/Y")}</div>',
				'</div>',
			{
				useFavouriteColour: function(){
					return me.getUseFavouriteColour();
				}
			})
		});

		this.callParent(arguments);

		this.on('itemclick', function(view, record, item, index, e){
			this.fireEvent('personclick', view, record);
		}, this);
	},

	updateUseFavouriteColour: function(val){
		this.refresh();
	}
})