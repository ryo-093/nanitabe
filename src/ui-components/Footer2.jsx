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
import { Text, View } from "@aws-amplify/ui-react";
export default function Footer2(props) {
  const { overrides, ...rest } = props;
  const timelineOnClick = useNavigateAction({ type: "url", url: "./timeline" });
  const mapOnClick = useNavigateAction({ type: "url", url: "./map" });
  const chatOnClick = useNavigateAction({ type: "url", url: "./map" });
  const postOnClick = useNavigateAction({ type: "url", url: "./post" });
  const mypageOnClick = useNavigateAction({ type: "url", url: "./mypage" });
  return (
    <View
      width="350.4px"
      height="73px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Footer2")}
      {...rest}
    >
      <View
        width="350.4px"
        height="73px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px -2px 13px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="27px 27px 0px 0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 36")}
      ></View>
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
        top="34.25%"
        bottom="0%"
        left="1.71%"
        right="82.02%"
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
        top="34.25%"
        bottom="0%"
        left="21.12%"
        right="62.61%"
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
        width="56px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.25%"
        bottom="0%"
        left="59.93%"
        right="24.09%"
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
        width="57px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.25%"
        bottom="0%"
        left="41.95%"
        right="41.78%"
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
        width="66px"
        height="48px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.25%"
        bottom="0%"
        left="79.34%"
        right="1.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="マイページ"
        onClick={() => {
          mypageOnClick();
        }}
        {...getOverrideProps(overrides, "mypage")}
      ></Text>
    </View>
  );
}
