import CircleCI from '@circleci/circleci-config-sdk';
import { dockerNode } from '../executors/docker-node';
var Job = CircleCI.Job, commands = CircleCI.commands;
export var jobB = new Job("jobB", dockerNode);
jobB.addStep(new commands.Checkout());
jobB.addStep(new commands.Run({ command: "echo hello from Job B" }));
