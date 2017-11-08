/**
 * Created by Shivatarun reddy on 11/1/2017.
 */
Ext.define('MobileApp.view.main.binding.PopUpForm', {
    extend: 'Ext.form.Panel',
    xtype:'popup-form',
    requires: [
        'Ext.field.Select',
        'Ext.field.Text'
    ],
    width:300,
    modal:true,
    title:'Update Record',
    centered:true,
    items: [{
        xtype: 'textfield',
        name: 'firstname',
        label: 'First Name',
        bind: '{employee.firstName}'

    }, {
        xtype: 'textfield',
        name: 'lastname',
        label: 'Last Name',
        bind: '{employee.lastName}'

    }, {
        xtype: 'textfield',
        name: 'phonenumber',
        label: 'Phone Number',
        bind: '{employee.phoneNumber}'

    } ,{
        xtype: 'selectfield',
        name: 'office',
        label: 'Office Location',
        bind: '{employee.officeLocation}',

        options: [{
            text: "Redwood City, CA",
            value: 'rwcca'
        }, {
            text: "Lawrence, KS",
            value: 'lk'
        }, {
            text: "Frederick, MD",
            value: 'fmd'
        },{
            text: "ForthWorth, TX",
            value: 'jtx'
        },{
            text: "Rockville, MD",
            value: 'rmd'
        }],
        //defaultTabletPickerConfig: {
          //  height: 200
        //}
        },
        {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            ui: 'myButton1',
            iconCls: 'x-fa fa-check',
            handler: function(){
            this.up('formpanel').destroy();
        }

        }, {
            xtype: 'button',
            text: 'Cancel',
            ui: 'myButton',
            iconCls: 'x-fa fa-close',
            handler: function() {
                    this.up('formpanel').destroy();
                }
        }]
    }]
});