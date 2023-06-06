import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, ReferenceInput, TextInput, ArrayInput, SimpleFormIterator, SelectInput } from "react-admin";
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

// https://developer.tbd.website/docs/apis/ssi-service/#tag/ManifestAPI/paths/~1v1~1manifests/put
export const ManifestCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput source="issuerDid" reference="dids" />
      <TextInput source="issuerKid" />
      <TextInput source="issuerName" />
      <TextInput source="format" />
      <ArrayInput source="outputDescriptors">
        <SimpleFormIterator inline>
          <TextInput source="id" />
          <TextInput source="name" />
          <TextInput source="description" />
          <ReferenceInput source="schema" reference="schemas" />
          <TextInput source="display" />
          <TextInput source="styles" />
        </SimpleFormIterator>
      </ArrayInput>
      <hr />
      <h3>Presentation Definition</h3>
      <TextInput source="definition_id" />
      <TextInput source="definition_name" />
      <TextInput source="definition_purpose" />
      <h4>Input Descriptor 0</h4>
      <TextInput source="input_id" />
      <ArrayInput source="input_fields">
        <SimpleFormIterator inline>
          <TextInput source="path" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
