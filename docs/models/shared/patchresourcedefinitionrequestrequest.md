# PatchResourceDefinitionRequestRequest

PatchResourceDefinitionRequest describes a ResourceDefinition change request.


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `driverAccount`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | (Optional) Security account required by the driver.                          |
| `driverInputs`                                                               | [ValuesSecretsRequest](../../models/shared/valuessecretsrequest.md)          | :heavy_minus_sign:                                                           | ValuesSecrets stores data that should be passed around split by sensitivity. |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | (Optional) Resource display name                                             |