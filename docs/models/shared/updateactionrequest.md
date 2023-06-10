# UpdateActionRequest

A representation of the main object defined in JSON Patch specified in RFC 6902 from the IETF. The main differences are:

* Only `add`, `remove` and `replace` are supported

* `remove` can have have its scope of application applied in its `value`. e.g. `{"scope":"delta"}


## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `from`             | *string*           | :heavy_minus_sign: | N/A                |
| `op`               | *string*           | :heavy_minus_sign: | N/A                |
| `path`             | *string*           | :heavy_minus_sign: | N/A                |
| `value`            | *any*              | :heavy_minus_sign: | N/A                |