# registry

## Overview

Humanitec can be used to manage registry credentials. The Registry object represents how to match credentials to a particular registry.

Humanitec supports all Docker compatible registries as well as the custom authentication formats used by AWS Elastic Container Registry and Google Container Registry. It also supports the injection of a specific secret to be copied from an existing namespace in the cluster.
<SchemaDefinition schemaRef="#/components/schemas/RegistryRequest" />


### Available Operations

* [deleteOrgsOrgIdRegistriesRegId](#deleteorgsorgidregistriesregid) - Deletes an existing registry record and all associated credentials and secrets.
* [getOrgsOrgIdRegistries](#getorgsorgidregistries) - Lists available registries for the organization.
* [getOrgsOrgIdRegistriesRegId](#getorgsorgidregistriesregid) - Loads a registry record details.
* [getOrgsOrgIdRegistriesRegIdCreds](#getorgsorgidregistriesregidcreds) - Returns current account credentials or secret details for the registry.
* [patchOrgsOrgIdRegistriesRegId](#patchorgsorgidregistriesregid) - Updates (patches) an existing registry record.
* [postOrgsOrgIdRegistries](#postorgsorgidregistries) - Creates a new registry record.

## deleteOrgsOrgIdRegistriesRegId

_Deletions are currently irreversible._

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdRegistriesRegIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.deleteOrgsOrgIdRegistriesRegId({
  orgId: "at",
  regId: "alias",
}).then((res: DeleteOrgsOrgIdRegistriesRegIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteOrgsOrgIdRegistriesRegIdRequest](../../models/operations/deleteorgsorgidregistriesregidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteOrgsOrgIdRegistriesRegIdResponse](../../models/operations/deleteorgsorgidregistriesregidresponse.md)>**


## getOrgsOrgIdRegistries

Lists available registries for the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdRegistriesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.getOrgsOrgIdRegistries({
  orgId: "quia",
}).then((res: GetOrgsOrgIdRegistriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetOrgsOrgIdRegistriesRequest](../../models/operations/getorgsorgidregistriesrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdRegistriesResponse](../../models/operations/getorgsorgidregistriesresponse.md)>**


## getOrgsOrgIdRegistriesRegId

Loads a registry record details.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdRegistriesRegIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.getOrgsOrgIdRegistriesRegId({
  orgId: "quidem",
  regId: "fuga",
}).then((res: GetOrgsOrgIdRegistriesRegIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetOrgsOrgIdRegistriesRegIdRequest](../../models/operations/getorgsorgidregistriesregidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetOrgsOrgIdRegistriesRegIdResponse](../../models/operations/getorgsorgidregistriesregidresponse.md)>**


## getOrgsOrgIdRegistriesRegIdCreds

Returns current account credentials or secret details for the registry.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdRegistriesRegIdCredsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.getOrgsOrgIdRegistriesRegIdCreds({
  orgId: "repudiandae",
  regId: "accusantium",
}).then((res: GetOrgsOrgIdRegistriesRegIdCredsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetOrgsOrgIdRegistriesRegIdCredsRequest](../../models/operations/getorgsorgidregistriesregidcredsrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetOrgsOrgIdRegistriesRegIdCredsResponse](../../models/operations/getorgsorgidregistriesregidcredsresponse.md)>**


## patchOrgsOrgIdRegistriesRegId

Updates (patches) an existing registry record.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdRegistriesRegIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.patchOrgsOrgIdRegistriesRegId({
  registryRequest: {
    creds: {
      expires: "2020-06-22T09:37:23.523Z",
      password: "expedita",
      username: "Shea.Dare51",
    },
    enableCi: false,
    id: "2259e3ea-4b51-497f-9244-3da7ce52b895",
    registry: "placeat",
    secrets: {
      "neque": {
        namespace: "in",
        secret: "minus",
      },
      "eum": {
        namespace: "modi",
        secret: "corporis",
      },
    },
    type: "magnam",
  },
  orgId: "voluptates",
  regId: "maiores",
}).then((res: PatchOrgsOrgIdRegistriesRegIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchOrgsOrgIdRegistriesRegIdRequest](../../models/operations/patchorgsorgidregistriesregidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchOrgsOrgIdRegistriesRegIdResponse](../../models/operations/patchorgsorgidregistriesregidresponse.md)>**


## postOrgsOrgIdRegistries

Creates a new registry record.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdRegistriesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.registry.postOrgsOrgIdRegistries({
  registryRequest: {
    creds: {
      expires: "2020-06-22T09:37:23.523Z",
      password: "tempore",
      username: "Alvis28",
    },
    enableCi: false,
    id: "896c3ca5-acfb-4e2f-9570-7577929177de",
    registry: "similique",
    secrets: {
      "ex": {
        namespace: "quaerat",
        secret: "commodi",
      },
      "officiis": {
        namespace: "placeat",
        secret: "quidem",
      },
      "exercitationem": {
        namespace: "quam",
        secret: "dolorem",
      },
      "modi": {
        namespace: "ipsa",
        secret: "sint",
      },
    },
    type: "vero",
  },
  orgId: "sequi",
}).then((res: PostOrgsOrgIdRegistriesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostOrgsOrgIdRegistriesRequest](../../models/operations/postorgsorgidregistriesrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostOrgsOrgIdRegistriesResponse](../../models/operations/postorgsorgidregistriesresponse.md)>**

