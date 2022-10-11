# What is this repo for

This is a web page made by me to document some projects I've worked on as a programmer, written in React.Js.

You can find this page at: https://vijoplays.github.io/profile/.

# Using the code

**Simply debug the 'src\index.tsx'-file by pressing 'F5' (or whatever the 'Run/Debug' key binding is in your VSCode).**

## To publish the app

Run the following script:

> npm run deploy

# Structure

## src/components

The Components that we need to reuse are stored here. E.g. a customized Header-bar might be stored here.

## src/layouts

The layouts are stored here.

## src/locales

The translations will be stored here. Simply create a new directory (e.g. 'es' for Spanish) and drop a 'translation.json' in there with the contents of the other translation files and adjust the values of the keys. 

## src/pages

The actual web pages will be stored in here.

## src/services

Any service you might need should be stored in here.

## src/themes

If you need to modify the standard theme, you can adjust it here

## src/types

Any models you create can be stored here (e.g. a 'Person' object can be stored here).

## src/utils

Here are helper files stored, or global variables.
