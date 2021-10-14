## Tailwind CSS JIT - Initial Setup 

1. 
```
npm init -y
```

2. install from npm 
```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

3. the tailwind and postcss config file
```
npx tailwindcss init -p
```

4. create html file
```
touch index.html
```

5. make two css file, first for the source file, second for the public/build file

6. in the css source file, paste these code below
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. inside package.json, rewrite the script object like the code below
```json
"scripts": {
"build": "tailwindcss -i (css source file path) -o (css public file path) --watch",
"production": "NODE_ENV=production tailwindcss -i (css source file path) -o (css public file path)",
"production:minify": "NODE_ENV=production tailwindcss -i (css source file path) -o (css public file path) --minify"
},
```

8. inside tailwind.config.js, add these code below (rewrite just the purge and other things above it)
```javascript
module.exports = {
  // the most important thing
  mode: 'jit',

  // (the thing is, it's the path of the file that you want to purge)
  purge: ['./PATH/**/*.html', or 'index.html'],

  // . . . . (another configuration)
```
9. connect the css public/build file to the html file with the html link tag
```html
<!-- html file example -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- . . . . (another head structure) -->
        
        <!-- this is the example how to connect the build css file to the html file -->
        <link rel="stylesheet" href="PATH/PATH/file-name.css">
    </head>

<!-- . . . . (another content) -->
```

10. run the build command (for compiling the css source file into the public/build file) 
```
npm run build
```


## Optional Things
- When finish the project, you can do the command below (make the project is on production stage)
```
npm run production
``` 

- Or, minify it too (make the project is on production stage and get minified)
```
npm run production:minify
```
(this gonna minify your css file, and make it a lot faster to load in the browser
