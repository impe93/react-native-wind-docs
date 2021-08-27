---
sidebar_position: 1
---

# Introduction

## What is it?

This library comes from the need to write the style of an application in a quick and simple way, using a concise and easy to remember API.

React Native Wind is strongly inspired by [TailwindCSS](https://tailwindcss.com/) and, as you will see, even the names of the classes used are often the same.

React Native Wind is a utility-first style library that offers a low-level API. By using this approach you avoid writing the same style rules over and over again. These rules can be composed to create most of your necessary styles.

## Comparison with other libraries

### What method we choose to develop

There are already many libraries that embrace the utility-first styling method, some following TailwindCSS in detail, i.e. offering a method that interprets classes and transforms them into objects used by the RN styling system; others instead creating ad-hoc components that expose all the properties that go to change the style.

React Native Wind was born with the intent to fulfill the first styling method described above, covering therefore the basic styling of the components (utility-first). Once covered all the basic part, it would be nice to extend the library with more complex components, for situations that are difficult, if not impossible to cover with the basic React Native styling system.

### Differences from other libraries

The most used library at the moment that uses this principle, generates the React Native style through a build process that does a **reverse-engineering from the classes offered by TailwindCSS**. This method has pros and cons.

**Pros**:

- The library will always be updated to the latest TailwindCSS standards.
- Less code always means less bugs
- Smaller codebase to maintain

**Cons**:

- Too much dependence on TailwindCSS
- Based entirely on TailwindCSS documentation
- This doesn't take into account the peculiarities of React Native
- There will never be features inherent only to the React Native styling system.
- No editor autocomplete on class names

What **React Native Wind** wants to achieve is to **remain more related to React Native than TailwindCSS** and only take inspiration from the latter, **offering features that can only exist on React Native**. Of course, this means not being able to take advantage of TailwindCSS reverse engineering and all the benefits it brings. Summing up these are the pros and cons that I see of React Native Wind.

**Cons**:

- Styles are hard coded and harder to maintain
- More code often means a few more bugs

**Pros**:

- No dependency on TailwindCSS
- Own library documentation
- Convenient features for React Native users
- Autocomplete of class names
- Created with React Native in mind and not a port from the web
- More control over features and the library

## Roadmap

React Native Wind is very young and there is a lot of work to do, these are our priorities in order:

1. Classes that cover basic cases
2. Variants based on the user's operating system
3. Variants based on user theme
4. Specific classes based on React Native APIs
5. Complex components to develop parts of UI that are difficult or impossible to cover on React Native with base classes.

In conjunction with the development of the points above we will always keep the documentation up to date.

If you want to know exactly how far React Native Wind is with the development of a certain feature you can always refer to the [official repository on GitHub](https://github.com/impe93/react-native-wind).
