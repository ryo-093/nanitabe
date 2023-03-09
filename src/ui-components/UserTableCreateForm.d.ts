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
export declare type UserTableCreateFormInputValues = {
    userName?: string;
    iconUrl?: string;
    currentAddress?: string;
    nickname?: string;
};
export declare type UserTableCreateFormValidationValues = {
    userName?: ValidationFunction<string>;
    iconUrl?: ValidationFunction<string>;
    currentAddress?: ValidationFunction<string>;
    nickname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTableCreateFormOverridesProps = {
    UserTableCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    iconUrl?: PrimitiveOverrideProps<TextFieldProps>;
    currentAddress?: PrimitiveOverrideProps<TextFieldProps>;
    nickname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTableCreateFormProps = React.PropsWithChildren<{
    overrides?: UserTableCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserTableCreateFormInputValues) => UserTableCreateFormInputValues;
    onSuccess?: (fields: UserTableCreateFormInputValues) => void;
    onError?: (fields: UserTableCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTableCreateFormInputValues) => UserTableCreateFormInputValues;
    onValidate?: UserTableCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserTableCreateForm(props: UserTableCreateFormProps): React.ReactElement;
