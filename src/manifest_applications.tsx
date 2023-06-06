import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, TextInput } from "react-admin";
import { RefField } from "./fields";

export const ManifestApplicationList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <RefField source="manifest_id" resource="manifests" />
      <TextField source="presentation_submission.id" />
      <TextField source="presentation_submission.definition_id" />
    </Datagrid>
  </List>
);

export const ManifestApplicationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <RefField source="manifest_id" resource="manifests" />
      <TextField source="presentation_submission.id" />
      <TextField source="presentation_submission.definition_id" />
    </SimpleShowLayout>
  </Show>
);

// https://developer.tbd.website/docs/apis/ssi-service/#tag/ApplicationAPI/paths/~1v1~1manifests~1applications/put
export const ManifestApplicationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="applicationJwt" multiline />
    </SimpleForm>
  </Create>
);
