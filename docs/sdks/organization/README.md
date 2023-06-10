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

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetOrgsResponse](../../models/operations/getorgsresponse.md)>**


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

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetOrgsOrgIdRequest](../../models/operations/getorgsorgidrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetOrgsOrgIdResponse](../../models/operations/getorgsorgidresponse.md)>**

