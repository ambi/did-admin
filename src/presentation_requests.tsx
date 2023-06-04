import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";
import { RefField, JwtField } from "./fields";

export const PresentationRequestList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="issuerId" />
      <TextField source="issuerKid" />
      <RefField source="presentationDefinitionId" resource="presentation_definitions" />
      <JwtField source="presentationRequestJwt" />
    </Datagrid>
  </List>
);

export const PresentationRequestShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="issuerId" />
      <TextField source="issuerKid" />
      <RefField source="presentationDefinitionId" resource="presentation_definitions" />
      <JwtField source="presentationRequestJwt" />
    </SimpleShowLayout>
  </Show>
);
