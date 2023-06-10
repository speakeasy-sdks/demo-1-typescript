# delta

## Overview

A Deployment Delta (or just "Delta") describes the changes that must be applied to one Deployment Set to generate another Deployment Set. Deployment Deltas are the only way to create new Deployment Sets.

Deployment Deltas can be created fully formed or combined together via PATCHing. They can also be generated from the difference between two Deployment Sets.

**Basic Structure**

```
 {
   "id": <ID of the Deployment Delta.>,
   "metadata": {
     <Properties such as who created the Delta, which Environment it is associated to and a Human-friendly name>
   }
   "modules" : {
     "add" : {
       <ID of Module to add to the Deployment Set> : {
         <An entire Modules object>
       }
     },
     "remove": [
       <An array of Module IDs that should be removed from the Deployment Set>
     ],
    "update": {
       <ID of Module already in the Set to be updated> : [
         <An array of JSON Patch (Search Results (RFC 6902) objects scoped to the module>
       ]
     }
   }
 }
```
<SchemaDefinition schemaRef="#/components/schemas/DeltaRequest" />


### Available Operations

* [getDelta](#getdelta) - Fetch an existing Delta
* [getOrgsOrgIdAppsAppIdDeltas](#getorgsorgidappsappiddeltas) - List Deltas in an Application
* [patchOrgsOrgIdAppsAppIdDeltasDeltaId](#patchorgsorgidappsappiddeltasdeltaid) - Update an existing Delta
* [postOrgsOrgIdAppsAppIdDeltas](#postorgsorgidappsappiddeltas) - Create a new Delta
* [putDelta](#putdelta) - Update an existing Delta
* [putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchived](#putorgsorgidappsappiddeltasdeltaidmetadataarchived) - Mark a Delta as "archived"
* [putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvId](#putorgsorgidappsappiddeltasdeltaidmetadataenvid) - Change the Environment of a Delta
* [putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataName](#putorgsorgidappsappiddeltasdeltaidmetadataname) - Change the name of a Delta

## getDelta

Fetch an existing Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetDeltaResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.getDelta({
  appId: "praesentium",
  deltaId: "rem",
  orgId: "voluptates",
}).then((res: GetDeltaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetDeltaRequest](../../models/operations/getdeltarequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GetDeltaResponse](../../models/operations/getdeltaresponse.md)>**


## getOrgsOrgIdAppsAppIdDeltas

List Deltas in an Application

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdDeltasResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.getOrgsOrgIdAppsAppIdDeltas({
  appId: "quasi",
  archived: false,
  env: "repudiandae",
  orgId: "sint",
}).then((res: GetOrgsOrgIdAppsAppIdDeltasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetOrgsOrgIdAppsAppIdDeltasRequest](../../models/operations/getorgsorgidappsappiddeltasrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetOrgsOrgIdAppsAppIdDeltasResponse](../../models/operations/getorgsorgidappsappiddeltasresponse.md)>**


## patchOrgsOrgIdAppsAppIdDeltasDeltaId

Update an existing Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PatchOrgsOrgIdAppsAppIdDeltasDeltaIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.patchOrgsOrgIdAppsAppIdDeltasDeltaId({
  requestBody: [
    {
      id: "e450ad2a-bd44-4269-802d-502a94bb4f63",
      metadata: {
        archived: false,
        contributers: [
          "sint",
          "aliquid",
          "provident",
          "necessitatibus",
        ],
        createdAt: new Date("2020-06-22T09:37:23.523Z"),
        createdBy: "sint",
        envId: "officia",
        lastModifiedAt: new Date("2020-06-22T09:37:23.523Z"),
        name: "Raquel Wilderman",
        shared: false,
      },
      modules: {
        add: {
          "illum": {
            "rerum": {
              kind: "dicta",
              message: "magnam",
              pods: [
                {
                  containerStatuses: [
                    {
                      "aliquid": "laborum",
                      "accusamus": "non",
                    },
                    {
                      "enim": "accusamus",
                      "delectus": "quidem",
                      "provident": "nam",
                    },
                    {
                      "blanditiis": "deleniti",
                      "sapiente": "amet",
                      "deserunt": "nisi",
                    },
                    {
                      "natus": "omnis",
                      "molestiae": "perferendis",
                    },
                  ],
                  phase: "nihil",
                  podName: "magnam",
                  revision: 716075,
                  status: "id",
                },
                {
                  containerStatuses: [
                    {
                      "suscipit": "natus",
                      "nobis": "eum",
                    },
                    {
                      "aspernatur": "architecto",
                      "magnam": "et",
                      "excepturi": "ullam",
                      "provident": "quos",
                    },
                  ],
                  phase: "sint",
                  podName: "accusantium",
                  revision: 653201,
                  status: "reiciendis",
                },
                {
                  containerStatuses: [
                    {
                      "eum": "dolor",
                      "necessitatibus": "odit",
                    },
                    {
                      "quasi": "iure",
                      "doloribus": "debitis",
                    },
                    {
                      "maxime": "deleniti",
                      "facilis": "in",
                    },
                  ],
                  phase: "architecto",
                  podName: "architecto",
                  revision: 919483,
                  status: "ullam",
                },
                {
                  containerStatuses: [
                    {
                      "repellat": "quibusdam",
                      "sed": "saepe",
                    },
                    {
                      "accusantium": "consequuntur",
                      "praesentium": "natus",
                      "magni": "sunt",
                      "quo": "illum",
                    },
                    {
                      "maxime": "ea",
                      "excepturi": "odit",
                      "ea": "accusantium",
                      "ab": "maiores",
                    },
                  ],
                  phase: "quidem",
                  podName: "ipsam",
                  revision: 453543,
                  status: "autem",
                },
              ],
              replicas: 722056,
              revision: 50588,
              status: "pariatur",
            },
            "nemo": {
              kind: "voluptatibus",
              message: "perferendis",
              pods: [
                {
                  containerStatuses: [
                    {
                      "cumque": "corporis",
                    },
                  ],
                  phase: "hic",
                  podName: "libero",
                  revision: 749999,
                  status: "dolores",
                },
                {
                  containerStatuses: [
                    {
                      "dignissimos": "eaque",
                      "quis": "nesciunt",
                      "eos": "perferendis",
                    },
                    {
                      "minus": "quam",
                    },
                  ],
                  phase: "dolor",
                  podName: "vero",
                  revision: 345352,
                  status: "hic",
                },
                {
                  containerStatuses: [
                    {
                      "facilis": "perspiciatis",
                      "voluptatem": "porro",
                      "consequuntur": "blanditiis",
                    },
                    {
                      "eaque": "occaecati",
                      "rerum": "adipisci",
                      "asperiores": "earum",
                    },
                    {
                      "iste": "dolorum",
                      "deleniti": "pariatur",
                    },
                    {
                      "nobis": "libero",
                      "delectus": "quaerat",
                      "quos": "aliquid",
                    },
                  ],
                  phase: "dolorem",
                  podName: "dolorem",
                  revision: 222443,
                  status: "qui",
                },
                {
                  containerStatuses: [
                    {
                      "excepturi": "cum",
                      "voluptate": "dignissimos",
                      "reiciendis": "amet",
                      "dolorum": "numquam",
                    },
                  ],
                  phase: "veritatis",
                  podName: "ipsa",
                  revision: 56418,
                  status: "iure",
                },
              ],
              replicas: 487838,
              revision: 311796,
              status: "accusamus",
            },
            "quidem": {
              kind: "voluptatibus",
              message: "voluptas",
              pods: [
                {
                  containerStatuses: [
                    {
                      "sit": "fugiat",
                      "ab": "soluta",
                      "dolorum": "iusto",
                    },
                  ],
                  phase: "voluptate",
                  podName: "dolorum",
                  revision: 536579,
                  status: "omnis",
                },
                {
                  containerStatuses: [
                    {
                      "asperiores": "nihil",
                      "ipsum": "voluptate",
                      "id": "saepe",
                    },
                    {
                      "aspernatur": "perferendis",
                      "amet": "optio",
                    },
                    {
                      "ad": "saepe",
                      "suscipit": "deserunt",
                      "provident": "minima",
                      "repellendus": "totam",
                    },
                    {
                      "alias": "at",
                      "quaerat": "tempora",
                      "vel": "quod",
                    },
                  ],
                  phase: "officiis",
                  podName: "qui",
                  revision: 679880,
                  status: "a",
                },
                {
                  containerStatuses: [
                    {
                      "iusto": "ipsum",
                      "quisquam": "tenetur",
                      "amet": "tempore",
                    },
                    {
                      "numquam": "enim",
                      "dolorem": "sapiente",
                      "totam": "nihil",
                      "sit": "expedita",
                    },
                  ],
                  phase: "neque",
                  podName: "sed",
                  revision: 424685,
                  status: "libero",
                },
              ],
              replicas: 374170,
              revision: 646265,
              status: "quam",
            },
            "ipsum": {
              kind: "incidunt",
              message: "qui",
              pods: [
                {
                  containerStatuses: [
                    {
                      "soluta": "dicta",
                      "laborum": "totam",
                      "incidunt": "aspernatur",
                      "dolores": "distinctio",
                    },
                    {
                      "aliquid": "quam",
                      "molestias": "temporibus",
                      "qui": "neque",
                    },
                    {
                      "magni": "odio",
                    },
                    {
                      "ullam": "nam",
                    },
                  ],
                  phase: "hic",
                  podName: "voluptatem",
                  revision: 765326,
                  status: "soluta",
                },
                {
                  containerStatuses: [
                    {
                      "saepe": "ipsum",
                    },
                    {
                      "nobis": "quos",
                    },
                    {
                      "cupiditate": "aperiam",
                      "delectus": "dolorem",
                      "dolore": "labore",
                    },
                  ],
                  phase: "adipisci",
                  podName: "dolorum",
                  revision: 100294,
                  status: "quae",
                },
                {
                  containerStatuses: [
                    {
                      "itaque": "consequatur",
                      "est": "repellendus",
                      "porro": "doloribus",
                    },
                  ],
                  phase: "ut",
                  podName: "facilis",
                  revision: 586410,
                  status: "qui",
                },
              ],
              replicas: 63955,
              revision: 512393,
              status: "odio",
            },
          },
          "occaecati": {
            "quisquam": {
              kind: "vero",
              message: "omnis",
              pods: [
                {
                  containerStatuses: [
                    {
                      "voluptate": "consectetur",
                      "vero": "tenetur",
                      "dignissimos": "hic",
                      "distinctio": "quod",
                    },
                  ],
                  phase: "odio",
                  podName: "similique",
                  revision: 708548,
                  status: "vero",
                },
                {
                  containerStatuses: [
                    {
                      "quibusdam": "illum",
                      "sequi": "natus",
                    },
                    {
                      "aut": "voluptatibus",
                      "exercitationem": "nulla",
                      "fugit": "porro",
                      "maiores": "doloribus",
                    },
                  ],
                  phase: "iusto",
                  podName: "eligendi",
                  revision: 497391,
                  status: "alias",
                },
              ],
              replicas: 639473,
              revision: 269479,
              status: "ipsam",
            },
            "ea": {
              kind: "aspernatur",
              message: "vel",
              pods: [
                {
                  containerStatuses: [
                    {
                      "ex": "laudantium",
                    },
                    {
                      "dolor": "maiores",
                    },
                  ],
                  phase: "quasi",
                  podName: "ex",
                  revision: 862192,
                  status: "excepturi",
                },
                {
                  containerStatuses: [
                    {
                      "sapiente": "quisquam",
                      "saepe": "ea",
                    },
                    {
                      "corporis": "veniam",
                      "aliquid": "inventore",
                      "magnam": "ea",
                      "quo": "consectetur",
                    },
                    {
                      "aspernatur": "minima",
                      "eaque": "a",
                      "libero": "aut",
                      "aut": "deleniti",
                    },
                    {
                      "aliquam": "fugit",
                      "accusamus": "inventore",
                      "non": "et",
                      "dolorum": "laborum",
                    },
                  ],
                  phase: "placeat",
                  podName: "velit",
                  revision: 432148,
                  status: "autem",
                },
                {
                  containerStatuses: [
                    {
                      "assumenda": "nulla",
                      "voluptas": "libero",
                      "quasi": "tempora",
                    },
                    {
                      "explicabo": "provident",
                      "ipsa": "molestiae",
                    },
                    {
                      "odio": "eius",
                      "esse": "esse",
                    },
                    {
                      "fuga": "reprehenderit",
                      "quidem": "fugiat",
                      "ut": "eum",
                    },
                  ],
                  phase: "suscipit",
                  podName: "assumenda",
                  revision: 181151,
                  status: "praesentium",
                },
                {
                  containerStatuses: [
                    {
                      "ipsa": "id",
                    },
                    {
                      "neque": "quo",
                      "illum": "quo",
                      "fuga": "eius",
                    },
                    {
                      "voluptas": "ab",
                    },
                    {
                      "consequatur": "tempora",
                      "debitis": "ipsam",
                      "aspernatur": "sequi",
                    },
                  ],
                  phase: "quo",
                  podName: "esse",
                  revision: 925164,
                  status: "aperiam",
                },
              ],
              replicas: 715179,
              revision: 799796,
              status: "dignissimos",
            },
            "inventore": {
              kind: "nihil",
              message: "totam",
              pods: [
                {
                  containerStatuses: [
                    {
                      "occaecati": "commodi",
                      "sapiente": "dolores",
                    },
                    {
                      "molestiae": "accusantium",
                      "porro": "eum",
                      "quas": "praesentium",
                    },
                  ],
                  phase: "consequuntur",
                  podName: "deleniti",
                  revision: 143829,
                  status: "fuga",
                },
                {
                  containerStatuses: [
                    {
                      "atque": "explicabo",
                      "minima": "nisi",
                    },
                    {
                      "sapiente": "consequuntur",
                    },
                    {
                      "explicabo": "saepe",
                    },
                  ],
                  phase: "occaecati",
                  podName: "atque",
                  revision: 92260,
                  status: "esse",
                },
                {
                  containerStatuses: [
                    {
                      "veritatis": "esse",
                      "quod": "nam",
                      "vero": "aliquid",
                      "quasi": "saepe",
                    },
                    {
                      "harum": "molestiae",
                      "rerum": "occaecati",
                    },
                    {
                      "distinctio": "eligendi",
                      "sit": "culpa",
                    },
                    {
                      "adipisci": "cumque",
                      "consequuntur": "consequatur",
                      "minus": "quaerat",
                    },
                  ],
                  phase: "sapiente",
                  podName: "consectetur",
                  revision: 458139,
                  status: "blanditiis",
                },
                {
                  containerStatuses: [
                    {
                      "nulla": "quas",
                      "esse": "quasi",
                      "a": "error",
                      "sint": "pariatur",
                    },
                    {
                      "quia": "eveniet",
                      "asperiores": "facere",
                      "veritatis": "consequuntur",
                      "quasi": "similique",
                    },
                    {
                      "aliquid": "tenetur",
                      "quae": "earum",
                      "vel": "in",
                    },
                  ],
                  phase: "eius",
                  podName: "libero",
                  revision: 849039,
                  status: "soluta",
                },
              ],
              replicas: 33304,
              revision: 306986,
              status: "sapiente",
            },
            "dicta": {
              kind: "ullam",
              message: "reprehenderit",
              pods: [
                {
                  containerStatuses: [
                    {
                      "voluptatum": "qui",
                    },
                    {
                      "ex": "deleniti",
                      "itaque": "dolorum",
                      "architecto": "omnis",
                      "tenetur": "quasi",
                    },
                  ],
                  phase: "at",
                  podName: "et",
                  revision: 454162,
                  status: "ipsa",
                },
                {
                  containerStatuses: [
                    {
                      "consectetur": "adipisci",
                    },
                    {
                      "temporibus": "accusantium",
                      "rem": "aut",
                      "laudantium": "eum",
                    },
                  ],
                  phase: "mollitia",
                  podName: "ab",
                  revision: 544591,
                  status: "non",
                },
              ],
              replicas: 32465,
              revision: 221161,
              status: "occaecati",
            },
          },
        },
        remove: [
          "impedit",
          "explicabo",
        ],
        update: {
          "aut": [
            {
              from: "dicta",
              op: "maiores",
              path: "natus",
              value: "velit",
            },
            {
              from: "voluptatibus",
              op: "voluptas",
              path: "asperiores",
              value: "aperiam",
            },
          ],
          "ea": [
            {
              from: "consequuntur",
              op: "repellendus",
              path: "officia",
              value: "maxime",
            },
            {
              from: "dignissimos",
              op: "officia",
              path: "asperiores",
              value: "nemo",
            },
          ],
        },
      },
      shared: [
        {
          from: "quaerat",
          op: "porro",
          path: "quod",
          value: "labore",
        },
      ],
    },
  ],
  appId: "ab",
  deltaId: "adipisci",
  orgId: "fuga",
}).then((res: PatchOrgsOrgIdAppsAppIdDeltasDeltaIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PatchOrgsOrgIdAppsAppIdDeltasDeltaIdRequest](../../models/operations/patchorgsorgidappsappiddeltasdeltaidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PatchOrgsOrgIdAppsAppIdDeltasDeltaIdResponse](../../models/operations/patchorgsorgidappsappiddeltasdeltaidresponse.md)>**


## postOrgsOrgIdAppsAppIdDeltas

Create a new Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdDeltasResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.postOrgsOrgIdAppsAppIdDeltas({
  deltaRequest: {
    id: "a63aae8d-6786-44db-b675-fd5e60b375ed",
    metadata: {
      archived: false,
      contributers: [
        "doloribus",
        "suscipit",
      ],
      createdAt: new Date("2020-06-22T09:37:23.523Z"),
      createdBy: "reiciendis",
      envId: "quidem",
      lastModifiedAt: new Date("2020-06-22T09:37:23.523Z"),
      name: "Dr. Terence Gulgowski",
      shared: false,
    },
    modules: {
      add: {
        "amet": {
          "dignissimos": {
            kind: "a",
            message: "debitis",
            pods: [
              {
                containerStatuses: [
                  {
                    "laboriosam": "ipsa",
                    "voluptates": "libero",
                    "vitae": "accusamus",
                  },
                  {
                    "tempora": "aspernatur",
                    "voluptas": "voluptas",
                    "voluptas": "minima",
                  },
                ],
                phase: "nobis",
                podName: "dolorum",
                revision: 237807,
                status: "minus",
              },
            ],
            replicas: 171853,
            revision: 503934,
            status: "in",
          },
        },
      },
      remove: [
        "aliquam",
        "officiis",
      ],
      update: {
        "ullam": [
          {
            from: "cum",
            op: "blanditiis",
            path: "quas",
            value: "hic",
          },
        ],
        "nesciunt": [
          {
            from: "corrupti",
            op: "pariatur",
            path: "totam",
            value: "hic",
          },
          {
            from: "exercitationem",
            op: "nobis",
            path: "sit",
            value: "rerum",
          },
          {
            from: "sed",
            op: "reiciendis",
            path: "explicabo",
            value: "asperiores",
          },
        ],
        "facilis": [
          {
            from: "expedita",
            op: "ab",
            path: "iste",
            value: "dolore",
          },
          {
            from: "laborum",
            op: "sed",
            path: "in",
            value: "commodi",
          },
        ],
        "quidem": [
          {
            from: "voluptas",
            op: "unde",
            path: "architecto",
            value: "suscipit",
          },
        ],
      },
    },
    shared: [
      {
        from: "debitis",
        op: "illo",
        path: "reiciendis",
        value: "perferendis",
      },
      {
        from: "corrupti",
        op: "maiores",
        path: "incidunt",
        value: "sed",
      },
      {
        from: "provident",
        op: "eius",
        path: "necessitatibus",
        value: "ipsum",
      },
      {
        from: "ea",
        op: "occaecati",
        path: "quos",
        value: "voluptatibus",
      },
    ],
  },
  appId: "tempora",
  orgId: "tempora",
}).then((res: PostOrgsOrgIdAppsAppIdDeltasResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostOrgsOrgIdAppsAppIdDeltasRequest](../../models/operations/postorgsorgidappsappiddeltasrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostOrgsOrgIdAppsAppIdDeltasResponse](../../models/operations/postorgsorgidappsappiddeltasresponse.md)>**


## putDelta

Update an existing Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutDeltaResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.putDelta({
  deltaRequest: {
    id: "7f603e8b-445e-480c-a55e-fd20e457e185",
    metadata: {
      archived: false,
      contributers: [
        "cum",
        "laboriosam",
        "dolorum",
      ],
      createdAt: new Date("2020-06-22T09:37:23.523Z"),
      createdBy: "voluptatum",
      envId: "error",
      lastModifiedAt: new Date("2020-06-22T09:37:23.523Z"),
      name: "Rudolph Trantow",
      shared: false,
    },
    modules: {
      add: {
        "officia": {
          "corrupti": {
            kind: "accusamus",
            message: "tempora",
            pods: [
              {
                containerStatuses: [
                  {
                    "fugiat": "voluptatem",
                    "culpa": "expedita",
                  },
                ],
                phase: "magnam",
                podName: "consequatur",
                revision: 460220,
                status: "ipsam",
              },
              {
                containerStatuses: [
                  {
                    "quas": "repudiandae",
                    "corporis": "et",
                    "blanditiis": "ex",
                  },
                ],
                phase: "sed",
                podName: "sit",
                revision: 425508,
                status: "nostrum",
              },
              {
                containerStatuses: [
                  {
                    "consequatur": "incidunt",
                    "reiciendis": "dolorem",
                    "harum": "dicta",
                  },
                  {
                    "occaecati": "labore",
                  },
                  {
                    "atque": "laborum",
                    "nam": "tenetur",
                    "laboriosam": "alias",
                  },
                  {
                    "deserunt": "voluptate",
                  },
                ],
                phase: "unde",
                podName: "reiciendis",
                revision: 588740,
                status: "repellendus",
              },
            ],
            replicas: 962771,
            revision: 914791,
            status: "perferendis",
          },
          "est": {
            kind: "quidem",
            message: "reprehenderit",
            pods: [
              {
                containerStatuses: [
                  {
                    "mollitia": "veniam",
                    "voluptatem": "quisquam",
                    "repudiandae": "quasi",
                  },
                  {
                    "reprehenderit": "asperiores",
                    "totam": "suscipit",
                    "quidem": "maxime",
                  },
                  {
                    "esse": "amet",
                  },
                ],
                phase: "assumenda",
                podName: "ea",
                revision: 539118,
                status: "error",
              },
              {
                containerStatuses: [
                  {
                    "accusamus": "natus",
                    "minima": "aspernatur",
                    "ex": "maiores",
                    "corrupti": "at",
                  },
                  {
                    "blanditiis": "suscipit",
                    "repudiandae": "atque",
                    "atque": "sunt",
                  },
                  {
                    "dolorum": "repellendus",
                    "labore": "reiciendis",
                    "doloremque": "repudiandae",
                    "dicta": "accusantium",
                  },
                  {
                    "dolores": "enim",
                  },
                ],
                phase: "laboriosam",
                podName: "velit",
                revision: 952143,
                status: "molestias",
              },
              {
                containerStatuses: [
                  {
                    "consequuntur": "occaecati",
                    "officiis": "perspiciatis",
                    "in": "adipisci",
                    "eveniet": "occaecati",
                  },
                  {
                    "fugit": "id",
                  },
                ],
                phase: "quis",
                podName: "reprehenderit",
                revision: 625528,
                status: "illo",
              },
              {
                containerStatuses: [
                  {
                    "eveniet": "non",
                    "vero": "doloremque",
                    "iure": "ipsa",
                  },
                  {
                    "quae": "molestiae",
                    "eveniet": "qui",
                    "cum": "iure",
                  },
                ],
                phase: "necessitatibus",
                podName: "ratione",
                revision: 672582,
                status: "distinctio",
              },
            ],
            replicas: 528940,
            revision: 523006,
            status: "aliquam",
          },
          "ad": {
            kind: "repellat",
            message: "alias",
            pods: [
              {
                containerStatuses: [
                  {
                    "mollitia": "voluptas",
                    "alias": "maiores",
                  },
                  {
                    "dolores": "id",
                    "minima": "dolore",
                    "dolorum": "nesciunt",
                    "quae": "recusandae",
                  },
                  {
                    "quaerat": "molestiae",
                    "ex": "ut",
                    "culpa": "adipisci",
                  },
                ],
                phase: "debitis",
                podName: "laudantium",
                revision: 432606,
                status: "nemo",
              },
              {
                containerStatuses: [
                  {
                    "provident": "quis",
                    "eum": "reiciendis",
                  },
                  {
                    "aspernatur": "ullam",
                    "quasi": "animi",
                    "nostrum": "mollitia",
                  },
                  {
                    "possimus": "animi",
                    "ex": "aliquid",
                    "accusantium": "repellat",
                  },
                  {
                    "ullam": "in",
                    "nam": "earum",
                    "officia": "laborum",
                    "placeat": "modi",
                  },
                ],
                phase: "voluptatibus",
                podName: "molestias",
                revision: 889794,
                status: "sapiente",
              },
            ],
            replicas: 764562,
            revision: 113486,
            status: "rerum",
          },
        },
        "tempora": {
          "inventore": {
            kind: "fugit",
            message: "cumque",
            pods: [
              {
                containerStatuses: [
                  {
                    "aspernatur": "eum",
                  },
                ],
                phase: "eius",
                podName: "rem",
                revision: 871083,
                status: "impedit",
              },
            ],
            replicas: 179410,
            revision: 958741,
            status: "eum",
          },
          "dicta": {
            kind: "minima",
            message: "beatae",
            pods: [
              {
                containerStatuses: [
                  {
                    "soluta": "hic",
                    "illum": "eaque",
                    "earum": "perspiciatis",
                    "maiores": "debitis",
                  },
                  {
                    "porro": "suscipit",
                    "dolorem": "fugit",
                  },
                  {
                    "fuga": "ratione",
                    "animi": "necessitatibus",
                    "nulla": "consequatur",
                    "quasi": "et",
                  },
                ],
                phase: "ducimus",
                podName: "natus",
                revision: 581082,
                status: "suscipit",
              },
              {
                containerStatuses: [
                  {
                    "magni": "doloribus",
                  },
                ],
                phase: "nulla",
                podName: "necessitatibus",
                revision: 58534,
                status: "tempora",
              },
              {
                containerStatuses: [
                  {
                    "dicta": "iusto",
                    "esse": "praesentium",
                  },
                  {
                    "reiciendis": "vel",
                    "architecto": "fugiat",
                    "doloremque": "dicta",
                    "odio": "tempora",
                  },
                ],
                phase: "esse",
                podName: "ex",
                revision: 235263,
                status: "aliquid",
              },
            ],
            replicas: 58870,
            revision: 671384,
            status: "sunt",
          },
        },
      },
      remove: [
        "fugiat",
        "expedita",
      ],
      update: {
        "officia": [
          {
            from: "aliquid",
            op: "perferendis",
            path: "eum",
            value: "voluptas",
          },
          {
            from: "iste",
            op: "id",
            path: "ab",
            value: "error",
          },
        ],
        "possimus": [
          {
            from: "mollitia",
            op: "laborum",
            path: "libero",
            value: "ad",
          },
          {
            from: "deleniti",
            op: "enim",
            path: "vitae",
            value: "repellendus",
          },
          {
            from: "ex",
            op: "quo",
            path: "ex",
            value: "ut",
          },
          {
            from: "ad",
            op: "expedita",
            path: "voluptatem",
            value: "molestias",
          },
        ],
      },
    },
    shared: [
      {
        from: "aliquid",
        op: "beatae",
        path: "voluptatum",
        value: "omnis",
      },
      {
        from: "veritatis",
        op: "rerum",
        path: "est",
        value: "culpa",
      },
      {
        from: "voluptatem",
        op: "sapiente",
        path: "officiis",
        value: "architecto",
      },
    ],
  },
  appId: "fuga",
  deltaId: "pariatur",
  orgId: "debitis",
}).then((res: PutDeltaResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.PutDeltaRequest](../../models/operations/putdeltarequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.PutDeltaResponse](../../models/operations/putdeltaresponse.md)>**


## putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchived

Archived Deltas are still accessible but can no longer be updated.

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchivedResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchived({
  requestBody: false,
  appId: "voluptatem",
  deltaId: "alias",
  orgId: "deleniti",
}).then((res: PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchivedResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchivedRequest](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadataarchivedrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataArchivedResponse](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadataarchivedresponse.md)>**


## putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvId

Change the Environment of a Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvId({
  requestBody: "earum",
  appId: "ex",
  deltaId: "sapiente",
  orgId: "rem",
}).then((res: PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdRequest](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadataenvidrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataEnvIdResponse](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadataenvidresponse.md)>**


## putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataName

Change the name of a Delta

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataNameResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.delta.putOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataName({
  requestBody: "minus",
  appId: "nemo",
  deltaId: "asperiores",
  orgId: "ratione",
}).then((res: PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataNameRequest](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadatanamerequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.PutOrgsOrgIdAppsAppIdDeltasDeltaIdMetadataNameResponse](../../models/operations/putorgsorgidappsappiddeltasdeltaidmetadatanameresponse.md)>**

