import { DynamoDB } from "aws-sdk";

const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Name", 
      AttributeType: "S",
    },
    {
      AttributeName: "totalDesks",
      AttributeType: "N", 
    }
  ],
  KeySchema: [
    {
      AttributeName: "Name", 
      KeyType: "HASH",
    },
    {
      AttributeName: "totalDesks", 
      KeyType: "RANGE",
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "TEST_TABLE_ROOM"
};


export async function createDdb() {
    const ddb = new DynamoDB();
    await ddb.createTable(params)
        .promise()
        .then(() => {
            console.log("Successfully created table");
        })
        .catch((reason) => {
            throw new Error(reason);
        })
}


