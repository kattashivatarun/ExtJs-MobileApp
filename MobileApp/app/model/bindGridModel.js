/**
 * Created by Shivatarun reddy on 11/1/2017.
 */
Ext.define('MobileApp.model.bindGridModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'firstName',     type: 'string' },
        { name: 'lastName',    type: 'string' },
        { name: 'phoneNumber',   type: 'string' },
        { name: 'address', type: 'string' }

    ]

});