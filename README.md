WebSNAP
=======

Install Instructions:
---------------------

1. install HomeBrew, if not installed

    `ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

2. install node, if not installed

    `brew install node`

3. in the websnap root, install npm packages

    `npm install`

4. install Grunt.js command line interface

    `npm install -g grunt-cli`

Running WebSNAP:
----------------

1. `grunt compile` to perform an initial compile
2. `grunt preview` to open an auto-reloading dev server at `localhost:9000`
