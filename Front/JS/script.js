
//로그인 함수 구현

async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorText = await response.text(); // 서버에서 제공하는 오류 메시지 읽기
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}. Details: ${errorText}`);
        }

        const result = await response.json();

        if (result.success) {
            window.location.href = '../HTML/SecondPage.html';
        } else {
            alert('Login failed: Invalid ID or password.');
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert(`There was a problem with the login request: ${error.message}`);
    }
}

