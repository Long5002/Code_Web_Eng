// 1. Kho dữ liệu bài học mẫu cho 4 kỹ năng
const lessonsDatabase = {
    listening: {
        title: "🎧 Luyện Kỹ Năng Nghe (Listening)",
        content: `
            <div class="lesson-card">
                <h3>Chủ đề: Giao tiếp hằng ngày (Daily Conversation)</h3>
                <p><strong>Bước 1:</strong> Đọc và nghe đoạn hội thoại ngắn dưới đây:</p>
                <div style="background: #f4f4f4; padding: 15px; border-left: 4px solid #007bff; margin-bottom: 15px;">
                    <em>"A: Hi Jane! Long time no see. How are you?<br>B: Oh, hi Tom! I'm doing great, thanks. How about you?"</em>
                </div>
                <p><strong>Bước 2:</strong> Chọn đáp án đúng cho câu hỏi: <em>How is Jane?</em></p>
                <form id="quiz-form">
                    <label><input type="radio" name="q1" value="a"> She is tired.</label><br>
                    <label><input type="radio" name="q1" value="b"> She is doing great.</label><br>
                    <label><input type="radio" name="q1" value="c"> She is busy.</label><br>
                    <button type="button" onclick="checkAnswer('b')" style="margin-top: 10px; padding: 5px 15px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Nộp bài</button>
                </form>
            </div>
        `
    },
    speaking: {
        title: "🗣️ Luyện Kỹ Năng Nói (Speaking)",
        content: `
            <div class="lesson-card">
                <h3>Chủ đề: Giới thiệu bản thân (Self-Introduction)</h3>
                <p>Mẫu câu cốt lõi: <strong>"Nice to meet you! My name is Long."</strong></p>
                <p><em>Hướng dẫn:</em> Hãy nhấn vào nút Micro bên dưới, đọc to mẫu câu trên để hệ thống ghi âm phát âm của bạn.</p>
                <button type="button" style="background-color: #dc3545; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;" onclick="alert('🎙️ Hệ thống đang mô phỏng ghi âm... Phát âm của bạn rất tốt!')">🎙️ Bắt đầu ghi âm mẫu</button>
            </div>
        `
    },
    reading: {
        title: "📖 Luyện Kỹ Năng Đọc (Reading)",
        content: `
            <div class="lesson-card">
                <h3>Chủ đề: Đọc hiểu đoạn văn công nghệ</h3>
                <p><strong>Đoạn văn:</strong> <em>"Artificial Intelligence (AI) is transforming the world. Many students are now using computer programs to learn English online effectively."</em></p>
                <p><strong>Câu hỏi:</strong> Từ "transforming" trong đoạn văn trên có nghĩa gần nhất với từ nào?</p>
                <label><input type="radio" name="q2" value="a"> Changing (Thay đổi/Biến đổi)</label><br>
                <label><input type="radio" name="q2" value="b"> Destroying (Phá hủy)</label><br>
                <label><input type="radio" name="q2" value="c"> Keeping (Giữ nguyên)</label><br>
                <button type="button" onclick="checkAnswer('a')" style="margin-top: 10px; padding: 5px 15px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Nộp bài</button>
            </div>
        `
    },
    writing: {
        title: "✍️ Luyện Kỹ Năng Viết (Writing)",
        content: `
            <div class="lesson-card">
                <h3>Chủ đề: Sắp xếp từ thành câu hoàn chỉnh</h3>
                <p>Hãy sắp xếp các từ sau thành câu đúng: <strong>English / learning / I / love / .</strong></p>
                <input type="text" id="writing-input" placeholder="Nhập câu trả lời của bạn vào đây..." style="width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                <button type="button" onclick="checkWritingAnswer()" style="padding: 5px 15px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer;">Kiểm tra kết quả</button>
            </div>
        `
    }
};

// 2. Hàm nạp nội dung bài học khi click vào menu
function loadLesson(skill) {
    const lesson = lessonsDatabase[skill];
    if (lesson) {
        document.getElementById('section-title').innerText = lesson.title;
        document.getElementById('lesson-container').innerHTML = lesson.content;
        
        // 1. HIỆN khung bài học bằng cách XÓA class hidden
        if (document.getElementById('learning-section')) {
            document.getElementById('learning-section').classList.remove('hidden');
        }
        
        // 2. ẨN phần trang chủ bằng cách THÊM class hidden
        if (document.getElementById('home-page')) {
            document.getElementById('home-page').classList.add('hidden');
        }
    }
}

