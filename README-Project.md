# Living Style Guides


## Purpose

We want to build a style guide for each site that uses the same CSS files we use on our website. We also want to ensure we use version controlling.


## Objectives

In order to avoid duplication of files and documenation we will use a single set of [SASS] files to do the heavy lifting. We will use [Grunt] to run some tasks to parse the SASS into CSS. And Hologram will be used to build the style guide. Last, we will use [Git] to manage versioning.

## Goals

1. Work with web dev to build out a SASS framework for our site
2. Decide on a process for managing the Style Guide
    a. Creative manages style guide
    b. Web Dev manages SCSS and the build of CSS
3. Build the workflow for managing the Style Guide
    a. SASS managed with Git or Subversion
    b. Creative responsible for deciding design changes and checking in changes to a Creative Sandbox
    c. Web Dev responsible for merging the Sandbox changes into Staging.
    d. Changes made to CSS before updating the Style Guide need to be pulled down to Creative Sandbox and documented in Style Guide or rejected.
4. Start documenting the Style Guide


### Steps to Building/Updating the Style Guide

1. Navigate to the site within the SASS Directory
2. Create and comment the [SASS] files, using the hologram framework, to document styles
3. Generate the CSS files from the SCSS hologram framework, preserving block (/* */) comments (Command: `grunt sass`)
  + If you do not generate the CSS any rules you have written won't be displayed in "the-guide"
4. Generate the Style Guide from the SCSS files using Hologram (Command: `hologram`)


## Creating Hologram Style Guide Blocks with Hologram Comments

All we have to do to maintain the style guide is add special block comments to the SCSS files. Hologram will look in the SASS directory for any SCSS files with the block comments. Based on the categories it finds in all the available block comments it will build one HTML file per category in "the-guide" directory at the root of the project.

This is the Hologram block comment template:

```
	/*doc
	---
	title: the title you want to see in the style guide
	name: the name you will use to reference in the "category" and "parent" attributes
	category: This creates a page with this title and the value should be the "name" of the top level category page you wish to create
	parent: the value should be the "name" of the content you wish to nest this under. This does not create a page.
	---

	You can enter any copy here...on as many lines as you would like using markdown...

	```html_example
	<button class="btn btnDefault">Click</button>
	<a class="btn btnPrimary" href="http://trulia.com">Trulia!</a>
	```

  You may also enter any copy here...on as many lines as you would like using markdown...

	*/
```

This is an example (see existing files SCSS files for more examples):

```
  /*doc
  ---
  title: Buttons
  name: button
  category: Atoms
  ---

  Use <button> instead of <a> in a banner as the primary call to action.

  ```html_example
  <button class="btn btnDefault">Click</button>
  ```

  */
```

This is what it would generate: [Trulia's Style Guide](http://trulia.github.io/hologram-example/index.html)

Visit [Hologram on Github](https://github.com/trulia/hologram) for more documentation on how to configure block comments.


### Things to Know About Hologram

_You do not need to process SCSS into CSS before running `hologram`. Hologram will read SCSS files and generate the HTML from these directly._

You can run the `hologram` command from the parent "../style" directory to generate the style guide in "../style/the-guide/".


### Our SASS Framework

**Note:** If you make changes to the styles within an SCSS file you will need to process SCSS into CSS (Command: `grunt sass`) before or after running `hologram`. Otherwise the latest styles won't be displayed in the style guide.

Each site's SCSS files will be organized in the following cascade:

1. Global
  1. Resets
  2. 3rd Party Frameworks (e.g. Bootstrap)
2. Current Demandware CSS (converted to SCSS)
  1. Global
  2. Fonts
3. New SASS (w/ Hologram comments)
  1. Atoms CSS (Atomic CSS by [Pattern Lab])
  2. Molecultes CSS
  3. Organisms CSS
  4. Templates CSS
  5. Pages CSS


## Reference Links

+ [Bootstrap]: http://getbootstrap.com/
+ [Bourbon]: http://bourbon.io/
+ [Bower]: http://bower.io/
+ [Git]: http://git-scm.com/
+ [Grunt]: http://gruntjs.com/
+ [Hologram]: http://trulia.github.io/hologram/
+ [Pattern Lab]: http://patternlab.io/
+ [SASS]: http://sass-lang.com/
+ [Yeoman]: http://yeoman.io/


_Ignore Everything Below This Line_
--------------------------------
### Steps Taken to Setup This Project


####  Build Repo

1. Setup local repo via `git init`
  1. Create a README.md
  2. Add it to the local Repo `git add .`
  3. Commit it to the local Repo `git commit -m "message here"`
2. Setup remote "network" repo via `git init --bare` on a network folder
3. Add remote origin: `git remote add origin /path/to/network/ to tie the 2 together
4. Push the local repo to the remote repo via `git push origin master`


#### Initialize Hologram

1. Initialize Hologram with `hologram init`
  + This will add "doc\_assets and a default "hologram\_config.yml" file
2. Create necessary directories for file management
  1. "assets" directory for SASS, HAML, and other files
    1. "sass" - for custom sass (including the styles.scss as the master file)
    2. "haml" - for haml html
    3. "css" - for css
    4. "js" - for javascript
    5. "libs" - for Bower managed assets, like Bourbon and Bootstrap
  2. "build" directory for dumping files generated by Grunt tasks (CSS, HTML, JS, etc)
  3. "the-guide" directory for the Hologram generated style guide


#### Initialize and Setup Grunt

_In the future we need to use [Yeoman]_

1. Create the Gruntfile.js and package.json with `grunt-init ld-grunt-boilerplate`
2. Configure Grunt Tasks
  1. Update paths in the /tasks/options/Watch.js (`grunt dev` to activate local server)
    + paths are relative to the Gruntfile.js location


#### Initialize Bower and Download Assets

1. Follow the steps here to [install bower](http://bower.io/)
2. Add Bower components to "/styles/libs/..." folder
  + `bower install bootstrap`
  + `bower install bootstrap-sass-official`
  + `bower install bootstrap-offcanvas`
  + `bower install bourbon`
  + `bower install fontawesome`
  + `bower install jquery`
  + `bower install jquery-ui`


####  Configure Hologram

**Note:** _You need to process SCSS into CSS before running Hologram in order to see the updated styles._

<!-- This is where you stopped (after item 1 below). -->

1. Configure the hologram\_config.yml to point to "source" and "destination" directories (input/output)
2. Configure the header and footer html files within "/doc\_assets/..." to point to necessary CSS and JS that will power the look & feel of the style guide.
  + Add custom CSS in a sub-directory that will power the look & feel of the code blocks
3. Setup the default SCSS files with their appropriate [Hologram] CSS comment blocks
  + Atoms, Molecules, Organisms, Pages, and Templates will all be pages
  + All other SCSS files will use one of these categories or point to themselves as a "parent" category.
4. Create an "index.html" for the Style Guide by adding "index.md"


#### Build SASS Files

1. Create the cascade in the "styles.scss" - @import and link up the bower files
2. Build the other SASS files - _imported_.scss files


#### Test the Setup

1. Run `hologram` to process the html for the style guide
2. Run `grunt dev` to hook up the local server and watch changes on the SASS files
3. Use LiveReload in Chrome to see changes to the Style Guide as you save SASS files