/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooderOverridesProps = {
    Fooder?: PrimitiveOverrideProps<FlexProps>;
    home?: PrimitiveOverrideProps<ViewProps>;
    "Group 25"?: PrimitiveOverrideProps<ViewProps>;
    Group37662696?: PrimitiveOverrideProps<ViewProps>;
    Vector37662697?: PrimitiveOverrideProps<IconProps>;
    Vector37662698?: PrimitiveOverrideProps<IconProps>;
    "\u30DB\u30FC\u30E0"?: PrimitiveOverrideProps<TextProps>;
    map?: PrimitiveOverrideProps<ViewProps>;
    "tabler:map-2"?: PrimitiveOverrideProps<ViewProps>;
    Group37662703?: PrimitiveOverrideProps<ViewProps>;
    Vector37662704?: PrimitiveOverrideProps<IconProps>;
    Vector37662705?: PrimitiveOverrideProps<IconProps>;
    "\u30DE\u30C3\u30D7"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FooderOverridesProps | undefined | null;
}>;
export default function Fooder(props: FooderProps): React.ReactElement;
