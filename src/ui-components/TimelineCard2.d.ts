/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SellTable } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TimelineCard2OverridesProps = {
    TimelineCard2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    "Group 46"?: PrimitiveOverrideProps<ViewProps>;
    "image 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 45"?: PrimitiveOverrideProps<ViewProps>;
    "\u671D\u63A1\u308C\u305F\u4EBA\u53C2\u3067\u3059\u3002\u3069\u306A\u305F\u304B\u3044\u308A\u307E\u305B\u3093\u304B\uFF1F \u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\uFF01"?: PrimitiveOverrideProps<TextProps>;
    "\u671D\u63A1\u308C\u306B\u3093\u3058\u3093"?: PrimitiveOverrideProps<TextProps>;
    "Group 44"?: PrimitiveOverrideProps<ViewProps>;
    "\u7530\u4E2D\u3084\u3059\u304A"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TimelineCard2Props = React.PropsWithChildren<Partial<ViewProps> & {
    sellTable?: SellTable;
} & {
    overrides?: TimelineCard2OverridesProps | undefined | null;
}>;
export default function TimelineCard2(props: TimelineCard2Props): React.ReactElement;
