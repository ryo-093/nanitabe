import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly iconUrl?: string | null;
  readonly currentAddress?: string | null;
  readonly nickname?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userName?: string | null;
  readonly iconUrl?: string | null;
  readonly currentAddress?: string | null;
  readonly nickname?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserTable = LazyLoading extends LazyLoadingDisabled ? EagerUserTable : LazyUserTable

export declare const UserTable: (new (init: ModelInit<UserTable>) => UserTable) & {
  copyOf(source: UserTable, mutator: (draft: MutableModel<UserTable>) => MutableModel<UserTable> | void): UserTable;
}

type EagerSellTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SellTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodsName?: string | null;
  readonly comment?: string | null;
  readonly PickupPlace?: string | null;
  readonly userName?: string | null;
  readonly createdDate?: string | null;
  readonly imageUrl: string;
  readonly salesTerm?: string | null;
  readonly imageUrl2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySellTable = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SellTable, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodsName?: string | null;
  readonly comment?: string | null;
  readonly PickupPlace?: string | null;
  readonly userName?: string | null;
  readonly createdDate?: string | null;
  readonly imageUrl: string;
  readonly salesTerm?: string | null;
  readonly imageUrl2?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SellTable = LazyLoading extends LazyLoadingDisabled ? EagerSellTable : LazySellTable

export declare const SellTable: (new (init: ModelInit<SellTable>) => SellTable) & {
  copyOf(source: SellTable, mutator: (draft: MutableModel<SellTable>) => MutableModel<SellTable> | void): SellTable;
}