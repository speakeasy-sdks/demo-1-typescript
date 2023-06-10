# ImageBuildResponse

DEPRECATED: This type exists for historical compatibility and should not be used. Please use the [Artefact API](https://api-docs.humanitec.com/#tag/Artefact) instead.

Holds the metadata associated withe a Container Image Build


## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `addedAt`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | The time when the build was added to Humanitec.                       | 2020-06-22T09:37:23.523Z                                              |
| `branch`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The branch name of the branch the build was built on                  |                                                                       |
| `commit`                                                              | *string*                                                              | :heavy_check_mark:                                                    | The commit ID that this build was built from.                         |                                                                       |
| `image`                                                               | *string*                                                              | :heavy_check_mark:                                                    | The fully qualified Image URL including registry, repository and tag. |                                                                       |
| `tags`                                                                | *string*[]                                                            | :heavy_check_mark:                                                    | The tag that the build was built from.                                |                                                                       |