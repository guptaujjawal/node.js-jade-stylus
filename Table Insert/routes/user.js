var connection = require('../config/dbconnection').connection,
    md5 = require('md5'),
    responses = require('./responses'),
    commonFunc = require('./commonfunction'),
    config = require('../config/config'),
    constants = require('./constants'),
    needle=require('needle');

/*
 * ----------------------------------
 * CREATION OF USERS ACCOUNT
 * ----------------------------------
 */
exports.register_user = function(req, res) {
        var name = req.body.name,
            email = req.body.email,
            password = req.body.password;

        var manvalues = [name, email, password];

        var checkblank = commonFunc.checkBlank(manvalues);

        if (checkblank == 1) {
            responses.parameterMissingResponse(res);
            return;
        } else {
            commonFunc.authenticateUserEmail(email, function(result) {
                if (result != 0) {
                    responses.authenticationAlreadyExists(res);
                    return;
                } else {
                    if (password.length < config.AppPasswordLength) {
                        var response = {
                            "message": constants.responseMessages.APP_PASSWORD_ERROR,
                            "status": constants.responseFlags.SHOW_ERROR_MESSAGE,
                            "data": {}
                        };
                        res.send(JSON.stringify(response));
                        return;
                    } else {
                        var encrypted_pass = md5(password),
                            access_token = md5(encrypted_pass + new Date());
                        var sql = "INSERT INTO `tb_users` (`name`,`password`,`email`,`access_token`,`last_login`,`creation_time`,`creation_date`)";
                        sql += " VALUES (?,?,?,?,?,?,?)";
                        connection.query(sql, [name, encrypted_pass, email, access_token, new Date(), new Date(), new Date()], function(err, result_insert) {
                            if (err) {
                                res.json({
                                    "message": constants.responseMessages.ERROR_IN_EXECUTION,
                                    "status": constants.responseFlags.ERROR_IN_EXECUTION,
                                    "data": err
                                });
                            } else {
                                res.json({
                                    "message": constants.responseMessages.ACTION_COMPLETE,
                                    "status": constants.responseFlags.ACTION_COMPLETE,
                                    "data": {}
                                });
                            }
                        });
                    }
                }
            });

        }
    }
/*
 * ----------------------------------
 * INSERTION OF PICKUP ADDRESS
 * ----------------------------------
 */

exports.pickup_addr = function(req, res) {
    var accesstoken = req.body.accesstoken,
        address = req.body.address,
        isenabled = 1,
        pickuplat=req.body.pickuplat,
        pickuplong=req.body.pickuplong;

    var manvalues = [accesstoken, address];

    var checkblank = commonFunc.checkBlank(manvalues);

    if (checkblank == 1) {
        responses.parameterMissingResponse(res);
        return;
    } else {
        commonFunc.authenticateUserPickupAddress(accesstoken, address, function(result) {
            if (result != 0) {
                responses.AddressAlreadyExists(res);
                return;
            } else {
                var sql = "INSERT INTO `tb_pickup_address` (`user_access_token`,`address`,`isenabled`,`pickup_lat`,`pickup_long`,`creation_date`,`creation_time`)";
                sql += " VALUES (?,?,?,?,?,?,?)";
                connection.query(sql, [accesstoken, address, isenabled,pickuplat,pickuplong, new Date(), new Date()], function(err, result_insert) {
                    if (err) {
                        res.json({
                            "message": constants.responseMessages.ERROR_IN_EXECUTION,
                            "status": constants.responseFlags.ERROR_IN_EXECUTION,
                            "data": err
                        });
                    } else {
                        res.json({
                            "message": constants.responseMessages.ACTION_COMPLETE,
                            "status": constants.responseFlags.ACTION_COMPLETE,
                            "data": {}
                        });
                    }
                });
            }
        });

    }
}

/*
 * ----------------------------------
 * INSERTION OF DELIVERY ADDRESS
 * ----------------------------------
 */

