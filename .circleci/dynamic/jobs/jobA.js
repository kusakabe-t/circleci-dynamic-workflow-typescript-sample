import CircleCI from '@circleci/circleci-config-sdk';
import { dockerNode } from '../executors/docker-node';
var Job = CircleCI.Job, commands = CircleCI.commands;
export var jobA = new Job("jobA", dockerNode);
jobA.addStep(new commands.Checkout());
jobA.addStep(new commands.Run({ command: "echo hello from Job A" }));
