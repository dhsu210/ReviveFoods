var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var RecoverySpec = new keystone.List('RecoverySpec', {
	map: { name: 'fruitName' },
	autokey: { path: 'slug', from: 'supplierName.full', unique: true },
	defaultSort: '-supplierName',
	sortable: true
});

RecoverySpec.add(
	{heading: 'Supplier Profile'},
	{name: { type: String, required: true, initial: true},
	address: {type: Types.Location, enableMapsAPI: true},
	logoPicture: {type: Types.CloudinaryImage, required: false, initial: false},
	phone: { type: Types.Number, required: false },
	email: { type: Types.Email, displayGravatar: true }},
	{heading: 'Recovery Specs'},
	{fruit: {  type: Types.Relationship, ref: 'Fruits', many: true, initial: true },
	type: { type: Types.Select, options: 'Organic, Conventional'},
	totalWeight: { type: Types.Number, required: false, label: "Total Weight (lbs)" },
	weightPerBox: { type: Types.Number, required: false, label: "lbs/Box"},
	daysLeft: {type: Types.Select, options: '3 to 5 days, More than one week'},
	condition: {type: String, required: false, label: "Additional Comments on Condition"},
	enteredDate: { type: Types.Date, default: Date.now}}
)
	

RecoverySpec.defaultColumns = ('name, fruit, organic, totalWeight|10%, weightPerBox|10%, address|15%, enteredDate');
RecoverySpec.register();
