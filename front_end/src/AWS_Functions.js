import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (name_table) => {
    var params = {
        TableName: name_table,
        region: 'us-east-1'
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        } else {
            console.log(err)
        }
    })
}