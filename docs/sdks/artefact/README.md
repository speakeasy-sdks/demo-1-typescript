# artefact

## Overview

Artefacts can be registered with Humanitec. Continuous Integration (CI) pipelines notify Humanitec when a new version of an Artefact becomes available. Humanitec tracks the Artefact along with metadata about how it was built.
<SchemaDefinition schemaRef="#/components/schemas/ArtefactRequest" />


### Available Operations

* [deleteOrgsOrgIdArtefactsArtefactId](#deleteorgsorgidartefactsartefactid) - Delete Artefact and all related Artefact Versions
* [getOrgsOrgIdArtefacts](#getorgsorgidartefacts) - List all Artefacts.

## deleteOrgsOrgIdArtefactsArtefactId

The specified Artefact and its Artefact Versions will be permanently deleted. Only Administrators can delete an Artefact.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdArtefactsArtefactIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefact.deleteOrgsOrgIdArtefactsArtefactId({
  artefactId: "dolores",
  orgId: "dolorem",
}).then((res: DeleteOrgsOrgIdArtefactsArtefactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteOrgsOrgIdArtefactsArtefactIdRequest](../../models/operations/deleteorgsorgidartefactsartefactidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteOrgsOrgIdArtefactsArtefactIdResponse](../../models/operations/deleteorgsorgidartefactsartefactidresponse.md)>**


## getOrgsOrgIdArtefacts

Returns the Artefacts registered with your organization. If no elements are found, an empty list is returned.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdArtefactsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefact.getOrgsOrgIdArtefacts({
  name: "Rose Rolfson",
  orgId: "nemo",
  type: "minima",
}).then((res: GetOrgsOrgIdArtefactsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetOrgsOrgIdArtefactsRequest](../../models/operations/getorgsorgidartefactsrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetOrgsOrgIdArtefactsResponse](../../models/operations/getorgsorgidartefactsresponse.md)>**

