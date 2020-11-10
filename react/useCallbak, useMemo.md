✅ useCallbak, useMemo

* `useCallback`
  * `메모이제이션된 '콜백'을 반환`
  * `자식 컴포넌트에` 콜백을 전달할 때, `불필요한 렌더링`을 방지하기 위해
    ```jsx
    const memorizedCallback = useCallback(() => {
      doSomething(a, b);
    }, [a, b]); // function , dependencies
    ```
* `useMemo`
  * `메모이제이션된 '값'을 반환`
  * 모든 렌더링 시, `고비용 계산`을 방지하기 위해
    ```jsx
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
    ```