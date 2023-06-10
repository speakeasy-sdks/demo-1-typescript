# ClusterSecretResponse

ClusterSecret represents Kubernetes secret reference.


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `namespace`                                                | *string*                                                   | :heavy_check_mark:                                         | Namespace to look for the Kubernetes secret definition in. |
| `secret`                                                   | *string*                                                   | :heavy_check_mark:                                         | Name that identifies the Kubernetes secret.                |