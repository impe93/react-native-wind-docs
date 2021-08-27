---
sidebar_position: 2
---

# Customization

When it comes to styling, you always look for something that can be customized to reflect your brand. For this reason, every utility set can be customized. The goal is to get to the maximum level of customization of the library, for the moment you can only customize certain values.

## What properties are customizable?

As mentioned above, not all classes and not all values can be customized. Under each utility, in case it is possible, it is always written how you can customize those values and what is the limit of customization of values.At the moment there are no plans to add specific classes with specific properties, it's definitely an evolution that the library wants to have and it's already marked as a features that React Native Wind will have.

## Getting started with customizations

There is a special function for customizing the library to your needs. The name refers a lot to the functionality: `customize`.

### How to use it?

Using the function is simple: as first thing it is important to create a file named `wind.config.js` in the root of your project, the name of the file is not important for a matter of functionality, and if you use Typescript you can safely use `ts` as extension. It is important to call it that so that it can be easily distinguished from other files and, in case someone wants to make changes to that file in the future, by following this guide they will already know where to do it.

Within this new file you need to write:

```js [title="wind.config.js"]
import {customize} from 'react-native-wind';

customize({});
```

This function takes as parameter a javascript object in which you can specify all the customizations you want to make to the library.

In this case I'm going to create a new `space` that will be used by all the utilities that uses `spacing` as property to generate their classes.

```js [title="wind.config.js"]
import {customize} from 'react-native-wind';

customize({
  theme: {
    spacing: {
      strangeSpace: 37,
    },
  },
});
```

In this way several classes are added that take as space the value written on the right (37) and as name the key (`strangeSpace`). The values that belong to the customization key `spacing` characterize the width of the margins and paddings, for example in the class `mt-2`, the number 2 is also one of the default keys of the object `spacing` that as a value of 32, in this case then, the class taken into consideration, gives a top margin of 32dp to the element to which it is assigned. Some of the added classes are:

- `m-strangeSpace` → Will add a margin of 37 to each side of the element
- `p-strangeSpace` → Will add a padding of 37 to each side of the element
- `mx-strangeSpace` → It will add the margin on the left and right side of the element

Classes continue for each possible side of margins and paddings.

The last step is to import this file before anything else into the `index.js` file. This way the customization function is called before anything else and React Native Wind will set the changes before the first component is rendered.

```js [title="index.js"]
import './wind.config';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

We're done, you've created your first customization to the library, to know if a utility is customizable and how you can achieve your goal, visit directly the page of the utility, a subchapter is always dedicated to customizations.

Now we can use the classes created within the elements we prefer in this way:

```jsx
import React from "react";
import { View } from "react-native";
import { s } from "react-native-wind";

export const CoolComponent = () => {
  return <View style={s`mx-strangeSpace p-strangeSpace`} />;
};
```
