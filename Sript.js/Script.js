document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     TAHUN OTOMATIS PADA FOOTER
  =============================== */

  document.querySelectorAll(".current-year").forEach(function (item) {
    item.textContent = new Date().getFullYear();
  });


  /* ===============================
     SAPA PENGUNJUNG
  =============================== */

  const greetButton = document.getElementById("greetButton");
  const greetMessage = document.getElementById("greetMessage");

  if (greetButton && greetMessage) {

    greetButton.addEventListener("click", function () {

      greetMessage.textContent =
        "Terima kasih sudah mengunjungi portofolio saya!";

    });

  }


  /* ===============================
     VALIDASI FORM LOGIN
  =============================== */

  const loginForm = document.getElementById("loginForm");

  if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

      // Mencegah halaman melakukan reload
      event.preventDefault();


      /* Mengambil nilai input */

      const username =
        document.getElementById("username").value.trim();

      const password =
        document.getElementById("password").value;


      /* Mengambil elemen pesan */

      const message =
        document.getElementById("loginMessage");

      const usernameError =
        document.getElementById("usernameError");

      const passwordError =
        document.getElementById("passwordError");


      /* Menghapus pesan sebelumnya */

      message.className = "alert d-none";
      message.textContent = "";

      usernameError.textContent = "";
      passwordError.textContent = "";


      /* ===============================
         VALIDASI USERNAME
      =============================== */

      if (username === "") {

        usernameError.textContent =
          "Username atau email wajib diisi.";

        document.getElementById("username").focus();

        return;
      }


      /* ===============================
         VALIDASI EMAIL
      =============================== */

      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


      // Jika input mengandung @,
      // maka dianggap sebagai email

      if (
        username.includes("@") &&
        !emailPattern.test(username)
      ) {

        usernameError.textContent =
          "Format email tidak valid.";

        document.getElementById("username").focus();

        return;
      }


      /* ===============================
         VALIDASI PASSWORD
      =============================== */

      if (password.trim() === "") {

        passwordError.textContent =
          "Password wajib diisi.";

        document.getElementById("password").focus();

        return;
      }


      /* Password minimal 8 karakter */

      if (password.length < 8) {

        passwordError.textContent =
          "Password harus terdiri dari minimal 8 karakter.";

        document.getElementById("password").focus();

        return;
      }


      /* ===============================
         LOGIN BERHASIL
      =============================== */

      message.className =
        "alert alert-success";

      message.textContent =
        "Login berhasil divalidasi! Selamat datang, " +
        username + ".";


      /* Kosongkan password */

      document.getElementById("password").value = "";

    });

  }

});