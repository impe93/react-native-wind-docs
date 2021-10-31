import { colorStyleBuilder } from "../../../src/helpers/color-helper";

export const borderColorPositions = ["", "-e", "-s", "-l", "-r", "-t", "-b"];

const borderColorPositionsPair = {
  "": "borderColor",
  "-e": "borderEndColor",
  "-s": "borderStartColor",
  "-r": "borderRightColor",
  "-l": "borderLeftColor",
  "-b": "borderBottomColor",
  "-t": "borderTopColor",
};

export const buildBorderColorStyles = () => {
  let borderColorStyles = {};

  borderColorPositions.forEach((p) => {
    const borderColors = colorStyleBuilder(
      `border${p}`,
      borderColorPositionsPair[p]
    );
    borderColorStyles = {
      ...borderColorStyles,
      ...borderColors,
    };
  });

  return borderColorStyles;
};

function buildBorderColorElements() {
  const elements = [];

  const borderColorsStyle = buildBorderColorStyles();

  Object.keys(borderColorsStyle).forEach((k) => {
    elements.push({
      class: k,
      value: JSON.stringify(borderColorsStyle[k]),
    });
  });

  return elements;
}

export default buildBorderColorElements();
