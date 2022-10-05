<script lang="ts">
    import { getCookie } from '@utilities/cookie';

    function checkCookie(name: string) {
        let session_id = getCookie(name);
        if (session_id) {
            return session_id;
        }
        return '';
    }

    function riskifiedBeaconLoad() {
        var site_name = 'saksoff5th.com';
        var store_domain =
            site_name === 'off5th.com' ? 'saksoff5th.com' : site_name;
        var session_id = checkCookie('sid');
        var url =
            (document.location.protocol == 'https:' ? 'https://' : 'http://') +
            'beacon.riskified.com?shop=' +
            store_domain +
            '&sid=' +
            session_id;
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
</script>

<svelte:window on:load={riskifiedBeaconLoad()} />
