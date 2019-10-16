✅ styled-components
* 다른 스타일에서 컴포넌트 자체에 스타일 주기
```css
const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  /* hover를 하면 Image, Rating 컴포넌트에 스타일을 지정하고 싶을 때 */
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;
```

* props 스타일에 넘기기
```jsx harmony
const S_Div = styled.div`
  ...
  background-image: url(${props => props.bgImage});
  ...
`;

...

<S_Div
    bgImage={'https://imageUrl.com'}
/>
```
