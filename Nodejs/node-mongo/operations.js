const assert =require('assert');

exports.insertDocument = (db, document, collection, callback)=>{
const coll =db.collection(collection);
/*coll.insert(document,(err,result)=>{
    assert.equal(err,null);
    console.log("Inserted " + result.result.n+ " document into the collection "+ collection);
    callback(result);
});*/
return coll.insert(document);
};

exports.findDocument = (db,collection,callback)=>{
    const coll =db.collection(collection);
   /* coll.find({}).toArray((err,docs)=>{
        assert.equal(err,null);
        callback(docs);
    });*/
    return coll.find({}).toArray();
};

exports.removeDocument = (db,document,collection,callback)=>{
    const coll =db.collection(collection);
    /*coll.deleteOne(document,(err,result)=>{
        assert.equal(err,null);
        console.log("Removed the document ", document);
    });*/
    return coll.deleteOne(document);
};

exports.updateDocument = (db,update,document,collection,callback)=>{
    const coll =db.collection(collection);
    /*coll.updateOne(document,{$set: update},null,(err,result)=>{
        assert.equal(err,null);
        console.log("updated the document ", document);
    });*/
    return coll.updateOne(document,{$set: update});
};