✅ ErrorBoundary

* 특정 `일부분에 존재하는 Error`가 `앱 전체를 중단시켜서는 안된다.`
* React16부터 이 문제를 해결하게 위해 ErrorBoundary를 개념이 도입되었다.
* ErrorBoundary가 포착하지 못하는 Error
  * `이벤트 핸들러`
  * `비동기적 코드` (예: setTimeout 혹은 requestAnimationFrame 콜백)
  * `서버 사이드 렌더링`
  * 자식에서가 아닌 `ErrorBoundary자체에서 발생하는 Error`
* 생명주기 메서드인 `static getDerivedStateFromError()` 와 `componentDidCatch()` 중 하나 (혹은 둘 다)를 정의하면 클래스 컴포넌트 자체가 ErrorBoundary가 된다.

* 사용 예
  * ErrorBoundray.js
    ```jsx
    import React from 'react';

    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {
        // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        // 에러 리포팅 서비스에 에러를 기록할 수도 있습니다.
        // logErrorToMyService(error, errorInfo);
      }

      render() {
        if (this.state.hasError) {
          // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
          return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
      }
    }

    export default ErrorBoundary;
    ```
  * App.js
    ```jsx
    import React, { Fragment } from 'react';
    import ErrorBoundary from './ErrorBoundary';

    import Small from './Small';

    const App = () => {
      return (
        <Fragment>
          <div>111</div>
          {/* ErrorBoundary로 대상 컴포넌트를 감싸준다. */}
          <ErrorBoundary>
            <Small />
          </ErrorBoundary>
        </Fragment>
      );
    };

    export default App;
    ```
  * Small.js
    ```jsx
    import React from 'react';

    const Small = () => {
      // Error 발생
      throw new Error('Small Component Error!');

      return (
        <div>
          small
        </div>
      );
    };

    export default Small;
    ```
  * 결과
    * 문제가 발생한 특정 컴포넌트를 경계로 Error 처리가 되었다.
      ![errorboundary1](/resources/errorboundary1.PNG)
  * ErrorBoundary를 사용하지 않을시, 아래와 같이 `앱 전체가 깨지게 된다.`
    ![errorboundary2](/resources/errorboundary2.PNG)