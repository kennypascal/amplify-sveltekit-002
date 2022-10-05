<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import Button from '@ui/button/Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="UI/Button"
    component={Button}
    argTypes={{
        label: { control: 'text' },
        icon: {
            control: { type: 'select' },
            options: ['shopping-bag', 'hamburger-menu', 'location', 'heart-o']
        },
        onClick: { action: 'onClick' },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'close']
        }
    }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Button {...args} on:click={args.onClick}>{args.label}</Button>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
    name="Primary"
    args={{
        color: 'primary',
        label: 'Button'
    }}
/>

<Story
    name="Secondary"
    args={{
        color: 'secondary',
        label: 'Button'
    }}
/>

<Story
    name="Icon Only "
    args={{
        icon: 'hamburger-menu',
        label: ''
    }}
/>
<Story
    name="Close "
    args={{
        color: 'close',
        label: ''
    }}
/>
