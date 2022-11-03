import {describe, expect, test} from '@jest/globals';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Auth test', () => {
    beforeEach(() => {
        mockedAxios.get.mockImplementationOnce((url : any, opts : any) => {
            let params = opts.params;
            switch(url){
                case '/auth': {
                    if(params.loggedIn){
                        return Promise.resolve({
                            data: {
                                message: "login success",
                                userData : {
                    
                                }
                            },
                            status: 200,
                            statusText: 'Ok',
                            headers: {},
                            config: {},
                        })
                    }else{
                        return Promise.resolve({
                            data: {
                                message: "not logged in",
                            },
                            status: 401,
                            statusText: 'Unauthorized',
                            headers: {},
                            config: {},
                        })
                    }
                }
            }
            return Promise.resolve({
                data: {},
                status: 1000,
                statusText: 'error, no matched case',
                headers: {},
                config: {},
            })
        });


        mockedAxios.post.mockImplementationOnce((url : any, opts : any) => {
            let params = opts.params;
            switch(url){
                case '/login': {
                    if(params.username == "test" && params.password == "test"){
                        return Promise.resolve({
                            data: {
                                message: "login success",
                                userData : {
                    
                                }
                            },
                            status: 200,
                            statusText: 'Ok',
                            headers: {},
                            config: {},
                        })
                    }else{
                        return Promise.resolve({
                            data: {
                                message: "login failed",
                            },
                            status: 401,
                            statusText: 'Unauthorized',
                            headers: {},
                            config: {},
                        })
                    }
                }
            }
            return Promise.resolve({
                data: {},
                status: 1000,
                statusText: 'error, no matched case',
                headers: {},
                config: {},
            })
        });
    });

  test('loggedIn test', () => {
    mockedAxios.get(`/auth`, {
        params: {
            loggedIn: true
        }
    }).then((res) => {
        const expected = {
            message: "login success",
            userData : {

            }
        };
        expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
        expect(res.status).toBe(200);
    }).catch((err) => {
        console.log(err);
    });
  });

  test('not loggedIn test', () => {
    mockedAxios.get(`/auth`, {
        params: {
            loggedIn: false
        }
    }).then((res) => {
        const expected = {
            message: "not logged in"
        };
        expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
        expect(res.status).toBe(401);
    }).catch((err) => {
        console.log(err);
    });
  });

    test('login test', () => {
        mockedAxios.post(`/login`, {
            params: {
                username: "test",
                password: "test"
            }
        }).then((res) => {
            const expected = {
                message: "login success",
                userData : {

                }
            };
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
            expect(res.status).toBe(200);
        }).catch((err) => {
            console.log(err);
        });
    });

    test('login test failure', () => {
        mockedAxios.post(`/login`, {
            params: {
                username: "test",
                password: "test1"
            }
        }).then((res) => {
            const expected = {
                message: "login failed"
            };
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
            expect(res.status).toBe(401);
        }).catch((err) => {
            console.log(err);
        });
    });
});