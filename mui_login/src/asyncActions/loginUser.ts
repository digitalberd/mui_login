import {LoginSlice} from "../redux/loginReducer";
import {AppDispatch} from "../redux/store";
import {siteOrigin, backendUrl} from "../globalConfig";

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    // адрес_сайта/auth/login   - ендпоинт для функции логининга. В случае успеха она возвращает код 204 и никаки данных о пользователе
    fetch(backendUrl+'/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Access-Control-Allow-Origin': siteOrigin
        },
        body: new URLSearchParams({
            'username' : email,
            'password': password,
        })
    // после успешного логининга - нам необходимо получить данные о пользователе и записать их в redux.
    // ендпоинт для получения данных о пользователе - адрес_сайта/me
    }).then(() => {return fetch(backendUrl+'/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': siteOrigin
        }
    })
        .then(response => response.json())
        .then(json => dispatch(LoginSlice.actions.redux_login(json)))
    })
}
