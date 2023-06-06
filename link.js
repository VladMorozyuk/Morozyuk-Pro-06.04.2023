function redirect() {
    var url = document.getElementById("urlInput").value.trim();

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }

    window.location.href = url;
}

// 