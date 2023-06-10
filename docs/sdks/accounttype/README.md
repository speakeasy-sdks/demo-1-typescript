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

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetOrgsOrgIdResourcesAccountTypesRequest](../../models/operations/getorgsorgidresourcesaccounttypesrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetOrgsOrgIdResourcesAccountTypesResponse](../../models/operations/getorgsorgidresourcesaccounttypesresponse.md)>**

