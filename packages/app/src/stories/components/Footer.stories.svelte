<script lang="ts">
    import Footer from '@components/footer/Footer.svelte';
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Components/Footer" component={Footer} />

<Template let:args>
    <Footer />
</Template>

<Story name="Main" />
