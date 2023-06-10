# userInvite

### Available Operations

* [getOrgsOrgIdInvitations](#getorgsorgidinvitations) - List the invites issued for the organization.

## getOrgsOrgIdInvitations

List the invites issued for the organization.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdInvitationsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.userInvite.getOrgsOrgIdInvitations({
  orgId: "vel",
}).then((res: GetOrgsOrgIdInvitationsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetOrgsOrgIdInvitationsRequest](../../models/operations/getorgsorgidinvitationsrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetOrgsOrgIdInvitationsResponse](../../models/operations/getorgsorgidinvitationsresponse.md)>**

