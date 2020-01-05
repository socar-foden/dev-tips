✅ arguments의 caller, callee
* callee: 자기 자신 함수를 참조, 익명 함수의 재귀에 사용
* caller: 자신을 호출한 함수를 참조
<hr />

* 둘 다 비표준이라 <b>지양하는게 좋다.</b>
* callee는 사용할 이유가 전혀 없고, caller는 예상과 다르게 행동될 여지가 다분하다.