# environment

## Overview

Environments are independent spaces where Applications can run. An Application is always deployed into an Environment.
<SchemaDefinition schemaRef="#/components/schemas/EnvironmentRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdEnvsEnvId](#deleteorgsorgidappsappidenvsenvid) - Delete a specific Environment.
* [getOrgsOrgIdAppsAppIdEnvs](#getorgsorgidappsappidenvs) - List all Environments.
* [getOrgsOrgIdAppsAppIdEnvsEnvId](#getorgsorgidappsappidenvsenvid) - Get a specific Environment.
* [postOrgsOrgIdAppsAppIdEnvs](#postorgsorgidappsappidenvs) - Add a new Environment to an Application.
* [putOrgsOrgIdAppsAppIdEnvsEnvIdFromDeployId](#putorgsorgidappsappidenvsenvidfromdeployid) - Rebase to a different Deployment.

## deleteOrgsOrgIdAppsAppIdEnvsEnvId

Deletes a specific Environment in an Application.

Deleting an Environment will also delete the Deployment history of the Environment.

_Deletions are currently irreversible._

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environment.deleteOrgsOrgIdAppsAppIdEnvsEnvId({
  appId: "dicta",
  envId: "nisi",
  orgId: "consequuntur",
}).then((res: DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdEnvs

Lists all of the Environments in the Application.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environment.getOrgsOrgIdAppsAppIdEnvs({
  appId: "consectetur",
  orgId: "aperiam",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdEnvsEnvId

Gets a specific Environment in an Application.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environment.getOrgsOrgIdAppsAppIdEnvsEnvId({
  appId: "cupiditate",
  envId: "reiciendis",
  orgId: "soluta",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdAppsAppIdEnvs

Creates a new Environment of the specified Type and associates it with the Application specified by `appId`.

The Environment is also initialized to the **current or past state of Deployment in another Environment**. This ensures that every Environment is derived from a previously known state. This means it is not possible to create a new Environment for an Application until at least one Deployment has occurred. (The Deployment does not have to be successful.)

The Type of the Environment must be already defined in the Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environment.postOrgsOrgIdAppsAppIdEnvs({
  environmentDefinitionRequest: {
    fromDeployId: "alias",
    id: "929921ae-fb9f-458c-8d86-e68e4be05601",
    name: "Shawna Hamill",
    type: "deserunt",
  },
  appId: "esse",
  orgId: "nemo",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putOrgsOrgIdAppsAppIdEnvsEnvIdFromDeployId

Rebasing an Environment means that the next Deployment to the Environment will be based on the Deployment specified in the rebase rather than the last one in the Environment. The Deployment to rebase to can either be current or a previous Deployment. The Deployment can be from any Environment of the same Application.

_Running code will only be affected on the next Deployment to the Environment._

Common use cases for rebasing an Environment:

* _Rollback_: Rebasing to a previous Deployment in the current Environment and then Deploying without additional changes will execute a rollback to the previous Deployment state.

* _Clone_: Rebasing to the current Deployment in a different Environment and then deploying without additional changes will clone all of the configuration of the other Environment into the current one. (NOTE: External Resources will not be cloned in the process - the current External Resources of the Environment will remain unchanged and will be used by the deployed Application in the Environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdEnvsEnvIdFromDeployIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environment.putOrgsOrgIdAppsAppIdEnvsEnvIdFromDeployId({
  requestBody: "reprehenderit",
  appId: "est",
  envId: "quis",
  orgId: "sint",
}).then((res: PutOrgsOrgIdAppsAppIdEnvsEnvIdFromDeployIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
