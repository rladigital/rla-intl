import React from "react";
import { FormattedMessage } from "react-intl";

function FormattedMessageFixed(props) {
    return <FormattedMessage {...props} />;
}

export const trans = (message, values = {}, description = "") => {
    //If React is past version 16 a string can be returned, avoiding an extra span
    //The check involves using an undocumented property, so we check for it first
    if (
        typeof React.version === "string" &&
        parseInt(React.version.split(".")[0], 10) >= 16
    ) {
        return (
            <FormattedMessageFixed
                id={message}
                description={description}
                defaultMessage={message}
                values={values}
            >
                {message => message}
            </FormattedMessageFixed>
        );
    }
    return (
        <FormattedMessageFixed
            id={message}
            description={description}
            defaultMessage={message}
            values={values}
        />
    );
};
