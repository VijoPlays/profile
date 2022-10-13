/** @format */

import {
  provideFluentDesignSystem,
  fluentButton,
} from "@fluentui/web-components";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

export default function LanguageList() {
  //TODO: Is it possible to clean this up? If not, just use this as a helper class
  const { wrap } = provideReactWrapper(React, provideFluentDesignSystem());
  const FluentButton = wrap(fluentButton());

  //TODO: Color: does not work
  return (
    <div className="LanguageList">
      <FluentButton
        color="white"
        appearance="accent"
        onClick={() => console.log("clicked")}
      >
        Go
      </FluentButton>
    </div>
  );
}
