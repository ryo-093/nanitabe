/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TimelineCardProps } from "./TimelineCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineCardCollectionOverridesProps = {
    TimelineCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    TimelineCard?: TimelineCardProps;
} & EscapeHatchProps;
export declare type TimelineCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TimelineCardProps;
} & {
    overrides?: TimelineCardCollectionOverridesProps | undefined | null;
}>;
export default function TimelineCardCollection(props: TimelineCardCollectionProps): React.ReactElement;
