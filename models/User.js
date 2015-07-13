var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */

var User = new keystone.List('User', {
  map: { name: 'userName' },
  autokey: { path: 'slug', from: 'userName', unique: true }
});

User.add({
	//basic info
	name: { type: Types.Name, required: true, index: true },
	userName: { type: String, initial: true, required: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },

	//Classification flags
	isAdmin: { type: Boolean, label: 'Revive', index: true },
	isSupplier: { type: Types.Boolean, label: 'Supplier' },

	//other info
	dateSignedUp: { type: Types.Date, default: Date.now },
	notesAboutUser: { type: Types.Textarea, height: 100 },
	companyName: {type: String, label: 'Company'},

	//Shipping address
	shippingName: { type: Types.Name },
	shippingAddress: { type: Types.Location},

	//Billing address
	billingName: { type: Types.Name },
	billingAddress: { type: Types.Location},
	phoneNumber: { type: Types.Number}}

);

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Relationships
 */

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
User.relationship({ ref: 'RecoverySpec', path: 'recoverySpecs', refPath: 'supplier'});


/**
 * Registration
 */

User.defaultColumns = 'name, email, isAdmin, isSupplier';
User.register();
