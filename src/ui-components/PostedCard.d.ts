/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Meals } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostedCardOverridesProps = {
    PostedCard?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1164"?: PrimitiveOverrideProps<ViewProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "\u99C5\u524D\u306E\u30E9\u30FC\u30E1\u30F3\u5E97\u3067\u98DF\u3079\u307E\u3057\u305F\u3002\u7279\u306B\u5473\u564C\u304C\u3059\u304D\u3067\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    "\u30B3\u30E1\u30F3\u30C8 1\u4EF6\u3000\u3044\u3044\u306D! 10\u4EF6\u3000\u304A\u3044\u3057\u305D\u304620\u4EF6 \u3044\u304D\u305F\u3044\uFF0110\u4EF6"?: PrimitiveOverrideProps<TextProps>;
    "\u308F\u3084\uFF0820\u4EE3\u7537\u6027\u30FB\u5927\u5B66\u9662\u751F\uFF09"?: PrimitiveOverrideProps<TextProps>;
    "2023 / 2 / 22 17:06"?: PrimitiveOverrideProps<TextProps>;
    "\u30E9\u30FC\u30E1\u30F3"?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PostedCardProps = React.PropsWithChildren<Partial<ViewProps> & {
    meals?: Meals;
} & {
    overrides?: PostedCardOverridesProps | undefined | null;
}>;
export default function PostedCard(props: PostedCardProps): React.ReactElement;
