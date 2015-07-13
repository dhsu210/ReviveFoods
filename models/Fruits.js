var keystone = require('keystone'),
Types = keystone.Field.Types;
/**
* Fruitss Model
* ==========
*/
var Fruits = new keystone.List('Fruits', {
  map: { name: 'fruitName' },
  autokey: { path: 'slug', from: 'fruitType', unique: true },
  defaultSort: '-supplierName'
});
Fruits.add(
  {heading: 'Fruit'},
  {
    fruitName: { type: String, required: true, index: true, initial: true},
    fruitImage: {type: Types.CloudinaryImage, required: false, initial: false },
    initialQuantity: { type: Types.Number, required: false},
    currentQuantity: { type: Types.Number, required: false}
  },
  {heading: 'Fruit Packaging'},
  {
    fruitDescription: { type: Types.Textarea },
    packageType: { type: Types.Select, options: ['flat', 'case'] }
  }
  );

Fruits.relationship({ ref: 'RecoverySpec', path: 'RecoverySpec', refPath: 'fruit'});

Fruits.defaultColumns = 'fruitName, currentQuantity, packageType';
Fruits.register();
