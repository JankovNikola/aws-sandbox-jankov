import { S3 } from "aws-sdk";


const params = {
    Bucket: "jankovbucket", 
    ACL: "public-read-write"
};
 

export async function createBucket() {
    const s3 = new S3();
    s3.listBuckets().promise().then((val) => {
        console.log(val);
    })
    await s3.createBucket(params)
        .promise()
        .then((value) => {
            console.log("Successfully created bucket");
        })
        .catch((reason) => {
            throw new Error(reason);
        })
}