	/**
	 * Holds data about a Person.
	 */
	Ext.define('JSDuckDemo.model.Person', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'Name',
		type: 'string'
	}, {
		name: 'DateOfBirth',
		type: 'date',
		dateFormat: 'c'
	}, {
		name: 'FavouriteColour',
		type: 'string'
	}],

	getAge: function(){
		var diffDays = ((new Date()).getTime() - this.get('DateOfBirth').getTime()) /1000/(60 * 60 * 24);

		return Math.floor(diffDays / 365.25);
	}
});