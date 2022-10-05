import { CommerceSdk } from '@stores/api/CommerceSdk';
import { sequence } from '@sveltejs/kit/hooks';
import cookie from 'cookie';
import { LambdaService } from './stores/LambdaService';
export const getSession = async () => {
    const data = await LambdaService.getCategories();
    return {
        data
    };
    
};

/** @type {import('@sveltejs/kit').Handle} */
async function handleMiniCartData({ event, resolve }) {
    if (event.url.pathname.startsWith('/get-cart')) {
        let data= await CommerceSdk.getMiniCart();
        return new Response(JSON.stringify(data));
  }
  const result = await resolve(event);
  return result;
}


/** @type {import('@sveltejs/kit').Handle} */
export async function handleCookies({ event, resolve }) {
    if (event.url.pathname != '/') {
        const result = await resolve(event);
        return result;
    }
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    const ccNxCookie = cookies['cc-nx']
    const {tokenInfo} = await LambdaService.getAuth(ccNxCookie);
    const {token, refresh_token, customer_id, usid} = tokenInfo;
    const response = await resolve(event);
    function setCookie(cookies) {
        const setCookies =
            typeof cookies === 'object'
                ? cookies.map(c => cookie.serialize(c.name, c.value, c.options))
                : cookie.serialize(
                      cookies.name,
                      cookies.value,
                      cookies.options
                  );
        response.headers.set('set-cookie', setCookies);
    }

    function deleteCookie(name) {
        response.headers.delete('set-cookie', name);
    }

    if (ccNxCookie) {
        setCookie([{
            name: 'customer_id',
            value: customer_id,
        },
        {
            name:'sid',
            value: usid,
            options: {
                path: '/'
            }
        }
    ]);

        deleteCookie(CommerceSdk.refreshTokenGuestStorageKey)
    } else {
        setCookie([
            {
                name: CommerceSdk.refreshTokenGuestStorageKey,
                value: refresh_token,
                options: {
                    path: '/',
                    maxAge: CommerceSdk.REFRESH_TOKEN_COOKIE_AGE,
                }
            },
            {
                name: 'token',
                value: token,
                options: {
                    path: '/',
                }
            },
            {
                name:'sid',
                value: usid,
                options: {
                    path: '/'
                }
            }
        ]);
    }

    return response;
}
export const handle = sequence(handleCookies, handleMiniCartData);