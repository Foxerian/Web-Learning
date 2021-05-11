const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'test';

/*MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    
    console.log('Connected corretly to server');

    const db = client.db(dbname);
    dvoper.insertDocumment(db,{name: "mudit", descriptions: 'test'},dishes,(result)=>{
            console.log('Insert Document:\n', result.ops);

            dboper.findDocuments(db, "dishes", (docs) => {
                console.log("Found Documents:\n", docs);

                dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes",
                    (result) => {
                        console.log("Updated Document:\n", result.result);

                        dboper.findDocuments(db, "dishes", (docs) => {
                            console.log("Found Updated Documents:\n", docs);
                            
                            db.dropCollection("dishes", (result) => {
                                console.log("Dropped Collection: ", result);

                                client.close();
                            });
                        });
                    });
            })
    });*/

//WITH PROMISES

MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    dboper.insertDocument(db, { name: "Vadonut", description: "Test"},
        "dishes")
        .then((result) => {
            console.log("Insert Document:\n", result.ops);

            return dboper.findDocument(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Documents:\n", docs);

            return dboper.updateDocument(db, { name: "Vadonut" },
                    { description: "Updated Test" }, "dishes");

        })
        .then((result) => {
            console.log("Updated Document:\n", result.result);

            return dboper.findDocument(db, "dishes");
        })
        .then((docs) => {
            console.log("Found Updated Documents:\n", docs);
                            
            return db.dropCollection("dishes");
        })
        .then((result) => {
            console.log("Dropped Collection: ", result);

            return client.close();
        })
        .catch((err) => console.log(err));

})
.catch((err) => console.log(err));


    /*const collection = db.collection('dishes');

    collection.insertOne({"name": "rajma", "desc": "good but inserted from node app"},(err,result)=>{
        assert.equal(err,null);

        console.log("After insert:\n");
        console.log(result.ops);
        //above will print successful operations

        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);

            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes",(err,reuslt)=>{
                assert.equal(err,null);
                client.close();
            })
        })
    });*/


