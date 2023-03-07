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
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function TimelineCard(props) {
  const { sell, overrides, ...rest } = props;
  const rectangleOneOnClick = useNavigateAction({
    type: "url",
    url: `${"./detail?sellId="}${sell?.id}`,
  });
  return (
    <View
      width="353px"
      height="193px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TimelineCard")}
      {...rest}
    >
      <View
        width="353px"
        height="193px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        onClick={() => {
          rectangleOneOnClick();
        }}
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Image
        width="36.54%"
        height="66.84%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.58%"
        bottom="16.58%"
        left="6.23%"
        right="57.22%"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        objectFit="unset"
        src={sell?.imageUrl1}
        {...getOverrideProps(overrides, "image 1")}
      ></Image>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="13px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.823999404907227px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.35px"
        width="168px"
        height="53px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.05%"
        bottom="42.49%"
        left="46.74%"
        right="5.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={sell?.comment}
        {...getOverrideProps(
          overrides,
          "\u671D\u63A1\u308C\u305F\u4EBA\u53C2\u3067\u3059\u3002"
        )}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="15px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="21.719999313354492px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.58px"
        width="168px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.95%"
        bottom="75.13%"
        left="46.74%"
        right="5.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={sell?.goodsName}
        {...getOverrideProps(
          overrides,
          "\u671D\u63A1\u308C\u306B\u3093\u3058\u3093"
        )}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="13px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.823999404907227px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.35px"
        width="120px"
        height="28px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="74.61%"
        bottom="10.88%"
        left="60.34%"
        right="5.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={sell?.usernName}
        {...getOverrideProps(overrides, "\u7530\u4E2D\u3084\u3059\u304A")}
      ></Text>
      <Text
        fontFamily="Zen Maru Gothic"
        fontSize="13px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="18.823999404907227px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.35px"
        width="168px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.51%"
        bottom="32.64%"
        left="46.74%"
        right="5.67%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${sell?.price}${"\u5186"}`}
        {...getOverrideProps(overrides, "\u91D1\u984D")}
      ></Text>
      <Image
        width="9.07%"
        height="16.58%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.61%"
        bottom="8.81%"
        left="49.29%"
        right="41.64%"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={sell?.imageUrl5}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
