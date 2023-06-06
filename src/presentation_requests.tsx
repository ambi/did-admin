import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, ReferenceInput, TextInput, ArrayInput, SimpleFormIterator } from "react-admin";
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

export const PresentationRequestCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="issuerId" />
      <TextInput source="issuerKid" />
      <ReferenceInput source="presentationDefinitionId" reference="presentation_definitions" />
      <ArrayInput source="audience">
        <SimpleFormIterator inline>
          <TextInput source="url" />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="expiration" />
    </SimpleForm>
  </Create>
);
