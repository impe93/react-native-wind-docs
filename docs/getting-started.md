---
sidebar_position: 2
---

# Getting Started

:::caution

React Native Wind is a package that takes as **main target the Android and iOS operating systems**, probably the package works also for the others but at the moment **there is no intention to follow the development** and testing for these.

:::

## Installation

In this short guide it is assumed that you already have [Node](https://nodejs.org/) installed and that you know what [React Native](https://reactnative.dev/) is and how it works.

Installing this package is very simple and **works for both React Native projects and those using Expo**. In your root project folder run:

**Yarn**

```shell
yarn add react-native-wind
```

Or if you prefer npm

**NPM**

```shell
npm install react-native-wind
```

## How to use it

Once installed start using the library is simple, import the [function `s()`](/docs/core/apply-style) and use it in the element you want to style passing as parameter a string with the classes you want to give it.

For example, let's give the `View` a padding on each side and make this view as big as the element that contains it:

```jsx
import React from "react";
import { View } from "react-native";
import { s } from "react-native-wind";

export const CoolComponent = () => {
  return <View style={s`p-5 w-full h-full`} />;
};
```

## Explore the library

In the documentation are described all the utilities that can be used within the library. Before continuing with the implementation I suggest you to read these sections that will help you to better understand how to use the library and its potential:

- [Introduction to React Native Wind](/docs/intro)
- [Styles](/docs/core/apply-style)
- [Customization](/docs/core/customization)
