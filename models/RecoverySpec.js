var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var RecoverySpec = new keystone.List('RecoverySpec', {
	map: { name: '_id' },
	autokey: { path: 'slug', from: 'supplier', unique: true },
	defaultSort: '-enteredDate',
	sortable: true
});

RecoverySpec.add(
	{heading: 'Supplier Profile'},
	{supplier: {type: Types.Relationship, ref: 'User', initial: true}},
	{heading: 'Recovery Specs'},
	{fruit: {  type: Types.Relationship, ref: 'Fruits', many: true, initial: true },
	type: { type: Types.Select, options: 'Organic, Conventional'},
	totalWeight: { type: Types.Number, required: false, label: "Total Weight (lbs)" },
	weightPerBox: { type: Types.Number, required: false, label: "lbs/Box"},
	daysLeft: {type: Types.Select, options: '3 to 5 days, More than one week'},
	condition: {type: String, required: false, label: "Additional Comments on Condition"},
	enteredDate: { type: Types.Date, default: Date.now}}
)
	

RecoverySpec.defaultColumns = ('supplier, fruit, type, totalWeight, enteredDate');
RecoverySpec.register();
