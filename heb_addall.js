function gtm_e_selectCoupon () {};
(async function () {
    function sleep(e) {
        return new Promise((t) => setTimeout(t, e));
    }
    async function loadAll() {
        var maxNum = parseInt(document.getElementById("coupon-showing-amount").innerText.split(" ")[3]);
        var lastNum = 0;
        var curNum = parseInt(document.getElementById("coupon-showing-amount").innerText.split(" ")[1]);
        for (; curNum < maxNum; curNum = parseInt(document.getElementById("coupon-showing-amount").innerText.split(" ")[1])){
            lastNum = curNum;
            window.scrollTo(0,document.body.scrollHeight);
            await sleep(500);
        }
        window.scrollTo(0,0)
        console.log("Loaded all coupons.");
    }
    async function click_all() {
        var coupons = document.getElementsByClassName("coupon-actions d-flex");
        for (i = 0; i < coupons.length; i++){
            try {
                coupons[i].childNodes[0].click();
                await sleep(500);
            }
            catch (e) {};
        }
    }
    await loadAll();
    await click_all();
    console.log("Done. :)")
})();