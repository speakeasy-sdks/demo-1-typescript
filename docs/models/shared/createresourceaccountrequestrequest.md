# CreateResourceAccountRequestRequest

CreateResourceAccountRequest describes the request to create a new security account.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `credentials`                                                                   | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | Credentials associated with the account.                                        |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Unique identifier for the account (in scope of the organization it belongs to). |
| `name`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | Display name.                                                                   |
| `type`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | The type of the account                                                         |