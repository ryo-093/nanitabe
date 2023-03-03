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
export declare type MealsCreateFormInputValues = {
    meal?: string;
    image_url?: string;
    comment?: string;
    posted_date?: string;
    posted_by?: string;
};
export declare type MealsCreateFormValidationValues = {
    meal?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    posted_date?: ValidationFunction<string>;
    posted_by?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealsCreateFormOverridesProps = {
    MealsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meal?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    posted_date?: PrimitiveOverrideProps<TextFieldProps>;
    posted_by?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MealsCreateFormProps = React.PropsWithChildren<{
    overrides?: MealsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MealsCreateFormInputValues) => MealsCreateFormInputValues;
    onSuccess?: (fields: MealsCreateFormInputValues) => void;
    onError?: (fields: MealsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealsCreateFormInputValues) => MealsCreateFormInputValues;
    onValidate?: MealsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MealsCreateForm(props: MealsCreateFormProps): React.ReactElement;
