# automationRule

## Overview

An Automation Rule defining how and when artefacts in an environment should be updated.
<SchemaDefinition schemaRef="#/components/schemas/AutomationRuleRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId](#deleteorgsorgidappsappidenvsenvidrulesruleid) - Delete Automation Rule from an Environment.
* [getOrgsOrgIdAppsAppIdEnvsEnvIdRules](#getorgsorgidappsappidenvsenvidrules) - List all Automation Rules in an Environment.
* [getOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId](#getorgsorgidappsappidenvsenvidrulesruleid) - Get a specific Automation Rule for an Environment.
* [postOrgsOrgIdAppsAppIdEnvsEnvIdRules](#postorgsorgidappsappidenvsenvidrules) - Create a new Automation Rule for an Environment.
* [putOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId](#putorgsorgidappsappidenvsenvidrulesruleid) - Update an existing Automation Rule for an Environment.

## deleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId

Delete Automation Rule from an Environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.automationRule.deleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId({
  appId: "ipsam",
  envId: "id",
  orgId: "possimus",
  ruleId: "aut",
}).then((res: DeleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdRequest](../../models/operations/deleteorgsorgidappsappidenvsenvidrulesruleidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse](../../models/operations/deleteorgsorgidappsappidenvsenvidrulesruleidresponse.md)>**


## getOrgsOrgIdAppsAppIdEnvsEnvIdRules

List all Automation Rules in an Environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.automationRule.getOrgsOrgIdAppsAppIdEnvsEnvIdRules({
  appId: "quasi",
  envId: "error",
  orgId: "temporibus",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesRequest](../../models/operations/getorgsorgidappsappidenvsenvidrulesrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse](../../models/operations/getorgsorgidappsappidenvsenvidrulesresponse.md)>**


## getOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId

Get a specific Automation Rule for an Environment.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.automationRule.getOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId({
  appId: "laborum",
  envId: "quasi",
  orgId: "reiciendis",
  ruleId: "voluptatibus",
}).then((res: GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdRequest](../../models/operations/getorgsorgidappsappidenvsenvidrulesruleidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse](../../models/operations/getorgsorgidappsappidenvsenvidrulesruleidresponse.md)>**


## postOrgsOrgIdAppsAppIdEnvsEnvIdRules

Items marked as deprecated are still supported (however not recommended) for use and are incompatible with properties of the latest api version. In particular an error is raised if  `images_filter` (deprecated) and `artefacts_filter` are used in the same payload. The same is true for `exclude_images_filter` (deprecated) and `exclude_artefacts_filter`. `match` and `update_to` are still supported but will trigger an error if combined with `match_ref`.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.automationRule.postOrgsOrgIdAppsAppIdEnvsEnvIdRules({
  automationRuleRequest: {
    active: false,
    artefactsFilter: [
      "nihil",
      "praesentium",
      "voluptatibus",
      "ipsa",
    ],
    excludeArtefactsFilter: false,
    excludeImagesFilter: false,
    imagesFilter: [
      "voluptate",
      "cum",
      "perferendis",
    ],
    match: "doloremque",
    matchRef: "reprehenderit",
    type: "ut",
    updateTo: "maiores",
  },
  appId: "dicta",
  envId: "corporis",
  orgId: "dolore",
}).then((res: PostOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdRulesRequest](../../models/operations/postorgsorgidappsappidenvsenvidrulesrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdEnvsEnvIdRulesResponse](../../models/operations/postorgsorgidappsappidenvsenvidrulesresponse.md)>**


## putOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId

Items marked as deprecated are still supported (however not recommended) for use and are incompatible with properties of the latest api version. In particular an error is raised if  `images_filter` (deprecated) and `artefacts_filter` are used in the same payload. The same is true for `exclude_images_filter` (deprecated) and `exclude_artefacts_filter`. `match` and `update_to` are still supported but will trigger an error if combined with `match_ref`.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.automationRule.putOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleId({
  automationRuleRequest: {
    active: false,
    artefactsFilter: [
      "dicta",
      "harum",
    ],
    excludeArtefactsFilter: false,
    excludeImagesFilter: false,
    imagesFilter: [
      "accusamus",
      "commodi",
    ],
    match: "repudiandae",
    matchRef: "quae",
    type: "ipsum",
    updateTo: "quidem",
  },
  appId: "molestias",
  envId: "excepturi",
  orgId: "pariatur",
  ruleId: "modi",
}).then((res: PutOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdRequest](../../models/operations/putorgsorgidappsappidenvsenvidrulesruleidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdEnvsEnvIdRulesRuleIdResponse](../../models/operations/putorgsorgidappsappidenvsenvidrulesruleidresponse.md)>**

