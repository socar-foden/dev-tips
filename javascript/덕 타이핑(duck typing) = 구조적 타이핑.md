✅ 덕 타이핑(duck typing) = 구조적 타이핑

* `동적언어`의 프로그래밍 기법으로 `'오리의 속성, 행동을 가지고 있으면 오리로 봐도 된다.'`라는 관점에서 보는 것
* `클래스`, `인터페이스`없이(없으니) 특정 객체가 A의 `프로퍼티`, `메서드`를 가지고 있으면 A로 취급한다.
* 동적언어와 마찬가지로 같이 `구조적으로 자유`로울 수 있으나, 에러를 잡기 어렵고, `런타임 에러가 발생하기 쉽다.`

<hr />

* Java와 비교해보면 알기 쉽다.
* `Java`
  ```java
  public class Main {
      public static void main(String[] args) throws Exception {
          quackWrapper(new Duck());
          /** Person은 quack을 구현하고 있지만, Quackable을 구현하지 않아 컴파일 에러를 발생시킽다. */
          // quackWrapper(new Person());
      }

      static void quackWrapper(Quackable quackable) {
        quackable.quack();
      }
  }

  interface Quackable {
    void quack();
  }

  class Duck implements Quackable {
    @Override
    public void quack() {
      System.out.println("duck-quack !!");
    }
  }

  /** quack 메서드를 가지고 있지만, Quackable를 구현하지 않았다. */
  class Person {
    public void quack() {
      System.out.println("person-quack !!");
    }
  }
  ```

* `javascript`
  ```javascript
  class Duck {
    quack() {
      console.log('duck-quack !!')
    }
  }

  class Person {
    quack() {
      console.log('person-quack !!')
    }
  }

  function quackWrapper(quackable) {
    quackable.quack()
  }

  quackWrapper(new Duck())
  quackWrapper(new Person())
  ```

* `Typescript`의 경우, 타입 체크를 할 때 특정 인터페이스를 구현하지 않아도 같은 멤버를 가지고 있을 경우 해당 인터페이스를 구현했다고 판단, 따 덕 타이핑의 단점인 `안정성`을 보완할 수 있다.
* (물론 Person이 Quackable을 구현하는 것이 더 좋아 보이지만)

  ```typescript
  interface Quackable {
    quack(): void
  }

  class Duck implements Quackable {
    quack() {
      console.log('duck-quack !!')
    }
  }

  /** Person은 Quackable을 구현하지 않았지만, quack 메서드를 가지고 있다. */
  class Person {
    quack() {
      console.log('person-quack !!')
    }
  }

  function quackWrapper(quackable: Quackable) {
    quackable.quack()
  }

  quackWrapper(new Duck())
  quackWrapper(new Person()) // ok: 컴파일 에러가 발생하지 않는다.
  ```