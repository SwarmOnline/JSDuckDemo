/**
 * Displays a list of Person model instances
 */
Ext.define('JSDuckDemo.view.PeopleDataView', {
	extend: 'Ext.view.View',
	alias: 'widget.PeopleDataView',

	config: {
		/**
		 * @cfg {Boolean} useFavouriteColour This option determines whether the Person's details
		 * will use their FavouriteColour as the background.
		 */
		useFavouriteColour: true
	},

	constructor: function(config){
		this.initConfig(config);

		this.callParent([config]);

		this.addEvents(

			/**
			 * @event personclick Fires when a Person row is clicked
			 * @param {JSDuckDemo.view.PeopleDataView} view The PeopleDataView that raised the event
			 * @param {JSDuckDemo.model.Person} record The Person record that was clicked
			 */
			'personclick'

		);
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