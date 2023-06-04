import { List, Show, Datagrid, TextField, SimpleShowLayout } from "react-admin";

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
