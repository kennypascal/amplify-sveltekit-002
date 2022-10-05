<script lang="ts">
    import Carousel from '@ui/carousel/Carousel.svelte';
</script>

<Carousel
    variant="home-categories"
    options={{
        appJSON: {
            header: {
                label: 'this just in'
            },
            items: [
                {
                    name: "Women's Clothing",
                    header: '529 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400017101186_A7?$300x400$&dpr=on,1'
                },
                {
                    name: "Women's shoes",
                    header: '27 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016437315?$300x400$&dpr=on,1'
                },
                {
                    name: 'Handbags',
                    header: '216 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400017049314?$300x400$&dpr=on,1'
                },
                {
                    name: "Men's clothing",
                    header: '311 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016914278_A7?$300x400$&dpr=on,1'
                },
                {
                    name: "men's shoes",
                    header: '23 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400016417682?$300x400$&dpr=on,1'
                },
                {
                    name: 'Beauty & fragance',
                    header: '39 new items',
                    url: 'https://www.saksoff5th.com',
                    imageUrl:
                        'https://s7d2.scene7.com/is/image/saksoff5th/0400017109918?$300x400$&dpr=on,1'
                }
            ]
        }
    }}
/>
