# Triplify App 
- **Live Link:** [Triplify App](https://trip-lify.netlify.app/)
![Triplify App Thumbnail](src/assets/images/Triplify_thumbnail.png)


- **Acknowledgements:** big thanks to [Mr. Web Designer](https://www.youtube.com/@MrWebDesignerAnas) for the [tutorial video](https://www.youtube.com/watch?v=KRKMlwywJB4).

## About This Repository
This is a playground for me to learn more about CSS, styled-components, and making web apps mobile responsive.

## What Did I Learn?

### Challenges with Outdated Technologies

Sometimes, libraries used in tutorials can be outdated and might not work well with the latest technology. For example, the `AOS` aniamtion library works for simple components like `<p>` and `<span>`, but it didn't work well with custom styled-components. It took me a day to troubleshoot issues with AOS animations, whereas it only took me two hours to learn and apply animations from a more modern library, `react-awesome-reveal`. This newer library supports the latest React version (v18) and works out of the box in most cases.

### Implementing a Dynamic Hamburger Menu

I learned that one way to display the hamburger menu dynamically based on the device's screen width is by using `clip-path: polygon(...)`.
```css
// Get the polygon values at https://bennettfeely.com/clippy/
clip-path: ${({ $isActive }) =>
  $isActive
    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    : 'polygon(0 0, 100% 0, 100% 0, 0 0)'};
```

### Enhancing User Experience with External Libraries

Using external libraries can be beneficial. For instance, `react-scroll` makes scrolling smooth when users navigate up and down the page. Without this, scrolling can be laggy due to many high-quality images being rendered on the page.


### Building a Reusable Grid Layout
I learned to create a reusable grid layout. Here's the code:

```css
const grid = (val: string) => css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${val}, 1fr));
  gap: 1.5rem;
`;
export const GridLayout = styled.div<{ $columnWidth: string }>`
  ${({ $columnWidth }) => grid($columnWidth)};
  color: ${({ theme }) => theme.lightColor};
`;
```
The CSS property `grid-template-columns: repeat(auto-fit, minmax(${val}, 1fr));` is used to define the layout of columns in a CSS Grid container. Here's a breakdown:

- `repeat(auto-fit, ...)` repeats the specified column definition as many times as possible to fit the container. `auto-fit` means the grid will automatically adjust the number of columns to fit the available space.
- `minmax(${val}, 1fr)` sets a minimum and maximum size for each column.
  - `${val}` is the minimum size of the column, typically a variable or a fixed size (e.g., 200px).
  - `1fr` is the maximum size of the column. Each column can grow to take up a fraction of the remaining space in the container.

Putting it all together, `grid-template-columns: repeat(auto-fit, minmax(${val}, 1fr))` creates a responsive grid layout where the number of columns adjusts automatically to fit the container width, and each column can grow to take up a fraction of the remaining space, ensuring that the columns fill the container evenly 👌.
