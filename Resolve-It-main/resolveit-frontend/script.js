// ---------------- Handle Complaint Submission ----------------
const complaintForm = document.getElementById("complaintForm");
if (complaintForm) {
  complaintForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      category: document.getElementById("category").value,
      description: document.getElementById("description").value,
    };

    try {
      const res = await fetch("http://localhost:5001/api/complaints/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);
    } catch (err) {
      alert("Error submitting complaint");
      console.error(err);
    }
  });
}

// ---------------- Handle Complaint Tracking ----------------
const trackForm = document.getElementById("trackForm");
if (trackForm) {
  trackForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("trackEmail").value.trim();

    try {
      const res = await fetch(`http://localhost:5001/api/complaints/track/${email}`);
      const complaints = await res.json();

      if (res.status === 404 || complaints.length === 0) {
        document.getElementById("trackResult").innerHTML =
          "<p style='color:red'>No complaints found for this email.</p>";
        return;
      }

      // Show complaints with status
      let output = "<h3>Your Complaints:</h3><ul>";
      complaints.forEach((c) => {
        output += `
          <li>
            <b>${c.category}</b>: ${c.description} 
            <br>Status: <span style="color:blue">${c.status}</span>
          </li><br>
        `;
      });
      output += "</ul>";

      document.getElementById("trackResult").innerHTML = output;
    } catch (err) {
      alert("Server error while tracking complaint");
      console.error(err);
    }
  });
}

// ---------------- Handle File Upload ----------------
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
  uploadForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById("applicationFile");
    formData.append("applicationFile", fileInput.files[0]);

    try {
      const response = await fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert("✅ Application uploaded successfully!");
        console.log("File URL:", result.fileUrl);
      } else {
        alert("❌ Upload failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong!");
    }
  });
}
