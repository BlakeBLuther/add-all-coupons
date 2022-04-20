function gtm_e_selectCoupon () {};
(async function () {
    function sleep(e) {
        return new Promise((t) => setTimeout(t, e));
    }
    async function loadAll() {
        var maxNum = parseInt(document.getElementsByClassName("kds-Text--m CouponCount font-500 mb-8").item(0).innerText.split(" ")[0]);
        var lastNum = 0;
        var curNum = document.getElementsByClassName("AutoGrid flex flex-wrap list-reset").item(0).childNodes.length;
        for (; curNum < maxNum; curNum = document.getElementsByClassName("AutoGrid flex flex-wrap list-reset").item(0).childNodes.length){
            lastNum = curNum;
            window.scrollTo(0,document.body.scrollHeight);
            await sleep(500);
        }
        window.scrollTo(0,0)
        console.log("Loaded all coupons.");
    }
    async function click_all() {
        var coupons = document.getElementsByClassName("kds-Button kds-Button--primary kds-Button--compact CouponActionButton shadow-4 hover:shadow:2 CouponCard-button ml-8 false w-1/2 body-m font-500");
        for (i = 0; i < coupons.length; i++){
            try {
                coupons[i].click();
            }
            catch (e) {};
            await sleep(500);
        }
    }
    await loadAll();
    await click_all();
    console.log("Done. :)")
})();