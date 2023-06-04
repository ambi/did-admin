import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";

export const PresentationDefinitionList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="input_descriptors[0].id" />
    </Datagrid>
  </List>
);

export const PresentationDefinitionShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="input_descriptors[0].id" />
    </SimpleShowLayout>
  </Show>
);
