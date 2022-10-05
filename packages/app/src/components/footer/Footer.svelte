<script lang="ts">
    import BackToTop from '@ui/backToTop/BackToTop.svelte';
    import Button from '@ui/button/Button.svelte';
    import Hyperlink from '@ui/hyperlink/Hyperlink.svelte';
    import Icon from '@ui/icon/Icon.svelte';
    import Col from '@ui/layout/Col.svelte';
    import Container from '@ui/layout/Container.svelte';
    import Row from '@ui/layout/Row.svelte';
    import { default as cx } from 'classnames';
    import {
        contentSlots,
        footerLink,
        footerSocial
    } from '../../stores/Footer.store';
    import FooterColumnLarge from './components/footer-column/FooterColumnLarge.svelte';
    import FooterColumnSmall from './components/footer-column/FooterColumnSmall.svelte';

    let { footerLegal, footerCopyright, footerApp, footerFeedback } =
        $footerLink;
</script>

<footer
    id="footercontent"
    class={cx('tw-block', 'tw-relative', 'adobelaunch__footernavigation')}
>
    <BackToTop />
    <div
        class={cx(
            'tw-px-2',
            'tw-pt-2',
            'tw-pb-6',
            'tw-bg-oxygen',
            'tw-text-dark-gray',
            'tw-text-2'
        )}
    >
        <Container lg>
            <Row
                class={cx(
                    'footer-row-1',
                    'tw-pt-2',
                    'tw-pb-5',
                    'tw-mt-4',
                    'tw-mb-6',
                    'lg:tw-grid-cols-4'
                )}
                id="footerContentLinks"
            >
                {#each $contentSlots as { header, links }, i}
                    <Col
                        class={cx(
                            'last:tw-border-b',
                            'last:tw-border-b-tin',
                            'tw-border-t',
                            'tw-border-t-tin',
                            'lg:tw-my-2',
                            'lg:tw-py-2',
                            'lg:tw-h-full',
                            'lg:tw-border-y',
                            'lg:tw-border-y-tin'
                        )}
                    >
                        <FooterColumnLarge {header} {links} index={i + 1} />
                        <FooterColumnSmall {header} {links} index={i + 1} />
                    </Col>
                {/each}
            </Row>
            <Row class="footer-row-2">
                <Col class={cx('tw-py-2', 'tw-text-center', 'lg:tw-text-left')}>
                    <div class="footer-social">
                        {#each $footerSocial as social, i}
                            <Icon
                                name={social.icon}
                                href={social.href}
                                target="_blank"
                                srLabel={social.label}
                                class={cx(
                                    'footer-social-link',
                                    'tw-mx-3',
                                    'lg:tw-ml-0',
                                    'lg:tw-mr-6'
                                )}
                                width={20}
                                height={20}
                            />
                        {/each}
                    </div>
                </Col>
            </Row>
            <Row
                class={cx(
                    'footer-row-3',
                    'lg:tw-grid-cols-2',
                    'tw-items-center'
                )}
            >
                <Col
                    class={cx(
                        'footer-copyright',
                        'tw-text-center',
                        'tw-order-last',
                        'tw-w-3/4',
                        'tw-mx-auto',
                        'lg:tw-text-left',
                        'lg:tw-order-first',
                        'lg:tw-w-full',
                        'lg:tw-mx-0'
                    )}
                >
                    <div class={cx('tw-inline', 'lg:tw-float-left')}>
                        {footerCopyright.label}
                        <span class="tw-px-3">|</span>
                        <Hyperlink
                            variant={footerLegal.variant || 'default'}
                            options={footerLegal}
                            class={cx('tw-inline', footerLegal.className)}
                        />
                    </div>
                </Col>
                <Col class="footer-app">
                    <div
                        class={cx(
                            'tw-text-center',
                            'tw-py-4',
                            'lg:tw-py-0',
                            'lg:tw-float-right'
                        )}
                    >
                        <!-- footerFeedback -->
                        {#if footerFeedback}
                            <Button
                                id="footerFeedback"
                                variant={footerFeedback.variant || 'text'}
                                options={{ label: footerFeedback.label }}
                                class={cx(
                                    'footer-button-link',
                                    'tw-uppercase',
                                    footerFeedback.className
                                )}
                                on:click={footerFeedback.script}
                            />
                        {/if}

                        <span class="tw-px-3">|</span>
                        <!-- footerApp -->
                        <Icon name="app" class="tw-align-middle" />
                        <Hyperlink
                            variant={footerApp.variant || 'default'}
                            options={footerApp}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</footer>
