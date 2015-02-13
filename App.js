    MyApp = Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        console.log('Launch Function Call');
		this._loadData();
		},
	// Get data from Rally
	_loadData: function () {
		var myStore = Ext.create('Rally.data.wsapi.Store', {
			model: 'User Story',
			autoLoad: true,
			listeners: {
				load: function(myStore, myData, success) {
					//process data
					console.log('got data', myStore, myData, success);
					this._loadGrid(myStore);
				},
				scope: this
			},
			fetch: ['FormattedID','Name', 'ScheduleState']
		});
		},
	// Create Grid and show a Grid of given stories	
	_loadGrid: function(myStoryStore){
		var myGrid = Ext.create('Rally.ui.grid.Grid', {
			store: myStoryStore,
			columnCfgs: [ 'FormattedID', 'Name']
		 });

	
		
	this.add(myGrid);	
	console.log('Our First App');
    //API Docs: https://help.rallydev.com/apps/2.0/doc/
		
    }
});
