import React, { memo, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Textarea, Button } from "../../common/components";
import { color } from "../../common/styles/colors";

export const AddMessageForm = memo(
  ({ addMessage }: { addMessage: (text: string) => void }) => {
    const [message, setMessage] = useState("");

    const onChange = useCallback((e) => {
      setMessage(e.target.value);
    }, []);

    const onSbumit = useCallback(
      (e) => {
        e.preventDefault();
        addMessage(message);
        setMessage("");
      },
      [message, addMessage]
    );

    return (
      <Form onSubmit={onSbumit}>
        <Textarea onChange={onChange} value={message} />
        <Button disabled={!message} type="submit">
          Submit
        </Button>
      </Form>
    );
  }
);

AddMessageForm.displayName = "AddMessageForm";

const Form = styled.form`
  display: flex;
  font-size: 16px;
  box-shadow: 0px -10px 11px -10px ${color.gray};
  margin: 20px;
`;
