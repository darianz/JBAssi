function adminOperation(){
    console.log("admin was here");
    return true;
    }

// implement OperationNotAllowedError with the following fields: username, errorCode, role
// implement the follwing function

const BASIC = "basic";
const ADMIN = "admin";

function User(username, role){
    this.username = username;
    this.role = role;
}

function adminOperation(){
console.log("admin was here");
return true;
}

function doAdminOperation(user){
    if(validateAdmin(user)){
        adminOperation()
    }
    else{
        throw new OperationNotAllowedError(user);
    }
        // adminOperation()
}

function validateAdmin(user){
    return user.role == ADMIN;
}

function OperationNotAllowedError(ex){
    console.log("username is ${ex.username}");
    console.log("errorCode is OperationNotAllowedError");
    console.log("role is ${ex.role}");
}

