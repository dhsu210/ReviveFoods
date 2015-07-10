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
    fruitName: { type: String, required: true, initial: true},
    fruitType: { type: String },
    supplier: { type: Types.Relationship, ref: 'Supplier', index: true },
    weight: { type: Types.Number, required: false},
    initialQuantity: { type: Types.Number, required: false},
    currentQuantity: { type: Types.Number, required: false},
  },
  {heading: 'Beer Description'},
  {
    beerDescription: { type: Types.Textarea },
    flavorProfile: { type: Types.Select, options: 'Malty, Earthy, Aromatic, Sweet, Rich, Delicious', default: 'Delicious', index: true, many: true }
  }
  );

Fruits.relationship({ ref: 'Supplier', path: 'Supplier', refPath: 'supplier'});

Fruits.defaultColumns = 'fruitName, supplier, profileDate';
Fruits.register();
