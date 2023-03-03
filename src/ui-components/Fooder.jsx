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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Fooder(props) {
  const { overrides, ...rest } = props;
  const homeOnClick = useNavigateAction({ type: "url", url: "" });
  const mapOnClick = useNavigateAction({ type: "url", url: "./map" });
  return (
    <Flex
      gap="93px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px -2px 13px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="27px 27px 0px 0px"
      padding="10px 111px 10px 111px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Fooder")}
      {...rest}
    >
      <View
        width="39px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          homeOnClick();
        }}
        {...getOverrideProps(overrides, "home")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="71px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0.5px"
          left="-16px"
          {...getOverrideProps(overrides, "Group 25")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="34px"
            height="36.62px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="38.97%"
            left="26.76%"
            right="25.35%"
            {...getOverrideProps(overrides, "Group37662696")}
          >
            <Icon
              width="34px"
              height="36.62px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 34,
                height: 36.6153564453125,
              }}
              paths={[
                {
                  d: "M28.6316 15.8441C27.8032 15.8441 27.1316 16.5157 27.1316 17.3441C27.1316 18.1726 27.8032 18.8441 28.6316 18.8441L28.6316 15.8441ZM32.2105 17.3441L32.2105 18.8441C32.8071 18.8441 33.347 18.4906 33.5855 17.9437C33.824 17.3968 33.7157 16.7606 33.3097 16.3235L32.2105 17.3441ZM16.1053 0L17.2045 -1.02068C16.9206 -1.32633 16.5224 -1.5 16.1053 -1.5C15.6882 -1.5 15.2899 -1.32633 15.0061 -1.02068L16.1053 0ZM0 17.3441L-1.09919 16.3235C-1.50515 16.7606 -1.61343 17.3968 -1.37496 17.9437C-1.13649 18.4906 -0.596601 18.8441 -4.88139e-16 18.8441L0 17.3441ZM3.57895 17.3441L5.07895 17.3441C5.07895 16.5157 4.40737 15.8441 3.57895 15.8441L3.57895 17.3441ZM3.57895 30.834L2.07895 30.834L3.57895 30.834ZM16.1053 36.1883C16.9337 36.1883 17.6053 35.5167 17.6053 34.6883C17.6053 33.8598 16.9337 33.1883 16.1053 33.1883L16.1053 36.1883ZM23.2632 30.834L21.7632 30.834L23.2632 30.834ZM28.6316 36.6154L28.6316 38.1154L28.6316 36.6154ZM34 30.834L35.5 30.834L34 30.834ZM28.6316 25.0526L28.6316 23.5526L28.6316 25.0526ZM28.6316 18.8441L32.2105 18.8441L32.2105 15.8441L28.6316 15.8441L28.6316 18.8441ZM33.3097 16.3235L17.2045 -1.02068L15.0061 1.02068L31.1113 18.3648L33.3097 16.3235ZM15.0061 -1.02068L-1.09919 16.3235L1.09919 18.3648L17.2045 1.02068L15.0061 -1.02068ZM0 18.8441L3.57895 18.8441L3.57895 15.8441L0 15.8441L0 18.8441ZM2.07895 17.3441L2.07895 30.834L5.07895 30.834L5.07895 17.3441L2.07895 17.3441ZM2.07895 30.834C2.07895 32.2197 2.58904 33.5689 3.52801 34.5801L5.72639 32.5387C5.32299 32.1043 5.07895 31.4928 5.07895 30.834L2.07895 30.834ZM3.52801 34.5801C4.47045 35.595 5.77349 36.1883 7.15789 36.1883L7.15789 33.1883C6.6439 33.1883 6.12631 32.9694 5.72639 32.5387L3.52801 34.5801ZM7.15789 36.1883L16.1053 36.1883L16.1053 33.1883L7.15789 33.1883L7.15789 36.1883ZM21.7632 30.834C21.7632 32.7308 22.4618 34.5701 23.7363 35.9427L25.9347 33.9014C25.1957 33.1055 24.7632 32.0039 24.7632 30.834L21.7632 30.834ZM23.7363 35.9427C25.0144 37.3191 26.7726 38.1154 28.6316 38.1154L28.6316 35.1154C27.643 35.1154 26.6702 34.6935 25.9347 33.9014L23.7363 35.9427ZM28.6316 38.1154C30.4906 38.1154 32.2488 37.3191 33.5268 35.9427L31.3284 33.9014C30.5929 34.6935 29.6202 35.1154 28.6316 35.1154L28.6316 38.1154ZM33.5268 35.9427C34.8014 34.5701 35.5 32.7308 35.5 30.834L32.5 30.834C32.5 32.0039 32.0674 33.1055 31.3284 33.9014L33.5268 35.9427ZM35.5 30.834C35.5 28.9373 34.8014 27.0979 33.5268 25.7253L31.3284 27.7666C32.0674 28.5625 32.5 29.6641 32.5 30.834L35.5 30.834ZM33.5268 25.7253C32.2488 24.3489 30.4906 23.5526 28.6316 23.5526L28.6316 26.5526C29.6202 26.5526 30.5929 26.9745 31.3284 27.7666L33.5268 25.7253ZM28.6316 23.5526C26.7726 23.5526 25.0144 24.3489 23.7363 25.7253L25.9347 27.7666C26.6702 26.9745 27.643 26.5526 28.6316 26.5526L28.6316 23.5526ZM23.7363 25.7253C22.4618 27.0979 21.7632 28.9373 21.7632 30.834L24.7632 30.834C24.7632 29.6641 25.1957 28.5625 25.9347 27.7666L23.7363 25.7253Z",
                  stroke: "rgba(30,165,208,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector37662697")}
            ></Icon>
            <Icon
              width="9.98px"
              height="15.42px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.9814453125,
                height: 15.4169921875,
              }}
              paths={[
                {
                  d: "M-1.5 15.417C-1.5 16.2454 -0.828427 16.917 0 16.917C0.828427 16.917 1.5 16.2454 1.5 15.417L-1.5 15.417ZM3.57895 0L3.57895 1.5L3.57895 0ZM8.76706 2.36598C9.25317 3.0368 10.191 3.18654 10.8619 2.70044C11.5327 2.21433 11.6824 1.27646 11.1963 0.605647L8.76706 2.36598ZM1.5 15.417L1.5 3.85425L-1.5 3.85425L-1.5 15.417L1.5 15.417ZM1.5 3.85425C1.5 3.19547 1.74404 2.58399 2.14744 2.14956L-0.05094 0.108208C-0.989903 1.1194 -1.5 2.46861 -1.5 3.85425L1.5 3.85425ZM2.14744 2.14956C2.54736 1.71888 3.06496 1.5 3.57895 1.5L3.57895 -1.5C2.19455 -1.5 0.891504 -0.906732 -0.05094 0.108208L2.14744 2.14956ZM3.57895 1.5L7.1579 1.5L7.1579 -1.5L3.57895 -1.5L3.57895 1.5ZM7.1579 1.5C7.77688 1.5 8.36533 1.81159 8.76706 2.36598L11.1963 0.605647C10.2881 -0.647609 8.83301 -1.5 7.1579 -1.5L7.1579 1.5Z",
                  stroke: "rgba(30,165,208,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="52.63%"
              bottom="5.26%"
              left="31.58%"
              right="39.06%"
              {...getOverrideProps(overrides, "Vector37662698")}
            ></Icon>
          </View>
          <Text
            fontFamily="Zen Maru Gothic"
            fontSize="12px"
            fontWeight="900"
            color="rgba(30,165,208,1)"
            lineHeight="17.375999450683594px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="1.23px"
            width="71px"
            height="19px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="41px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ホーム"
            {...getOverrideProps(overrides, "\u30DB\u30FC\u30E0")}
          ></Text>
        </View>
      </View>
      <View
        width="44px"
        height="61px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          mapOnClick();
        }}
        {...getOverrideProps(overrides, "map")}
      >
        <View
          width="44px"
          height="44px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "tabler:map-2")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="34.83px"
            height="32.88px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.6%"
            bottom="16.67%"
            left="12.5%"
            right="8.33%"
            {...getOverrideProps(overrides, "Group37662703")}
          >
            <Icon
              width="14.67px"
              height="20.05px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 14.6669921875,
                height: 20.050262451171875,
              }}
              paths={[
                {
                  d: "M8.83333 7.2169C8.83333 6.38847 8.16176 5.7169 7.33333 5.7169C6.50491 5.7169 5.83333 6.38847 5.83333 7.2169L8.83333 7.2169ZM5.83333 7.23524C5.83333 8.06366 6.50491 8.73524 7.33333 8.73524C8.16176 8.73524 8.83333 8.06366 8.83333 7.23524L5.83333 7.23524ZM7.33333 20.0502L6.10449 20.9104C6.38518 21.3114 6.84386 21.5502 7.33333 21.5502C7.8228 21.5502 8.28149 21.3114 8.56218 20.9104L7.33333 20.0502ZM0.916668 10.8836L-0.395832 11.6098C-0.370322 11.6559 -0.342399 11.7006 -0.31218 11.7438L0.916668 10.8836ZM7.33333 0L7.33333 1.5L7.33333 0ZM13.75 10.8836L14.9788 11.7438C15.0091 11.7006 15.037 11.6559 15.0625 11.6098L13.75 10.8836ZM5.83333 7.2169L5.83333 7.23524L8.83333 7.23524L8.83333 7.2169L5.83333 7.2169ZM8.56218 19.19L2.14552 10.0234L-0.31218 11.7438L6.10449 20.9104L8.56218 19.19ZM2.22917 10.1574C1.73781 9.26931 1.48666 8.26839 1.50055 7.25354L-1.49917 7.21251C-1.5202 8.74928 -1.13989 10.265 -0.395832 11.6098L2.22917 10.1574ZM1.50055 7.25354C1.51443 6.23869 1.79286 5.24503 2.30833 4.37072L-0.275963 2.84709C-1.05653 4.17104 -1.47815 5.67573 -1.49917 7.21251L1.50055 7.25354ZM2.30833 4.37072C2.82379 3.49642 3.55846 2.77173 4.43973 2.26827L2.95159 -0.336616C1.61709 0.425766 0.504601 1.52314 -0.275963 2.84709L2.30833 4.37072ZM4.43973 2.26827C5.32101 1.76481 6.31839 1.5 7.33333 1.5L7.33333 -1.5C5.79642 -1.5 4.28609 -1.099 2.95159 -0.336616L4.43973 2.26827ZM7.33333 1.5C8.34828 1.5 9.34566 1.76481 10.2269 2.26827L11.7151 -0.336616C10.3806 -1.099 8.87025 -1.5 7.33333 -1.5L7.33333 1.5ZM10.2269 2.26827C11.1082 2.77173 11.8429 3.49642 12.3583 4.37072L14.9426 2.84709C14.1621 1.52314 13.0496 0.425766 11.7151 -0.336616L10.2269 2.26827ZM12.3583 4.37072C12.8738 5.24503 13.1522 6.23869 13.1661 7.25354L16.1658 7.21251C16.1448 5.67573 15.7232 4.17104 14.9426 2.84709L12.3583 4.37072ZM13.1661 7.25354C13.18 8.26839 12.9289 9.26931 12.4375 10.1574L15.0625 11.6098C15.8066 10.265 16.1869 8.74928 16.1658 7.21251L13.1661 7.25354ZM12.5212 10.0234L6.10449 19.19L8.56218 20.9104L14.9788 11.7438L12.5212 10.0234Z",
                  stroke: "rgba(60,60,60,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="39.03%"
              left="57.89%"
              right="0%"
              {...getOverrideProps(overrides, "Vector37662704")}
            ></Icon>
            <Icon
              width="33px"
              height="29.33px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 33,
                height: 29.333343505859375,
              }}
              paths={[
                {
                  d: "M13.0792 2.71664C13.8201 3.08712 14.7212 2.78679 15.0916 2.04582C15.4621 1.30485 15.1618 0.403843 14.4208 0.0333592L13.0792 2.71664ZM11 0L11.6708 -1.34164C11.2485 -1.55279 10.7515 -1.55279 10.3292 -1.34164L11 0ZM0 5.5L-0.67082 4.15836C-1.179 4.41245 -1.5 4.93184 -1.5 5.5L0 5.5ZM0 29.3333L-1.5 29.3333C-1.5 29.8532 -1.23082 30.336 -0.788597 30.6093C-0.346372 30.8826 0.205838 30.9075 0.67082 30.675L0 29.3333ZM22 29.3333L21.3292 30.675C21.7515 30.8861 22.2485 30.8861 22.6708 30.675L22 29.3333ZM33 23.8333L33.6708 25.175C34.179 24.9209 34.5 24.4015 34.5 23.8333L33 23.8333ZM34.5 20.1667C34.5 19.3382 33.8284 18.6667 33 18.6667C32.1716 18.6667 31.5 19.3382 31.5 20.1667L34.5 20.1667ZM23.5 20.1667C23.5 19.3382 22.8284 18.6667 22 18.6667C21.1716 18.6667 20.5 19.3382 20.5 20.1667L23.5 20.1667ZM14.4208 0.0333592L11.6708 -1.34164L10.3292 1.34164L13.0792 2.71664L14.4208 0.0333592ZM10.3292 -1.34164L-0.67082 4.15836L0.67082 6.84164L11.6708 1.34164L10.3292 -1.34164ZM-1.5 5.5L-1.5 29.3333L1.5 29.3333L1.5 5.5L-1.5 5.5ZM0.67082 30.675L11.6708 25.175L10.3292 22.4917L-0.67082 27.9917L0.67082 30.675ZM10.3292 25.175L21.3292 30.675L22.6708 27.9917L11.6708 22.4917L10.3292 25.175ZM22.6708 30.675L33.6708 25.175L32.3292 22.4917L21.3292 27.9917L22.6708 30.675ZM34.5 23.8333L34.5 20.1667L31.5 20.1667L31.5 23.8333L34.5 23.8333ZM9.5 0L9.5 23.8333L12.5 23.8333L12.5 0L9.5 0ZM20.5 20.1667L20.5 29.3333L23.5 29.3333L23.5 20.1667L20.5 20.1667Z",
                  stroke: "rgba(60,60,60,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 3,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="10.8%"
              bottom="0%"
              left="0%"
              right="5.26%"
              {...getOverrideProps(overrides, "Vector37662705")}
            ></Icon>
          </View>
        </View>
        <Text
          fontFamily="Zen Maru Gothic"
          fontSize="12px"
          fontWeight="900"
          color="rgba(60,60,60,1)"
          lineHeight="17.375999450683594px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1.23px"
          width="84px"
          height="17px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="44px"
          left="-17px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="マップ"
          {...getOverrideProps(overrides, "\u30DE\u30C3\u30D7")}
        ></Text>
      </View>
    </Flex>
  );
}
