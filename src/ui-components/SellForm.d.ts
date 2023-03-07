/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellFormOverridesProps = {
    SellForm?: PrimitiveOverrideProps<FlexProps>;
    TextField3871893?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3871958?: PrimitiveOverrideProps<TextFieldProps>;
    TextAreaField?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TextField3871921?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3871937?: PrimitiveOverrideProps<TextFieldProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SellFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SellFormOverridesProps | undefined | null;
}>;
export default function SellForm(props: SellFormProps): React.ReactElement;
