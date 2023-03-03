import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMeals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly meal?: string | null;
  readonly image_url?: string | null;
  readonly comment?: string | null;
  readonly posted_date?: string | null;
  readonly posted_by?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeals = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meals, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly meal?: string | null;
  readonly image_url?: string | null;
  readonly comment?: string | null;
  readonly posted_date?: string | null;
  readonly posted_by?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meals = LazyLoading extends LazyLoadingDisabled ? EagerMeals : LazyMeals

export declare const Meals: (new (init: ModelInit<Meals>) => Meals) & {
  copyOf(source: Meals, mutator: (draft: MutableModel<Meals>) => MutableModel<Meals> | void): Meals;
}