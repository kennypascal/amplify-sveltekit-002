<script lang="ts">
    import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="UI/Hyperlink"
    component="{Hyperlink},"
    argTypes={{
        label: {
            required: true,
            defaultValue: 'Hello',
            control: 'text',
            description: `**Required:** used to add accessible label`,
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        href: {
            required: true,
            defaultValue: '#',
            control: 'text',
            description: `**Required:** destination url`,
            table: {
                type: {
                    summary: 'string'
                }
            }
        },
        icon: {
            required: false,
            description: 'Required if iconOnly: true',
            table: {
                type: {
                    summary: 'string',
                    detail: 'Used Icon component. Icon must exist in SO5 icon library'
                }
            },
            control: { type: 'select' },
            options: [
                '',
                'shopping-bag',
                'hamburger-menu',
                'location',
                'heart-o',
                'twitter',
                'pinterest',
                'instagram',
                'facebook'
            ]
        },
        external: {
            required: false,
            description: 'Used to open in a new tab',
            table: {
                type: {
                    summary: 'boolean',
                    detail: `Adds 'target="_blank" rel="noopener"`
                }
            },
            control: 'boolean',
            defaultValue: false
        },
        iconOnly: {
            required: false,
            description:
                'To display only an icon. REQUIRES: icon and label values',
            table: {
                type: {
                    summary: 'boolean',
                    detail: `Adds a visually hidden span with a label for accessibility.`
                }
            },
            defaultValue: false,
            control: {
                type: 'boolean'
            }
        },
        className: {
            required: false,
            description: 'Pass classes for additional styling',
            defaultValue: 'text-uppercase',
            table: {
                type: {
                    summary: 'string',
                    detail: `Examples: text-uppercase, default-color-accent`
                }
            },
            control: { type: 'text' }
        }
    }}
/>

<Template let:args>
    <Hyperlink {...args} />
</Template>

<Story
    name="Default"
    args={{
        className: ''
    }}
/>

<Story
    name="Icon Only "
    args={{
        icon: 'pinterest',
        label: 'Twitter',
        iconOnly: true
    }}
/>
