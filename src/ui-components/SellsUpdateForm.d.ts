/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sells } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SellsUpdateFormInputValues = {
    goodsName?: string;
    comment?: string;
    PickupPlace?: string;
    userName?: string;
    createdDate?: string;
    imageUrl?: string;
    salesTerm?: string;
};
export declare type SellsUpdateFormValidationValues = {
    goodsName?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    PickupPlace?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    createdDate?: ValidationFunction<string>;
    imageUrl?: ValidationFunction<string>;
    salesTerm?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellsUpdateFormOverridesProps = {
    SellsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    goodsName?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    PickupPlace?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    createdDate?: PrimitiveOverrideProps<TextFieldProps>;
    imageUrl?: PrimitiveOverrideProps<TextFieldProps>;
    salesTerm?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SellsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sells?: Sells;
    onSubmit?: (fields: SellsUpdateFormInputValues) => SellsUpdateFormInputValues;
    onSuccess?: (fields: SellsUpdateFormInputValues) => void;
    onError?: (fields: SellsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellsUpdateFormInputValues) => SellsUpdateFormInputValues;
    onValidate?: SellsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SellsUpdateForm(props: SellsUpdateFormProps): React.ReactElement;
