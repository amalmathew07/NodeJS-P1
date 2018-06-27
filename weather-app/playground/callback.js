var getUser = (id,callback) => {
    var user = {
        name:'Amal',
        id:id
    };
    return callback(user);
};

getUser(7,(user) => {
    console.log(user);
});

var user1 = (user) => {
    console.log(`Hi I am `+user.name);
}
getUser(9,user1);

var cbk2 = (error,id,user) => {
    if(error) {

    } else {
        
    }
}
//Retrieve data from DB, and use the data. if so we make a callback to the data retrieval function after the data is retrieved.
// var getDBDetals = (query,callback) => {
//   execute query ;
//  return callback;
//}
//getDBDetails("select * from tablename",(tabledetails) => {
//for each table details display.
//})