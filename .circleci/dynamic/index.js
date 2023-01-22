import CircleCI from "@circleci/circleci-config-sdk";
var Config = CircleCI.Config, Workflow = CircleCI.Workflow;
// Import Config Components
import { jobA } from "./jobs/jobA";
import { jobB } from "./jobs/jobB";
// Initiate a new Config
var myConfig = new Config();
// Add elements to the config
myConfig
    .addJob(jobA)
    .addJob(jobB);
// Instantiate new Workflow and add jobA
var dynamicWorkflow = new Workflow("dynamic-workflow");
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
