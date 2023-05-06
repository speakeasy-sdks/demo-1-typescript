# runtimeInfo

## Overview

RuntimeInfo object returned by the runtime endpoint. Represents a list post statuses grouped by modules and controllers (deployments and stateful sets).
<SchemaDefinition schemaRef="#/components/schemas/RuntimeInfoRequest" />


### Available Operations

* [getOrgsOrgIdAppsAppIdEnvsEnvIdRuntime](#getorgsorgidappsappidenvsenvidruntime) - Get Runtime information about the environment.
* [getOrgsOrgIdAppsAppIdRuntime](#getorgsorgidappsappidruntime) - Get Runtime information about specific environments.
* [patchOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeReplicas](#patchorgsorgidappsappidenvsenvidruntimereplicas) - Set number of replicas for an environment's modules.
* [putOrgsOrgIdAppsAppIdEnvsEnvIdRuntimePaused](#putorgsorgidappsappidenvsenvidruntimepaused) - Pause / Resume an environment.

## getOrgsOrgIdAppsAppIdEnvsEnvIdRuntime

Get Runtime information about the environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.runtimeInfo.getOrgsOrgIdAppsAppIdEnvsEnvIdRuntime({
  appId: "aut",
  envId: "aut",
  orgId: "eveniet",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdRuntime

Get Runtime information about specific environments.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdRuntimeResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.runtimeInfo.getOrgsOrgIdAppsAppIdRuntime({
  appId: "odio",
  id: "64ad7334-ec1b-4781-b36a-08088d100efa",
  orgId: "nulla",
}).then((res: GetOrgsOrgIdAppsAppIdRuntimeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeReplicas

Set number of replicas for an environment's modules.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeReplicasResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.runtimeInfo.patchOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeReplicas({
  requestBody: {
    "sed": 30208,
    "alias": 910073,
    "hic": 27982,
  },
  appId: "incidunt",
  envId: "qui",
  orgId: "qui",
}).then((res: PatchOrgsOrgIdAppsAppIdEnvsEnvIdRuntimeReplicasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putOrgsOrgIdAppsAppIdEnvsEnvIdRuntimePaused

On pause requests, all the Kubernetes Deployment resources are scaled down to 0 replicas.

On resume requests, all the Kubernetes Deployment resources are scaled up to the number of replicas running before the environment was paused.

When an environment is paused, it is not possible to:

```
  - Deploy the environment within Humanitec.
  - Scale the number of replicas running of any workload.
```

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdEnvsEnvIdRuntimePausedResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.runtimeInfo.putOrgsOrgIdAppsAppIdEnvsEnvIdRuntimePaused({
  requestBody: false,
  appId: "necessitatibus",
  envId: "harum",
  orgId: "explicabo",
}).then((res: PutOrgsOrgIdAppsAppIdEnvsEnvIdRuntimePausedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
