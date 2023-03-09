/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TimelineCard2Props } from "./TimelineCard2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineCard2CollectionOverridesProps = {
    TimelineCard2Collection?: PrimitiveOverrideProps<CollectionProps>;
    TimelineCard2?: TimelineCard2Props;
} & EscapeHatchProps;
export declare type TimelineCard2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => TimelineCard2Props;
} & {
    overrides?: TimelineCard2CollectionOverridesProps | undefined | null;
}>;
export default function TimelineCard2Collection(props: TimelineCard2CollectionProps): React.ReactElement;
