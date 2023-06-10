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

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdRequest](../../models/operations/deleteorgsorgidenvtypesenvtypeidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteOrgsOrgIdEnvTypesEnvTypeIdResponse](../../models/operations/deleteorgsorgidenvtypesenvtypeidresponse.md)>**


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

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetOrgsOrgIdEnvTypesRequest](../../models/operations/getorgsorgidenvtypesrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetOrgsOrgIdEnvTypesResponse](../../models/operations/getorgsorgidenvtypesresponse.md)>**


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

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetOrgsOrgIdEnvTypesEnvTypeIdRequest](../../models/operations/getorgsorgidenvtypesenvtypeidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetOrgsOrgIdEnvTypesEnvTypeIdResponse](../../models/operations/getorgsorgidenvtypesenvtypeidresponse.md)>**


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

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.PostOrgsOrgIdEnvTypesRequest](../../models/operations/postorgsorgidenvtypesrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.PostOrgsOrgIdEnvTypesResponse](../../models/operations/postorgsorgidenvtypesresponse.md)>**

