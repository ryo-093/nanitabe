// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Meals } = initSchema(schema);

export {
  Meals
};