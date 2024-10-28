chrome.contextMenus.create({
    id: "keyActivator",
    title: "Activate Key in...",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "steam",
    parentId: "keyActivator",
    title: "Steam",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "gog",
    parentId: "keyActivator",
    title: "GOG",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "epic",
    parentId: "keyActivator",
    title: "Epic Games",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.create({
    id: "microsoft",
    parentId: "keyActivator",
    title: "Microsoft",
    contexts: ["selection"]
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "steam" || info.menuItemId === "gog" || info.menuItemId === "epic" || info.menuItemId === "microsoft") {
      const key = info.selectionText ? encodeURIComponent(info.selectionText.trim()) : "";
      let url = "";
  
      if (info.menuItemId === "steam") {
        url = `https://store.steampowered.com/account/registerkey?key=${key}`;
      } else if (info.menuItemId === "gog") {
        url = `https://www.gog.com/redeem/${key}`;
      } else if (info.menuItemId === "epic") {
        url = "https://store.epicgames.com/redeem";
      } else if (info.menuItemId === "microsoft") {
        url = `https://redeem.microsoft.com`;
      }
  
      if (url) {
        chrome.tabs.create({ url });
      }
    }
  });
  