# set

## Overview

A Deployment Set (or just "Set") defines all of the non-Environment specific configuration for Modules and External Resources. Each of these Modules or External Resources has a unique name.

Deployment Sets are immutable and their ID is a cryptographic hash of their content. This means that a Deployment Set can be globally identified based on its ID. It also means that referencing a Deployment Set by ID will always return the same Deployment Set.

Deployment Sets cannot be created directly, instead they are created by applying a Deployment Delta to an existing Deployment Set.

**Basic Structure**

```
 {
   "id": <ID of the Deployment Set>,
   "modules" : {
     <ID of Module> : {
       "profile": <Defines how the optional "spec" property is interpreted>
       "spec": {
         <Properties that depend on the "profile" property.>
       }
       "externals": {
         <External Resource Name> : {
           "type": <Resource Type>,
           "params": {
             <Properties which parametrize the resource depending on the Resource Type.>
           }
         }
       }
     }
   }
 }
```

For details about how the Humanitec provided profiles work, see (Deployment Set Profiles)[].
<SchemaDefinition schemaRef="#/components/schemas/SetRequest" />


### Available Operations

* [getSets](#getsets) - Get all Deployment Sets
* [getOrgsOrgIdAppsAppIdSetsSetId](#getorgsorgidappsappidsetssetid) - Get a Deployment Set
* [getOrgsOrgIdAppsAppIdSetsSetIdDiffSourceSetId](#getorgsorgidappsappidsetssetiddiffsourcesetid) - Get the difference between 2 Deployment Sets
* [postOrgsOrgIdAppsAppIdSetsSetId](#postorgsorgidappsappidsetssetid) - Apply a Deployment Delta to a Deployment Set

## getSets

Get all Deployment Sets

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetSetsResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.set.getSets({
  appId: "beatae",
  orgId: "aliquid",
}).then((res: GetSetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdSetsSetId

Get a Deployment Set

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdSetsSetIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.set.getOrgsOrgIdAppsAppIdSetsSetId({
  appId: "modi",
  diff: "optio",
  orgId: "voluptatibus",
  setId: "molestias",
}).then((res: GetOrgsOrgIdAppsAppIdSetsSetIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getOrgsOrgIdAppsAppIdSetsSetIdDiffSourceSetId

Get the difference between 2 Deployment Sets

### Example Usage

```typescript
import { Test1 } from "test-1";
import { GetOrgsOrgIdAppsAppIdSetsSetIdDiffSourceSetIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.set.getOrgsOrgIdAppsAppIdSetsSetIdDiffSourceSetId({
  appId: "officia",
  orgId: "libero",
  setId: "totam",
  sourceSetId: "sequi",
}).then((res: GetOrgsOrgIdAppsAppIdSetsSetIdDiffSourceSetIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## postOrgsOrgIdAppsAppIdSetsSetId

Apply a Deployment Delta to a Deployment Set

### Example Usage

```typescript
import { Test1 } from "test-1";
import { PostOrgsOrgIdAppsAppIdSetsSetIdResponse } from "test-1/dist/sdk/models/operations";

const sdk = new Test1();

sdk.set.postOrgsOrgIdAppsAppIdSetsSetId({
  deltaRequest: {
    id: "66c723ff-da9e-406b-ae48-25c1fc0e115c",
    metadata: {
      archived: false,
      contributers: [
        "perferendis",
        "facilis",
        "reiciendis",
      ],
      createdAt: new Date("2020-06-22T09:37:23.523Z"),
      createdBy: "a",
      envId: "iste",
      lastModifiedAt: new Date("2020-06-22T09:37:23.523Z"),
      name: "Olga Hermiston",
      shared: false,
    },
    modules: {
      add: {
        "maxime": {
          "consequuntur": {
            kind: "assumenda",
            message: "vero",
            pods: [
              {
                containerStatuses: [
                  {
                    "accusamus": "totam",
                    "reiciendis": "ab",
                    "sint": "nihil",
                    "esse": "iure",
                  },
                  {
                    "nesciunt": "debitis",
                    "vel": "neque",
                  },
                  {
                    "voluptas": "consequuntur",
                    "officia": "reprehenderit",
                  },
                  {
                    "eius": "ipsa",
                    "rem": "maiores",
                    "accusantium": "veniam",
                  },
                ],
                phase: "saepe",
                podName: "neque",
                revision: 816365,
                status: "aliquam",
              },
              {
                containerStatuses: [
                  {
                    "fugiat": "est",
                    "delectus": "velit",
                    "vitae": "nesciunt",
                    "similique": "illo",
                  },
                  {
                    "nemo": "doloribus",
                    "possimus": "unde",
                    "incidunt": "explicabo",
                    "ipsam": "cupiditate",
                  },
                  {
                    "alias": "quidem",
                    "nesciunt": "commodi",
                    "sapiente": "consequuntur",
                    "veniam": "debitis",
                  },
                ],
                phase: "officia",
                podName: "sint",
                revision: 280859,
                status: "numquam",
              },
              {
                containerStatuses: [
                  {
                    "libero": "in",
                  },
                  {
                    "ex": "minus",
                    "ab": "beatae",
                  },
                  {
                    "nisi": "quisquam",
                    "dolor": "ducimus",
                    "fuga": "minima",
                    "architecto": "qui",
                  },
                  {
                    "magni": "incidunt",
                    "adipisci": "praesentium",
                  },
                ],
                phase: "dolor",
                podName: "exercitationem",
                revision: 709701,
                status: "facilis",
              },
              {
                containerStatuses: [
                  {
                    "nemo": "culpa",
                  },
                  {
                    "amet": "deserunt",
                  },
                  {
                    "veniam": "quod",
                    "itaque": "a",
                  },
                  {
                    "enim": "doloribus",
                    "assumenda": "officiis",
                    "architecto": "alias",
                    "culpa": "ipsa",
                  },
                ],
                phase: "nobis",
                podName: "necessitatibus",
                revision: 155978,
                status: "dicta",
              },
            ],
            replicas: 426002,
            revision: 595584,
            status: "debitis",
          },
          "ullam": {
            kind: "architecto",
            message: "accusantium",
            pods: [
              {
                containerStatuses: [
                  {
                    "cumque": "iure",
                    "quibusdam": "quod",
                    "nemo": "recusandae",
                  },
                ],
                phase: "velit",
                podName: "magnam",
                revision: 493591,
                status: "laboriosam",
              },
            ],
            replicas: 152283,
            revision: 486272,
            status: "natus",
          },
        },
        "provident": {
          "doloribus": {
            kind: "facilis",
            message: "quidem",
            pods: [
              {
                containerStatuses: [
                  {
                    "modi": "perspiciatis",
                    "hic": "cum",
                    "aspernatur": "libero",
                  },
                  {
                    "incidunt": "recusandae",
                    "quod": "id",
                    "saepe": "autem",
                  },
                ],
                phase: "quo",
                podName: "nesciunt",
                revision: 849383,
                status: "nemo",
              },
              {
                containerStatuses: [
                  {
                    "non": "mollitia",
                    "assumenda": "recusandae",
                    "distinctio": "pariatur",
                  },
                  {
                    "facere": "laborum",
                    "eveniet": "laborum",
                  },
                  {
                    "maxime": "ipsam",
                    "alias": "suscipit",
                  },
                  {
                    "molestias": "laborum",
                    "est": "occaecati",
                    "labore": "quo",
                  },
                ],
                phase: "perferendis",
                podName: "fugit",
                revision: 399222,
                status: "magnam",
              },
              {
                containerStatuses: [
                  {
                    "hic": "nostrum",
                    "officiis": "unde",
                    "nulla": "error",
                    "mollitia": "magnam",
                  },
                  {
                    "esse": "corrupti",
                    "fuga": "facere",
                  },
                ],
                phase: "impedit",
                podName: "quasi",
                revision: 647218,
                status: "quod",
              },
              {
                containerStatuses: [
                  {
                    "voluptatem": "facere",
                  },
                  {
                    "maxime": "consequatur",
                    "eaque": "architecto",
                    "similique": "porro",
                    "blanditiis": "quae",
                  },
                ],
                phase: "magni",
                podName: "officiis",
                revision: 148379,
                status: "necessitatibus",
              },
            ],
            replicas: 773259,
            revision: 55981,
            status: "excepturi",
          },
          "a": {
            kind: "maiores",
            message: "laudantium",
            pods: [
              {
                containerStatuses: [
                  {
                    "rem": "dicta",
                    "suscipit": "earum",
                    "doloribus": "velit",
                    "eius": "esse",
                  },
                ],
                phase: "in",
                podName: "eligendi",
                revision: 94697,
                status: "neque",
              },
              {
                containerStatuses: [
                  {
                    "accusantium": "qui",
                    "impedit": "beatae",
                    "incidunt": "dicta",
                  },
                  {
                    "corporis": "rerum",
                  },
                  {
                    "error": "vel",
                  },
                  {
                    "id": "laboriosam",
                  },
                ],
                phase: "ex",
                podName: "quas",
                revision: 85794,
                status: "ullam",
              },
              {
                containerStatuses: [
                  {
                    "incidunt": "quam",
                    "magni": "deserunt",
                    "delectus": "omnis",
                  },
                ],
                phase: "sed",
                podName: "nesciunt",
                revision: 805463,
                status: "quis",
              },
              {
                containerStatuses: [
                  {
                    "excepturi": "maiores",
                    "laudantium": "velit",
                  },
                  {
                    "amet": "nemo",
                    "ipsa": "quisquam",
                    "tenetur": "quas",
                    "molestiae": "aliquid",
                  },
                  {
                    "a": "nobis",
                    "perspiciatis": "accusantium",
                    "dicta": "minus",
                    "commodi": "eveniet",
                  },
                ],
                phase: "porro",
                podName: "tempore",
                revision: 693747,
                status: "modi",
              },
            ],
            replicas: 916341,
            revision: 145435,
            status: "eius",
          },
          "sequi": {
            kind: "eligendi",
            message: "asperiores",
            pods: [
              {
                containerStatuses: [
                  {
                    "repellat": "a",
                    "animi": "maiores",
                    "itaque": "nulla",
                  },
                  {
                    "corporis": "velit",
                    "officiis": "enim",
                    "officia": "saepe",
                  },
                  {
                    "repudiandae": "accusantium",
                    "officia": "impedit",
                  },
                ],
                phase: "quasi",
                podName: "blanditiis",
                revision: 260911,
                status: "quisquam",
              },
              {
                containerStatuses: [
                  {
                    "natus": "minus",
                    "quia": "magnam",
                    "reprehenderit": "quod",
                  },
                ],
                phase: "quos",
                podName: "corrupti",
                revision: 227870,
                status: "molestiae",
              },
            ],
            replicas: 227156,
            revision: 675126,
            status: "modi",
          },
        },
        "perferendis": {
          "architecto": {
            kind: "molestias",
            message: "dolore",
            pods: [
              {
                containerStatuses: [
                  {
                    "odit": "earum",
                  },
                  {
                    "ipsam": "eaque",
                    "exercitationem": "veniam",
                  },
                  {
                    "ad": "nisi",
                    "tenetur": "quis",
                  },
                  {
                    "nemo": "suscipit",
                    "pariatur": "sit",
                    "quidem": "repellendus",
                    "perferendis": "id",
                  },
                ],
                phase: "sapiente",
                podName: "sed",
                revision: 823572,
                status: "repellat",
              },
            ],
            replicas: 921060,
            revision: 100233,
            status: "adipisci",
          },
          "pariatur": {
            kind: "harum",
            message: "dolore",
            pods: [
              {
                containerStatuses: [
                  {
                    "minus": "soluta",
                  },
                  {
                    "velit": "earum",
                    "praesentium": "error",
                    "non": "quasi",
                  },
                ],
                phase: "mollitia",
                podName: "accusamus",
                revision: 687589,
                status: "cumque",
              },
              {
                containerStatuses: [
                  {
                    "corrupti": "eaque",
                    "deserunt": "aliquid",
                    "excepturi": "magni",
                  },
                ],
                phase: "tempora",
                podName: "possimus",
                revision: 220824,
                status: "rerum",
              },
              {
                containerStatuses: [
                  {
                    "optio": "delectus",
                    "minus": "quo",
                    "quos": "asperiores",
                    "voluptatum": "iste",
                  },
                ],
                phase: "corporis",
                podName: "accusantium",
                revision: 75850,
                status: "aut",
              },
              {
                containerStatuses: [
                  {
                    "at": "possimus",
                    "neque": "pariatur",
                  },
                  {
                    "sapiente": "mollitia",
                    "quae": "quos",
                  },
                  {
                    "non": "voluptates",
                  },
                  {
                    "aliquam": "quisquam",
                    "quas": "consequuntur",
                  },
                ],
                phase: "maiores",
                podName: "inventore",
                revision: 400448,
                status: "laudantium",
              },
            ],
            replicas: 665872,
            revision: 221329,
            status: "aliquid",
          },
          "consectetur": {
            kind: "cumque",
            message: "rem",
            pods: [
              {
                containerStatuses: [
                  {
                    "recusandae": "tempora",
                  },
                  {
                    "numquam": "sequi",
                    "voluptatum": "sit",
                    "rerum": "veritatis",
                  },
                ],
                phase: "tenetur",
                podName: "autem",
                revision: 694088,
                status: "totam",
              },
              {
                containerStatuses: [
                  {
                    "magni": "nihil",
                    "voluptas": "animi",
                    "commodi": "alias",
                  },
                  {
                    "aut": "dolore",
                    "maxime": "aliquam",
                    "iste": "ullam",
                  },
                  {
                    "placeat": "voluptas",
                    "occaecati": "unde",
                    "illo": "nihil",
                    "inventore": "libero",
                  },
                  {
                    "quasi": "cumque",
                    "dicta": "harum",
                  },
                ],
                phase: "facere",
                podName: "facilis",
                revision: 105372,
                status: "cumque",
              },
              {
                containerStatuses: [
                  {
                    "expedita": "corrupti",
                    "rem": "atque",
                  },
                  {
                    "cum": "pariatur",
                    "sapiente": "quo",
                    "incidunt": "quod",
                    "minus": "porro",
                  },
                  {
                    "excepturi": "occaecati",
                    "libero": "quo",
                    "esse": "hic",
                  },
                  {
                    "accusantium": "soluta",
                    "fugit": "pariatur",
                    "eligendi": "recusandae",
                    "veritatis": "aut",
                  },
                ],
                phase: "laudantium",
                podName: "iusto",
                revision: 219860,
                status: "voluptates",
              },
            ],
            replicas: 274295,
            revision: 169935,
            status: "rerum",
          },
          "doloremque": {
            kind: "voluptatem",
            message: "eum",
            pods: [
              {
                containerStatuses: [
                  {
                    "voluptatum": "blanditiis",
                    "nihil": "atque",
                  },
                  {
                    "deserunt": "atque",
                    "nostrum": "atque",
                    "architecto": "est",
                  },
                ],
                phase: "enim",
                podName: "rem",
                revision: 168142,
                status: "quae",
              },
              {
                containerStatuses: [
                  {
                    "enim": "labore",
                    "sapiente": "saepe",
                    "delectus": "officia",
                    "natus": "cumque",
                  },
                  {
                    "quaerat": "doloribus",
                    "quia": "officiis",
                    "mollitia": "cumque",
                  },
                  {
                    "enim": "eum",
                    "nemo": "illum",
                  },
                ],
                phase: "nesciunt",
                podName: "sit",
                revision: 487148,
                status: "minus",
              },
              {
                containerStatuses: [
                  {
                    "voluptates": "praesentium",
                    "dicta": "fugit",
                    "sit": "aliquid",
                    "necessitatibus": "sed",
                  },
                  {
                    "sunt": "nesciunt",
                    "delectus": "laborum",
                    "aliquam": "deserunt",
                  },
                  {
                    "sunt": "impedit",
                    "eius": "voluptatum",
                  },
                  {
                    "at": "dolorem",
                  },
                ],
                phase: "repellat",
                podName: "aspernatur",
                revision: 80284,
                status: "sequi",
              },
              {
                containerStatuses: [
                  {
                    "hic": "eaque",
                    "dolorem": "architecto",
                    "aperiam": "aspernatur",
                  },
                ],
                phase: "nulla",
                podName: "enim",
                revision: 73574,
                status: "magnam",
              },
            ],
            replicas: 961842,
            revision: 255064,
            status: "optio",
          },
        },
        "nobis": {
          "repellat": {
            kind: "quae",
            message: "deleniti",
            pods: [
              {
                containerStatuses: [
                  {
                    "aliquid": "sed",
                    "beatae": "similique",
                    "ea": "animi",
                  },
                  {
                    "tenetur": "dignissimos",
                    "esse": "animi",
                  },
                  {
                    "esse": "eveniet",
                    "earum": "velit",
                    "officiis": "eius",
                  },
                  {
                    "itaque": "dignissimos",
                    "ipsam": "explicabo",
                    "impedit": "aliquid",
                  },
                ],
                phase: "quis",
                podName: "facilis",
                revision: 218128,
                status: "ut",
              },
              {
                containerStatuses: [
                  {
                    "praesentium": "eveniet",
                  },
                  {
                    "expedita": "libero",
                  },
                ],
                phase: "iste",
                podName: "illo",
                revision: 792499,
                status: "quos",
              },
              {
                containerStatuses: [
                  {
                    "iusto": "enim",
                    "accusamus": "aperiam",
                    "voluptates": "laudantium",
                  },
                  {
                    "quae": "omnis",
                    "illum": "rem",
                  },
                  {
                    "deleniti": "modi",
                    "earum": "architecto",
                    "aliquam": "labore",
                    "maiores": "sequi",
                  },
                  {
                    "consequatur": "esse",
                    "debitis": "facere",
                    "quisquam": "cumque",
                    "aliquam": "dolorum",
                  },
                ],
                phase: "deserunt",
                podName: "ad",
                revision: 970411,
                status: "sequi",
              },
            ],
            replicas: 785555,
            revision: 671528,
            status: "nobis",
          },
          "quibusdam": {
            kind: "omnis",
            message: "aut",
            pods: [
              {
                containerStatuses: [
                  {
                    "reprehenderit": "quia",
                    "necessitatibus": "accusantium",
                    "ad": "nisi",
                  },
                  {
                    "quia": "laudantium",
                    "sed": "odit",
                  },
                  {
                    "expedita": "eos",
                    "repellendus": "nesciunt",
                  },
                ],
                phase: "ipsa",
                podName: "sint",
                revision: 291389,
                status: "esse",
              },
              {
                containerStatuses: [
                  {
                    "sapiente": "quam",
                    "est": "aliquam",
                    "delectus": "culpa",
                  },
                ],
                phase: "voluptatum",
                podName: "iusto",
                revision: 802069,
                status: "voluptatibus",
              },
            ],
            replicas: 374414,
            revision: 247767,
            status: "ullam",
          },
        },
      },
      remove: [
        "voluptas",
        "doloribus",
        "animi",
      ],
      update: {
        "corporis": [
          {
            from: "necessitatibus",
            op: "distinctio",
            path: "maiores",
            value: "laboriosam",
          },
          {
            from: "voluptatem",
            op: "optio",
            path: "sequi",
            value: "sunt",
          },
        ],
        "vitae": [
          {
            from: "doloremque",
            op: "sed",
            path: "amet",
            value: "rerum",
          },
          {
            from: "in",
            op: "nostrum",
            path: "temporibus",
            value: "ratione",
          },
          {
            from: "dolor",
            op: "nisi",
            path: "dignissimos",
            value: "reiciendis",
          },
          {
            from: "itaque",
            op: "vitae",
            path: "est",
            value: "accusantium",
          },
        ],
        "quod": [
          {
            from: "quos",
            op: "possimus",
            path: "maiores",
            value: "odio",
          },
          {
            from: "provident",
            op: "sapiente",
            path: "aperiam",
            value: "similique",
          },
          {
            from: "nesciunt",
            op: "provident",
            path: "ex",
            value: "repellendus",
          },
          {
            from: "unde",
            op: "alias",
            path: "impedit",
            value: "sequi",
          },
        ],
        "commodi": [
          {
            from: "expedita",
            op: "in",
            path: "quisquam",
            value: "sunt",
          },
          {
            from: "enim",
            op: "nulla",
            path: "maiores",
            value: "distinctio",
          },
        ],
      },
    },
    shared: [
      {
        from: "impedit",
        op: "accusamus",
        path: "et",
        value: "quas",
      },
      {
        from: "blanditiis",
        op: "cum",
        path: "dicta",
        value: "impedit",
      },
      {
        from: "tempora",
        op: "eveniet",
        path: "repudiandae",
        value: "sed",
      },
    ],
  },
  appId: "impedit",
  orgId: "quas",
  setId: "impedit",
}).then((res: PostOrgsOrgIdAppsAppIdSetsSetIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
