import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";
import { RefField } from "./fields";

export const ManifestList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="credential_manifest.id" />
      <TextField source="credential_manifest.name" />
      <TextField source="credential_manifest.description" />
      <TextField source="credential_manifest.issuer.name" />
      <RefField source="credential_manifest.output_descriptors[0].schema" resource="schemas" />
    </Datagrid>
  </List>
);

export const ManifestShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="credential_manifest.id" />
      <TextField source="credential_manifest.name" />
      <TextField source="credential_manifest.description" />
      <TextField source="credential_manifest.issuer.name" />
      <RefField source="credential_manifest.output_descriptors[0].schema" resource="schemas" />
    </SimpleShowLayout>
  </Show>
);
