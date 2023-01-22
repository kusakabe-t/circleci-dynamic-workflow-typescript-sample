import CircleCI from "@circleci/circleci-config-sdk";
const { Config, Workflow } = CircleCI

// Import Config Components
import { jobA } from "./jobs/jobA.js";
import { jobB } from "./jobs/jobB.js";

// Initiate a new Config
const myConfig = new Config()

// Add elements to the config
myConfig
  .addJob(jobA)
  .addJob(jobB)

// Instantiate new Workflow and add jobA
const dynamicWorkflow = new Workflow("dynamic-workflow");
dynamicWorkflow.addJob(jobA);

// Conditionally add jobB
// This condition could be based on anything from the response of an API call
// to the contents of a file
if (1 === 1) {
  dynamicWorkflow.addJob(jobB);
}

// Add the dynamic workflow to the config
myConfig.addWorkflow(dynamicWorkflow);

// Write the config to file
myConfig.writeFile('dynamicConfig.yml');
