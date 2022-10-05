import { render, screen, fireEvent } from '@testing-library/vue';
import HomePage from '@/pages/index.vue';
import Login from '@/pages/login.vue';


describe('Login', () => {
    // test('Display home page', async () => {
    //     render(HomePage)
    //     const carousel = screen.getByTestId('home-page-carousel')
    //     console.log("🚀 ~ file: firstTest.test.js ~ line 10 ~ test ~ carousel", carousel)
    //     expect(carousel).toBeTruthy()

    //     // const button = screen.getByText('increment')
    //     // await fireEvent.click(button)
    //     // await fireEvent.click(button)
    //     // expect(screen.queryByText('Times clicked: 2')).toBeTruthy()
    // });
    test('Display login page', () => {
        render(Login);
        const loginTitle = screen.getByTestId('login-title')
        console.log('loginTitle:', loginTitle)
        expect(loginTitle).toBeTruthy()
    })
})