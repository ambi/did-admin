import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";
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
