var getUser = (id,callback) => {
    var user = {
        name:'Amal',
        id:7
    };
    callback(user);
};

getUser(7,(user) => {
    console.log(user);
});