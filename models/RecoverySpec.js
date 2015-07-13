var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var RecoverySpec = new keystone.List('RecoverySpec', {
	map: { name: 'fruitName' },
	autokey: { path: 'slug', from: 'supplierName.full', unique: true },
	defaultSort: '-supplierName'
});

RecoverySpec.add(
	{heading: 'Summary'},
	{supplierName: { type: String, required: true, initial: true},
	city: { type: String },
	state: { type: String },
	profilePicture: {type: Types.CloudinaryImage, required: false, initial: false}},
	{heading: 'Full Profile'},
	{profileURL: { type: Types.Url, required: false },
	profileHeadline: { type: String, required: false },
	profileBody: { type: Types.Textarea, required: false },
	supplierEmail: { type: Types.Email, displayGravatar: true }},
	{heading: 'Recovery Specs'},
	{fruit: {  type: Types.Relationship, ref: 'Fruits', many: true, initial: true },
	Organic: { type: Types.Boolean, required: false},
	totalWeight: { type: Types.Number, required: false },
	enteredDate: { type: Types.Date, default: Date.now}}
)
	

RecoverySpec.defaultColumns = ('supplierName, fruit, isOrganic, totalWeight, city, state|15%, enteredDate');
RecoverySpec.register();
