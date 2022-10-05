<script lang="ts">
    export let appJSON: string = '';
    export let classNames: string = '';
</script>

<div class={classNames}>
    {@html appJSON}
</div>
