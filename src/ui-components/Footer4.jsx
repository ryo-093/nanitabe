/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useAuth,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Footer4(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const frameThreeSixOnClick = useNavigateAction({
    type: "url",
    url: `${"./timeline?name="}${authAttributes["nickname"]}`,
  });
  const frameThreeFiveOnClick = useNavigateAction({
    type: "url",
    url: `${"./map?name="}${authAttributes["nickname"]}`,
  });
  const frameThreeFourOnClick = useNavigateAction({
    type: "url",
    url: `${"./post?name="}${authAttributes["nickname"]}`,
  });
  const frameThreeThreeOnClick = useNavigateAction({
    type: "url",
    url: `${"./chat?name="}${authAttributes["nickname"]}`,
  });
  const frameThreeTwoOnClick = useNavigateAction({
    type: "url",
    url: `${"./mypage?name="}${authAttributes["nickname"]}`,
  });
  return (
    <Flex
      gap="9px"
      direction="row"
      width="393px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.10000000149011612)"
      borderRadius="50px"
      padding="16px 32px 16px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer4")}
      {...rest}
    >
      <View
        width="53px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeSixOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 36")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="11.71875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1px"
          width="57px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="さがす"
          {...getOverrideProps(overrides, "timeline")}
        ></Text>
        <Icon
          width="14.88px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 14.877197265625, height: 16 }}
          paths={[
            {
              d: "M10.6326 10.0629L9.96066 10.0629L9.72249 9.81589C10.5561 8.77301 11.0579 7.4191 11.0579 5.94625C11.0579 2.66209 8.58267 0 5.52897 0C2.47528 0 0 2.66209 0 5.94625C0 9.23042 2.47528 11.8925 5.52897 11.8925C6.89846 11.8925 8.15736 11.3528 9.12706 10.4563L9.35673 10.7124L9.35673 11.4351L13.6098 16L14.8772 14.6369L10.6326 10.0629ZM5.52897 10.0629C3.41095 10.0629 1.70122 8.22413 1.70122 5.94625C1.70122 3.66838 3.41095 1.82962 5.52897 1.82962C7.647 1.82962 9.35673 3.66838 9.35673 5.94625C9.35673 8.22413 7.647 10.0629 5.52897 10.0629Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="60.98%"
          left="36.84%"
          right="35.09%"
          {...getOverrideProps(overrides, "Vector40231192")}
        ></Icon>
      </View>
      <View
        width="53px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeFiveOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 35")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="11.71875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1px"
          width="57px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="マップ"
          {...getOverrideProps(overrides, "map")}
        ></Text>
        <Icon
          width="14.88px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 14.877197265625, height: 16 }}
          paths={[
            {
              d: "M14.4639 0L14.3317 0.0266666L9.91813 1.86667L4.95906 0L0.297544 1.68889C0.123977 1.75111 0 1.91111 0 2.11556L0 15.5556C0 15.8044 0.181832 16 0.413255 16L0.545497 15.9733L4.95906 14.1333L9.91813 16L14.5796 14.3111C14.7532 14.2489 14.8772 14.0889 14.8772 13.8844L14.8772 0.444444C14.8772 0.195556 14.6954 0 14.4639 0ZM9.91813 14.2222L4.95906 12.3467L4.95906 1.77778L9.91813 3.65333L9.91813 14.2222Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="60.98%"
          left="36.84%"
          right="35.09%"
          {...getOverrideProps(overrides, "Vector40231203")}
        ></Icon>
      </View>
      <View
        width="53px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeFourOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 34")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="11.71875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1px"
          width="57px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="出品"
          {...getOverrideProps(overrides, "post")}
        ></Text>
        <Icon
          width="14.88px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 14.877197265625, height: 16 }}
          paths={[
            {
              d: "M13.2242 0L1.65302 0C0.74386 0 0 0.8 0 1.77778L0 8C0 8.97778 0.74386 9.77778 1.65302 9.77778L13.2242 9.77778C14.1333 9.77778 14.8772 8.97778 14.8772 8L14.8772 1.77778C14.8772 0.8 14.1333 0 13.2242 0ZM13.2242 5.33333L9.91813 5.33333C9.91813 6.77333 8.77754 8 7.4386 8C6.09965 8 4.95906 6.77333 4.95906 5.33333L1.65302 5.33333L1.65302 1.77778L13.2242 1.77778L13.2242 5.33333ZM9.91813 11.5556L14.8772 11.5556L14.8772 14.2222C14.8772 15.2 14.1333 16 13.2242 16L1.65302 16C0.74386 16 0 15.2 0 14.2222L0 11.5556L4.95906 11.5556C4.95906 13.0311 6.06659 14.2222 7.4386 14.2222C8.8106 14.2222 9.91813 13.0311 9.91813 11.5556Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="60.98%"
          left="36.84%"
          right="35.09%"
          {...getOverrideProps(overrides, "Vector40231189")}
        ></Icon>
      </View>
      <View
        width="52px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeThreeOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 33")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="11.71875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1px"
          width="56px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="チャット"
          {...getOverrideProps(overrides, "chat")}
        ></Text>
        <Icon
          width="14.86px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 14.857177734375, height: 16 }}
          paths={[
            {
              d: "M13.3714 0L1.48571 0C0.668571 0 0 0.72 0 1.6L0 16L2.97143 12.8L13.3714 12.8C14.1886 12.8 14.8571 12.08 14.8571 11.2L14.8571 1.6C14.8571 0.72 14.1886 0 13.3714 0ZM13.3714 11.2L2.97143 11.2L1.48571 12.8L1.48571 1.6L13.3714 1.6L13.3714 11.2Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="60.98%"
          left="35.71%"
          right="35.71%"
          {...getOverrideProps(overrides, "Vector40231200")}
        ></Icon>
      </View>
      <View
        width="61px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        onClick={() => {
          frameThreeTwoOnClick();
        }}
        {...getOverrideProps(overrides, "Frame 32")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="11.71875px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1px"
          width="66px"
          height="13px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="マイページ"
          {...getOverrideProps(overrides, "mypage")}
        ></Text>
        <Icon
          width="14.79px"
          height="16px"
          viewBox={{ minX: 0, minY: 0, width: 14.787841796875, height: 16 }}
          paths={[
            {
              d: "M13.0475 8.78333C13.0791 8.53333 13.095 8.275 13.095 8C13.095 7.73333 13.0791 7.46667 13.0396 7.21667L14.6469 5.9C14.7895 5.78333 14.8291 5.55833 14.742 5.39167L13.2217 2.625C13.1267 2.44167 12.9287 2.38333 12.7545 2.44167L10.8621 3.24167C10.4662 2.925 10.0465 2.65833 9.57934 2.45833L9.29429 0.341667C9.26262 0.141667 9.10425 0 8.91422 0L5.87366 0C5.68363 0 5.53318 0.141667 5.50151 0.341667L5.21646 2.45833C4.74929 2.65833 4.32171 2.93333 3.93372 3.24167L2.04129 2.44167C1.86709 2.375 1.66914 2.44167 1.57412 2.625L0.0617616 5.39167C-0.0332558 5.56667 -0.00158344 5.78333 0.156779 5.9L1.76416 7.21667C1.72457 7.46667 1.69289 7.74167 1.69289 8C1.69289 8.25833 1.70873 8.53333 1.74832 8.78333L0.140943 10.1C-0.00158343 10.2167 -0.0411739 10.4417 0.0459254 10.6083L1.5662 13.375C1.66122 13.5583 1.85917 13.6167 2.03337 13.5583L3.9258 12.7583C4.32171 13.075 4.74137 13.3417 5.20854 13.5417L5.49359 15.6583C5.53318 15.8583 5.68363 16 5.87366 16L8.91422 16C9.10425 16 9.26262 15.8583 9.28637 15.6583L9.57142 13.5417C10.0386 13.3417 10.4662 13.075 10.8542 12.7583L12.7466 13.5583C12.9208 13.625 13.1187 13.5583 13.2138 13.375L14.734 10.6083C14.8291 10.425 14.7895 10.2167 14.639 10.1L13.0475 8.78333ZM7.39394 11C5.82615 11 4.54342 9.65 4.54342 8C4.54342 6.35 5.82615 5 7.39394 5C8.96173 5 10.2445 6.35 10.2445 8C10.2445 9.65 8.96173 11 7.39394 11Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="60.98%"
          left="37.88%"
          right="37.88%"
          {...getOverrideProps(overrides, "Vector40231197")}
        ></Icon>
      </View>
    </Flex>
  );
}
