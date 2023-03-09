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
export default function TimelineCard2(props) {
  const { sellTable, overrides, ...rest } = props;
  const rectangleOneOnClick = useNavigateAction({
    type: "url",
    url: `${"./detail?sellId="}${sellTable?.id}`,
  });
  return (
    <View
      width="382px"
      height="193px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "TimelineCard2")}
      {...rest}
    >
      <View
        width="382px"
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
      <View
        padding="0px 0px 0px 0px"
        width="337px"
        height="129px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="32px"
        left="22px"
        {...getOverrideProps(overrides, "Group 46")}
      >
        <Image
          width="41.42%"
          height="100%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="58.58%"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          objectFit="unset"
          src={sellTable?.imageUrl}
          {...getOverrideProps(overrides, "image 1")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="182px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="28px"
          left="155px"
          {...getOverrideProps(overrides, "Group 45")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="1.23px"
            width="182px"
            height="58px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sellTable?.comment}
            {...getOverrideProps(
              overrides,
              "\u671D\u63A1\u308C\u305F\u4EBA\u53C2\u3067\u3059\u3002\u3069\u306A\u305F\u304B\u3044\u308A\u307E\u305B\u3093\u304B\uFF1F \u304A\u5F85\u3061\u3057\u3066\u3044\u307E\u3059\uFF01"
            )}
          ></Text>
        </View>
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="18.75px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1.69px"
          width="182px"
          height="17px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="86.82%"
          left="45.99%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={sellTable?.goodsName}
          {...getOverrideProps(
            overrides,
            "\u671D\u63A1\u308C\u306B\u3093\u3058\u3093"
          )}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="182px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="97px"
          left="155px"
          {...getOverrideProps(overrides, "Group 44")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="1.23px"
            width="139px"
            height="28px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="6.25%"
            bottom="6.25%"
            left="23.63%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={sellTable?.userName}
            {...getOverrideProps(overrides, "\u7530\u4E2D\u3084\u3059\u304A")}
          ></Text>
          <Image
            width="17.58%"
            height="100%"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="82.42%"
            borderRadius="160px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={sellTable?.imageUrl2}
            {...getOverrideProps(overrides, "image")}
          ></Image>
        </View>
      </View>
    </View>
  );
}
