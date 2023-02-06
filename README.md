# React with vite

To start a new project with React and vite run below command
``` npm create vite@latest ```

Add project name and the choose react as framework and typescript as variant.

# Why React with vite
Unlike a CRA or bundler-based build setup, Vite does not build the entire application before serving. It divides the application modules into two categories: dependencies and source code.

Dependencies are plain JavaScript that do not change often during development (large component libraries like mui).

Source code often contains non-plain JavaScript that needs transforming (e.g. JSX, CSS) and will be edited very often.
Vite serves source code over native ESM.

What is native ESM? How does it improve the dev server start time?
ESM stands for EMACScript modules. It is a recent addition to the JavaScript language specification that deals with how modules are loaded in the Javascript application.


Benefits of building a dev server around native ESM
There is no need for bundling. That’s a big chunk of work that you don’t have to do anymore.
Native EMS is on-demand by nature. Based on the browser request, Vite transforms and serves source code on demand. If the module is not needed for some screen, it is not processed. The diagram shows how the native ESM-based dev server starts with only the required modules loaded.

# Vite Features
Vite provides out-of-the-box support for TypeScript, JSX, CSS, and more.

CSS - Importing `.css` files injects content to the page via a` <style>` tag with HMR support. 
Vite provides support for .scss, .sass,.less, .styl and .stylus files, PostCSS, and CSS.  modules.



# Installation Command 

``` npm install ```

# Run Command

``` npm run dev ```

# Build Commands 

``` npm run build ```

# Packages Used

**MUI Base** - MUI Base is a library of unstyled React UI components. These components were extracted from Material UI, and are now available as a standalone package. They feature the same robust engineering but without implementing Material Design.

