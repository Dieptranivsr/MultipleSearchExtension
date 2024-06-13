// This script runs in the background and manages the context menu.

var menuItem = {
    id: "searchMenu",
    title: "Search for \"%s\"",
    contexts: ["selection"]
};

var subMenuItem1 = {
    id: "searchWikipedia",
    parentId: "searchMenu",
    title: "Wikipedia",
    contexts: ["selection"]
};

var subMenuItem2 = {
    id: "searchGithub",
    parentId: "searchMenu",
    title: "Github",
    contexts: ["selection"]
};

var subMenuItem3 = {
    id: "searchYouTube",
    parentId: "searchMenu",
    title: "YouTube",
    contexts: ["selection"]
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(menuItem);
    chrome.contextMenus.create(subMenuItem1);
    chrome.contextMenus.create(subMenuItem2);
    chrome.contextMenus.create(subMenuItem3);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (tab) {
        if (info.menuItemId === "searchWikipedia") {
            var wikiQuery = info.selectionText;
            var wikiUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(wikiQuery)}`;
            chrome.tabs.create({ url: wikiUrl });
        }
        if (info.menuItemId === "searchGitHub") {
            var codeQuery = info.selectionText;
            var githubUrl = `https://github.com/search?q=${encodeURIComponent(codeQuery)}`;
            chrome.tabs.create({ url: githubUrl });
        }
        if (info.menuItemId === "searchYouTube") {
            var videoQuery = info.selectionText;
            var youTubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(videoQuery)}`;
            chrome.tabs.create({ url: youTubeUrl });
        }
    }
});
