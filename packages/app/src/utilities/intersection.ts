export function intersectionAPI(node: HTMLElement, options: any = {}) {
    const observer = new IntersectionObserver(
        entries => options.callback(entries, node),
        options
    );
    observer.observe(node);

    return {
        destroy() {
            observer.unobserve(node);
        }
    };
}
