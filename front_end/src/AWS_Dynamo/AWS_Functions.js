import * as AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-1',
    secretAccessKey: process.env.REACT_APP_SECRET_AWS_KEY,
    accessKeyId: process.env.REACT_APP_AWS_KEY
});

const db = new AWS.DynamoDB.DocumentClient()

export const fetchData = (name_table) => {
    var params = {
        TableName: name_table,
    }

    db.scan(params,  (err, data) => {
        if (!err) {
            console.log(data)
        } else {
            console.log(err);
        }
    })
}