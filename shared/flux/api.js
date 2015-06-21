function getUrl(url) {
    return typeof window !== 'undefined' ? url : 'http://localhost:3000' + url;
}

function sendRequest(url) {
    return fetch(getUrl(url), {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

module.exports = {
    loadFeeds() {
        return sendRequest('/api/feed');
    },
    loadFeed(id) {
        return sendRequest('/api/feed/' + id);
    }
};