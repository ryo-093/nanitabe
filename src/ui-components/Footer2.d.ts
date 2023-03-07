/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Footer2OverridesProps = {
    Footer2?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 36"?: PrimitiveOverrideProps<ViewProps>;
    timeline?: PrimitiveOverrideProps<TextProps>;
    map?: PrimitiveOverrideProps<TextProps>;
    chat?: PrimitiveOverrideProps<TextProps>;
    post?: PrimitiveOverrideProps<TextProps>;
    mypage?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Footer2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Footer2OverridesProps | undefined | null;
}>;
export default function Footer2(props: Footer2Props): React.ReactElement;
