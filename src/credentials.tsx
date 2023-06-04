import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";
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
