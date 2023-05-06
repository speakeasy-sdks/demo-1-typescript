# resourceType

## Overview

Resources Types define the technology that Applications can have dependencies on.

Each Resource Type also defines a set of input parameters (`inputs_schema`), and a set of output data (`outputs_schema`). When provisioning a resource, these are treated as inputs and outputs respectively.
<SchemaDefinition schemaRef="#/components/schemas/ResourceTypeRequest" />


### Available Operations

* [getOrgsOrgIdResourcesTypes](#getorgsorgidresourcestypes) - List Resource Types.

## getOrgsOrgIdResourcesTypes

List Resource Types.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesTypesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceType.getOrgsOrgIdResourcesTypes({
  orgId: "modi",
}).then((res: GetOrgsOrgIdResourcesTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
