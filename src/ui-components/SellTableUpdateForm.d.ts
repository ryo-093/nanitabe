/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SellTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SellTableUpdateFormInputValues = {
    goodsName?: string;
    comment?: string;
    PickupPlace?: string;
    userName?: string;
    createdDate?: string;
    imageUrl?: string;
    salesTerm?: string;
    imageUrl2?: string;
};
export declare type SellTableUpdateFormValidationValues = {
    goodsName?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    PickupPlace?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    salesTerm?: ValidationFunction<string>;
    imageUrl2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellTableUpdateFormOverridesProps = {
    SellTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goodsName?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    PickupPlace?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    salesTerm?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: SellTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sellTable?: SellTable;
    onSubmit?: (fields: SellTableUpdateFormInputValues) => SellTableUpdateFormInputValues;
    onSuccess?: (fields: SellTableUpdateFormInputValues) => void;
    onError?: (fields: SellTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellTableUpdateFormInputValues) => SellTableUpdateFormInputValues;
    onValidate?: SellTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SellTableUpdateForm(props: SellTableUpdateFormProps): React.ReactElement;
