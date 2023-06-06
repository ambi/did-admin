import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { DidList, DidShow, DidCreate } from './dids';
import { SchemaList, SchemaShow, SchemaCreate } from './schemas';
import { ManifestList, ManifestShow, ManifestCreate } from './manifests';
import { ManifestApplicationList, ManifestApplicationShow, ManifestApplicationCreate } from './manifest_applications';
import { CredentialList, CredentialShow, CredentialCreate } from './credentials';
import { PresentationDefinitionList, PresentationDefinitionShow, PresentationDefinitionCreate } from './presentation_definitions';
import { PresentationRequestList, PresentationRequestShow, PresentationRequestCreate } from './presentation_requests';
import { PresentationSubmissionList, PresentationSubmissionShow, PresentationSubmissionCreate } from './presentation_submissions';
import { OperationList, OperationShow } from './operations';

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="dids" list={DidList} show={DidShow} create={DidCreate} />
        <Resource name="schemas" list={SchemaList} show={SchemaShow} create={SchemaCreate} />
        <Resource name="manifests" list={ManifestList} show={ManifestShow} create={ManifestCreate} />
        <Resource name="manifest_applications" list={ManifestApplicationList} show={ManifestApplicationShow} create={ManifestApplicationCreate} />
        <Resource name="credentials" list={CredentialList} show={CredentialShow} create={CredentialCreate} />
        <Resource name="presentation_definitions" list={PresentationDefinitionList} show={PresentationDefinitionShow} create={PresentationDefinitionCreate} />
        <Resource name="presentation_requests" list={PresentationRequestList} show={PresentationRequestShow} create={PresentationRequestCreate} />
        <Resource name="presentation_submissions" list={PresentationSubmissionList} show={PresentationSubmissionShow} create={PresentationSubmissionCreate} />
        <Resource name="operations" list={OperationList} show={OperationShow} />
    </Admin>
);
