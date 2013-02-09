Ext.define('JSDuckDemo.store.People', {
	extend: 'Ext.data.Store',

	model: 'JSDuckDemo.model.Person',

	data: [{
		Name: 'Stuart',
		DateOfBirth: '1986-08-05T00:00:00+00:00',
		FavouriteColour: 'blue'
	}, {
		Name: 'Andrew',
		DateOfBirth: '1986-12-28T00:00:00+00:00',
		FavouriteColour: 'red'
	}]
});