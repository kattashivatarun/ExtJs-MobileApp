/**
 * Created by Shivatarun reddy on 11/1/2017.
 */
Ext.define('MobileApp.view.main.binding.bindGrid', {
    extend: 'Ext.tab.Panel',
    xtype:'grid-demo',
    requires: [
        'Ext.grid.Grid',
        'MobileApp.store.bindGridStore',
        'MobileApp.view.main.binding.bindGridController'
    ],
    ui: 'myTab',
    controller:'bindgrid',
    /*plugins: {
        rowexpander: true
    },
    itemConfig: {
        body: {
            tpl: '<div>Industry: {industry}</div>' +
            '<div>Last Updated: {lastChange:date("Y-m-d g:ia")}</div>' +
            '<div style="margin-top: 1em;">{desc}</div>'
        }
    },*/
    items: [{
        title: 'Employee directory',
        xtype: 'grid',
        reference: 'empGrid',
        iconCls: 'x-fa fa-users',
        store:{
            type:'gridStore'
        },
        columns:[{
            text:'first name',
            dataIndex:'firstName',
            flex:1
        },{
            text:'Last Name',
            dataIndex:'lastName',
            flex:1
        },{
            text:'Address',
            dataIndex:'address',
            flex:1
        },{
            text:'phone Number',
            dataIndex:'phoneNumber',
            flex:1
        }],
        listeners:{
            select:'onChildTap'
        }
    },{
        title:'About Sencha',
        iconCls:'x-fa fa-info-circle',
        html:'<B>With Ext JS, create data-intensive HTML5 applications using JavaScript</B><h1>Sencha Ext JS provides everything a developer needs to build data-intensive, cross-platform web applications. Ext JS leverages HTML5 features on modern browsers.Ext JS features 115+ high-performance, pre-tested and integrated UI components including calendar, grids, charts and more. The Ext JS Grid and Advanced Charting package can handle millions of records with ease. The framework includes a robust data package that can consume data from any back-end data source. With Sencha Pivot Grid and D3 adapter, organizations can add leading-edge visualization and analytics capabilities to their web applications. See a comparison with other frameworks.The rich set of Ext JS tools and themes help improve development productivity and accelerate the delivery of great looking web applications. Tools are available to help with application design, development, theming, and debugging as well as build optimization and deployment.Sencha Test is a complementary product and is the most comprehensive unit and end-to-end testing solution for Ext JS Apps. Learn more about Sencha Test. </h1>'
    }]
});