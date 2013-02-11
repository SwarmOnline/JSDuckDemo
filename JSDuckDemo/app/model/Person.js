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

	/**
	 * Returns the Person's age in years.
	 * @param {Boolean} [noRounding=false] If true this will return the value as a decimal with no rounding. If false the value with be rounded to the nearest year.
	 * @return {Number} The Person's age
	 */
	getAge: function(noRounding){
		var diffDays    = ((new Date()).getTime() - this.get('DateOfBirth').getTime()) /1000/(60 * 60 * 24),
			age         = diffDays / 365.25;

		return noRounding ? age : Math.floor(age);
	}
});