/**
 * Created by Shivatarun reddy on 11/1/2017.
 */
Ext.define('MobileApp.view.main.binding.bindGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bindgrid',

    requires: [

        'MobileApp.view.main.binding.PopUpForm'
    ],

    init: function() {
        console.log('hello from controller');
        var empGridView = this.lookup('empGrid');
        var empStore = empGridView.getStore();
        empStore.load({
            callback: function (records, operation, success) {
                if(success){
                    console.log('Service is Success..');
                }
            }
        });

        console.log('Log after Load Method');
    },

    onChildTap: function (view, selected) {
        console.log(selected.get('firstName'));
            Ext.Viewport.add({
                xtype:'popup-form',
                viewModel:{
                    data:{
                        employee : selected
                    }
                }

            });
    },

    });