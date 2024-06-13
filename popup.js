// This script handles user interaction in the popup window.

document.addEventListener('DOMContentLoaded', () => {
    const queryInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    queryInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchWikipedia();
        }
    });

    searchButton.addEventListener('click', searchWikipedia());

    function searchWikipedia() {
        const query = queryInput.value;
        if (query) {
            const url = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(query)}`;
            chrome.tabs.create({ url });
        }
    }
});
