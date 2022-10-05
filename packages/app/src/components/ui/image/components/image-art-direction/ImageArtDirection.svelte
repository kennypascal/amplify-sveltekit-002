<script lang="ts">
    import { default as cx } from 'classnames';
    export let imageObj: {
        default: string;
        tablet?: string;
        mobile?: string;
        alt?: string;
        className?: string;
    };
</script>

<picture class="image image-art-direction ">
    <source srcset={imageObj.default} media="(min-width: 1024px)" />
    <source srcset={imageObj.tablet} media="(min-width: 768px)" />
    <img
        loading="lazy"
        class={cx('tw-w-full tw-object-cover', imageObj.className)}
        src={imageObj.mobile || imageObj.default}
        alt={imageObj.alt || ''}
        {...$$restProps}
    />
</picture>
