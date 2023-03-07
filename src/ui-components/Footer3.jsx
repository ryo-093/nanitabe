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
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Footer3(props) {
  const { overrides, ...rest } = props;
  const timelineOnClick = useNavigateAction({ type: "url", url: "./timeline" });
  const mapOnClick = useNavigateAction({ type: "url", url: "./map" });
  const postOnClick = useNavigateAction({ type: "url", url: "./post" });
  const chatOnClick = useNavigateAction({ type: "url", url: "./chat" });
  const mypageOnClick = useNavigateAction({ type: "url", url: "./mypage" });
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="73px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px -2px 13px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="27px 27px 0px 0px"
      padding="20px 6px 20px 6px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer3")}
      {...rest}
    >
      <View
        width="333px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 3")}
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
          width="57px"
          height="48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="さがす"
          onClick={() => {
            timelineOnClick();
          }}
          {...getOverrideProps(overrides, "timeline")}
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
          width="57px"
          height="48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="67px"
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
          width="57px"
          height="48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="134px"
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
          width="56px"
          height="48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="201px"
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
          width="66px"
          height="48px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="267px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="マイページ"
          onClick={() => {
            mypageOnClick();
          }}
          {...getOverrideProps(overrides, "mypage")}
        ></Text>
      </View>
    </Flex>
  );
}
