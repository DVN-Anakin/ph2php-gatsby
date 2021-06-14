const parser = require("../parser");

exports.handler = function(event, context, callback) {
    const converted = parser.parse(event.body);

    callback(null, {
        statusCode: 200,
        body: converted
    });
}