import { colorStyleBuilder } from "../../../src/helpers/color-helper";

function buildTextColorElements() {
  const elements = [];

  const textColorsStyle = colorStyleBuilder("text", "color");

  Object.keys(textColorsStyle).forEach((k) => {
    elements.push({
      class: k,
      value: JSON.stringify(textColorsStyle[k]),
    });
  });

  return elements;
}

export default buildTextColorElements();
