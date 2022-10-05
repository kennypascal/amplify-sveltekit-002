<script lang="ts">
    import { default as cx } from 'classnames';
    export let imageObj: {
        default: string;
        alt?: string;
        classes?: string;
        fadeIn?: boolean;
        dpr?: {
            default: number;
            tablet: number;
            mobile: number;
        };
        sizes?: string;
    };
    function createSrcset(imageObj: any) {
        let srcset = ``;
        let paramStarter = imageObj.default.includes('?') ? '&' : '?';
        Object.keys(imageObj.dpr).forEach(key => {
            srcset += `${imageObj.default}${paramStarter}dpr=on,${imageObj.dpr[
                key
            ].toString()}, `;
        });
        return srcset;
    }
</script>

<img
    loading="lazy"
    srcset={createSrcset(imageObj)}
    sizes={imageObj.sizes || '100vw'}
    src={imageObj.default}
    alt={imageObj.alt || ''}
    class={cx('image', 'image-default', imageObj.classes || '', {
        'tw-invisible': imageObj.fadeIn
    })}
    {...$$restProps}
    on:load={event => {
        if (imageObj.fadeIn) {
            let imgClassList =
                event && event.currentTarget && event.currentTarget.classList;
            if (imgClassList) {
                imgClassList.add('tw-duration-150');
                imgClassList.add('tw-animate-fade-in');
                imgClassList.remove('tw-invisible');
            }
        }
    }}
/>
