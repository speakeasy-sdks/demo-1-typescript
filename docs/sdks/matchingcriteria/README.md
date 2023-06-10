# matchingCriteria

## Overview

Matching Criteria are a set of rules used to choose which Resource Definition to use to provision a particular Resource Type.

Matching criteria are made up in order of specificity with least specific first:

- Environment Type (`env_type`)

- Application (`app_id`)

- Environment (`env_id`)

- Resource (`res_id`)

When selecting matching criteria, the most specific one is selected. In general, this means of all the Matching Criteria fully matching the context, the Matching Criteria Rule with the most specific element filled is chosen. If there is a tie, the next most specific elements are compared and so on until one is chosen.

**NOTE:**

Humanitec will reject the registration of matching criteria rules that duplicate rules already present for a Resource Type.
<SchemaDefinition schemaRef="#/components/schemas/MatchingCriteriaRequest" />


### Available Operations

* [deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId](#deleteorgsorgidresourcesdefsdefidcriteriacriteriaid) - Delete a Matching Criteria from a Resource Definition.
* [postOrgsOrgIdResourcesDefsDefIdCriteria](#postorgsorgidresourcesdefsdefidcriteria) - Add a new Matching Criteria to a Resource Definition.

## deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId

If there **are no** Active Resources that would match to a different Resource Definition when the current Matching Criteria is deleted, the Matching Criteria is deleted immediately.

If there **are** Active Resources that would match to a different Resource Definition, the request fails with HTTP status code 409 (Conflict). The response content will list all of affected Active Resources and their new matches.

The request can take an optional `force` query parameter. If set to `true`, the Matching Criteria is deleted immediately. Referenced Active Resources would match to a different Resource Definition during the next deployment in the target environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.matchingCriteria.deleteOrgsOrgIdResourcesDefsDefIdCriteriaCriteriaId({
  criteriaId: "sint",
  defId: "ea",
  force: false,
  orgId: "autem",
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

sdk.matchingCriteria.postOrgsOrgIdResourcesDefsDefIdCriteria({
  matchingCriteriaRuleRequest: {
    appId: "ipsam",
    envId: "rerum",
    envType: "laudantium",
    resId: "corporis",
  },
  defId: "officiis",
  orgId: "voluptatibus",
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