exports.delivery_addr = function(req, res) {
        var accesstoken = req.body.accesstoken,
            address = req.body.address,
            isenabled = 1,
            deliverylat=req.body.deliverylat,
            deliverylong=req.body.deliverylong;

        var manvalues = [accesstoken, address];

        var checkblank = commonFunc.checkBlank(manvalues);

        if (checkblank == 1) {
            responses.parameterMissingResponse(res);
            return;
        } else {
            commonFunc.authenticateUserDeliveryAddress(accesstoken, address, function(result) {
                if (result != 0) {
                    responses.AddressAlreadyExists(res);
                    return;
                } else {
                    var sql = "INSERT INTO `tb_delivery_address` (`user_access_token`,`address`,`isenabled`,`delivery_lat`,`delivery_long`,`creation_time`,`creation_date`)";
                    sql += " VALUES (?,?,?,?,?,?,?)";
                    connection.query(sql, [accesstoken, address, isenabled,deliverylat,deliverylong, new Date(), new Date()], function(err, result_insert) {
                        if (err) {
                            res.json({
                                "message": constants.responseMessages.ERROR_IN_EXECUTION,
                                "status": constants.responseFlags.ERROR_IN_EXECUTION,
                                "data": err
                            });
                        } else {
                            res.json({
                                "message": constants.responseMessages.ACTION_COMPLETE,
                                "status": constants.responseFlags.ACTION_COMPLETE,
                                "data": {}
                            });
                        }
                    });
                }
            });
        }
    }
    /*
     * ----------------------------------
     * INSERTION OF ORDERS
     * ----------------------------------
     */

exports.orders = function(req, res) {
    var orderid = parseInt(req.body.orderid),
        accesstoken = "68e2cd02f5e2701c087e3b9c8cbb6e71",
        pickupid = parseInt(req.body.pickupid),
        deliveryid = parseInt(req.body.deliveryid),
        orderdetails = req.body.orderdetails,
        specialinstruction = req.body.specialinstruction,
        recepientname = req.body.recepientname,
        deliverytime = req.body.deliverytime,
        timezone = req.body.timezone,
        pickupaddr= req.body.pickupaddr,
        pickupname = req.body.pickupname,
        pickuptime = req.body.pickuptime,
        pickuplat=req.body.pickuplat,
        pickuplong=req.body.pickuplong,
        deliveryaddress= req.body.deliveryaddress,
        deliverylat=req.body.deliverylat,
        deliverylong=req.body.deliverylong,
        job_desc=orderid+"-"+orderdetails+"-"+specialinstruction;

        console.log(deliverytime);


    var manvalues = [orderid,accesstoken, pickupid, deliveryid, orderdetails, specialinstruction, recepientname, deliverytime];

    var checkblank = commonFunc.checkBlank(manvalues);

    if (checkblank == 1) {
        responses.parameterMissingResponse(res);
        return;
    } else {
        var sql = "INSERT INTO `tb_orders` (`order_id`,`user_access_token`,`pickup_id`,`pickup_address`,`pickup_name`,`pickup_time`,`pickup_lat`,`pickup_long`,`delivery_id`,`order_details`,`special_instruction`,`recepient_name`,`delivery_address`,`delivery_lat`,`delivery_long`,`delivery_time`,`creation_date`,`creation_time`)";
        sql += " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sql, [orderid,accesstoken, pickupid,pickupaddr,pickupname,pickuptime,pickuplat,pickuplong, deliveryid, orderdetails, specialinstruction, recepientname,deliveryaddress,deliverylat,deliverylong, deliverytime, new Date(), new Date()], function(err, result_insert) {
            if (err) {
                res.json({
                    "message": constants.responseMessages.ERROR_IN_EXECUTION,
                    "status": constants.responseFlags.ERROR_IN_EXECUTION,
                    "data": err
                });
            } else {
                res.json({
                    "message": constants.responseMessages.ACTION_COMPLETE,
                    "status": constants.responseFlags.ACTION_COMPLETE,
                    "data": {}
                });
            }
        });
        //-----------------POST Request to TOOKAN------------------------

        var postbody={
            "access_token": "68e2cd02f5e2701c087e3b9c8cbb6e71",
             "job_description": job_desc,
             "job_pickup_phone": "+1201555555",
             "job_pickup_name": pickupname,
             "job_pickup_email": "",
             "job_pickup_address": pickupaddr,
             "job_pickup_latitude": pickuplat,
             "job_pickup_longitude": pickuplong,
             "job_pickup_datetime": pickuptime,
             "customer_email": "john@example.com",
             "customer_username": recepientname,
             "customer_phone": "+12015555555",
             "customer_address": deliveryaddress,
             "latitude": deliverylat,
             "longitude": deliverylong,
             "job_delivery_datetime": deliverytime,
             "has_pickup": "1",
             "has_delivery": "1",
             "layout_type": "0",
             "tracking_link": 1,
             "timezone": timezone
        }
        needle.post('https://api2.tookanapp.com:7777/create_task', postbody, 
        function(err, resp, body){
            console.log("------------")
            console.log(body);
        });
        //------------------Finish Request POST to TOOKAN-----------
    }
}