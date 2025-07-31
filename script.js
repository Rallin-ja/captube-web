
// Feedback form handler for contact.html
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("feedbackForm");
  if (!form) return;
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const role = document.querySelector('input[name="role"]:checked')?.value || "";
    const love = document.getElementById("love").value;
    const opinion = document.getElementById("opinion").value;

    const data = { name, email, number, role, love, opinion };
    try {
      const res = await fetch("http://127.0.0.1:8000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      document.getElementById("feedbackMsg").textContent = result.status === "received" ? "Thank you for your feedback!" : "Submission failed.";
      form.reset();
    } catch (err) {
      document.getElementById("feedbackMsg").textContent = "Error submitting feedback.";
    }
  });
});