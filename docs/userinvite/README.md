# userInvite

### Available Operations

* [getOrgsOrgIdInvitations](#getorgsorgidinvitations) - List the invites issued for the organization.

## getOrgsOrgIdInvitations

List the invites issued for the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdInvitationsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userInvite.getOrgsOrgIdInvitations({
  orgId: "vel",
}).then((res: GetOrgsOrgIdInvitationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
