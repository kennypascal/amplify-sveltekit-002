<script lang="ts">
    import Carousel from '@ui/carousel/Carousel.svelte';
</script>

<Carousel
    variant="home-categories"
    options={{
        appJSON: {
            header: {
                label: 'Homer Categories'
            },
            items: [
                {
                    name: "Men's shoes",
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                },
                {
                    name: 'Jewelry',
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                },
                {
                    name: 'Beauty and fragance',
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                },
                {
                    name: 'Kids',
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                },
                {
                    name: "Women's clothing",
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                },
                {
                    name: "Men's clothing",
                    header: 'Header sample 10',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016972725?$300x400$&dpr=on,1'
                }
            ]
        }
    }}
/>
