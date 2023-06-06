import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, TextInput } from "react-admin";

export const PresentationSubmissionList = () => (
  <List>
    <Datagrid rowClick="show">
    </Datagrid>
  </List>
);

export const PresentationSubmissionShow = () => (
  <Show>
    <SimpleShowLayout>
    </SimpleShowLayout>
  </Show>
);

// https://developer.tbd.website/docs/apis/ssi-service/#tag/PresentationSubmissionAPI/paths/~1v1~1presentations~1submissions/put
export const PresentationSubmissionCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="submissionJwt" multiline />
    </SimpleForm>
  </Create>
);
