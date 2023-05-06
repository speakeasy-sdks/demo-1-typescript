# image

## Overview

DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

Container Images (known simply as Images) can be registered with Humanitec. Continuous Integration (CI) pipelines can then notify Humanitec when a new build of a Container Image becomes available. Humanitec tracks the Image along with metadata about how it was built.
<SchemaDefinition schemaRef="#/components/schemas/ImageRequest" />


### Available Operations

* [getOrgsOrgIdImages](#getorgsorgidimages) - List all Container Images
* [getOrgsOrgIdImagesImageId](#getorgsorgidimagesimageid) - Get a specific Image Object
* [getOrgsOrgIdImagesImageIdBuilds](#getorgsorgidimagesimageidbuilds) - Lists all the Builds of an Image
* [postOrgsOrgIdImagesImageIdBuilds](#postorgsorgidimagesimageidbuilds) - Add a new Image Build

## getOrgsOrgIdImages

DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

Lists all of the Container Images registered for this organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdImagesResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.image.getOrgsOrgIdImages({
  orgId: "distinctio",
}).then((res: GetOrgsOrgIdImagesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdImagesImageId

DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

The response includes a list of Image Builds as well as some metadata about the Image such as its Image Source.

Note, `imageId` may not be the same as the container name. `imageId` is determined by the system making notifications about new builds.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdImagesImageIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.image.getOrgsOrgIdImagesImageId({
  imageId: "voluptatem",
  orgId: "autem",
}).then((res: GetOrgsOrgIdImagesImageIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdImagesImageIdBuilds

DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

The response lists all available Image Builds of an Image.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdImagesImageIdBuildsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.image.getOrgsOrgIdImagesImageIdBuilds({
  imageId: "esse",
  orgId: "dolores",
}).then((res: GetOrgsOrgIdImagesImageIdBuildsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdImagesImageIdBuilds

DEPRECATED: This endpoint exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

This endpoint is used by Continuous Integration (CI) pipelines to notify Humanitec that a new Image Build is available.

If there is no Image with ID `imageId`, it will be automatically created.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdImagesImageIdBuildsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.image.postOrgsOrgIdImagesImageIdBuilds({
  imageBuildRequest: {
    branch: "assumenda",
    commit: "beatae",
    image: "est",
    tags: [
      "corrupti",
      "molestiae",
      "provident",
      "accusamus",
    ],
  },
  imageId: "necessitatibus",
  orgId: "tempore",
}).then((res: PostOrgsOrgIdImagesImageIdBuildsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
