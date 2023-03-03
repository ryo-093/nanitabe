/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PostedCardProps } from "./PostedCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineOverridesProps = {
    Timeline?: PrimitiveOverrideProps<CollectionProps>;
    PostedCard?: PostedCardProps;
} & EscapeHatchProps;
export declare type TimelineProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => PostedCardProps;
} & {
    overrides?: TimelineOverridesProps | undefined | null;
}>;
export default function Timeline(props: TimelineProps): React.ReactElement;
