# organization

## Overview

An Organization is the top level object in Humanitec. All other objects belong to an Organization.
<SchemaDefinition schemaRef="#/components/schemas/OrganizationRequest" />


### Available Operations

* [getOrgs](#getorgs) - List active organizations the user has access to.
* [getOrgsOrgId](#getorgsorgid) - Get the specified Organization.

## getOrgs

List active organizations the user has access to.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.organization.getOrgs().then((res: GetOrgsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgId

Get the specified Organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.organization.getOrgsOrgId({
  orgId: "cum",
}).then((res: GetOrgsOrgIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
