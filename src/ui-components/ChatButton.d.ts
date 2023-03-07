/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatButtonOverridesProps = {
    ChatButton?: PrimitiveOverrideProps<FlexProps>;
    chatButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ChatButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ChatButtonOverridesProps | undefined | null;
}>;
export default function ChatButton(props: ChatButtonProps): React.ReactElement;
