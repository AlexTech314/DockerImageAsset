import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import { TokenInjectableDockerBuilder } from './index';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'IntegTestingStack');

new TokenInjectableDockerBuilder(stack, 'Builder', {
  path: path.resolve(__dirname, '../test-docker'),
  buildArgs: {
    SAMPLE_ARG_1: 'SAMPLE_VALUE_1',
    SAMPLE_ARG_2: 'SAMPLE_VALUE_2',
    SAMPLE_ARG_3: 'SAMPLE_VALUE_3',
    SAMPLE_ARG_4: 'SAMPLE_VALUE_4',
    SAMPLE_ARG_5: 'SAMPLE_VALUE_5',
    SAMPLE_ARG_6: 'SAMPLE_VALUE_6',
  },
  dockerLoginSecretArn: 'arn:aws:secretsmanager:us-east-1:281318412783:secret:DockerLogin-jR8U8w',
});