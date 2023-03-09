/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserTable } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserTableUpdateFormInputValues = {
    userName?: string;
    iconUrl?: string;
    currentAddress?: string;
    nickname?: string;
};
export declare type UserTableUpdateFormValidationValues = {
    userName?: ValidationFunction<string>;
    iconUrl?: ValidationFunction<string>;
    currentAddress?: ValidationFunction<string>;
    nickname?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTableUpdateFormOverridesProps = {
    UserTableUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    iconUrl?: PrimitiveOverrideProps<TextFieldProps>;
    currentAddress?: PrimitiveOverrideProps<TextFieldProps>;
    nickname?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserTableUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserTableUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userTable?: UserTable;
    onSubmit?: (fields: UserTableUpdateFormInputValues) => UserTableUpdateFormInputValues;
    onSuccess?: (fields: UserTableUpdateFormInputValues) => void;
    onError?: (fields: UserTableUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTableUpdateFormInputValues) => UserTableUpdateFormInputValues;
    onValidate?: UserTableUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserTableUpdateForm(props: UserTableUpdateFormProps): React.ReactElement;
