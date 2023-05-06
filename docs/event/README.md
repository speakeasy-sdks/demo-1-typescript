# event

## Overview

Webhook is a special type of a Job, it performs a HTTPS request to a specified URL with specified headers.
<SchemaDefinition schemaRef="#/components/schemas/WebhookRequest" />


### Available Operations

* [deleteOrgsOrgIdAppsAppIdJobs](#deleteorgsorgidappsappidjobs) - Deletes all Jobs for the Application
* [deleteOrgsOrgIdAppsAppIdWebhooksJobId](#deleteorgsorgidappsappidwebhooksjobid) - Delete a Webhook
* [getOrgsOrgIdAppsAppIdWebhooks](#getorgsorgidappsappidwebhooks) - List Webhooks
* [getOrgsOrgIdAppsAppIdWebhooksJobId](#getorgsorgidappsappidwebhooksjobid) - Get a Webhook
* [getOrgsOrgIdEvents](#getorgsorgidevents) - List Events
* [postOrgsOrgIdAppsAppIdWebhooks](#postorgsorgidappsappidwebhooks) - Create a new Webhook
* [postOrgsOrgIdAppsAppIdWebhooksJobId](#postorgsorgidappsappidwebhooksjobid) - Update a Webhook

## deleteOrgsOrgIdAppsAppIdJobs

Deletes all Jobs for the Application

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdJobsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.deleteOrgsOrgIdAppsAppIdJobs({
  appId: "facere",
  orgId: "libero",
}).then((res: DeleteOrgsOrgIdAppsAppIdJobsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## deleteOrgsOrgIdAppsAppIdWebhooksJobId

Delete a Webhook

### Example Usage

```typescript
import { Test1 } from "test-1";
import { DeleteOrgsOrgIdAppsAppIdWebhooksJobIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.deleteOrgsOrgIdAppsAppIdWebhooksJobId({
  appId: "architecto",
  jobId: "voluptatibus",
  orgId: "quia",
}).then((res: DeleteOrgsOrgIdAppsAppIdWebhooksJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdWebhooks

List Webhooks

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdWebhooksResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.getOrgsOrgIdAppsAppIdWebhooks({
  appId: "porro",
  orgId: "aliquam",
}).then((res: GetOrgsOrgIdAppsAppIdWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdWebhooksJobId

Get a Webhook

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdWebhooksJobIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.getOrgsOrgIdAppsAppIdWebhooksJobId({
  appId: "velit",
  jobId: "illo",
  orgId: "accusantium",
}).then((res: GetOrgsOrgIdAppsAppIdWebhooksJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdEvents

List Events

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdEventsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.getOrgsOrgIdEvents({
  orgId: "vel",
}).then((res: GetOrgsOrgIdEventsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdAppsAppIdWebhooks

Create a new Webhook

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdWebhooksResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.postOrgsOrgIdAppsAppIdWebhooks({
  webhookRequest: {
    disabled: false,
    headers: {
      "beatae": "vero",
      "excepturi": "eum",
    },
    id: "349e1cf9-e06e-43a4-b700-0ae6b6bc9b8f",
    payload: {
      "ullam": "unde",
      "necessitatibus": "animi",
    },
    triggers: [
      {
        scope: "ipsam",
        type: "corporis",
      },
      {
        scope: "est",
        type: "error",
      },
      {
        scope: "esse",
        type: "labore",
      },
      {
        scope: "veritatis",
        type: "vero",
      },
    ],
    url: "consectetur",
  },
  appId: "vitae",
  orgId: "inventore",
}).then((res: PostOrgsOrgIdAppsAppIdWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdAppsAppIdWebhooksJobId

Update a Webhook

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdWebhooksJobIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.event.postOrgsOrgIdAppsAppIdWebhooksJobId({
  webhookRequest: {
    disabled: false,
    headers: {
      "ad": "qui",
    },
    id: "965bb8a7-2026-4114-b5e1-39dbc2259b1a",
    payload: {
      "fugiat": "officia",
      "quos": "placeat",
      "sit": "iusto",
    },
    triggers: [
      {
        scope: "voluptates",
        type: "inventore",
      },
    ],
    url: "aperiam",
  },
  appId: "totam",
  jobId: "dolore",
  orgId: "eligendi",
}).then((res: PostOrgsOrgIdAppsAppIdWebhooksJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
