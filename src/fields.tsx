import { Link } from "@mui/material";
import { useRecordContext } from "react-admin";
import get from 'lodash/get';

export const JwtField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const jwt = get(record, source);
  return <span>{jwt.substr(0, 10) + "..."}</span>;
};

export const RefField = ({ source, resource }: { source: string, resource: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const id = get(record, source);
  return <Link href={`/#/${resource}/${id}/show`}>{id}</Link>;
};

export const JsonField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  const obj = get(record, source);
  return <span>{JSON.stringify(obj)}</span>;
}
