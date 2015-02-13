    MyApp = Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function() {
        //Write app code here
		console.log('Our First App');
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
		var myStore = Ext.create('Rally.data.wsapi.Store', {
		model: 'User Story',
		autoLoad: true,
		listeners: {
			load: function(myStore, myData, success) {
				//process data
			console.log('got data', myStore, myData, success);
			var myGrid = Ext.create('Rally.ui.grid.Grid', {
			  store: myStore,
			  columnCfgs: [ 'FormattedID', 'Name']
			  });
			  this.add(myGrid);
			},
			scope: this
		},
		fetch: ['FormattedID','Name', 'ScheduleState']
});
    }
});
