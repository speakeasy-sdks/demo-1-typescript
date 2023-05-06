# resourceAccount

## Overview

ResourceAccount represents the account being used to access a resource.

Resource Accounts hold credentials that are required to provision and manage resources.
<SchemaDefinition schemaRef="#/components/schemas/ResourceAccountRequest" />


### Available Operations

* [getOrgsOrgIdResourcesAccounts](#getorgsorgidresourcesaccounts) - List Resource Accounts in the organization.
* [getOrgsOrgIdResourcesAccountsAccId](#getorgsorgidresourcesaccountsaccid) - Get a Resource Account.
* [patchOrgsOrgIdResourcesAccountsAccId](#patchorgsorgidresourcesaccountsaccid) - Update a Resource Account.
* [postOrgsOrgIdResourcesAccounts](#postorgsorgidresourcesaccounts) - Create a new Resource Account in the organization.

## getOrgsOrgIdResourcesAccounts

List Resource Accounts in the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesAccountsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceAccount.getOrgsOrgIdResourcesAccounts({
  orgId: "repudiandae",
}).then((res: GetOrgsOrgIdResourcesAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdResourcesAccountsAccId

Get a Resource Account.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesAccountsAccIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceAccount.getOrgsOrgIdResourcesAccountsAccId({
  accId: "cum",
  orgId: "dicta",
}).then((res: GetOrgsOrgIdResourcesAccountsAccIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchOrgsOrgIdResourcesAccountsAccId

Update a Resource Account.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdResourcesAccountsAccIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceAccount.patchOrgsOrgIdResourcesAccountsAccId({
  updateResourceAccountRequestRequest: {
    credentials: {
      "veniam": "animi",
      "dolores": "nam",
      "dicta": "consequuntur",
      "necessitatibus": "nobis",
    },
    name: "Mr. Dora Wuckert",
  },
  accId: "pariatur",
  orgId: "libero",
}).then((res: PatchOrgsOrgIdResourcesAccountsAccIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdResourcesAccounts

Create a new Resource Account in the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdResourcesAccountsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceAccount.postOrgsOrgIdResourcesAccounts({
  createResourceAccountRequestRequest: {
    credentials: {
      "occaecati": "nemo",
      "aliquam": "nostrum",
      "doloribus": "eligendi",
    },
    id: "95fa8897-0e18-49db-b30f-cb33ea055b19",
    name: "Sheri Schuppe",
    type: "itaque",
  },
  orgId: "sed",
}).then((res: PostOrgsOrgIdResourcesAccountsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
