import CircleCI from "@circleci/circleci-config-sdk";
const { executors } = CircleCI

export const dockerNode = new executors.DockerExecutor(
  "cimg/node:lts",
  "medium"
);
