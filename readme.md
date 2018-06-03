# Basic style merger

This basic style merger works to compile and compress '*.SCSS' to a sytles.css file. 
This is done with gulp and gulp sass and gulp concat. 

## Setup 

```
git clone git@github.com:magnNorth/gulp-sass.compiler.git

cd gulp-sass.compiler

npm install 
```

## Source

   Add styles in folders or just files
   
   _Ensure the files use the scss file extension_
   
   The build will collate all files and combine into the deploy folder


## Use

one off compile.

```
npm run build 
```

Watch 

```
npm run watch
```


## Deploy

The build drops the new file in to deploy folder.
