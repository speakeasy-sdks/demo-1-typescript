# userRole

## Overview

UserRole holds the mapping of role to user for a particular object.
<SchemaDefinition schemaRef="#/components/schemas/UserRoleRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdUsersUserId](#deleteorgsorgidappsappidusersuserid) - Remove the role of a User on an Application
* [deleteOrgsOrgIdEnvTypesEnvTypeUsersUserId](#deleteorgsorgidenvtypesenvtypeusersuserid) - Remove the role of a User on an Environment Type
* [deleteOrgsOrgIdUsersUserId](#deleteorgsorgidusersuserid) - Remove the role of a User on an Organization
* [getOrgsOrgIdAppsAppIdUsers](#getorgsorgidappsappidusers) - List Users with roles in an App
* [getOrgsOrgIdAppsAppIdUsersUserId](#getorgsorgidappsappidusersuserid) - Get the role of a User on an Application
* [getOrgsOrgIdEnvTypesEnvTypeUsersUserId](#getorgsorgidenvtypesenvtypeusersuserid) - Get the role of a User on an Environment Type
* [getOrgsOrgIdUsers](#getorgsorgidusers) - List Users with roles in an Organization
* [getOrgsOrgIdUsersUserId](#getorgsorgidusersuserid) - Get the role of a User on an Organization
* [patchOrgsOrgIdAppsAppIdUsersUserId](#patchorgsorgidappsappidusersuserid) - Update the role of a User on an Application
* [patchOrgsOrgIdEnvTypesEnvTypeUsersUserId](#patchorgsorgidenvtypesenvtypeusersuserid) - Update the role of a User on an Environment Type
* [patchOrgsOrgIdUsersUserId](#patchorgsorgidusersuserid) - Update the role of a User on an Organization
* [postOrgsOrgIdAppsAppIdUsers](#postorgsorgidappsappidusers) - Adds a User to an Application with a Role
* [postOrgsOrgIdEnvTypesEnvTypeUsers](#postorgsorgidenvtypesenvtypeusers) - Adds a User to an Environment Type with a Role
* [postOrgsOrgIdInvitations](#postorgsorgidinvitations) - Invites a user to an Organization with a specified role.

## deleteOrgsOrgIdAppsAppIdUsersUserId

Remove the role of a User on an Application

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.deleteOrgsOrgIdAppsAppIdUsersUserId({
  appId: "doloremque",
  orgId: "perferendis",
  userId: "laudantium",
}).then((res: DeleteOrgsOrgIdAppsAppIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.DeleteOrgsOrgIdAppsAppIdUsersUserIdRequest](../../models/operations/deleteorgsorgidappsappidusersuseridrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdUsersUserIdResponse](../../models/operations/deleteorgsorgidappsappidusersuseridresponse.md)>**


## deleteOrgsOrgIdEnvTypesEnvTypeUsersUserId

Remove the role of a User on an Environment Type

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.deleteOrgsOrgIdEnvTypesEnvTypeUsersUserId({
  envType: "iusto",
  orgId: "corrupti",
  userId: "molestiae",
}).then((res: DeleteOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteOrgsOrgIdEnvTypesEnvTypeUsersUserIdRequest](../../models/operations/deleteorgsorgidenvtypesenvtypeusersuseridrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse](../../models/operations/deleteorgsorgidenvtypesenvtypeusersuseridresponse.md)>**


## deleteOrgsOrgIdUsersUserId

Remove the role of a User on an Organization

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.deleteOrgsOrgIdUsersUserId({
  orgId: "quis",
  userId: "iure",
}).then((res: DeleteOrgsOrgIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteOrgsOrgIdUsersUserIdRequest](../../models/operations/deleteorgsorgidusersuseridrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteOrgsOrgIdUsersUserIdResponse](../../models/operations/deleteorgsorgidusersuseridresponse.md)>**


## getOrgsOrgIdAppsAppIdUsers

List Users with roles in an App

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdUsersResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.getOrgsOrgIdAppsAppIdUsers({
  appId: "ab",
  orgId: "quaerat",
}).then((res: GetOrgsOrgIdAppsAppIdUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetOrgsOrgIdAppsAppIdUsersRequest](../../models/operations/getorgsorgidappsappidusersrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdUsersResponse](../../models/operations/getorgsorgidappsappidusersresponse.md)>**


## getOrgsOrgIdAppsAppIdUsersUserId

Get the role of a User on an Application

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.getOrgsOrgIdAppsAppIdUsersUserId({
  appId: "amet",
  orgId: "sapiente",
  userId: "corporis",
}).then((res: GetOrgsOrgIdAppsAppIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.GetOrgsOrgIdAppsAppIdUsersUserIdRequest](../../models/operations/getorgsorgidappsappidusersuseridrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdUsersUserIdResponse](../../models/operations/getorgsorgidappsappidusersuseridresponse.md)>**


## getOrgsOrgIdEnvTypesEnvTypeUsersUserId

Get the role of a User on an Environment Type

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.getOrgsOrgIdEnvTypesEnvTypeUsersUserId({
  envType: "est",
  orgId: "iure",
  userId: "quisquam",
}).then((res: GetOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetOrgsOrgIdEnvTypesEnvTypeUsersUserIdRequest](../../models/operations/getorgsorgidenvtypesenvtypeusersuseridrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse](../../models/operations/getorgsorgidenvtypesenvtypeusersuseridresponse.md)>**


## getOrgsOrgIdUsers

List Users with roles in an Organization

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdUsersResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.getOrgsOrgIdUsers({
  orgId: "provident",
}).then((res: GetOrgsOrgIdUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetOrgsOrgIdUsersRequest](../../models/operations/getorgsorgidusersrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetOrgsOrgIdUsersResponse](../../models/operations/getorgsorgidusersresponse.md)>**


## getOrgsOrgIdUsersUserId

Get the role of a User on an Organization

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.getOrgsOrgIdUsersUserId({
  orgId: "laudantium",
  userId: "nam",
}).then((res: GetOrgsOrgIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetOrgsOrgIdUsersUserIdRequest](../../models/operations/getorgsorgidusersuseridrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetOrgsOrgIdUsersUserIdResponse](../../models/operations/getorgsorgidusersuseridresponse.md)>**


## patchOrgsOrgIdAppsAppIdUsersUserId

Update the role of a User on an Application

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdAppsAppIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.patchOrgsOrgIdAppsAppIdUsersUserId({
  roleRequest: {
    role: "nemo",
  },
  appId: "enim",
  orgId: "ipsam",
  userId: "minima",
}).then((res: PatchOrgsOrgIdAppsAppIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.PatchOrgsOrgIdAppsAppIdUsersUserIdRequest](../../models/operations/patchorgsorgidappsappidusersuseridrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.PatchOrgsOrgIdAppsAppIdUsersUserIdResponse](../../models/operations/patchorgsorgidappsappidusersuseridresponse.md)>**


## patchOrgsOrgIdEnvTypesEnvTypeUsersUserId

Update the role of a User on an Environment Type

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.patchOrgsOrgIdEnvTypesEnvTypeUsersUserId({
  roleRequest: {
    role: "tempora",
  },
  envType: "perferendis",
  orgId: "corrupti",
  userId: "doloremque",
}).then((res: PatchOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.PatchOrgsOrgIdEnvTypesEnvTypeUsersUserIdRequest](../../models/operations/patchorgsorgidenvtypesenvtypeusersuseridrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.PatchOrgsOrgIdEnvTypesEnvTypeUsersUserIdResponse](../../models/operations/patchorgsorgidenvtypesenvtypeusersuseridresponse.md)>**


## patchOrgsOrgIdUsersUserId

Update the role of a User on an Organization

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdUsersUserIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.patchOrgsOrgIdUsersUserId({
  roleRequest: {
    role: "fugiat",
  },
  orgId: "numquam",
  userId: "doloremque",
}).then((res: PatchOrgsOrgIdUsersUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchOrgsOrgIdUsersUserIdRequest](../../models/operations/patchorgsorgidusersuseridrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchOrgsOrgIdUsersUserIdResponse](../../models/operations/patchorgsorgidusersuseridresponse.md)>**


## postOrgsOrgIdAppsAppIdUsers

Adds a User to an Application with a Role

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdUsersResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.postOrgsOrgIdAppsAppIdUsers({
  userRoleRequest: {
    createdAt: "2020-06-22T09:37:23.523Z",
    email: "Neva_Murphy39@hotmail.com",
    id: "cbd6b5f3-ec90-4930-8f92-6bad2553819b",
    invite: "tempora",
    name: "Dr. Monica Ratke",
    role: "fugit",
    type: "voluptatem",
    user: "repudiandae",
  },
  appId: "corporis",
  orgId: "ea",
}).then((res: PostOrgsOrgIdAppsAppIdUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostOrgsOrgIdAppsAppIdUsersRequest](../../models/operations/postorgsorgidappsappidusersrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdUsersResponse](../../models/operations/postorgsorgidappsappidusersresponse.md)>**


## postOrgsOrgIdEnvTypesEnvTypeUsers

Adds a User to an Environment Type with a Role

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdEnvTypesEnvTypeUsersResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.postOrgsOrgIdEnvTypesEnvTypeUsers({
  userRoleRequest: {
    createdAt: "2020-06-22T09:37:23.523Z",
    email: "Elmer_Kuvalis99@gmail.com",
    id: "639a910a-bdca-4b62-a766-96e1ec00221b",
    invite: "sequi",
    name: "Yvonne Stamm",
    role: "similique",
    type: "eligendi",
    user: "tempore",
  },
  envType: "amet",
  orgId: "debitis",
}).then((res: PostOrgsOrgIdEnvTypesEnvTypeUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PostOrgsOrgIdEnvTypesEnvTypeUsersRequest](../../models/operations/postorgsorgidenvtypesenvtypeusersrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PostOrgsOrgIdEnvTypesEnvTypeUsersResponse](../../models/operations/postorgsorgidenvtypesenvtypeusersresponse.md)>**


## postOrgsOrgIdInvitations

Invites a user to an Organization with a specified role.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdInvitationsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userRole.postOrgsOrgIdInvitations({
  userInviteRequestRequest: {
    email: "Yasmine_Smith@hotmail.com",
    role: "quibusdam",
  },
  orgId: "sit",
}).then((res: PostOrgsOrgIdInvitationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostOrgsOrgIdInvitationsRequest](../../models/operations/postorgsorgidinvitationsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostOrgsOrgIdInvitationsResponse](../../models/operations/postorgsorgidinvitationsresponse.md)>**

