import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { DidList, DidShow } from './dids';
import { SchemaList, SchemaShow } from './schemas';
import { ManifestList, ManifestShow } from './manifests';
import { ManifestApplicationList, ManifestApplicationShow } from './manifest_applications';
import { CredentialList, CredentialShow } from './credentials';
import { PresentationDefinitionList, PresentationDefinitionShow } from './presentation_definitions';
import { PresentationRequestList, PresentationRequestShow } from './presentation_requests';
import { PresentationSubmissionList, PresentationSubmissionShow } from './presentation_submissions';
import { OperationList, OperationShow } from './operations';

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="dids" list={DidList} show={DidShow} />
        <Resource name="schemas" list={SchemaList} show={SchemaShow} />
        <Resource name="manifests" list={ManifestList} show={ManifestShow} />
        <Resource name="manifest_applications" list={ManifestApplicationList} show={ManifestApplicationShow} />
        <Resource name="credentials" list={CredentialList} show={CredentialShow} />
        <Resource name="presentation_definitions" list={PresentationDefinitionList} show={PresentationDefinitionShow} />
        <Resource name="presentation_requests" list={PresentationRequestList} show={PresentationRequestShow} />
        <Resource name="presentation_submissions" list={PresentationSubmissionList} show={PresentationSubmissionShow} />
        <Resource name="operations" list={OperationList} show={OperationShow} />
    </Admin>
);
