/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Footer3OverridesProps = {
    Footer3?: PrimitiveOverrideProps<FlexProps>;
    "Frame 3"?: PrimitiveOverrideProps<ViewProps>;
    timeline?: PrimitiveOverrideProps<TextProps>;
    map?: PrimitiveOverrideProps<TextProps>;
    post?: PrimitiveOverrideProps<TextProps>;
    chat?: PrimitiveOverrideProps<TextProps>;
    mypage?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Footer3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Footer3OverridesProps | undefined | null;
}>;
export default function Footer3(props: Footer3Props): React.ReactElement;
