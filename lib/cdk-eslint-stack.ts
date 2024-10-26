import fs from "fs";

import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

import { test } from "./constructs/test";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkEslintStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    fs;
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkEslintQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }

  private async a(): Promise<string> {
    return "a";
  }
}

const a = async () => {
  test();
  return "test";
};
