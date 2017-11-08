/**
 * Created by Shivatarun reddy on 11/1/2017.
 */
Ext.define('MobileApp.store.bindGridStore', {
    extend: 'Ext.data.Store',
    alias:'store.gridStore',

    requires: [

        'MobileApp.model.bindGridModel'
    ],

    model:'MobileApp.model.bindGridModel',

    proxy: {
        type: 'rest',
        url: 'http://localhost:8081/Test/webapi/employee/get',
        reader: {
            type: 'json'
        }
    }
    //autoLoad: true

});