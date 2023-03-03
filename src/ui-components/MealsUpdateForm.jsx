/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Meals } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MealsUpdateForm(props) {
  const {
    id: idProp,
    meals,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    meal: "",
    image_url: "",
    comment: "",
    posted_date: "",
    posted_by: "",
  };
  const [meal, setMeal] = React.useState(initialValues.meal);
  const [image_url, setImage_url] = React.useState(initialValues.image_url);
  const [comment, setComment] = React.useState(initialValues.comment);
  const [posted_date, setPosted_date] = React.useState(
    initialValues.posted_date
  );
  const [posted_by, setPosted_by] = React.useState(initialValues.posted_by);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = mealsRecord
      ? { ...initialValues, ...mealsRecord }
      : initialValues;
    setMeal(cleanValues.meal);
    setImage_url(cleanValues.image_url);
    setComment(cleanValues.comment);
    setPosted_date(cleanValues.posted_date);
    setPosted_by(cleanValues.posted_by);
    setErrors({});
  };
  const [mealsRecord, setMealsRecord] = React.useState(meals);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Meals, idProp) : meals;
      setMealsRecord(record);
    };
    queryData();
  }, [idProp, meals]);
  React.useEffect(resetStateValues, [mealsRecord]);
  const validations = {
    meal: [],
    image_url: [],
    comment: [],
    posted_date: [],
    posted_by: [],
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
          meal,
          image_url,
          comment,
          posted_date,
          posted_by,
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
          await DataStore.save(
            Meals.copyOf(mealsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MealsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Meal"
        isRequired={false}
        isReadOnly={false}
        value={meal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meal: value,
              image_url,
              comment,
              posted_date,
              posted_by,
            };
            const result = onChange(modelFields);
            value = result?.meal ?? value;
          }
          if (errors.meal?.hasError) {
            runValidationTasks("meal", value);
          }
          setMeal(value);
        }}
        onBlur={() => runValidationTasks("meal", meal)}
        errorMessage={errors.meal?.errorMessage}
        hasError={errors.meal?.hasError}
        {...getOverrideProps(overrides, "meal")}
      ></TextField>
      <TextField
        label="Image url"
        isRequired={false}
        isReadOnly={false}
        value={image_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meal,
              image_url: value,
              comment,
              posted_date,
              posted_by,
            };
            const result = onChange(modelFields);
            value = result?.image_url ?? value;
          }
          if (errors.image_url?.hasError) {
            runValidationTasks("image_url", value);
          }
          setImage_url(value);
        }}
        onBlur={() => runValidationTasks("image_url", image_url)}
        errorMessage={errors.image_url?.errorMessage}
        hasError={errors.image_url?.hasError}
        {...getOverrideProps(overrides, "image_url")}
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
              meal,
              image_url,
              comment: value,
              posted_date,
              posted_by,
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
        label="Posted date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={posted_date && convertToLocal(new Date(posted_date))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              meal,
              image_url,
              comment,
              posted_date: value,
              posted_by,
            };
            const result = onChange(modelFields);
            value = result?.posted_date ?? value;
          }
          if (errors.posted_date?.hasError) {
            runValidationTasks("posted_date", value);
          }
          setPosted_date(value);
        }}
        onBlur={() => runValidationTasks("posted_date", posted_date)}
        errorMessage={errors.posted_date?.errorMessage}
        hasError={errors.posted_date?.hasError}
        {...getOverrideProps(overrides, "posted_date")}
      ></TextField>
      <TextField
        label="Posted by"
        isRequired={false}
        isReadOnly={false}
        value={posted_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meal,
              image_url,
              comment,
              posted_date,
              posted_by: value,
            };
            const result = onChange(modelFields);
            value = result?.posted_by ?? value;
          }
          if (errors.posted_by?.hasError) {
            runValidationTasks("posted_by", value);
          }
          setPosted_by(value);
        }}
        onBlur={() => runValidationTasks("posted_by", posted_by)}
        errorMessage={errors.posted_by?.errorMessage}
        hasError={errors.posted_by?.hasError}
        {...getOverrideProps(overrides, "posted_by")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || meals)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || meals) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
