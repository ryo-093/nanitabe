/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellForm2OverridesProps = {
    SellForm2?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    TextField39831311?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39831312?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextField39831384?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39831391?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "\u7981\u6B62\u3055\u308C\u3066\u3044\u308B\u884C\u70BA\u304A\u3088\u3073\u51FA\u54C1\u7269\u3092\u5FC5\u305A\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\u307E\u305F\u3001\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u540C\u610F\u306E\u4E0A\u3001\u300C\u51FA\u54C1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\u3002"?: PrimitiveOverrideProps<TextProps>;
    chatButton39831420?: PrimitiveOverrideProps<FlexProps>;
    chatButton39831421?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SellForm2Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SellForm2OverridesProps | undefined | null;
}>;
export default function SellForm2(props: SellForm2Props): React.ReactElement;
