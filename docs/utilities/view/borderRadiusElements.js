export const radiusDimension = {
  "-none": 0,
  "-sm": 2,
  "": 4,
  "-md": 6,
  "-lg": 8,
  "-xl": 12,
  "-2xl": 16,
  "-3xl": 24,
  "-full": 9999,
};

export const borderRadiusPositions = [
  "",
  "-te",
  "-tl",
  "-tr",
  "-ts",
  "-be",
  "-bl",
  "-br",
  "-bs",
];

const borderRadiusPositionsPair = {
  "": "borderRadius",
  "-be": "borderBottomEndRadius",
  "-br": "borderBottomRightRadius",
  "-bl": "borderBottomLeftRadius",
  "-bs": "borderBottomStartRadius",
  "-te": "borderTopEndRadius",
  "-tr": "borderTopRightRadius",
  "-tl": "borderTopLeftRadius",
  "-ts": "borderTopStartRadius",
};

export const buildBorderRadiusStyles = () => {
  const styles = {};

  borderRadiusPositions.forEach((p) => {
    Object.keys(radiusDimension).forEach((dk) => {
      styles[`rounded${p}${dk}`] = {
        [borderRadiusPositionsPair[p]]: radiusDimension[dk],
      };
    });
  });

  return styles;
};

function buildBorderRadiusElements() {
  const elements = [];

  const borderColorsStyle = buildBorderRadiusStyles();

  Object.keys(borderColorsStyle).forEach((k) => {
    elements.push({
      class: k,
      value: JSON.stringify(borderColorsStyle[k]),
    });
  });

  return elements;
}

export default buildBorderRadiusElements();
