/**
 * Created by Shivatarun reddy on 12/4/2017.
 */
Ext.define('MobileApp.view.main.binding.tabPanelDemo', {
    extend: 'Ext.tab.Panel',

    requires: [
        'MobileApp.view.main.binding.bindGrid'
    ],

    /*
    Uncomment to give this component an xtype
    xtype: 'tabpaneldemo',
    */

    items: [
        {
            title:'Users',

            xtype:'grid-demo'
        },{
        title:'Home',
            iconCls:'x-fa fa-home',
            html:'<h1>Hello from <b>HOME</b></h1>'
        }
    ]
});