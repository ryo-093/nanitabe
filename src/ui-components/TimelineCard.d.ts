/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sells } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineCardOverridesProps = {
    TimelineCard?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u671D\u63A1\u308C\u305F\u4EBA\u53C2\u3067\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    "\u671D\u63A1\u308C\u306B\u3093\u3058\u3093"?: PrimitiveOverrideProps<TextProps>;
    "\u7530\u4E2D\u3084\u3059\u304A"?: PrimitiveOverrideProps<TextProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TimelineCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    sell?: Sells;
} & {
    overrides?: TimelineCardOverridesProps | undefined | null;
}>;
export default function TimelineCard(props: TimelineCardProps): React.ReactElement;
