# value

## Overview

Shared Values can be used to manage variables and configuration that might vary between environments. They are also the way that secrets can be stored securely.

Shared Values are by default shared across all environments in an application. However, they can be overridden on an Environment by Environment basis.

For example: There might be 2 API keys that are used in an application. One development key used in the development and staging environments and another used for production. The development API key would be set at the Application level. The value would then be overridden at the Environment level for the production Environment.
<SchemaDefinition schemaRef="#/components/schemas/ValueRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdEnvsEnvIdValues](#deleteorgsorgidappsappidenvsenvidvalues) - Delete all Shared Value for an Environment
* [deleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey](#deleteorgsorgidappsappidenvsenvidvalueskey) - Delete Shared Value for an Environment
* [deleteOrgsOrgIdAppsAppIdValues](#deleteorgsorgidappsappidvalues) - Delete all Shared Value for an App
* [deleteOrgsOrgIdAppsAppIdValuesKey](#deleteorgsorgidappsappidvalueskey) - Delete Shared Value for an Application
* [getOrgsOrgIdAppsAppIdEnvsEnvIdValues](#getorgsorgidappsappidenvsenvidvalues) - List Shared Values in an Environment
* [getOrgsOrgIdAppsAppIdValues](#getorgsorgidappsappidvalues) - List Shared Values in an Application
* [patchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey](#patchorgsorgidappsappidenvsenvidvalueskey) - Update Shared Value for an Environment
* [patchOrgsOrgIdAppsAppIdValuesKey](#patchorgsorgidappsappidvalueskey) - Update Shared Value for an Application
* [postOrgsOrgIdAppsAppIdEnvsEnvIdValues](#postorgsorgidappsappidenvsenvidvalues) - Create a Shared Value for an Environment
* [postOrgsOrgIdAppsAppIdValues](#postorgsorgidappsappidvalues) - Create a Shared Value for an Application
* [putOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey](#putorgsorgidappsappidenvsenvidvalueskey) - Update Shared Value for an Environment
* [putOrgsOrgIdAppsAppIdValuesKey](#putorgsorgidappsappidvalueskey) - Update Shared Value for an Application

## deleteOrgsOrgIdAppsAppIdEnvsEnvIdValues

All Shared Values will be deleted. If the Shared Values are marked as a secret, they will also be deleted.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.value.deleteOrgsOrgIdAppsAppIdEnvsEnvIdValues({
  appId: "quo",
  envId: "veniam",
  orgId: "aliquam",
}).then((res: DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesRequest](../../models/operations/deleteorgsorgidappsappidenvsenvidvaluesrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse](../../models/operations/deleteorgsorgidappsappidenvsenvidvaluesresponse.md)>**


## deleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey

The specified Shared Value will be permanently deleted. If the Shared Value is marked as a secret, it will also be permanently deleted.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.value.deleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey({
  appId: "provident",
  envId: "vero",
  key: "earum",
  orgId: "doloremque",
}).then((res: DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyRequest](../../models/operations/deleteorgsorgidappsappidenvsenvidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse](../../models/operations/deleteorgsorgidappsappidenvsenvidvalueskeyresponse.md)>**


## deleteOrgsOrgIdAppsAppIdValues

All Shared Values will be deleted. If the Shared Values are marked as a secret, they will also be deleted.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdValuesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.value.deleteOrgsOrgIdAppsAppIdValues({
  appId: "ipsum",
  orgId: "alias",
}).then((res: DeleteOrgsOrgIdAppsAppIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteOrgsOrgIdAppsAppIdValuesRequest](../../models/operations/deleteorgsorgidappsappidvaluesrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdValuesResponse](../../models/operations/deleteorgsorgidappsappidvaluesresponse.md)>**


## deleteOrgsOrgIdAppsAppIdValuesKey

The specified Shared Value will be permanently deleted. If the Shared Value is marked as a secret, it will also be permanently deleted.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.value.deleteOrgsOrgIdAppsAppIdValuesKey({
  appId: "doloremque",
  key: "tempora",
  orgId: "perspiciatis",
}).then((res: DeleteOrgsOrgIdAppsAppIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteOrgsOrgIdAppsAppIdValuesKeyRequest](../../models/operations/deleteorgsorgidappsappidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdValuesKeyResponse](../../models/operations/deleteorgsorgidappsappidvalueskeyresponse.md)>**


## getOrgsOrgIdAppsAppIdEnvsEnvIdValues

The returned values will be the base Application values with the Environment overrides where applicable. The `source` field will specify the level from which the value is from.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.getOrgsOrgIdAppsAppIdEnvsEnvIdValues({
  appId: "quam",
  envId: "atque",
  orgId: "officia",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValuesRequest](../../models/operations/getorgsorgidappsappidenvsenvidvaluesrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse](../../models/operations/getorgsorgidappsappidenvsenvidvaluesresponse.md)>**


## getOrgsOrgIdAppsAppIdValues

The returned values will be the "base" values for the Application. The overridden value for the Environment can be retrieved via the `/orgs/{orgId}/apps/{appId}/envs/{envId}/values` endpoint.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdValuesResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.getOrgsOrgIdAppsAppIdValues({
  appId: "ex",
  orgId: "architecto",
}).then((res: GetOrgsOrgIdAppsAppIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetOrgsOrgIdAppsAppIdValuesRequest](../../models/operations/getorgsorgidappsappidvaluesrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdValuesResponse](../../models/operations/getorgsorgidappsappidvaluesresponse.md)>**


## patchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey

Update the value or description of the Shared Value. Shared Values marked as secret can also be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.patchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey({
  valuePatchPayloadRequest: {
    description: "a",
    value: "laborum",
  },
  appId: "veritatis",
  envId: "quod",
  key: "a",
  orgId: "qui",
}).then((res: PatchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PatchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyRequest](../../models/operations/patchorgsorgidappsappidenvsenvidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PatchOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse](../../models/operations/patchorgsorgidappsappidenvsenvidvalueskeyresponse.md)>**


## patchOrgsOrgIdAppsAppIdValuesKey

Update the value or description of the Shared Value. Shared Values marked as secret can also be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdAppsAppIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.patchOrgsOrgIdAppsAppIdValuesKey({
  valuePatchPayloadRequest: {
    description: "accusantium",
    value: "commodi",
  },
  appId: "atque",
  key: "totam",
  orgId: "tenetur",
}).then((res: PatchOrgsOrgIdAppsAppIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchOrgsOrgIdAppsAppIdValuesKeyRequest](../../models/operations/patchorgsorgidappsappidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchOrgsOrgIdAppsAppIdValuesKeyResponse](../../models/operations/patchorgsorgidappsappidvalueskeyresponse.md)>**


## postOrgsOrgIdAppsAppIdEnvsEnvIdValues

The Shared Value created will only be available to the specific Environment.

If a Value is marked as a secret, it will be securely stored. It will not be possible to retrieve the value again through the API. The value of the secret can however be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.postOrgsOrgIdAppsAppIdEnvsEnvIdValues({
  valueCreatePayloadRequest: {
    description: "voluptate",
    isSecret: false,
    key: "quam",
    value: "quod",
  },
  appId: "vitae",
  envId: "sapiente",
  orgId: "reiciendis",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValuesRequest](../../models/operations/postorgsorgidappsappidenvsenvidvaluesrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValuesResponse](../../models/operations/postorgsorgidappsappidenvsenvidvaluesresponse.md)>**


## postOrgsOrgIdAppsAppIdValues

The Shared Value created will be available to all Environments in that Application.

If a Value is marked as a secret, it will be securely stored. It will not be possible to retrieve the value again through the API. The value of the secret can however be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdValuesResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.postOrgsOrgIdAppsAppIdValues({
  valueCreatePayloadRequest: {
    description: "quod",
    isSecret: false,
    key: "voluptate",
    value: "inventore",
  },
  appId: "facere",
  orgId: "maxime",
}).then((res: PostOrgsOrgIdAppsAppIdValuesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostOrgsOrgIdAppsAppIdValuesRequest](../../models/operations/postorgsorgidappsappidvaluesrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdValuesResponse](../../models/operations/postorgsorgidappsappidvaluesresponse.md)>**


## putOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey

Update the value or description of the Shared Value. Shared Values marked as secret can also be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.putOrgsOrgIdAppsAppIdEnvsEnvIdValuesKey({
  valueEditPayloadRequest: {
    description: "fuga",
    isSecret: false,
    key: "ab",
    value: "ex",
  },
  appId: "consectetur",
  envId: "maiores",
  key: "sed",
  orgId: "animi",
}).then((res: PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyRequest](../../models/operations/putorgsorgidappsappidenvsenvidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdEnvsEnvIdValuesKeyResponse](../../models/operations/putorgsorgidappsappidenvsenvidvalueskeyresponse.md)>**


## putOrgsOrgIdAppsAppIdValuesKey

Update the value or description of the Shared Value. Shared Values marked as secret can also be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdValuesKeyResponse } from "test-1/dist/sdk/models/operations";
import { ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.value.putOrgsOrgIdAppsAppIdValuesKey({
  valueEditPayloadRequest: {
    description: "sequi",
    isSecret: false,
    key: "eligendi",
    value: "voluptatum",
  },
  appId: "perferendis",
  key: "laborum",
  orgId: "omnis",
}).then((res: PutOrgsOrgIdAppsAppIdValuesKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutOrgsOrgIdAppsAppIdValuesKeyRequest](../../models/operations/putorgsorgidappsappidvalueskeyrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdValuesKeyResponse](../../models/operations/putorgsorgidappsappidvalueskeyresponse.md)>**

