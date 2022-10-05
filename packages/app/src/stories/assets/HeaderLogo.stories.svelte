<script lang="ts">
    import Logo from '@components/header/components/header-logo/HeaderLogo.svelte';
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Logo" component={Logo} argTypes={{}} />

<Template let:args>
    <Logo />
</Template>

<Story name="Main" />
