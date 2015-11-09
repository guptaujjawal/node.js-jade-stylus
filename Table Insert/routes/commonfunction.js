var connection = require('../config/dbconnection').connection;

/*
 * -----------------------------------------------
 * CHECK EACH ELEMENT OF ARRAY FOR BLANK
 * -----------------------------------------------
 */
exports.checkBlank = function (arr, req, res) {
    var arrlength = arr.length;
    for (var i = 0; i < arrlength; i++) {
        if (arr[i] === undefined) {
            arr[i] = "";
        } else {
            arr[i] = arr[i];
        }
        arr[i] = arr[i].toString().trim();
        if (arr[i] === '' || arr[i] === "" || arr[i] == undefined) {
            return 1;
            break;
        }
    }
    return 0;
};

/*
 * -----------------------------------------------
 * AUTHENTICATE USER EMAIL
 * -----------------------------------------------
 */
exports.authenticateUserEmail = function (email, callback) {
    var sql = "SELECT * FROM `tb_users` WHERE `email`=? LIMIT 1";
    connection.query(sql, [email], function (err, result) {
        if (result.length > 0) {
            return callback(result);
        } else {
            return callback(0);
        }
    });
};

/*
 * -----------------------------------------------
 * AUTHENTICATE PICKUP ADDRESS
 * -----------------------------------------------
 */
exports.authenticateUserPickupAddress = function (accesstoken,address, callback) {
    var sql = "SELECT * FROM `tb_pickup_address` WHERE `user_access_token`=? and `address`=? LIMIT 1";
    connection.query(sql, [accesstoken,address], function (err, result) {
        if (result.length > 0) {
            return callback(result);
        } else {
            return callback(0);
        }
    });
};

/*
 * -----------------------------------------------
 * AUTHENTICATE DELIVERY ADDRESS
 * -----------------------------------------------
 */
exports.authenticateUserDeliveryAddress = function (accesstoken,address, callback) {
    var sql = "SELECT * FROM `tb_delivery_address` WHERE `user_access_token`=? and `address`=? LIMIT 1";
    connection.query(sql, [accesstoken,address], function (err, result) {
        if (result.length > 0) {
            return callback(result);
        } else {
            return callback(0);
        }
    });
};