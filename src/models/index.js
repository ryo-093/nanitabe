// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserTable, SellTable } = initSchema(schema);

export {
  UserTable,
  SellTable
};