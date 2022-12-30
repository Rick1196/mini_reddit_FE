import React, { useState } from "react";
import Input from "../inputs/input";
import * as yup from "yup";
import Checkbox from "../inputs/checkbox";
import FormWrapper from "../wrappers/form";
import { RadioButton } from "../inputs/radioButtons";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import subRedditAPI from "../../utils/api/subreddit";

const schema = yup.object().shape({
  subredditTitle: yup.string().required(),
  subredditType: yup.string().required(),
  subredditNSFW: yup.boolean().required(),
});

const NewSubRedditForm = ({ ...props }) => {
  const [submitRequested, setRequestedSubmit] = useState(false);
  const onSubmit = async (data) => {
    try {
      await subRedditAPI.post({
        name: data.subredditTitle,
        isNSFW: data.subredditNSFW,
        type: data.subredditType,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <FormWrapper
        className="w-full flex flex-col gap-2"
        {...{ schema, onSubmit, setRequestedSubmit, submitRequested }}
      >
        {({ handleSubmit, control }) => (
          <>
            <Input
              {...{
                control,
                name: "subredditTitle",
                placeholder: "New Subreddit Name",
                className: "w-full border border-ownGrey p-2",
              }}
            />
            <div className="flex flex-col gap-2">
              <RadioButton
                {...{
                  control,
                  name: "subredditType",
                  id: "subredditPublic",
                  className: "",
                  type: "radio",
                  value: "public",
                }}
              >
                Public
              </RadioButton>
              <RadioButton
                {...{
                  control,
                  name: "subredditType",
                  className: "",
                  type: "radio",
                  id: "subRedditPrivate",
                  value: "private",
                }}
              >
                Private
              </RadioButton>
            </div>
            <Checkbox
              {...{
                control,
                name: "subredditNSFW",
                className: "",
                placeholder: "NSFW",
                type: "checkbox",
              }}
            >
              NSFW
            </Checkbox>

            <div className="flex justify-end mt-2">
              <button
                className="bg-ownBlue rounded p-2 text-white w-48"
                onClick={handleSubmit(onSubmit)}
              >
                Create
              </button>
            </div>
          </>
        )}
      </FormWrapper>
    </>
  );
};

export default NewSubRedditForm;
