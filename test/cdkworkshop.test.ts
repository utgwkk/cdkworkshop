import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Cdkworkshop from '../lib/cdkworkshop-stack';

test('HelloHandler', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cdkworkshop.CdkworkshopStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::Lambda::Function", {
      Handler: 'hello.handler'
    }));
});
