# EnvironmentTypeRequest

Environment Types are a way of grouping and managing Environments. Every Environment has exactly 1 Environment Type.

Environment Types can be used with External Resources to manage where resources such as databases are provisioned or even which cluster to deploy to.


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `description`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | A Human-readable description of the Environment Type                     |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The ID of the Environment Type. (Must be unique within an Organization.) |