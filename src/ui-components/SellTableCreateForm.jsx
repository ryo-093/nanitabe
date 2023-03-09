/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SellTable } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SellTableCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    goodsName: "",
    comment: "",
    PickupPlace: "",
    userName: "",
    createdDate: "",
    imageUrl: "",
    salesTerm: "",
    imageUrl2: "",
  };
  const [goodsName, setGoodsName] = React.useState(initialValues.goodsName);
  const [comment, setComment] = React.useState(initialValues.comment);
  const [PickupPlace, setPickupPlace] = React.useState(
    initialValues.PickupPlace
  );
  const [userName, setUserName] = React.useState(initialValues.userName);
  const [createdDate, setCreatedDate] = React.useState(
    initialValues.createdDate
  );
  const [imageUrl, setImageUrl] = React.useState(initialValues.imageUrl);
  const [salesTerm, setSalesTerm] = React.useState(initialValues.salesTerm);
  const [imageUrl2, setImageUrl2] = React.useState(initialValues.imageUrl2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGoodsName(initialValues.goodsName);
    setComment(initialValues.comment);
    setPickupPlace(initialValues.PickupPlace);
    setUserName(initialValues.userName);
    setCreatedDate(initialValues.createdDate);
    setImageUrl(initialValues.imageUrl);
    setSalesTerm(initialValues.salesTerm);
    setImageUrl2(initialValues.imageUrl2);
    setErrors({});
  };
  const validations = {
    goodsName: [],
    comment: [],
    PickupPlace: [],
    userName: [],
    createdDate: [],
    imageUrl: [{ type: "Required" }],
    salesTerm: [],
    imageUrl2: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          goodsName,
          comment,
          PickupPlace,
          userName,
          createdDate,
          imageUrl,
          salesTerm,
          imageUrl2,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new SellTable(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SellTableCreateForm")}
      {...rest}
    >
      <TextField
        label="Goods name"
        isRequired={false}
        isReadOnly={false}
        value={goodsName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName: value,
              comment,
              PickupPlace,
              userName,
              createdDate,
              imageUrl,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.goodsName ?? value;
          }
          if (errors.goodsName?.hasError) {
            runValidationTasks("goodsName", value);
          }
          setGoodsName(value);
        }}
        onBlur={() => runValidationTasks("goodsName", goodsName)}
        errorMessage={errors.goodsName?.errorMessage}
        hasError={errors.goodsName?.hasError}
        {...getOverrideProps(overrides, "goodsName")}
      ></TextField>
      <TextField
        label="Comment"
        isRequired={false}
        isReadOnly={false}
        value={comment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName,
              comment: value,
              PickupPlace,
              userName,
              createdDate,
              imageUrl,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.comment ?? value;
          }
          if (errors.comment?.hasError) {
            runValidationTasks("comment", value);
          }
          setComment(value);
        }}
        onBlur={() => runValidationTasks("comment", comment)}
        errorMessage={errors.comment?.errorMessage}
        hasError={errors.comment?.hasError}
        {...getOverrideProps(overrides, "comment")}
      ></TextField>
      <TextField
        label="Pickup place"
        isRequired={false}
        isReadOnly={false}
        value={PickupPlace}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace: value,
              userName,
              createdDate,
              imageUrl,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.PickupPlace ?? value;
          }
          if (errors.PickupPlace?.hasError) {
            runValidationTasks("PickupPlace", value);
          }
          setPickupPlace(value);
        }}
        onBlur={() => runValidationTasks("PickupPlace", PickupPlace)}
        errorMessage={errors.PickupPlace?.errorMessage}
        hasError={errors.PickupPlace?.hasError}
        {...getOverrideProps(overrides, "PickupPlace")}
      ></TextField>
      <TextField
        label="User name"
        isRequired={false}
        isReadOnly={false}
        value={userName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace,
              userName: value,
              createdDate,
              imageUrl,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.userName ?? value;
          }
          if (errors.userName?.hasError) {
            runValidationTasks("userName", value);
          }
          setUserName(value);
        }}
        onBlur={() => runValidationTasks("userName", userName)}
        errorMessage={errors.userName?.errorMessage}
        hasError={errors.userName?.hasError}
        {...getOverrideProps(overrides, "userName")}
      ></TextField>
      <TextField
        label="Created date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdDate && convertToLocal(new Date(createdDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace,
              userName,
              createdDate: value,
              imageUrl,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.createdDate ?? value;
          }
          if (errors.createdDate?.hasError) {
            runValidationTasks("createdDate", value);
          }
          setCreatedDate(value);
        }}
        onBlur={() => runValidationTasks("createdDate", createdDate)}
        errorMessage={errors.createdDate?.errorMessage}
        hasError={errors.createdDate?.hasError}
        {...getOverrideProps(overrides, "createdDate")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={true}
        isReadOnly={false}
        value={imageUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace,
              userName,
              createdDate,
              imageUrl: value,
              salesTerm,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl ?? value;
          }
          if (errors.imageUrl?.hasError) {
            runValidationTasks("imageUrl", value);
          }
          setImageUrl(value);
        }}
        onBlur={() => runValidationTasks("imageUrl", imageUrl)}
        errorMessage={errors.imageUrl?.errorMessage}
        hasError={errors.imageUrl?.hasError}
        {...getOverrideProps(overrides, "imageUrl")}
      ></TextField>
      <TextField
        label="Sales term"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={salesTerm && convertToLocal(new Date(salesTerm))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace,
              userName,
              createdDate,
              imageUrl,
              salesTerm: value,
              imageUrl2,
            };
            const result = onChange(modelFields);
            value = result?.salesTerm ?? value;
          }
          if (errors.salesTerm?.hasError) {
            runValidationTasks("salesTerm", value);
          }
          setSalesTerm(value);
        }}
        onBlur={() => runValidationTasks("salesTerm", salesTerm)}
        errorMessage={errors.salesTerm?.errorMessage}
        hasError={errors.salesTerm?.hasError}
        {...getOverrideProps(overrides, "salesTerm")}
      ></TextField>
      <TextField
        label="Image url2"
        isRequired={false}
        isReadOnly={false}
        value={imageUrl2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goodsName,
              comment,
              PickupPlace,
              userName,
              createdDate,
              imageUrl,
              salesTerm,
              imageUrl2: value,
            };
            const result = onChange(modelFields);
            value = result?.imageUrl2 ?? value;
          }
          if (errors.imageUrl2?.hasError) {
            runValidationTasks("imageUrl2", value);
          }
          setImageUrl2(value);
        }}
        onBlur={() => runValidationTasks("imageUrl2", imageUrl2)}
        errorMessage={errors.imageUrl2?.errorMessage}
        hasError={errors.imageUrl2?.hasError}
        {...getOverrideProps(overrides, "imageUrl2")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
