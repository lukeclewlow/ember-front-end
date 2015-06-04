import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({

	  
  // /**
  //   Generate a unique ID for a record hash
    
  //   @param {DS.Store} store
  //   @param {DS.Model} type
  //   @param {Object} hash The record hash object
  //   @return {String} The new ID
  // */
  // generateID: function(store, type, hash){
  //   var id, primaryKey,
  //       serializer = store.serializerFor(type);
    
  //   type._generatedIds = type._generatedIds || 0;
    
  //   // Get the ID property name
  //   primaryKey = Ember.get(serializer, 'primaryKey') || 'id';
  //   id = hash[primaryKey];
    
  //   // Generate ID
  //   if (!id) {
  //     id = 'gen-'+ type.typeKey +'-'+ (++type._generatedIds);
  //     hash[primaryKey] = id;
  //   }
   
  //   return id;
  // },
  
  
  // /**
  //   Sideload a record hash to the payload
    
  //   @method sideloadRecord
  //   @param {DS.Store} store
  //   @param {DS.Model} type
  //   @param {Object} payload The entire payload
  //   @param {Object} hash    The record hash object
  //   @return {Object} The ID of the record(s) sideloaded
  // */
  // sideloadRecord: function(store, type, payload, hash) {
  //   var id, sideLoadkey, sideloadArr, serializer;
    
  //   // If hash is an array, sideload each item in the array
  //   if (hash instanceof Array) {
  //     id = [];
  //     hash.forEach(function(item, i){
  //       id[i] = this.sideloadRecord(store, type, payload, item);  
  //     }, this);
  //   }
  //   // Sideload record
  //   else if (typeof hash === 'object') {
  //     sideLoadkey = type.typeKey.pluralize();   // Sideloaded keys are plural
  //     sideloadArr = payload[sideLoadkey] || []; // Get/create sideload array
  //     id = this.generateID(store, type, hash);
      
  //     // Sideload, if it's not already sideloaded
  //     if (sideloadArr.findBy('id', id) === undefined){      
  //       sideloadArr.push(hash);
  //       payload[sideLoadkey] = sideloadArr;
  //     }
  //   }
  //   // Assume it's already pointing to a sideloaded ID
  //   else {
  //     id = hash;
  //   }
    
  //   return id;
  // },
  
  // *
  //   Process nested relationships on a single hash record
    
  //   @method extractRelationships
  //   @param {DS.Store} store
  //   @param {DS.Model} type
  //   @param {Object} payload The entire payload
  //   @param {Object} hash    The hash for the record being processed
  //   @return {Object} The updated hash object
  
  // processRelationships: function(store, type, payload, hash) {
    
  //   // If hash is an array, process each item in the array
  //   if (hash instanceof Array) {
  //     hash.forEach(function(item, i){
  //       hash[i] = this.processRelationships(store, type, payload, item);  
  //     }, this);
  //   }
    
  //   else {
      
  //     // Find all relationships in this model
  //     type.eachRelationship(function(key, relationship) {
  //       var related = hash[key],         // The hash for this relationship
  //           relType = relationship.type; // The model type
        
  //       this.generateID(store, type, hash);
  //       hash[key] = this.sideloadRecord(store, relType, payload, related);
  //       this.processRelationships(store, relType, payload, related); 
        
  //     }, this);
  //   }
    
  //   return hash;
  // },
  
  // /**
  //   (overloaded method)
  //   Starts the deserialized of all payloads.
    
  //   @method normalizePayload
  //   @param {Object} payload
  //   @return {Object} the normalized payload
  // */
  // extract: function(store, type, payload, id, requestType) {
  //   var rootKeys = Ember.keys(payload);
    
  //   // Loop through root properties and process extract their relationships
  //   rootKeys.forEach(function(key){
  //     var type = store.container.lookupFactory('model:' + key.singularize()),
  //         hash = payload[key];
      
  //     // If the key resolves to a model type, sideload any embedded relationships
  //     if (type) {
  //       this.processRelationships(store, type, payload, hash);
  //     }
  //   }, this);
    
  //   console.log(payload);
    
  //   return this._super(store, type, payload, id, requestType);
  // }
});
