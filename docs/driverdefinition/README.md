# driverDefinition

## Overview

DriverDefinition describes the resource driver.

Resource Drivers are code that fulfils the Humanitec Resource Driver Interface. This interface allows for certain actions to be performed on resources such as creation and destruction. Humanitec provides numerous Resource Drivers “out of the box”. It is also possible to use 3rd party Resource Drivers or write your own.
<SchemaDefinition schemaRef="#/components/schemas/DriverDefinitionRequest" />


### Available Operations

* [deleteOrgsOrgIdResourcesDriversDriverId](#deleteorgsorgidresourcesdriversdriverid) - Delete a Resources Driver.
* [getOrgsOrgIdResourcesDrivers](#getorgsorgidresourcesdrivers) - List Resource Drivers.
* [getOrgsOrgIdResourcesDriversDriverId](#getorgsorgidresourcesdriversdriverid) - Get a Resource Driver.
* [postOrgsOrgIdResourcesDrivers](#postorgsorgidresourcesdrivers) - Register a new Resource Driver.
* [putOrgsOrgIdResourcesDriversDriverId](#putorgsorgidresourcesdriversdriverid) - Update a Resource Driver.

## deleteOrgsOrgIdResourcesDriversDriverId

Delete a Resources Driver.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdResourcesDriversDriverIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.driverDefinition.deleteOrgsOrgIdResourcesDriversDriverId({
  driverId: "architecto",
  orgId: "sit",
}).then((res: DeleteOrgsOrgIdResourcesDriversDriverIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdResourcesDrivers

List Resource Drivers.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDriversResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.driverDefinition.getOrgsOrgIdResourcesDrivers({
  orgId: "modi",
}).then((res: GetOrgsOrgIdResourcesDriversResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdResourcesDriversDriverId

# Only drivers that belongs to the given organization or registered as `public` are accessible through this endpoint

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDriversDriverIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.driverDefinition.getOrgsOrgIdResourcesDriversDriverId({
  driverId: "fugit",
  orgId: "ab",
}).then((res: GetOrgsOrgIdResourcesDriversDriverIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdResourcesDrivers

Register a new Resource Driver.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdResourcesDriversResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.driverDefinition.postOrgsOrgIdResourcesDrivers({
  createDriverRequestRequest: {
    accountTypes: [
      "quae",
      "dolor",
      "fugiat",
    ],
    id: "5208ece7-e253-4b66-8451-c6c6e205e16d",
    inputsSchema: {
      "est": "harum",
      "sequi": "doloribus",
      "repudiandae": "optio",
      "occaecati": "nemo",
    },
    isPublic: false,
    target: "voluptate",
    template: "blanditiis",
    type: "officia",
  },
  orgId: "voluptas",
}).then((res: PostOrgsOrgIdResourcesDriversResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## putOrgsOrgIdResourcesDriversDriverId

Update a Resource Driver.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdResourcesDriversDriverIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.driverDefinition.putOrgsOrgIdResourcesDriversDriverId({
  updateDriverRequestRequest: {
    accountTypes: [
      "nemo",
      "quos",
    ],
    inputsSchema: {
      "aspernatur": "ducimus",
      "nesciunt": "fuga",
    },
    isPublic: false,
    target: "laudantium",
    template: "incidunt",
    type: "quasi",
  },
  driverId: "rem",
  orgId: "fugiat",
}).then((res: PutOrgsOrgIdResourcesDriversDriverIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
