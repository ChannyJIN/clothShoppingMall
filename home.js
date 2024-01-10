document.addEventListener('DOMContentLoaded', function () {
    var addToCartButton = document.getElementById('addToCartButton');
    addToCartButton.addEventListener('click', function () {
        var quantityInput = document.querySelector('.table1 input[type="text"]');
        var quantity = parseInt(quantityInput.value);
        if (!isNaN(quantity) && quantity > 0) {
            var confirmationMessage = '장바구니에 ' + quantity + '개가 추가되었습니다.';
            alert(confirmationMessage);
            // 추가된 개수에 대한 처리를 여기에 추가할 수 있습니다.
            // 메시지가 확인되면 텍스트박스 비우기
            quantityInput.value = '';
        } else {
            alert('올바른 개수를 입력하세요.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var orderButton = document.querySelector('.table2 .Button');
    orderButton.addEventListener('click', function () {
        // 1. 배송지 선택 확인
        var deliveryRadio = document.querySelector('.table2 input[name="1"]:checked');
        if (!deliveryRadio) {
            alert('배송지를 선택해주세요.');
            return;
        }
        // 2. 배송정보 입력 확인
        var senderInput = document.querySelector('.table2 input[name="sender"]');
        var receiverInput = document.querySelector('.table2 input[name="receiver"]');
        var addressInput1 = document.querySelector('.table2 input[name="address1"]');
        var addressInput2 = document.querySelector('.table2 input[name="address2"]');
        var phoneInput1 = document.querySelector('.table2 input[name="phone1"]');
        var phoneInput2 = document.querySelector('.table2 input[name="phone2"]');
        var phoneInput3 = document.querySelector('.table2 input[name="phone3"]');
        if (
            !senderInput.value ||
            !receiverInput.value ||
            !addressInput1.value ||
            !addressInput2.value ||
            !phoneInput1.value || !phoneInput2.value || !phoneInput3.value
        ) {
            alert('배송정보를 입력해주세요.');
            return;
        }
        // 3. 휴대전화 번호 확인
        if (!phoneInput1.value.startsWith('010')) {
            alert('전화번호가 010으로 시작하지 않습니다. 확인해주세요.');
            return;
        }
        //4. 전화번호가 4자리의 숫자인지 검사
        if (!/^\d{4}$/.test(phoneInput2) || !/^\d{4}$/.test(phoneInput3)) {
            alert('올바른 휴대전화 번호를 입력해주세요. (힌트: 4자리의 숫자로 입력)');
            return;
        }
        // 주문 성공
        alert('주문이 완료되었습니다.');
    });
});

// 이메일 선택 콤보박스의 변경 이벤트 핸들러
function updateEmailText() {
    // 이메일 입력란과 선택된 콤보박스의 값을 가져와서 표시
    var emailInputValue = document.getElementById('emailInput').value;
    var emailSelectValue = document.getElementById('emailSelect').value;
    var selectedEmailText = emailInputValue + '@' + emailSelectValue;

    // 선택된 이메일 텍스트를 업데이트
    document.getElementById('selectedEmailText').innerText = selectedEmailText;
}


//우편번호 찾기  다음 api사용
function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 선택한 주소 정보(data) 활용
            // 예시: 우편번호, 주소, 상세주소
            var postcode = data.zonecode; // 우편번호
            var address = data.address; // 주소
            var detailAddress = data.buildingName || data.apartment; // 건물명 또는 아파트 이름
            // 이후 필요한 작업 수행
            // 예시: 우편번호 및 주소를 특정 input 요소에 설정
            document.getElementById('address1').value = postcode;
            document.getElementById('address2').value = address;
            document.getElementById('address3').value = detailAddress;
        }
    }).open();
}