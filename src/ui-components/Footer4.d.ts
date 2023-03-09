/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Footer4OverridesProps = {
    Footer4?: PrimitiveOverrideProps<FlexProps>;
    "Frame 36"?: PrimitiveOverrideProps<ViewProps>;
    timeline?: PrimitiveOverrideProps<TextProps>;
    Vector40231192?: PrimitiveOverrideProps<IconProps>;
    "Frame 35"?: PrimitiveOverrideProps<ViewProps>;
    map?: PrimitiveOverrideProps<TextProps>;
    Vector40231203?: PrimitiveOverrideProps<IconProps>;
    "Frame 34"?: PrimitiveOverrideProps<ViewProps>;
    post?: PrimitiveOverrideProps<TextProps>;
    Vector40231189?: PrimitiveOverrideProps<IconProps>;
    "Frame 33"?: PrimitiveOverrideProps<ViewProps>;
    chat?: PrimitiveOverrideProps<TextProps>;
    Vector40231200?: PrimitiveOverrideProps<IconProps>;
    "Frame 32"?: PrimitiveOverrideProps<ViewProps>;
    mypage?: PrimitiveOverrideProps<TextProps>;
    Vector40231197?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type Footer4Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Footer4OverridesProps | undefined | null;
}>;
export default function Footer4(props: Footer4Props): React.ReactElement;
