/**
 * The node-module to hold the constants for the server
 */
var constants = require('./constants'),
    config = require('../config/config');
var myContext = this;

function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value: value,
        enumerable: true,
        writable: false,
        configurable: true
    });
}

var debugging = false;

exports.responseFlags = {};
exports.responseMessages = {};

    define(exports.responseMessages, 'PARAMETER_MISSING',                     'Some error occurred. Please refresh the page and try again.');
    define(exports.responseMessages, 'FLEET_NOT_AVAILABLE',                   'Agent not available at specified time.');
    define(exports.responseMessages, 'FLEET_EMAIL_ALREADY_EXISTS_WITH_YOU',   'This email ID is already exists in your account.');
    define(exports.responseMessages, 'FLEET_EMAIL_ALREADY_EXISTS',            'This email ID is already registered. Please try with different ID.');
    define(exports.responseMessages, 'FLEET_EMAIL_NOT_INVITED_BY_ANYONE',     'You are not invited by anyone yet.');
    define(exports.responseMessages, 'JOB_NOT_MAPPED_WITH_YOU',               'This task is not assigned to you.');
    define(exports.responseMessages, 'REGISTRATION_SUCCESSFUL',               'Please check you email for verification.');
    define(exports.responseMessages, 'ACCOUNT_NOT_VERIFIED',                  'You have not verified your account yet.');
    define(exports.responseMessages, 'ACCOUNT_NOT_REGISTERED_PROPERLY',       'You have not registered properly. Please signup again.');
    define(exports.responseMessages, 'ACCOUNT_EXPIRE',                        'Your account has been expired. Please choose a plan in billings page to continue.');
    define(exports.responseMessages, 'INVALID_ACCESS_TOKEN',                  'Session expired. Please logout and login again.');
    define(exports.responseMessages, 'WRONG_PASSWORD',                        'Incorrect Password.');
    define(exports.responseMessages, 'CURRENT_PASSWORD_INCORRECT',            'Incorrect Current Password.');
    define(exports.responseMessages, 'INCORRECT_PASSWORD',                    'Incorrect Password.');
    define(exports.responseMessages, 'ACTION_COMPLETE',                       'Successful');
    define(exports.responseMessages, 'LOGIN_SUCCESSFULLY',                    'Logged in successfully.');
    define(exports.responseMessages, 'SHOW_ERROR_MESSAGE',                    'Some error occurred. Please refresh the page and try again.');
    define(exports.responseMessages, 'IMAGE_FILE_MISSING',                    'Image file is missing.');
    define(exports.responseMessages, 'ERROR_IN_EXECUTION',                    'Some error occurred. Please refresh the page and try again.');
    define(exports.responseMessages, 'UPLOAD_ERROR',                          'Error in uploading.');
    define(exports.responseMessages, 'PASSWORD_CHANGED_SUCCESSFULLY',         'Password changed successfully.');
    define(exports.responseMessages, 'EMAIL_ALREADY_EXISTS',                  'This email ID is already registered.');
    define(exports.responseMessages, 'TEAM_NAME_ALREADY_REGISTERED_WITH_YOU', 'Team name already exists.');
    define(exports.responseMessages, 'INACTIVE_ACCOUNT',                      'Your account is not active or blocked by admin. Please contact your admin.');
    define(exports.responseMessages, 'INVALID_ACCESS',                        'You are not authorized to do this.');
    define(exports.responseMessages, 'INVALID_PICKUP',                        'Pickup time should be greater then current time.');
    define(exports.responseMessages, 'INVALID_DELIVERY',                      'Delivery time should be greater then current time.');
    define(exports.responseMessages, 'EMAIL_REGISTERED_ALREADY',              'Email already exists.');
    define(exports.responseMessages, 'PICKUP_NOT_COMPLETED',                  'Pickup not fully completed yet. Please complete pickup task first.');
    define(exports.responseMessages, 'JOB_NOT_COMPLETED',                     'Task is not complete yet. Please complete it first.');
    define(exports.responseMessages, 'PASSWORD_ERROR',                        'Password must be between 7 to 15 characters which contain at least one numeric digit and a special character.');
    define(exports.responseMessages, 'APP_PASSWORD_ERROR',                    'Password must be greater than '+config.AppPasswordLength+' characters.');
    define(exports.responseMessages, 'NO_PICKUP_OR_DELIVERY_ERROR',           'Please select either Pickup or Delivery with your work flow.');
    define(exports.responseMessages, 'WORKFLOW_NOT_MATCHED',                  'Workflow has been changed. Please logout and login again.');
    define(exports.responseMessages, 'NO_TEAMS_AVAILABLE',                    'No team is available.');
    define(exports.responseMessages, 'NO_DISPATCHERS_AVAILABLE',              'No dispatcher is available.');
    define(exports.responseMessages, 'EMAIL_NOT_EXISTS',                      'This account is not registered with us.');
    define(exports.responseMessages, 'ACTION_NOT_ALLOWED',                    'This action is not permissible at this time.');
    define(exports.responseMessages, 'FLEET_OFFLINE_ERROR',                   'Please switch to On-Duty mode before this action.');
    define(exports.responseMessages, 'JOB_COMPLETED',                         'This task is already complete.');
    define(exports.responseMessages, 'JOB_INTRANSIT',                         'This task is already in-transit.');
    define(exports.responseMessages, 'ACCOUNT_DELETED_ERROR',                 'Your account has been deleted.');
    define(exports.responseMessages, 'SAME_PASSWORD_ERROR',                   'Old and new password should be different.');
    define(exports.responseMessages, 'CARD_ADDED_SUCCESSFULLY',               'Card has been added successfully.');
    define(exports.responseMessages, 'CARD_UPDATE_SUCCESSFULLY',              'Card has been updated successfully.');
    define(exports.responseMessages, 'CARD_ALREADY_ADDED',                    'Card is already added.');
    define(exports.responseMessages, 'CARD_NOT_ADDED_ERROR',                  'Please add credit card to update billing plan.');
    define(exports.responseMessages, 'NO_DATA_FOUND',                         'No data found.');
    define(exports.responseMessages, 'UPDATE_BILLING_PLAN',                   'Billing Plan has been successfully updated.');
    define(exports.responseMessages, 'LOCATION_NOT_FETCHED_ERROR',            'Could not locate the address entered. Please check the address and try again.');
    define(exports.responseMessages, 'INVALID_FORMAT',                        'Please check the CSV format and try again.');
    define(exports.responseMessages, 'INVALID_DATE_FORMAT',                   'Incorrect date format. Please use as (YYYY-MM-DD mm:hh)');
    define(exports.responseMessages, 'INVALID_EMAIL_FORMAT',                  'Please check email format.');
    define(exports.responseMessages, 'CSV_ROWS_ERROR',                        'Rows should not be greater than 300 at a time.');
    define(exports.responseMessages, 'TASKS_COUNT_ERROR',                     'You have reached your monthly quota. Please upgrade your plan for more usage.');
    define(exports.responseMessages, 'DELETE_TEAM_WARNING',                   'If you delete a team, you will not be able to see <%FLEET%> assigned to that team on map. Please add them to a different team.');
    define(exports.responseMessages, 'ADDRESS_ALREADY_EXISTS',                'ADDRESS ENTERED ALREADY EXISTS FOR USER');

    //FOR FLAGS
    define(exports.responseFlags, 'PARAMETER_MISSING',                   100);
    define(exports.responseFlags, 'INVALID_ACCESS_TOKEN',                101);
    define(exports.responseFlags, 'INVALID_EMAIL_ID',                    201);
    define(exports.responseFlags, 'WRONG_PASSWORD',                      201);
    define(exports.responseFlags, 'ACTION_COMPLETE',                     200);
    define(exports.responseFlags, 'LOGIN_SUCCESSFULLY',                  200);
    define(exports.responseFlags, 'SHOW_ERROR_MESSAGE',                  201);
    define(exports.responseFlags, 'IMAGE_FILE_MISSING',                  102);
    define(exports.responseFlags, 'ERROR_IN_EXECUTION',                  404);
    define(exports.responseFlags, 'UPLOAD_ERROR',                        201);
    define(exports.responseFlags, 'USER_NOT_FOUND',                      201);
    define(exports.responseFlags, 'PASSWORD_CHANGED_SUCCESSFULLY',       200);
    define(exports.responseFlags, 'EXCEED_FLEET_COUNT',                  202);
    define(exports.responseFlags, 'ACCOUNT_EXPIRE',                      401);
    define(exports.responseFlags, 'SHOW_WARNING',                        410);
