import { Lambda } from "aws-sdk";
import * as fs from "fs";
import { unzip } from "zlib";


const params = {
    FunctionName: "mylambdafunction",
    Role: "arn:aws:iam::206703502025:role/lambda-role",
    Runtime: "nodejs16.x",
    Handler : "handler",
    Code: {
        ZipFile: ""//NOT IMPLEMENTED YET 
    },
    Description: "First lambda function"
}

export async function createLambda() {
    const lambda = new Lambda();
    lambda.createFunction(params)
        .promise()
        .then(() => {
        console.log("Successfully created lambda");
        })
        .catch((reason) => {
            throw new Error(reason);
    })
}