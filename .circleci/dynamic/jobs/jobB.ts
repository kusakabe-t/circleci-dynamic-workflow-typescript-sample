import CircleCI from '@circleci/circleci-config-sdk';
import { dockerNode } from '../executors/docker-node.js';
const { Job, commands } = CircleCI

export const jobB = new Job("jobB", dockerNode);
jobB.addStep(new commands.Checkout());
jobB.addStep(new commands.Run({ command: "echo hello from Job B" }));
