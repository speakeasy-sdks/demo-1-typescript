# artefactVersion

## Overview

An Artefact Version represents a particular version of an Artefact that can be added to an Application.
<SchemaDefinition schemaRef="#/components/schemas/ArtefactVersionRequest" />


### Available Operations

* [getOrgsOrgIdArtefactVersions](#getorgsorgidartefactversions) - List all Artefacts Versions.
* [getOrgsOrgIdArtefactVersionsArtefactVersionId](#getorgsorgidartefactversionsartefactversionid) - Get an Artefacts Versions.
* [getOrgsOrgIdArtefactsArtefactIdVersions](#getorgsorgidartefactsartefactidversions) - List all Artefact Versions of an Artefact.
* [patchOrgsOrgIdArtefactsArtefactIdVersionsVersionId](#patchorgsorgidartefactsartefactidversionsversionid) - Update Version of an Artefact.
* [postOrgsOrgIdArtefactVersions](#postorgsorgidartefactversions) - Register a new Artefact Version with your organization.

## getOrgsOrgIdArtefactVersions

Returns the Artefact Versions registered with your organization. If no elements are found, an empty list is returned.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdArtefactVersionsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefactVersion.getOrgsOrgIdArtefactVersions({
  archived: "excepturi",
  name: "Charlene Nicolas",
  orgId: "architecto",
  reference: "mollitia",
}).then((res: GetOrgsOrgIdArtefactVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdArtefactVersionsArtefactVersionId

Returns a specific Artefact Version.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdArtefactVersionsArtefactVersionIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefactVersion.getOrgsOrgIdArtefactVersionsArtefactVersionId({
  artefactVersionId: "dolorem",
  orgId: "culpa",
}).then((res: GetOrgsOrgIdArtefactVersionsArtefactVersionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdArtefactsArtefactIdVersions

Returns the Artefact Versions of a specified Artefact registered with your organization. If no elements are found, an empty list is returned.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdArtefactsArtefactIdVersionsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefactVersion.getOrgsOrgIdArtefactsArtefactIdVersions({
  archived: "consequuntur",
  artefactId: "repellat",
  limit: "mollitia",
  orgId: "occaecati",
  reference: "numquam",
}).then((res: GetOrgsOrgIdArtefactsArtefactIdVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## patchOrgsOrgIdArtefactsArtefactIdVersionsVersionId

Update the version of a specified Artefact registered with your organization".

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdArtefactsArtefactIdVersionsVersionIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefactVersion.patchOrgsOrgIdArtefactsArtefactIdVersionsVersionId({
  updateArtefactVersionPayloadRequest: {
    archived: false,
  },
  artefactId: "commodi",
  orgId: "quam",
  versionId: "molestiae",
}).then((res: PatchOrgsOrgIdArtefactsArtefactIdVersionsVersionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdArtefactVersions

Register a new Artefact Version with your organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdArtefactVersionsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.artefactVersion.postOrgsOrgIdArtefactVersions({
  addArtefactVersionPayloadRequest: {
    commit: "velit",
    digest: "error",
    name: "Beatrice Brown",
    ref: "enim",
    type: "odit",
    version: "quo",
  },
  orgId: "sequi",
  vcs: "tenetur",
}).then((res: PostOrgsOrgIdArtefactVersionsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
