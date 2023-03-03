/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Meals } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MealsUpdateFormInputValues = {
    meal?: string;
    image_url?: string;
    comment?: string;
    posted_date?: string;
    posted_by?: string;
};
export declare type MealsUpdateFormValidationValues = {
    meal?: ValidationFunction<string>;
    image_url?: ValidationFunction<string>;
    comment?: ValidationFunction<string>;
    posted_date?: ValidationFunction<string>;
    posted_by?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MealsUpdateFormOverridesProps = {
    MealsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meal?: PrimitiveOverrideProps<TextFieldProps>;
    image_url?: PrimitiveOverrideProps<TextFieldProps>;
    comment?: PrimitiveOverrideProps<TextFieldProps>;
    posted_date?: PrimitiveOverrideProps<TextFieldProps>;
    posted_by?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MealsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MealsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meals?: Meals;
    onSubmit?: (fields: MealsUpdateFormInputValues) => MealsUpdateFormInputValues;
    onSuccess?: (fields: MealsUpdateFormInputValues) => void;
    onError?: (fields: MealsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MealsUpdateFormInputValues) => MealsUpdateFormInputValues;
    onValidate?: MealsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MealsUpdateForm(props: MealsUpdateFormProps): React.ReactElement;