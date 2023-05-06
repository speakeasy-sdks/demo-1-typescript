# application

## Overview

An Application is a collection of Workloads that work together. When deployed, all Workloads in an Application are deployed to the same namespace.

Apps are the root of the configuration tree holding Environments, Deployments, Shared Values, and Secrets.
<SchemaDefinition schemaRef="#/components/schemas/ApplicationRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppId](#deleteorgsorgidappsappid) - Delete an Application
* [getOrgsOrgIdApps](#getorgsorgidapps) - List all Applications in an Organization.
* [getOrgsOrgIdAppsAppId](#getorgsorgidappsappid) - Get an existing Application
* [postOrgsOrgIdApps](#postorgsorgidapps) - Add a new Application to an Organization

## deleteOrgsOrgIdAppsAppId

Deleting an Application will also delete everything associated with it. This includes Environments, Deployment history on those Environments, and any shared values and secrets associated.

_Deletions are currently irreversible._

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.application.deleteOrgsOrgIdAppsAppId({
  appId: "iure",
  orgId: "magnam",
}).then((res: DeleteOrgsOrgIdAppsAppIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdApps

Listing or lists of all Applications that exist within a specific Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.application.getOrgsOrgIdApps({
  orgId: "debitis",
}).then((res: GetOrgsOrgIdAppsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppId

Gets a specific Application in the specified Organization by ID.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.application.getOrgsOrgIdAppsAppId({
  appId: "ipsa",
  orgId: "delectus",
}).then((res: GetOrgsOrgIdAppsAppIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdApps

Creates a new Application, then adds it to the specified Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.application.postOrgsOrgIdApps({
  applicationCreationRequest: {
    env: {
      id: "467cc879-6ed1-451a-85df-c2ddf7cc78ca",
      name: "Antoinette Nikolaus",
      type: "deleniti",
    },
    id: "fc816742-cb73-4920-9929-396fea7596eb",
    name: "Brenda Wisozk",
  },
  orgId: "laborum",
}).then((res: PostOrgsOrgIdAppsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
