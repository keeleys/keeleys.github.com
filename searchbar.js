function startSearch() {
    var query = $('#search_field').get(0).value;
    if (query != '') {
        var url = 'https://www.google.com/search?q=site:' + document.domain + '%20' + query;
        if (navigator.userAgent.indexOf('iPad') > -1 || navigator.userAgent.indexOf('iPod') > -1 || navigator.userAgent.indexOf('iPhone') > -1) {
            location.href = url;
        } else {
            window.open(url, '_blank');
        }
    }
    return false;
}

