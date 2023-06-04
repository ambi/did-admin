import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";
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
