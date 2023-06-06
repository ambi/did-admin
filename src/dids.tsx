import { List, Show, Create, Datagrid, TextField, SimpleShowLayout, SimpleForm, RadioButtonGroupInput } from "react-admin";

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

// https://developer.tbd.website/docs/apis/ssi-service/#tag/DecentralizedIdentityAPI/paths/~1v1~1dids~1%7Bmethod%7D/put
export const DidCreate = () => (
  <Create>
    <SimpleForm>
      <RadioButtonGroupInput source="method" defaultValue="key" choices={[
        { id: 'ion', name: 'ION' },
        { id: 'key', name: 'Key' },
        { id: 'web', name: 'Web' },
      ]} />
      <RadioButtonGroupInput source="keyType" defaultValue="Ed25513" choices={[
        { id: 'Ed25513', name: 'Ed25513' },
        { id: 'secp256k1', name: 'secp256k1' },
      ]} />
    </SimpleForm>
  </Create>
);
