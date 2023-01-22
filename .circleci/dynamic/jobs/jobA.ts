import CircleCI from '@circleci/circleci-config-sdk';
import { dockerNode } from '../executors/docker-node.js';
const { Job, commands } = CircleCI

export const jobA = new Job("jobA", dockerNode);
jobA.addStep(new commands.Checkout());
jobA.addStep(new commands.Run({ command: "echo hello from Job A" }));
