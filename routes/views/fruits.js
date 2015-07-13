var keystone = require('keystone');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req,res),
  locals = res.locals;

  locals.section = 'fruits';
  locals.filters = {
  };

  locals.data = {
    featuredFruits: [],
    allFruits: []
  };


  view.on('init', function(next) {
    var q = keystone.list('Fruits').model.find().where('fruitName')

    q.exec(function(err, result) {
      locals.data.featuredfruits = result;
      next(err);
    });

  });

  view.on('init', function(next) {

    var q = keystone.list('Fruits').model.find().sort('-fruitName')

    q.exec(function(err,results) {

      locals.data.allFruits = results;
      next(err);

    });
  });

  console.log(locals.data.allFruits);
    // Render the view
    view.render('fruits');
    
  };
