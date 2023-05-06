# activeResource

## Overview

Active Resources represent the concrete resources provisioned for an Environment. They are provisioned on the first deployment after a dependency on a particular resource type is introduced into an Environment. In general, Active Resources are only deleted when their introductory Environment is deleted.

Active Resources are provisioned based on a Resource Definition. The Resource Definition describes how to provision a concrete resource based on a Resource Type and metadata about the Environment (for example the Environment Type or the Application ID). The criteria for how to choose a Resource Definition is known as a Matching Criteria. If the Matching Criteria changes or the Resource Definition is deleted, the concrete resource represented by an Active Resource might be deleted and reprovisioned when a deployment occurs in the Environment.
<SchemaDefinition schemaRef="#/components/schemas/ActiveResourceRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResId](#deleteorgsorgidappsappidenvsenvidresourcestyperesid) - Delete Active Resources.
* [getOrgsOrgIdAppsAppIdEnvsEnvIdResources](#getorgsorgidappsappidenvsenvidresources) - List Active Resources provisioned in an environment.
* [getOrgsOrgIdResourcesDefsDefIdResources](#getorgsorgidresourcesdefsdefidresources) - List Active Resources provisioned via a specific Resource Definition.

## deleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResId

Delete Active Resources.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.activeResource.deleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResId({
  appId: "distinctio",
  envId: "quibusdam",
  orgId: "unde",
  resId: "nulla",
  type: "corrupti",
}).then((res: DeleteOrgsOrgIdAppsAppIdEnvsEnvIdResourcesTypeResIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdEnvsEnvIdResources

List Active Resources provisioned in an environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.activeResource.getOrgsOrgIdAppsAppIdEnvsEnvIdResources({
  appId: "illum",
  envId: "vel",
  orgId: "error",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdResourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdResourcesDefsDefIdResources

List Active Resources provisioned via a specific Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDefsDefIdResourcesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.activeResource.getOrgsOrgIdResourcesDefsDefIdResources({
  defId: "deserunt",
  orgId: "suscipit",
}).then((res: GetOrgsOrgIdResourcesDefsDefIdResourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
