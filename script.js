onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

  document.getElementById("showFlowersBtn").addEventListener("click", function () {
    document.querySelector(".flowers1").style.display = "block";
    this.style.display = "none"; // Sembunyikan tombol setelah diklik
  });
