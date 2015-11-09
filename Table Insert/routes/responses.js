var constants=require('./constants');

exports.parameterMissingResponse = function (res) {
    var response = {
        "message": constants.responseMessages.PARAMETER_MISSING,
        "status": constants.responseFlags.PARAMETER_MISSING,
        "data" : {}
    };
    res.send(JSON.stringify(response));
};

exports.authenticationAlreadyExists = function (res){
    var response = {
        "message": constants.responseMessages.EMAIL_REGISTERED_ALREADY,
        "status": constants.responseFlags.SHOW_ERROR_MESSAGE,
        "data" : {}
    };
    res.send(JSON.stringify(response));
};

exports.AddressAlreadyExists = function (res){
    var response = {
        "message": constants.responseMessages.ADDRESS_ALREADY_EXISTS,
        "status": "",
        "data" : {}
    };
    res.send(JSON.stringify(response));
};