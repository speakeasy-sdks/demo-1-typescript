<!-- Start SDK Example Usage -->
```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesAccountTypesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.accountType.getOrgsOrgIdResourcesAccountTypes({
  orgId: "corrupti",
}).then((res: GetOrgsOrgIdResourcesAccountTypesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->