# workloadProfile

## Overview

Workload Profiles provide the baseline configuration for Workloads in Applications in Humanitec. Developers can configure various features of a workload profile to suit their needs. Examples of features might be `schedules` used in Kubernetes CronJobs or `ingress` which might be used to expose Pods controlled by a Kubernetes Deployment.

Workloads in Humanitec are implemented as Helm Charts which must implement a specific schema.
<SchemaDefinition schemaRef="#/components/schemas/WorkloadProfileRequest" />


### Available Operations

* [deleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersion](#deleteorgsorgidworkloadprofilesprofileidversionsversion) - Delete a Workload Profile Version
* [deleteOrgsOrgIdWorkloadProfilesProfileQid](#deleteorgsorgidworkloadprofilesprofileqid) - Delete a Workload Profile
* [getOrgsOrgIdWorkloadProfiles](#getorgsorgidworkloadprofiles) - List workload profiles available to the organization.
* [getOrgsOrgIdWorkloadProfilesProfileQid](#getorgsorgidworkloadprofilesprofileqid) - Get a Workload Profile
* [getOrgsOrgIdWorkloadProfilesProfileQidVersions](#getorgsorgidworkloadprofilesprofileqidversions) - List versions of the given workload profile with optional constraint.
* [postOrgsOrgIdWorkloadProfiles](#postorgsorgidworkloadprofiles) - Create new Workload Profile
* [postOrgsOrgIdWorkloadProfilesProfileQidVersions](#postorgsorgidworkloadprofilesprofileqidversions) - Add new Version of the Workload Profile

## deleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersion

Delete a Workload Profile Version

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersionResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.deleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersion({
  orgId: "aut",
  profileId: "temporibus",
  version: "tenetur",
}).then((res: DeleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.DeleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersionRequest](../../models/operations/deleteorgsorgidworkloadprofilesprofileidversionsversionrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.DeleteOrgsOrgIdWorkloadProfilesProfileIdVersionsVersionResponse](../../models/operations/deleteorgsorgidworkloadprofilesprofileidversionsversionresponse.md)>**


## deleteOrgsOrgIdWorkloadProfilesProfileQid

This will also delete all versions of a workload profile.

It is not possible to delete profiles of other organizations.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdWorkloadProfilesProfileQidResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.deleteOrgsOrgIdWorkloadProfilesProfileQid({
  orgId: "incidunt",
  profileQid: "numquam",
}).then((res: DeleteOrgsOrgIdWorkloadProfilesProfileQidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.DeleteOrgsOrgIdWorkloadProfilesProfileQidRequest](../../models/operations/deleteorgsorgidworkloadprofilesprofileqidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.DeleteOrgsOrgIdWorkloadProfilesProfileQidResponse](../../models/operations/deleteorgsorgidworkloadprofilesprofileqidresponse.md)>**


## getOrgsOrgIdWorkloadProfiles

List workload profiles available to the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdWorkloadProfilesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.getOrgsOrgIdWorkloadProfiles({
  orgId: "corrupti",
}).then((res: GetOrgsOrgIdWorkloadProfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetOrgsOrgIdWorkloadProfilesRequest](../../models/operations/getorgsorgidworkloadprofilesrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetOrgsOrgIdWorkloadProfilesResponse](../../models/operations/getorgsorgidworkloadprofilesresponse.md)>**


## getOrgsOrgIdWorkloadProfilesProfileQid

Get a Workload Profile

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdWorkloadProfilesProfileQidResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.getOrgsOrgIdWorkloadProfilesProfileQid({
  orgId: "similique",
  profileQid: "dolore",
}).then((res: GetOrgsOrgIdWorkloadProfilesProfileQidResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.GetOrgsOrgIdWorkloadProfilesProfileQidRequest](../../models/operations/getorgsorgidworkloadprofilesprofileqidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdWorkloadProfilesProfileQidResponse](../../models/operations/getorgsorgidworkloadprofilesprofileqidresponse.md)>**


## getOrgsOrgIdWorkloadProfilesProfileQidVersions

List versions of the given workload profile with optional constraint.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.getOrgsOrgIdWorkloadProfilesProfileQidVersions({
  orgId: "esse",
  profileQid: "reiciendis",
  version: "iste",
}).then((res: GetOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.GetOrgsOrgIdWorkloadProfilesProfileQidVersionsRequest](../../models/operations/getorgsorgidworkloadprofilesprofileqidversionsrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.GetOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse](../../models/operations/getorgsorgidworkloadprofilesprofileqidversionsresponse.md)>**


## postOrgsOrgIdWorkloadProfiles

Create new Workload Profile

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdWorkloadProfilesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.postOrgsOrgIdWorkloadProfiles({
  workloadProfileRequest: {
    id: "390c5888-0983-4dab-b9ef-3ffdd9f7f079",
  },
  orgId: "similique",
}).then((res: PostOrgsOrgIdWorkloadProfilesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PostOrgsOrgIdWorkloadProfilesRequest](../../models/operations/postorgsorgidworkloadprofilesrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PostOrgsOrgIdWorkloadProfilesResponse](../../models/operations/postorgsorgidworkloadprofilesresponse.md)>**


## postOrgsOrgIdWorkloadProfilesProfileQidVersions

Creates a Workload Profile Version from the uploaded Helm chart. The version is retrieved from the chart's metadata (Charts.yaml file).

The request has content type `multipart/form-data` and the request body includes two parts:

1. `file` with `application/x-gzip` content type which is an archive containing a Helm chart.

2. `metadata` with `application/json` content type which defines the version's metadata.

Request body example:

	Content-Type: multipart/form-data; boundary=----boundary 	----boundary 	Content-Disposition: form-data; name="metadata" 	Content-Type: application/json; charset=UTF-8 	{ 	  "features": { 	     "humanitec/service": {}, 	     "humanitec/volumes": {}, 	     "custom": {"schema": {}} 	  }, 	  "notes": "Notes related to this version of the profile" 	} 	----boundary 	Content-Disposition: form-data; name="file"; filename="my-workload-1.0.1.tgz" 	Content-Type: application/x-gzip 	[TGZ_DATA] 	----boundary

**NOTE:**

A Workload Profile must be created before a version can be added to it.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.workloadProfile.postOrgsOrgIdWorkloadProfilesProfileQidVersions({
  requestBody: {
    file: {
      content: "asperiores".encode(),
      file: "modi",
    },
    metadata: {
      features: {
        "neque": "quis",
        "in": "sed",
        "non": "porro",
        "fugiat": "soluta",
      },
      notes: "ipsa",
    },
  },
  orgId: "reiciendis",
  profileQid: "labore",
}).then((res: PostOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PostOrgsOrgIdWorkloadProfilesProfileQidVersionsRequest](../../models/operations/postorgsorgidworkloadprofilesprofileqidversionsrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PostOrgsOrgIdWorkloadProfilesProfileQidVersionsResponse](../../models/operations/postorgsorgidworkloadprofilesprofileqidversionsresponse.md)>**

