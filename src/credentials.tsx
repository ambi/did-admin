import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, ReferenceInput, TextInput, BooleanInput } from "react-admin";
import { JwtField, RefField } from "./fields";

export const CredentialList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="credential.issuer" />
      <TextField source="credential.issuanceDate" />
      <RefField source="credential.credentialSchema.id" resource="schemas" />
      <JwtField source="credentialJwt" />
    </Datagrid>
  </List>
);

export const CredentialShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="credential.issuer" />
      <TextField source="credential.issuanceDate" />
      <RefField source="credential.credentialSchema.id" resource="schemas" />
      <TextField source="credentialJwt" />
    </SimpleShowLayout>
  </Show>
);

// https://developer.tbd.website/docs/apis/ssi-service/#tag/CredentialAPI/paths/~1v1~1credentials/put
export const CredentialCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="@context" />
      <ReferenceInput source="issuer" reference="dids" />
      <TextInput source="issuerKid" />
      <TextInput source="subject" />
      <ReferenceInput source="schemaId" reference="schemas" />
      <TextInput source="data" />
      <TextInput source="expiry" />
      <BooleanInput source="revocable" />
      <BooleanInput source="suspendable" />
    </SimpleForm>
  </Create>
);
