# valueSetVersion

## Overview

A Value Set Version can be used as a track record of Shared Values changes, to restore a previous version of a Shared Value or Value Set, or to purge a Shared Value if it shouldn't be accessible anymore.
<SchemaDefinition schemaRef="#/components/schemas/ValueSetVersionResponse" />


### Available Operations

* [getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersions](#getorgsorgidappsappidenvsenvidvaluesetversions) - List Value Set Versions in an Environment of an App
* [getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionId](#getorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionid) - Get a single Value Set Version in an Environment of an App
* [getOrgsOrgIdAppsAppIdValueSetVersions](#getorgsorgidappsappidvaluesetversions) - List Value Set Versions in the App
* [getOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionId](#getorgsorgidappsappidvaluesetversionsvaluesetversionid) - Get a single Value Set Version from the App
* [postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKey](#postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidpurgekey) - Purge the value of a specific Shared Value from the App Environment Version history.
* [postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestore](#postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestore) - Restore a Value Set Version in an Environment of an App
* [postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKey](#postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestorekey) - Restore a specific key from the Value Set Version in an Environment of an App
* [postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKey](#postorgsorgidappsappidvaluesetversionsvaluesetversionidpurgekey) - Purge the value of a specific Shared Value from the App Version history.
* [postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestore](#postorgsorgidappsappidvaluesetversionsvaluesetversionidrestore) - Restore a Value Set Version in an App
* [postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKey](#postorgsorgidappsappidvaluesetversionsvaluesetversionidrestorekey) - Restore a specific key from the Value Set Version in an App

## getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersions

A new Value Set Version is created on every modification of a Value inside the an Environment of an App. In case this environment has no overrides the response is the same as the App level endpoint.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersions({
  appId: "nihil",
  envId: "tenetur",
  keyChanged: "sapiente",
  orgId: "velit",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsRequest](../../models/operations/getorgsorgidappsappidenvsenvidvaluesetversionsrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsResponse](../../models/operations/getorgsorgidappsappidenvsenvidvaluesetversionsresponse.md)>**


## getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionId

Get a single Value Set Version in an Environment of an App

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.getOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionId({
  appId: "adipisci",
  envId: "non",
  orgId: "optio",
  valueSetVersionId: "ddf857a9-e618-476c-aab2-1d29dfc94d6f",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRequest](../../models/operations/getorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdResponse](../../models/operations/getorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidresponse.md)>**


## getOrgsOrgIdAppsAppIdValueSetVersions

A new Value Set Version is created on every modification of a Value inside the app.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdValueSetVersionsResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.getOrgsOrgIdAppsAppIdValueSetVersions({
  appId: "recusandae",
  keyChanged: "quisquam",
  orgId: "facere",
}).then((res: GetOrgsOrgIdAppsAppIdValueSetVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.GetOrgsOrgIdAppsAppIdValueSetVersionsRequest](../../models/operations/getorgsorgidappsappidvaluesetversionsrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdValueSetVersionsResponse](../../models/operations/getorgsorgidappsappidvaluesetversionsresponse.md)>**


## getOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionId

Get a single Value Set Version from the App

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.getOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionId({
  appId: "dignissimos",
  orgId: "iste",
  valueSetVersionId: "9390066a-6d2d-4000-b553-38cec086fa21",
}).then((res: GetOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.GetOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRequest](../../models/operations/getorgsorgidappsappidvaluesetversionsvaluesetversionidrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdResponse](../../models/operations/getorgsorgidappsappidvaluesetversionsvaluesetversionidresponse.md)>**


## postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKey

Purging permanently removes the value of a specific Shared Value in an application. A purged value is no longer accessible, can't be restored and can't be used
by deployments referencing a Value Set Version where the value was present.

Learn more about purging in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#purge).


### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKeyResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKey({
  valueSetActionPayloadRequest: {
    comment: "necessitatibus",
  },
  appId: "iste",
  envId: "dicta",
  key: "ipsam",
  orgId: "consequuntur",
  valueSetVersionId: "cb311916-7b8e-43c8-9b03-408d6d364ffd",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKeyRequest](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidpurgekeyrequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `config`                                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                       | Available config options for making requests.                                                                                                                                                            |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdPurgeKeyResponse](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidpurgekeyresponse.md)>**


## postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestore

Restore the values of all Shared Values in an environment from a specific version. Keys not existing in the selected version are deleted.

Learn more about reverting in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#revert).


### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestore({
  valueSetActionPayloadRequest: {
    comment: "dolore",
  },
  appId: "enim",
  envId: "ullam",
  orgId: "perspiciatis",
  valueSetVersionId: "06d1263d-48e9-435c-ac9e-81f30be3e432",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                              | Type                                                                                                                                                                                                   | Required                                                                                                                                                                                               | Description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                              | [operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreRequest](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestorerequest.md) | :heavy_check_mark:                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                             |
| `config`                                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                     | Available config options for making requests.                                                                                                                                                          |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreResponse](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestoreresponse.md)>**


## postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKey

Restore the values of a single Shared Value in an Environment from a specific version.

Learn more about reverting in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#revert).


### Example Usage

```typescript
import { Test1 } from "test-1";
import {
  PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyResponse,
} from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKey({
  valueSetActionPayloadRequest: {
    comment: "aperiam",
  },
  appId: "dolores",
  envId: "illum",
  key: "iusto",
  orgId: "magni",
  valueSetVersionId: "16576506-6418-470d-9d21-f9ad030c4ecc",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyRequest](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestorekeyrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `config`                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdValueSetVersionsValueSetVersionIdRestoreKeyResponse](../../models/operations/postorgsorgidappsappidenvsenvidvaluesetversionsvaluesetversionidrestorekeyresponse.md)>**


## postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKey

Purging permanently removes the value of a specific Shared Value in an Application. A purged value is no longer accessible, can't be restored and can't be used
by deployments referencing a Value Set Version where the value was present.

Learn more about purging in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#purge).


### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKeyResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKey({
  valueSetActionPayloadRequest: {
    comment: "et",
  },
  appId: "beatae",
  key: "id",
  orgId: "consequatur",
  valueSetVersionId: "83642906-8b85-402a-95e7-f73bc845e320",
}).then((res: PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKeyRequest](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidpurgekeyrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdPurgeKeyResponse](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidpurgekeyresponse.md)>**


## postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestore

Restore the values of all Shared Values in an application from a specific version. Keys not existing in the selected version are deleted.

Learn more about reverting in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#revert).


### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestore({
  valueSetActionPayloadRequest: {
    comment: "est",
  },
  appId: "amet",
  orgId: "veritatis",
  valueSetVersionId: "9f4badf9-47c9-4a86-bbc4-2426665816dd",
}).then((res: PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreRequest](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidrestorerequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `config`                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | Available config options for making requests.                                                                                                                                        |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreResponse](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidrestoreresponse.md)>**


## postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKey

Restore the values of a single Shared Value in an application from a specific version.

Learn more about reverting in our [docs](https://docs.humanitec.com/reference/concepts/app-config/shared-app-values#revert).


### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKeyResponse } from "test-1/dist/sdk/models/operations";
import { ValueSetVersionResultOf, ValueSource } from "test-1/dist/sdk/models/shared";

const sdk = new Test1();

sdk.valueSetVersion.postOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKey({
  valueSetActionPayloadRequest: {
    comment: "impedit",
  },
  appId: "culpa",
  key: "atque",
  orgId: "voluptates",
  valueSetVersionId: "f51fcb4c-593e-4c12-8daa-d0ec7afedbd8",
}).then((res: PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKeyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                  | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                  | [operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKeyRequest](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidrestorekeyrequest.md) | :heavy_check_mark:                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                 |
| `config`                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                         | Available config options for making requests.                                                                                                                                              |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdValueSetVersionsValueSetVersionIdRestoreKeyResponse](../../models/operations/postorgsorgidappsappidvaluesetversionsvaluesetversionidrestorekeyresponse.md)>**

