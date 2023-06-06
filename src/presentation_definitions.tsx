import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, RadioButtonGroupInput, TextInput, ArrayInput, SimpleFormIterator } from "react-admin";

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

// https://developer.tbd.website/docs/apis/ssi-service/#tag/PresentationDefinitionAPI/paths/~1v1~1presentations~1definitions/put
export const PresentationDefinitionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="purpose" />
      <TextInput source="format" />
      <h4>Input Descriptor 0</h4>
      <TextInput source="input_id" />
      <ArrayInput source="input_fields">
        <SimpleFormIterator inline>
          <TextInput source="path" />
        </SimpleFormIterator>
      </ArrayInput>
      {/* submissionRequirements */}
    </SimpleForm>
  </Create>
);
