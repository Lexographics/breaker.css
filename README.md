# breaker.css - css bundle & Custom Elements for Web

Breaker.css is an auxiliary library for web projects
![Representation of breaker.css library](https://raw.githubusercontent.com/Lexographics/breaker.css/main/img/repr.png)


## How To include breaker.css to your project

**To include latest version into your project**
```html
   <link rel="stylesheet" href="breaker.latest.css">
   <script src="breaker.latest.js" defer></script>

   </head>
```
include breaker.css and breaker.js files in the **<head>** tag


## Testing
To see the components of breaker.css, you can run [test.html](test.html) file in a local server


## Documentation

**Elements:**
- Button
   ```html
      <a href="/page" class="btn bg-dark"> Button Text </a>
   ```


**Classes:**
- Background
   ```css
      .bg-dark  /* theme with dark  colors */
      .bg-white /* theme with light colors */
      .bg-green /* theme with green colors */
      .bg-red   /* theme with red colors */
   ```

- Outline
   ```css
      .bg- classes already sets outline colors but you can override it with:
      
         .outline-dark
         .outline-white
         .outline-green
         .outline-red

         .outline-none or .no-outline /* both classes are same */
   ```
   * Outline width:
   ```css
      .outline-10   (0, 2, 4, 6 ... 10) /* Sets outline width in % */
      .outline-10px (0, 2, 4, 6 ... 10) /* Sets outline width in px */
   ```


- Rounding
   ```css
      .round-10   (0, 10, 20, ... 100) /* Rounds borders % */
      .round-10px (0, 2, 4, 6 ... 20) /* Rounds borders in px */
   ```
