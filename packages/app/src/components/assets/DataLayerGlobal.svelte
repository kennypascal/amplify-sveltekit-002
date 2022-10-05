<svelte:head>
    <script>
        globalData = {
            page: {
                type: 'home page',
                adobePageName: 'off 5th:home page',
                section: 'home page'
            },
            site: {
                is_production: 'true',
                name: 'off5th.com'
            },
            visitor: {
                isHavingBirthday: false,
                eventId: '',
                firstName: false,
                lastName: false,
                account_id: '',
                bag_id: '',
                logged_in_status: 'anonymous',
                loyalty_tier: '',
                loyalty_points_earned: '',
                loyalty_amount_spent: '',
                loyalty_points_pending: '',
                SHA_256_hash_email_address: '',
                personalization_score: ''
            },
            eventData: {
                name: 'pageLoad'
            }
        };
    </script>
</svelte:head>
