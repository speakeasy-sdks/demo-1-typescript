# deployment

## Overview

Deployments represent updates to the running state of an Environment.

Deployments are made by applying _Deltas_ to a state defined by an existing Deployment. The Environment’s from_deploy property defines the Deployment. This Deployment is usually but not always in the current Environment. If the Deployment is from another Environment, the state of that Environment will be "cloned" into the current Environment with the option to apply a Delta.
<SchemaDefinition schemaRef="#/components/schemas/DeploymentRequest" />


### Available Operations

* [getOrgsOrgIdAppsAppIdEnvsEnvIdDeploys](#getorgsorgidappsappidenvsenviddeploys) - List Deployments in an Environment.
* [getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployId](#getorgsorgidappsappidenvsenviddeploysdeployid) - Get a specific Deployment.
* [getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrors](#getorgsorgidappsappidenvsenviddeploysdeployiderrors) - List errors that occurred in a Deployment.
* [postOrgsOrgIdAppsAppIdEnvsEnvIdDeploys](#postorgsorgidappsappidenvsenviddeploys) - Start a new Deployment.

## getOrgsOrgIdAppsAppIdEnvsEnvIdDeploys

List all of the Deployments that have been carried out in the current Environment. Deployments are returned with the newest first.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.deployment.getOrgsOrgIdAppsAppIdEnvsEnvIdDeploys({
  appId: "ullam",
  envId: "perferendis",
  orgId: "illum",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployId

Gets a specific Deployment in an Application and an Environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.deployment.getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployId({
  appId: "totam",
  deployId: "impedit",
  envId: "quibusdam",
  orgId: "nam",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrors

List errors that occurred in a Deployment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.deployment.getOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrors({
  appId: "ipsam",
  deployId: "culpa",
  envId: "dolor",
  orgId: "aliquam",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdDeploysDeployIdErrorsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdAppsAppIdEnvsEnvIdDeploys

At Humanitec, Deployments are defined as changes to the state of the Environment. The state can be changed by defining a set of desired changes to the current state via a Deployment Delta or by resetting the current state after a previous Deployment. (See Environment Rebase.) Both types of changes can be combined into a single Deployment during which the Delta is applied to the Rebased state.

When specifying a Delta, a Delta ID must be used. That Delta must have been committed to the Delta store prior to the Deployment.

A Set ID can also be defined in the deployment to force the state of the environment to a particular state. This will be ignored if the Delta is specified.

**NOTE:**

Directly setting a `set_id` in a deployment is not recommended as it will not record history of where the set came from. If the intention is to replicate an existing environment, use the environment rebasing approach described above.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.deployment.postOrgsOrgIdAppsAppIdEnvsEnvIdDeploys({
  deploymentRequest: {
    comment: "inventore",
    deltaId: "deleniti",
    valueSetVersionId: "veritatis",
  },
  appId: "tempora",
  envId: "dolor",
  orgId: "consequatur",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdDeploysResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
