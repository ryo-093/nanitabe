/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SellsCreateFormInputValues = {
    goodsName?: string;
    comment?: string;
    PickupPlace?: string;
    userName?: string;
    createdDate?: string;
    imageUrl?: string;
    salesTerm?: string;
};
export declare type SellsCreateFormValidationValues = {
    goodsName?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    PickupPlace?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    salesTerm?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellsCreateFormOverridesProps = {
    SellsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goodsName?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    PickupPlace?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    salesTerm?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellsCreateFormProps = React.PropsWithChildren<{
    overrides?: SellsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SellsCreateFormInputValues) => SellsCreateFormInputValues;
    onSuccess?: (fields: SellsCreateFormInputValues) => void;
    onError?: (fields: SellsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellsCreateFormInputValues) => SellsCreateFormInputValues;
    onValidate?: SellsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SellsCreateForm(props: SellsCreateFormProps): React.ReactElement;
