/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function SellForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="31px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="20px 0px 20px 0px"
      {...getOverrideProps(overrides, "SellForm")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        label="商品名"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3871893")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="画像"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3871958")}
      ></TextField>
      <TextAreaField
        width="300px"
        height="unset"
        label="説明"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <TextField
        width="300px"
        height="unset"
        label="受取場所"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3871921")}
      ></TextField>
      <TextField
        width="300px"
        height="unset"
        label="金額"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField3871937")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="禁止されている行為および出品物を必ずご確認ください。また、プライバシーポリシーに同意の上、「出品する」ボタンを押してください。"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Button
        width="235px"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="出品する"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
