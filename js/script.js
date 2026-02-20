$(function() {

    // --- 1. 회원가입 로직 ---
    const signupBtn = document.getElementById('signButton');
    if (signupBtn) {
        signupBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('log_name').value;
            const id = document.getElementById('log_id').value;
            const pw = document.getElementById('log_pwd').value;

            if (name && id && pw) {
                const user = { name, id, pw };
                localStorage.setItem('user', JSON.stringify(user));
                alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
                location.href = 'login.html'; 
            } else {
                alert('빈 곳을 채워주세요.');
            }
        });
    }
    
    // --- 2. 로그인 로직 ---
    const loginBtn = document.getElementById('log_next');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const inputId = document.getElementById('log_id').value;
            const inputPw = document.getElementById('log_pwd').value;
            const savedUser = JSON.parse(localStorage.getItem('user'));

            if (!savedUser) {
                alert('가입된 정보가 없습니다. 계정을 생성해 주세요.');
                location.href = 'signup.html';
            } else if (inputId === savedUser.id && inputPw === savedUser.pw) {
                // 핵심: 로그인 성공 시에만 isLoggedIn을 true로 설정
                localStorage.setItem('isLoggedIn', 'true');
                alert(`${savedUser.name} 님, 환영합니다!`);
                location.href = 'mypage.html'; 
            } else {
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        });
    }

    // --- 3. 마이페이지 진입 제어 및 정보 표시 (중복 제거됨) ---
    const userInfoDiv = document.getElementById('userInfo');
    if (userInfoDiv) { 
        const savedUser = JSON.parse(localStorage.getItem('user'));
        const loginStatus = localStorage.getItem('isLoggedIn');

        // 로그인 상태('true')일 때만 정보를 보여줌
        if (savedUser && loginStatus === 'true') {
            userInfoDiv.innerText = `${savedUser.name}님 환영합니다.`;
            userInfoDiv.style.color = "#ffffff";
        } else {
            // 로그아웃 상태이거나 정보가 없으면 즉시 차단
            alert('로그인이 필요한 서비스입니다.');
            location.href = 'login.html';
        }
    }

    // --- 4. 로그아웃 버튼 로직 (로그인 체크 강화) ---
    const logoutBtn = document.getElementById('logoutButton');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault(); // 기본 이동 동작 방지

            const loginStatus = localStorage.getItem('isLoggedIn');

            // 로그인 상태가 아닐 때
            if (loginStatus !== 'true') {
                alert('현재 로그인 상태가 아닙니다. 로그인 후 이용해 주세요.');
                location.href = 'option.html';
                return; // 로직 중단
            }

            // 로그인 상태일 때만 로그아웃 실행
            localStorage.removeItem('isLoggedIn');
            alert('로그아웃 되었습니다.');
            location.href = 'login.html';
        });
    }

    // --- 5. 회원 탈퇴 버튼 기능 (로그인 체크 추가) ---
    const deleteAccountBtn = document.getElementById('signOut');
    
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', () => {
            // 현재 로그인 상태인지 확인
            const loginStatus = localStorage.getItem('isLoggedIn');

            if (loginStatus !== 'true') {
                // 로그인 상태가 아니면 실행 중단
                alert('로그인 후 이용 가능합니다.');
                location.href = 'option.html';
                return; // 여기서 함수 종료
            }

            // 로그인 상태일 때만 탈퇴 확인 창 띄우기
            if (confirm('정말로 회원 탈퇴를 하시겠습니까? 모든 정보가 삭제됩니다.')) {
                localStorage.removeItem('user');
                localStorage.removeItem('isLoggedIn');
                alert('회원 탈퇴가 완료되었습니다.');
                location.href = 'login.html';
            }
        });
    }

});