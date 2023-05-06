# environmentType

## Overview

Environment Types are a way of grouping and managing Environments. Every Environment has exactly 1 Environment Type.

Environment Types can be used with External Resources to manage where resources such as databases are provisioned or even which cluster to deploy to.
<SchemaDefinition schemaRef="#/components/schemas/EnvironmentTypeRequest" />


### Available Operations

* [deleteOrgsOrgIdEnvTypesEnvTypeId](#deleteorgsorgidenvtypesenvtypeid) - Deletes an Environment Type
* [getOrgsOrgIdEnvTypes](#getorgsorgidenvtypes) - List all Environment Types
* [getOrgsOrgIdEnvTypesEnvTypeId](#getorgsorgidenvtypesenvtypeid) - Get an Environment Type
* [postOrgsOrgIdEnvTypes](#postorgsorgidenvtypes) - Add a new Environment Type

## deleteOrgsOrgIdEnvTypesEnvTypeId

Deletes a specific Environment Type from an Organization. If there are Environments with this Type in the Organization, the operation will fail.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environmentType.deleteOrgsOrgIdEnvTypesEnvTypeId({
  envTypeId: "accusamus",
  orgId: "impedit",
}).then((res: DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdEnvTypes

Lists all Environment Types in an Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdEnvTypesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environmentType.getOrgsOrgIdEnvTypes({
  orgId: "hic",
}).then((res: GetOrgsOrgIdEnvTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdEnvTypesEnvTypeId

Gets a specific Environment Type within an Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdEnvTypesEnvTypeIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environmentType.getOrgsOrgIdEnvTypesEnvTypeId({
  envTypeId: "necessitatibus",
  orgId: "asperiores",
}).then((res: GetOrgsOrgIdEnvTypesEnvTypeIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdEnvTypes

Adds a new Environment Type to an Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdEnvTypesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.environmentType.postOrgsOrgIdEnvTypes({
  environmentTypeRequest: {
    description: "ex",
    id: "6ef1caa3-383c-42be-b477-373c8d72f64d",
  },
  orgId: "inventore",
}).then((res: PostOrgsOrgIdEnvTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
