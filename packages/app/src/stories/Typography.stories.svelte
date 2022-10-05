<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import Button from '@ui/button/Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="Typography"
    component={Button}
    argTypes={{
        heading: { control: 'text' },
        body: { control: 'text' },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary']
        }
    }}
/>


<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <h1>Hello</h1>
    <body>It me</body>
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
    name="Primary"
    args={{
        color: 'primary',
        label: 'Button'
    }}
/>

