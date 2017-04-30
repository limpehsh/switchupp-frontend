# Quasar App

> A Quasar project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

RUN THE PROJECT WITH THE
quasar dev
COMMAND FOR TESTING as opposed to npm start!!!

Some packages to install on Atom to make handling vue files
and our project easier:

linter packages:
linter-eslint
linter-javac
linter-sass-lint
lint-sass-vue
(these 2 will have to be installed anyway if you try installing any of the above so
just install the top 4)
linter
linter-ui-default

vue-related packages:
language-vue
language-vue-component
vue2-autocomplete
vue-format

Have a read of Vue.js here: https://vuejs.org/v2/guide/
and the framework we're using: http://quasar-framework.org/guide/

Before starting out in Vue.js, I suggest reading the basics from their
easy-to-follow documentation for a while or try these posts on Medium
to get a feel of setting up a Vue.js project since they do teach you
how to structure a Vue.js project:
https://medium.com/codingthesmartway-com-blog/vue-js-2-quickstart-tutorial-2017-246195cfbdd2
https://medium.com/@bradfmd/vue-js-project-setup-2b39fcc8867d
(For 2nd link, the way he set up the directories will differ to what we will be
using so just take note of that)

After looking those up, come back to read the rest below to find out
some standards/quirks of this particular project:

1) Since we're using ESLint, in our Vue Components, our indentation needs
to be 2 spaces to follow Javascript's standard. This could be changed in
the .eslintrc.js file but I decided against it since it's a standard and
it'll be good to follow for future projects we might undertake requiring
Javascript

2) Local image binding in Vue.js is weird. If I place my images under
the assets directory, there is no way for me to bind them...only option is to write out the full image path.
Current way I found out is to place the images in /src/statics. That will work for local images.
E.g.

``` html
<template>
  <div>
    <img :src="IMGPATH"> <!-- or -->
    <img v-bind:src"IMGPATH"> <!-- for the binding -->
    <!-- : is the shorter form for v-bind in this case -->
  <div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      IMGPATH: './statics/rowlet.jpg'
    }
  }
}
</script>
```

3) For colors, if you want to have some animation when clicking a button, you have to stick
to primary colors from what I have seen so far. So if you specify the button as:
```js
<button class="bg-red">Sign Up</button>
```
it is fine. But if you use something like
```js
<button class="bg-red-13">Sign Up</button>
```
it will not be fine since it's using the shade of red...? Not too sure about this so for
buttons, lets stick to primary colors for now.

4) We currently are using the default theme app.mat.style in the src/themes folder. It is
great for the most part, however, when clicking the menu icon, it turns blue since it is
following the default theme. We probably need to change that but lets worry about this
later on.
