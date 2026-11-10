// Pop-up windows for the one-page concept.
// Any element with data-open="<dialog id>" opens that dialog.
(function () {
  document.querySelectorAll("[data-open]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      var dialog = document.getElementById(trigger.getAttribute("data-open"));
      if (!dialog) return;
      e.preventDefault();
      // Fill the shared video pop-up with the clicked card's title.
      var title = trigger.getAttribute("data-title");
      if (title) {
        var slot = dialog.querySelector("[data-slot=title]");
        if (slot) slot.textContent = title;
      }
      dialog.showModal();
      document.body.classList.add("modal-open");
    });
  });

  document.querySelectorAll("dialog").forEach(function (dialog) {
    // Close on backdrop click.
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    dialog.querySelectorAll("[data-close]").forEach(function (btn) {
      btn.addEventListener("click", function () { dialog.close(); });
    });
    dialog.addEventListener("close", function () {
      document.body.classList.remove("modal-open");
    });
  });

  // Mock booking form: show a thank-you instead of submitting.
  document.querySelectorAll("form[data-mock]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.hidden = true;
      var done = form.parentElement.querySelector(".sent");
      if (done) done.hidden = false;
    });
  });
})();
