import { colorStyleBuilder } from "../../../src/helpers/color-helper";

function buildBackgroundColorElements() {
  const elements = [];

  const bgColorsStyle = colorStyleBuilder("bg", "backgroundColor");

  Object.keys(bgColorsStyle).forEach((k) => {
    elements.push({
      class: k,
      value: JSON.stringify(bgColorsStyle[k]),
    });
  });

  return elements;
}

export default buildBackgroundColorElements();
