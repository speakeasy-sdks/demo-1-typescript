# userProfile

## Overview

UserProfile holds the profile information of a user
<SchemaDefinition schemaRef="#/components/schemas/UserProfileRequest" />


### Available Operations

* [deleteTokensTokenId](#deletetokenstokenid) - DEPRECATED
* [getCurrentUser](#getcurrentuser) - Gets the extended profile of the current user
* [getTokens](#gettokens) - DEPRECATED
* [getUsersMe](#getusersme) - DEPRECATED
* [patchCurrentUser](#patchcurrentuser) - Updates the extended profile of the current user.
* [postOrgsOrgIdUsers](#postorgsorgidusers) - Creates a new service user.

## deleteTokensTokenId

DEPRECATED

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteTokensTokenIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.deleteTokensTokenId({
  tokenId: "eligendi",
}).then((res: DeleteTokensTokenIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getCurrentUser

Gets the extended profile of the current user

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetCurrentUserResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.getCurrentUser().then((res: GetCurrentUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getTokens

DEPRECATED

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetTokensResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.getTokens().then((res: GetTokensResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getUsersMe

DEPRECATED

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetUsersMeResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.getUsersMe().then((res: GetUsersMeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchCurrentUser

Updates the extended profile of the current user.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchCurrentUserResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.patchCurrentUser({
  createdAt: "2020-06-22T09:37:23.523Z",
  email: "Gunnar98@hotmail.com",
  id: "eeb1c7cb-db6e-4ec7-8378-ba25317747dc",
  name: "Gregory Heidenreich",
  properties: {
    "maxime": "dolorum",
  },
  roles: {
    "nostrum": "illum",
    "quibusdam": "commodi",
    "esse": "explicabo",
    "consectetur": "temporibus",
  },
  type: "optio",
}).then((res: PatchCurrentUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdUsers

Creates a new service user.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdUsersResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userProfile.postOrgsOrgIdUsers({
  newServiceUserRequest: {
    email: "Wilford_Heller@gmail.com",
    name: "Dixie Doyle",
    role: "harum",
  },
  orgId: "ducimus",
}).then((res: PostOrgsOrgIdUsersResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
