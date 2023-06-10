# AddArtefactVersionPayloadRequest

AddArtefactVersionPayload describes the payload for a new ArtefactVersion request.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `commit`                                                    | *string*                                                    | :heavy_minus_sign:                                          | (Optional) The commit ID the Artefact Version was built on. |
| `digest`                                                    | *string*                                                    | :heavy_minus_sign:                                          | (Optional) The Artefact Version digest.                     |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | The Artefact name.                                          |
| `ref`                                                       | *string*                                                    | :heavy_minus_sign:                                          | (Optional) The ref the Artefact Version was built from.     |
| `type`                                                      | *string*                                                    | :heavy_check_mark:                                          | The Artefact Version type.                                  |
| `version`                                                   | *string*                                                    | :heavy_minus_sign:                                          | (Optional) The Artefact Version.                            |