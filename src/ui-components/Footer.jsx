/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Footer(props) {
  const { users, overrides, ...rest } = props;
  const searchOnClick = useNavigateAction({ type: "url", url: "./timeline" });
  const mapOnClick = useNavigateAction({ type: "url", url: "./map" });
  const postOnClick = useNavigateAction({ type: "url", url: "./post" });
  const chatOnClick = useNavigateAction({ type: "url", url: "./chat" });
  const mypageOnClick = useNavigateAction({ type: "url", url: users?.iconUrl });
  return (
    <Flex
      gap="19px"
      direction="row"
      width="431px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px -2px 13px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="27px 27px 0px 0px"
      padding="16px 449px 16px 449px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="10px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1px"
        width="58px"
        height="48px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="さがす"
        onClick={() => {
          searchOnClick();
        }}
        {...getOverrideProps(overrides, "search")}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="10px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1px"
        width="58px"
        height="48px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="マップ"
        onClick={() => {
          mapOnClick();
        }}
        {...getOverrideProps(overrides, "map")}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="10px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1px"
        width="58px"
        height="48px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="出品"
        onClick={() => {
          postOnClick();
        }}
        {...getOverrideProps(overrides, "post")}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="10px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1px"
        width="59px"
        height="48px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="チャット"
        onClick={() => {
          chatOnClick();
        }}
        {...getOverrideProps(overrides, "chat")}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="10px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.479999542236328px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1px"
        width="69px"
        height="48px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="mypage"
        onClick={() => {
          mypageOnClick();
        }}
        {...getOverrideProps(overrides, "mypage")}
      ></Text>
    </Flex>
  );
}
