function showStep(step) {
    document.querySelectorAll(".step").forEach(el => el.style.display = "none");
    document.getElementById(step).style.display = "block";
}

function validateEmail() {
    showStep('step-2'); // Giả lập gửi mã và chuyển bước tiếp theo
}

function validateCode() {
    showStep('step-3'); // Chuyển đến bước nhập mật khẩu mới
}

function redirectToLogin() {
    alert("Mật khẩu của bạn đã được cập nhật thành công!");
    window.location.href = "../hoi/DangNhap.html"; // Chuyển hướng về trang đăng nhập
}

function validatePassword(event) {
    event.preventDefault(); // Ngăn chặn reload trang khi submit form

    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword === confirmPassword) {
        setTimeout(() => {
            alert("Mật khẩu của bạn đã được cập nhật thành công!");
            window.location.href = "../hoi/DangNhap.html"; // Chuyển hướng về trang đăng nhập
        }, 1000); // Delay 1 giây để hiển thị thông báo
    } else {
        alert("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại!");
    }
}