// 3. Hàm kiểm tra đáp án Trắc nghiệm
function checkAnswer(correctValue) {
    const selected = document.querySelector('input[name="q1"]:checked') || document.querySelector('input[name="q2"]:checked');
    
    if (!selected) {
        alert("⚠️ Vui lòng chọn một đáp án trước khi nộp bài!");
        return;
    }
    
    if (selected.value === correctValue) {
        alert("🎉 CHÍNH XÁC! Bạn đã trả lời đúng bài tập này và được cộng +10 XP.");
    } else {
        alert("❌ Chưa chính xác rồi! Hãy đọc kỹ lại và thử lại nhé.");
    }
}

// 4. Hàm kiểm tra bài tập Tự Viết
function checkWritingAnswer() {
    const userAnswer = document.getElementById('writing-input').value.trim().toLowerCase();
    const correctAnswer = "i love learning english.";
    
    if (userAnswer === correctAnswer) {
        alert("🎉 QUÁ TUYỆT VỜI! Bạn viết đúng 100% ngữ pháp rồi. (+10 XP)");
    } else {
        alert("❌ Chưa chính xác rồi. Hãy thử lại nhé! \nGợi ý đáp án đúng: 'I love learning English.'");
    }
}

    // Mảng chứa tài khoản hệ thống (Giả lập database)
    // Tạo sẵn một tài khoản mặc định là admin / 123456 để bạn test nhanh
    let usersDatabase = [
        { name: "Quản trị viên", username: "admin", password: "123" }
    ];

    // Hàm chuyển đổi qua lại form Đăng nhập / Đăng ký
    function switchForm(formType) {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        if (formType === 'register') {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        } else {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        }
    }

    // Xử lý khi bấm nút ĐĂNG KÝ
    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value;

        // Kiểm tra trùng tài khoản
        let userExists = usersDatabase.find(user => user.username === username);
        if (userExists) {
            alert("❌ Tài khoản hoặc Email này đã tồn tại trên hệ thống!");
            return;
        }

        // Thêm tài khoản mới vào database giả lập
        usersDatabase.push({ name: name, username: username, password: password });
        alert("🎉 Đăng ký tài khoản thành công! Hãy đăng nhập nhé.");
        
        // Xóa dữ liệu cũ ở form đăng ký và chuyển về form đăng nhập
        document.getElementById('reg-name').value = '';
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-password').value = '';
        switchForm('login');
    }

    // Xử lý khi bấm nút ĐĂNG NHẬP
    function handleLogin(e) {
        e.preventDefault();
        const usernameInput = document.getElementById('login-username').value.trim();
        const passwordInput = document.getElementById('login-password').value;

        // Tìm xem tài khoản có tồn tại không
        let targetUser = usersDatabase.find(user => user.username === usernameInput);

        if (!targetUser) {
            alert("⚠️ Tài khoản chưa được đăng ký! Vui lòng kiểm tra lại hoặc tạo tài khoản mới.");
            return;
        }

        // Nếu có tài khoản, kiểm tra mật khẩu
        if (targetUser.password !== passwordInput) {
            alert("❌ Sai mật khẩu! Vui lòng nhập lại.");
            return;
        }

        // Đăng nhập thành công -> Hiển thị trang chủ và thanh công cụ
        alert("🔓 Đăng nhập thành công!");
        
        // Đồng bộ tên người dùng lên thanh menu và trang chủ
        document.getElementById('user-display-name').innerText = targetUser.name;
        document.getElementById('profile-name').innerText = "Họ tên: " + targetUser.name;

        // Hiện thanh điều hướng và trang chủ chính, ẩn form đăng nhập
        document.getElementById('nav-links').classList.remove('hidden');
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('home-page').classList.remove('remove'); // Hiển thị trang chủ
        showPage('home');
    }

    // Điều hướng ẩn hiện trang chủ chính
    function showPage(pageId) {
    // ... Code xử lý chuyển trang cũ (show/hide các thẻ khác của bạn) GIỮ NGUYÊN ...

    // Thêm hoặc sửa lại đoạn cuối hàm này:
    if (pageId === 'home') {
        // Hiện lại trang chủ bằng cách xóa hidden
        if (document.getElementById('home-page')) {
            document.getElementById('home-page').classList.remove('hidden');
        }
        // Ẩn khung bài học đi bằng cách thêm hidden
        if (document.getElementById('learning-section')) {
            document.getElementById('learning-section').classList.add('hidden');
        }
    }
}

    // Xử lý ĐĂNG XUẤT
    function logout() {
        alert("🔒 Bạn đã đăng xuất hệ thống!");
        // Ẩn thanh công cụ và ẩn trang chủ
        document.getElementById('nav-links').classList.add('hidden');
        document.getElementById('home-page').classList.add('hidden');
        
        // Reset ô nhập liệu đăng nhập và hiện lại form đăng nhập ban đầu
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        document.getElementById('login-form').classList.remove('hidden');
    }
