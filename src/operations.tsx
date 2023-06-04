import { List, Show, Datagrid, TextField, BooleanField, SimpleShowLayout } from "react-admin";

export const OperationList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <BooleanField source="done" />
      <TextField source="result.error" />
      <TextField source="result.response" />
    </Datagrid>
  </List>
);

export const OperationShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <BooleanField source="done" />
      <TextField source="result.error" />
      <TextField source="result.response" />
    </SimpleShowLayout>
  </Show>
);
