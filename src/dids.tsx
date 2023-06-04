import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";

export const DidList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
    </Datagrid>
  </List>
);

export const DidShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="verificationMethod[0].id" />
      <TextField source="verificationMethod[0].type" />
      <TextField source="verificationMethod[0].controller" />
    </SimpleShowLayout>
  </Show>
);
