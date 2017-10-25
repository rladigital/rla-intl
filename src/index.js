import React from "react";
import { FormattedMessage } from "react-intl";

function FormattedMessageFixed(props) {
    return <FormattedMessage {...props} />;
}

export const trans = (message, values = {}, description = "") => {
    return (
        <FormattedMessageFixed
            id={message}
            description={description}
            defaultMessage={message}
            values={values}
        />
    );
};
