# resourceDefinition

## Overview

A Resource Definitions describes how and when a resource should be provisioned. It links a driver (the how) along with a Matching Criteria (the when) to a Resource Type. This allows Humanitec to invoke a particular driver for the required Resource Type in the context of a particular Application and Environment.

The schema for the `driver_inputs` is defined by the `input_schema` property on the DriverDefinition identified by the `driver_type` property.
<SchemaDefinition schemaRef="#/components/schemas/ResourceDefinitionRequest" />


### Available Operations

* [deleteOrgsOrgIdResourcesDefsDefId](#deleteorgsorgidresourcesdefsdefid) - Delete a Resource Definition.
* [deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId](#deleteorgsorgidresourcesdefsdefidcriteriacriteriaid) - Delete a Matching Criteria from a Resource Definition.
* [getOrgsOrgIdResourcesDefs](#getorgsorgidresourcesdefs) - List Resource Definitions.
* [getOrgsOrgIdResourcesDefsDefId](#getorgsorgidresourcesdefsdefid) - Get a specific Resource Definition.
* [getOrgsOrgIdResourcesDefsDefIdResources](#getorgsorgidresourcesdefsdefidresources) - List Active Resources provisioned via a specific Resource Definition.
* [patchOrgsOrgIdResourcesDefsDefId](#patchorgsorgidresourcesdefsdefid) - Update a Resource Definition.
* [postOrgsOrgIdResourcesDefs](#postorgsorgidresourcesdefs) - Create a new Resource Definition.
* [postOrgsOrgIdResourcesDefsDefIdCriteria](#postorgsorgidresourcesdefsdefidcriteria) - Add a new Matching Criteria to a Resource Definition.
* [putOrgsOrgIdResourcesDefsDefId](#putorgsorgidresourcesdefsdefid) - Update a Resource Definition.

## deleteOrgsOrgIdResourcesDefsDefId

If there **are no** Active Resources provisioned via the current definition, the Resource Definition is deleted immediately.

If there **are** Active Resources provisioned via the current definition, the request fails. The response will describe the changes to the affected Active Resources if operation is forced.

The request can take an optional `force` query parameter. If set to `true`, the current Resource Definition is **marked as** pending deletion and will be deleted (purged) as soon as no existing Active Resources reference it. With the next deployment matching criteria for Resources will be re-evaluated, and current Active Resources for the target environment would be either linked to another matching Resource Definition or decommissioned and created using the new or default Resource Definition (when available).

The Resource Definition that has been marked for deletion cannot be used to provision new resources.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdResourcesDefsDefIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.deleteOrgsOrgIdResourcesDefsDefId({
  defId: "asperiores",
  force: false,
  orgId: "veniam",
}).then((res: DeleteOrgsOrgIdResourcesDefsDefIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.DeleteOrgsOrgIdResourcesDefsDefIdRequest](../../models/operations/deleteorgsorgidresourcesdefsdefidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.DeleteOrgsOrgIdResourcesDefsDefIdResponse](../../models/operations/deleteorgsorgidresourcesdefsdefidresponse.md)>**


## deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId

If there **are no** Active Resources that would match to a different Resource Definition when the current Matching Criteria is deleted, the Matching Criteria is deleted immediately.

If there **are** Active Resources that would match to a different Resource Definition, the request fails with HTTP status code 409 (Conflict). The response content will list all of affected Active Resources and their new matches.

The request can take an optional `force` query parameter. If set to `true`, the Matching Criteria is deleted immediately. Referenced Active Resources would match to a different Resource Definition during the next deployment in the target environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId({
  criteriaId: "consequuntur",
  defId: "facere",
  force: false,
  orgId: "laudantium",
}).then((res: DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdRequest](../../models/operations/deleteorgsorgidresourcesdefsdefidcriteriacriteriaidrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse](../../models/operations/deleteorgsorgidresourcesdefsdefidcriteriacriteriaidresponse.md)>**


## getOrgsOrgIdResourcesDefs

Filter criteria can be applied to obtain all the resource definitions that could match the filters, grouped by type and sorted by matching rank.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDefsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.getOrgsOrgIdResourcesDefs({
  app: "odit",
  env: "pariatur",
  envType: "amet",
  orgId: "exercitationem",
  res: "ab",
  resType: "velit",
}).then((res: GetOrgsOrgIdResourcesDefsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetOrgsOrgIdResourcesDefsRequest](../../models/operations/getorgsorgidresourcesdefsrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetOrgsOrgIdResourcesDefsResponse](../../models/operations/getorgsorgidresourcesdefsresponse.md)>**


## getOrgsOrgIdResourcesDefsDefId

Get a specific Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDefsDefIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.getOrgsOrgIdResourcesDefsDefId({
  defId: "facilis",
  orgId: "tempore",
}).then((res: GetOrgsOrgIdResourcesDefsDefIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetOrgsOrgIdResourcesDefsDefIdRequest](../../models/operations/getorgsorgidresourcesdefsdefidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdResourcesDefsDefIdResponse](../../models/operations/getorgsorgidresourcesdefsdefidresponse.md)>**


## getOrgsOrgIdResourcesDefsDefIdResources

List Active Resources provisioned via a specific Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdResourcesDefsDefIdResourcesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.getOrgsOrgIdResourcesDefsDefIdResources({
  defId: "nisi",
  orgId: "voluptatibus",
}).then((res: GetOrgsOrgIdResourcesDefsDefIdResourcesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetOrgsOrgIdResourcesDefsDefIdResourcesRequest](../../models/operations/getorgsorgidresourcesdefsdefidresourcesrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetOrgsOrgIdResourcesDefsDefIdResourcesResponse](../../models/operations/getorgsorgidresourcesdefsdefidresourcesresponse.md)>**


## patchOrgsOrgIdResourcesDefsDefId

Update a Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdResourcesDefsDefIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.patchOrgsOrgIdResourcesDefsDefId({
  patchResourceDefinitionRequestRequest: {
    driverAccount: "quaerat",
    driverInputs: {
      secrets: {
        "distinctio": "nisi",
        "quis": "nisi",
        "libero": "minus",
      },
      values: {
        "facilis": "ipsum",
        "ad": "voluptatibus",
        "voluptatibus": "consequuntur",
        "debitis": "labore",
      },
    },
    name: "Craig Kiehn",
  },
  defId: "iusto",
  orgId: "est",
}).then((res: PatchOrgsOrgIdResourcesDefsDefIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.PatchOrgsOrgIdResourcesDefsDefIdRequest](../../models/operations/patchorgsorgidresourcesdefsdefidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.PatchOrgsOrgIdResourcesDefsDefIdResponse](../../models/operations/patchorgsorgidresourcesdefsdefidresponse.md)>**


## postOrgsOrgIdResourcesDefs

Create a new Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdResourcesDefsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.postOrgsOrgIdResourcesDefs({
  createResourceDefinitionRequestRequest: {
    criteria: [
      {
        appId: "eligendi",
        envId: "fugiat",
        envType: "unde",
        id: "e7319c17-7d52-45f7-bb11-4eeb52ff785f",
        resId: "quisquam",
      },
      {
        appId: "sequi",
        envId: "nihil",
        envType: "deleniti",
        id: "14d4c98e-0c2b-4b89-ab75-dad636c60050",
        resId: "amet",
      },
      {
        appId: "illum",
        envId: "praesentium",
        envType: "quidem",
        id: "b31180f7-39ae-49e0-97eb-809e2810331f",
        resId: "dolor",
      },
    ],
    driverAccount: "occaecati",
    driverInputs: {
      secrets: {
        "beatae": "at",
        "labore": "minus",
        "esse": "voluptatem",
      },
      values: {
        "rerum": "ea",
      },
    },
    driverType: "aperiam",
    id: "7f3c93c7-3b9d-4a3f-aced-a7e23f225741",
    name: "May Nolan",
    type: "distinctio",
  },
  orgId: "in",
}).then((res: PostOrgsOrgIdResourcesDefsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostOrgsOrgIdResourcesDefsRequest](../../models/operations/postorgsorgidresourcesdefsrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostOrgsOrgIdResourcesDefsResponse](../../models/operations/postorgsorgidresourcesdefsresponse.md)>**


## postOrgsOrgIdResourcesDefsDefIdCriteria

Matching Criteria are combined with Resource Type to select a specific definition. Matching Criteria can be set for any combination of Application ID, Environment ID, Environment Type, and Resource ID. In the event of multiple matches, the most specific match is chosen.

For example, given 3 sets of matching criteria for the same type:

```
 1. {"env_type":"test"}
 2. {"env_type":"development"}
 3. {"env_type":"test", "app_id":"my-app"}
```

If, a resource of that time was needed in an Application `my-app`, Environment `qa-team` with Type `test` and Resource ID `modules.my-module-externals.my-resource`, there would be two resources definitions matching the criteria: #1 & #3. Definition #3 will be chosen because it's matching criteria is the most specific.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.postOrgsOrgIdResourcesDefsDefIdCriteria({
  matchingCriteriaRuleRequest: {
    appId: "exercitationem",
    envId: "labore",
    envType: "numquam",
    resId: "repudiandae",
  },
  defId: "modi",
  orgId: "in",
}).then((res: PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaRequest](../../models/operations/postorgsorgidresourcesdefsdefidcriteriarequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PostOrgsOrgIdResourcesDefsDefIdCriteriaResponse](../../models/operations/postorgsorgidresourcesdefsdefidcriteriaresponse.md)>**


## putOrgsOrgIdResourcesDefsDefId

Update a Resource Definition.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdResourcesDefsDefIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.resourceDefinition.putOrgsOrgIdResourcesDefsDefId({
  updateResourceDefinitionRequestRequest: {
    driverAccount: "explicabo",
    driverInputs: {
      secrets: {
        "rem": "aperiam",
        "odit": "deleniti",
        "enim": "voluptate",
        "similique": "minima",
      },
      values: {
        "magnam": "sit",
        "modi": "eum",
        "nesciunt": "mollitia",
      },
    },
    name: "Hope Hegmann",
  },
  defId: "reiciendis",
  orgId: "ab",
}).then((res: PutOrgsOrgIdResourcesDefsDefIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PutOrgsOrgIdResourcesDefsDefIdRequest](../../models/operations/putorgsorgidresourcesdefsdefidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PutOrgsOrgIdResourcesDefsDefIdResponse](../../models/operations/putorgsorgidresourcesdefsdefidresponse.md)>**

