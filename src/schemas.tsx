import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, ReferenceInput, TextInput, ArrayInput, SimpleFormIterator, SelectInput } from "react-admin";
import { JsonField } from "./fields";

export const SchemaList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="schema.id" />
      <TextField source="schema.name" />
      <TextField source="schema.author" />
    </Datagrid>
  </List>
);

export const SchemaShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="schema.id" />
      <TextField source="schema.name" />
      <TextField source="schema.author" />
      <TextField source="schema.authored" />
      <JsonField source="schema.schema" />
    </SimpleShowLayout>
  </Show>
);

// https://developer.tbd.website/docs/apis/ssi-service/#tag/SchemaAPI/paths/~1v1~1schemas/put
export const SchemaCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="issuer" reference="dids" />
      <TextInput source="issuerKid" />
      <TextInput source="name" />
      <ArrayInput source="schema">
        <SimpleFormIterator inline>
          <TextInput source="name" />
          <SelectInput source="type" defaultValue="string" choices={[
            { id: 'string', name: 'string' },
            { id: 'number', name: 'number' },
            { id: 'boolean', name: 'boolean' },
          ]} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
