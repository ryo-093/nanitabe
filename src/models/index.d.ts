import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly iconUrl?: string | null;
  readonly Sells?: (Sells | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly iconUrl?: string | null;
  readonly Sells: AsyncCollection<Sells>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerSells = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sells, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodsName?: string | null;
  readonly comment?: string | null;
  readonly howPickup?: string | null;
  readonly PickupPlace?: string | null;
  readonly price?: number | null;
  readonly usernName?: string | null;
  readonly createdBy?: string | null;
  readonly imageUrl1: string;
  readonly imageUrl2?: string | null;
  readonly imageUrl3?: string | null;
  readonly imageUrl4?: string | null;
  readonly imageUrl5?: string | null;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySells = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sells, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodsName?: string | null;
  readonly comment?: string | null;
  readonly howPickup?: string | null;
  readonly PickupPlace?: string | null;
  readonly price?: number | null;
  readonly usernName?: string | null;
  readonly createdBy?: string | null;
  readonly imageUrl1: string;
  readonly imageUrl2?: string | null;
  readonly imageUrl3?: string | null;
  readonly imageUrl4?: string | null;
  readonly imageUrl5?: string | null;
  readonly usersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sells = LazyLoading extends LazyLoadingDisabled ? EagerSells : LazySells

export declare const Sells: (new (init: ModelInit<Sells>) => Sells) & {
  copyOf(source: Sells, mutator: (draft: MutableModel<Sells>) => MutableModel<Sells> | void): Sells;
}