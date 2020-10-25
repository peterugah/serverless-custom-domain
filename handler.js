'use strict';

module.exports.hello = async (event, ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'working as intended',
        ctx
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
