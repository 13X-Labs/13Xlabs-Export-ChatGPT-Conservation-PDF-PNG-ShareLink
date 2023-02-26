const link = document.getElementById('13xlabs-link');

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

link.addEventListener('click', async () => {
    const tab = await getCurrentTab();
    window.open("https://13xlabs.com");
});