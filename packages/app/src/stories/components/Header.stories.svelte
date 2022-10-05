<script>
    import Header from '@components/header/Header.svelte';
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
    title="Components/Header"
    component={Header}
    argTypes={{
        onLogin: { action: 'onLogin' },
        onLogout: { action: 'onLogout' },
        onCreateAccount: { action: 'onCreateAccount' }
    }}
/>

<Template let:args>
    <Header
        {...args}
        on:login={args.onLogin}
        on:logout={args.onLogout}
        on:createAccount={args.onCreateAccount}
    />
</Template>

<Story
    name="Main"
    args={{
        user: {}
    }}
/>
