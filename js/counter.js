async function hitCounter() {
  try {
    const res = await fetch(`${CONFIG.API_BASE_URL}/count`);
    const data = await res.json();

    if (data && data.count !== undefined) {
      document.getElementById("viewCount").innerText = data.count;
    } else {
      document.getElementById("viewCount").innerText = "—";
    }
  } catch (err) {
    document.getElementById("viewCount").innerText = "Error";
  }
}
