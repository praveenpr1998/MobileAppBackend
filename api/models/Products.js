/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    category:{
      type:"string",
      required:true
    },
    name:{
      type:"string",
      required:true,
    },
    price:{
      type:"number",
      required:true
    },
    link:{
      type:'string',
      required:false
    }
  },
  datastore:'mongodb'
};

