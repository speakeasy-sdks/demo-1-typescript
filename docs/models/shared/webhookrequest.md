# WebhookRequest

Webhook is a special type of a Job, it performs a HTTPS request to a specified URL with specified headers.


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `disabled`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | Defines whether this job is currently disabled.               |
| `headers`                                                     | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |
| `id`                                                          | *string*                                                      | :heavy_minus_sign:                                            | Job ID, unique within the Organization                        |
| `payload`                                                     | Record<string, *any*>                                         | :heavy_minus_sign:                                            | N/A                                                           |
| `triggers`                                                    | [EventBaseRequest](../../models/shared/eventbaserequest.md)[] | :heavy_minus_sign:                                            | A list of Events by which the Job is triggered                |
| `url`                                                         | *string*                                                      | :heavy_minus_sign:                                            | Thw webhook's URL (without protocol, only HTTPS is supported) |