<script lang="ts">
    import { default as cx } from 'classnames';

    export { classNames as class };

    let classNames: string = '';
</script>

<div
    class={cx(
        'header-logo',
        'tw-block',
        'tw-relative',
        'tw-mx-auto',
        'lg:tw-mx-0',
        'tw-w-full',
        'tw-max-w-[80px]',
        'lg:tw-max-w-[160px]',
        classNames
    )}
>
    <a href="/" class={cx('tw-block', 'tw-mx-auto', 'lg:tw-mx-0')}>
        <img src="/svg/saks-off5th-logo.svg" alt="Saks Off5th Home" />
        <span class="tw-hidden"> Saks Off5th Home </span>
    </a>
</div>
