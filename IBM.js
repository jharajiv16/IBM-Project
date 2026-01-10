const ADMIN_PASSWORD = "admin123";
let isAdminAuthenticated = false;
let deleteId = null;

let notices = JSON.parse(localStorage.getItem("secure_notices_db")) || [
    {
        id: 1,
        title: "Welcome to Digital Notice Board",
        content: "You can filter notices, search them or login as admin to manage content.",
        category: "general",
        timestamp: "Jan 09, 11:00 PM"
    }
];

let currentMode = "user";

/* ---------- AUTH ---------- */
function handleAdminNav() {
    isAdminAuthenticated ? showView("admin") : openLogin();
}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
    document.getElementById("passwordInput").focus();
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("passwordInput").value = "";
}

function verifyPassword() {
    const input = document.getElementById("passwordInput");
    if (input.value === ADMIN_PASSWORD) {
        isAdminAuthenticated = true;
        closeLogin();
        showView("admin");
        showToast("🔓 Login Successful");
    } else {
        showToast("❌ Wrong Password");
    }
}

function logoutAdmin() {
    isAdminAuthenticated = false;
    showView("user");
    showToast("🔒 Logged Out");
}

/* ---------- VIEW ---------- */
function showView(mode) {
    currentMode = mode;
    document.getElementById("userNavBtn").classList.toggle("active", mode === "user");
    document.getElementById("adminNavBtn").classList.toggle("active", mode === "admin");
    document.getElementById("adminPanel").style.display = mode === "admin" ? "block" : "none";
    renderNotices();
}

/* ---------- THEME ---------- */
function toggleTheme() {
    const body = document.body;
    body.setAttribute(
        "data-theme",
        body.getAttribute("data-theme") === "light" ? "dark" : "light"
    );
}

/* ---------- CRUD ---------- */
function handleNoticeSubmit() {
    if (!isAdminAuthenticated) return;

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const category = categoryInput.value;
    const editId = document.getElementById("editId").value;

    if (!title || !content) return showToast("⚠️ Fill all fields");

    if (editId) {
        const i = notices.findIndex(n => n.id == editId);
        notices[i] = { ...notices[i], title, content, category };
        showToast("✅ Updated");
    } else {
        notices.unshift({
            id: Date.now(),
            title,
            content,
            category,
            timestamp: new Date().toLocaleString()
        });
        showToast("🚀 Published");
    }

    saveData();
    resetForm();
    renderNotices();
}

function editNotice(id) {
    const n = notices.find(n => n.id === id);
    editId.value = n.id;
    titleInput.value = n.title;
    contentInput.value = n.content;
    categoryInput.value = n.category;
    cancelBtn.style.display = "block";
}

function openDeleteModal(id) {
    deleteId = id;
    confirmModal.style.display = "flex";
}

function closeDeleteModal() {
    confirmModal.style.display = "none";
    deleteId = null;
}

confirmDeleteBtn.onclick = () => {
    notices = notices.filter(n => n.id !== deleteId);
    saveData();
    renderNotices();
    closeDeleteModal();
    showToast("🗑️ Deleted");
};

/* ---------- UTIL ---------- */
function saveData() {
    localStorage.setItem("secure_notices_db", JSON.stringify(notices));
}

function resetForm() {
    editId.value = "";
    titleInput.value = "";
    contentInput.value = "";
    cancelBtn.style.display = "none";
}

function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

/* ---------- RENDER ---------- */
function renderNotices() {
    noticeList.innerHTML = "";

    const search = searchInput.value.toLowerCase();
    const filter = filterSelect.value;

    notices
        .filter(n =>
            (filter === "all" || n.category === filter) &&
            (n.title.toLowerCase().includes(search) ||
             n.content.toLowerCase().includes(search))
        )
        .forEach(n => {
            const div = document.createElement("div");
            div.className = `notice-card ${n.category}`;
            div.innerHTML = `
                <span class="badge badge-${n.category}">${n.category}</span>
                <h3>${n.title}</h3>
                <p>${n.content}</p>
                <div class="card-footer">
                    <span class="timestamp">${n.timestamp}</span>
                    ${
                        currentMode === "admin"
                            ? `<button onclick="editNotice(${n.id})">Edit</button>
                               <button onclick="openDeleteModal(${n.id})">Delete</button>`
                            : ""
                    }
                </div>`;
            noticeList.appendChild(div);
        });
}

renderNotices();
