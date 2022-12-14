import React from "react";
import { storiesOf } from "@storybook/react";

import PreviewCard from "./PreviewCard";
import styled from "styled-components";

storiesOf("Tutorial/Design System/News Card", module).add("Primary", () => (
  <PreviewCard
    title="Shift the overall look and feel by adding these wonderful touches to
  furniture in your home"
    summary="Ever been in a room and felt like something was missing? Perhaps it
  felt slightly bare and uninviting. I’ve got some simple tips to help
  you make any room feel complete."
    date="28 Jun 2020"
    author="Michelle Appleton"
  />
));
