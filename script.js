// Demo gate for the static version.
// IMPORTANT: a client-side password gate is NOT true security because the assets
// are still publicly downloadable. Use Cloudflare Access/server-side auth for
// a genuinely private invitation.
const form = document.getElementById("gate-form");
const gate = document.getElementById("gate");
const invite = document.getElementById("invite");
const error = document.getElementById("gate-error");

// Set this to a non-sensitive convenience code only if you use the static version.
const DEMO_CODE = "SAUMYA-KUNAL";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("passcode").value === DEMO_CODE) {
    gate.classList.add("hidden");
    invite.classList.remove("hidden");
    window.scrollTo(0,0);
  } else {
    error.textContent = "That passcode doesn't match.";
  }
});
