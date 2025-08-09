document.getElementById("generateBtn").addEventListener("click", function() {
  const topic = document.getElementById("topic").value;
  const style = document.getElementById("style").value;

  if (!topic) {
    alert("Please enter a topic!");
    return;
  }

  // Placeholder (replace with API call later)
  const lyrics = `🔥 [${style.toUpperCase()} METAL ANTHEM] 🔥
  
On the fields of ${topic}, our banners fly high,
Swords raised to the thunder, in the night sky.
CHORUS:
Ride with the storm, to the edge of the steel,
For glory, for honor, for the power we feel!`;

  document.getElementById("lyrics").textContent = lyrics;
});
