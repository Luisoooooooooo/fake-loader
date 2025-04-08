(function() {
    /*Fake Loader*/
    setTimeout(init, 1500);
    function init() {
        document.body.classList.remove('loading');
    }
})();