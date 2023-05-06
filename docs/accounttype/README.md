# accountType

## Overview

Resource Account Types define cloud providers or protocols to which a resource account can belong.
<SchemaDefinition schemaRef="#/components/schemas/AccountTypeRequest" />


### Available Operations

* [getOrgsOrgIdResourcesAccountTypes](#getorgsorgidresourcesaccounttypes) - List Resource Account Types available to the organization.

## getOrgsOrgIdResourcesAccountTypes

List Resource Account Types available to the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesAccountTypesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.accountType.getOrgsOrgIdResourcesAccountTypes({
  orgId: "provident",
}).then((res: GetOrgsOrgIdResourcesAccountTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
