import React from "react";
import { FormattedMessage } from "react-intl";
export const trans = (message, values = {}) => {
    return (
        <FormattedMessage
            id={message}
            defaultMessage={message}
            values={values}
        />
    );
};
