const link = document.getElementById('13xlabs-link');
const linkgotoChatGPT = document.getElementById('13xlabs-go-to-chatgpt');

async function getCurrentTab() {
  const queryOptions = { active: true, currentWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

link.addEventListener('click', async () => {
    // const tab = await getCurrentTab();
    window.open("https://13xlabs.com");
});

linkgotoChatGPT.addEventListener('click', async () => {
  // const tab = await getCurrentTab();
  window.open("https://chat.openai.com/");
});