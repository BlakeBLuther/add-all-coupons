(function () {
    function sleep(e) {
        return new Promise((t) => setTimeout(t, e));
    }
    async function click() {
        for (
            var e = document.getElementsByClassName("btn load-more")[0];
            void 0 !== e; 
        ) {
            e.click(),
            (e = document.getElementsByClassName("btn load-more")[0]),
            await sleep(500);
        }
        var t = document.getElementsByClassName("grid-coupon-clip-button");
        for (i = 0; i < t.length; i++) t[i].children[0].click();
    }
    click();
})();
