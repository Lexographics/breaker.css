# breaker.css - css bundle & Custom Elements for Web

Breaker.css is an auxiliary library for web projects



## How To include breaker.css to your project

**To include latest version into your project**
```html
   <link rel="stylesheet" href="breaker.latest.css">
   <script src="breaker.latest.js" defer></script>

   </head>
```
include breaker.css and breaker.js files in the **<head>** tag




## Documentation

Custom elements:
- b-btn
   ```html
      <b-btn href="/page" class="bg-dark"> Button Text </b-btn>
   ```


Classes:
- Background
   ```css
      .bg-dark  /* theme with dark  colors */
      .bg-white /* theme with light colors */
   ```

```css
.bg- classes``` already sets outline colors but you can change it with:
   ```css
      .outline-dark
      .outline-white

      .outline-none or .no-outline /* both classes are same */
   ```


- round
   ```css
      .round-10   (0, 10, 20, ... 100) /* Rounds borders % */
      .round-10px (0, 2, 4, 6 ... 20) /* Rounds borders in px */
   ```
