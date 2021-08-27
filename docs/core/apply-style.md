---
sidebar_position: 1
---

# Styling

Being able to style the elements provided by React Native is the essence of this library, in this section the different ways to do it are explained.

## The "s" function

Styling is applied to an element using the `s(<classes>)` function offered by React Native Wind.

`s()` has the task of taking a string as a parameter, from it extracting the classes and finally retrieving the React Native styles associated with these classes and aggregating them together.

## How to actually use the `s()` function

The `s()` function can be used in two ways.

### In component markup

Directly in the Markup of the component passing it as style property of the element you want to style.

```jsx
import React from "react";
import { View } from "react-native";
import { s } from "react-native-wind";

export const CoolComponent = () => {
  // This view will be 100% width and 100% height!!
  return <View style={s`w-full h-full`} />;
};
```

### In styles constant

In React Native the style assignment is often done by referring to a constant `styles` external to the component. Also using React Native Wind it is possible to make the same thing:

```jsx
import React from "react";
import { View } from "react-native";
import { s } from "react-native-wind";

export const CoolComponent = () => {
  return <View style={styles.container} />;
};

const styles = {
  container: s`w-full h-full`,
};
```

## Use style customizations

The `s()` function returns a flat object that combines all the properties represented by the classes.

```js
const someStyle = s`h-full w-full`;
```

The constant `someStyle` will look like this

```js
const someStyle = {
  height: "100%",
  width: "100%",
};
```

In case you want to integrate the style provided by the library with a custom style for that component you can do it in this way:

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import { s } from "react-native-wind";

export const CoolComponent = () => {
  return <View style={[s`w-full h-full`, styles.container]} />;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    borderRadius: 21,
  },
});
```
