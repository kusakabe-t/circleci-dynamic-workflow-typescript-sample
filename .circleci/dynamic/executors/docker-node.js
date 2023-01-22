import CircleCI from "@circleci/circleci-config-sdk";
var executors = CircleCI.executors;
export var dockerNode = new executors.DockerExecutor("cimg/node:lts", "medium");
