import '../src/css/app.css';
import '../src/css/centra-no-1.css';
import '../src/css/ogg.css';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
};
