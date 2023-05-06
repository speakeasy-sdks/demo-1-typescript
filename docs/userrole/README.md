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
