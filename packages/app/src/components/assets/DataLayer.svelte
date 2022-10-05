<svelte:head>
    <script>
        if (typeof globalData === 'undefined') {
            globalData = {};
        }
        //Push page specific data to GTM if exists
        if (pageDataObj && Object.keys(pageDataObj).length !== 0) {
            for (var prop in pageDataObj) {
                if (prop && pageDataObj.hasOwnProperty(prop)) {
                    globalData[prop] = pageDataObj[prop];
                }
            }
        }

        window.pageData = globalData;

        if (window.mobileApp && window.mobileApp.search) {
            window.pageData.search = window.mobileApp.search;
        }
    </script>
</svelte:head>
