// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Sells } = initSchema(schema);

export {
  Users,
  Sells
};