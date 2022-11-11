import {describe, expect, test, jest, beforeEach} from '@jest/globals';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';
import { type } from 'os';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Auth test', () => {
    beforeEach(() => {
        mockedAxios.get.mockImplementationOnce(<T = any, D = any, R = AxiosResponse<T, D>>(url : string, data : any) => {
            let params = data.data;
            let axiosResponse : AxiosResponse<T, D> = {
                data: <T>{},
                status: 1000,
                statusText: 'error, no matched case',
                headers: {},
                config: {},
            }
            switch(url){
                case '/auth': {
                    if(params.loggedIn){
                        axiosResponse = {
                            data: <T><any>{
                                message: "login success",
                                userData: {}
                            },
                            status: 200,
                            statusText: 'Ok',
                            headers: {},
                            config: {},
                        }
                    }else{
                        axiosResponse = {
                            data: <T><any>{
                                message: "not logged in",
                            },
                            status: 401,
                            statusText: 'Unauthorized',
                            headers: {},
                            config: {},
                        }
                    }
                }
            }
            return Promise.resolve(<R><any>axiosResponse)
        });


        mockedAxios.post.mockImplementationOnce(<T = any, D = any, R = AxiosResponse<T, D>>(url : string, data : any) => {
            let params = data.data;
            let axiosResponse : AxiosResponse<T, D> = {
                data: <T>{},
                status: 1000,
                statusText: 'error, no matched case',
                headers: {},
                config: {},
            }
            switch(url){
                case '/login': {
                    if(params.username == "test" && params.password == "test"){
                        axiosResponse = {
                            data: <T><any>{
                                message: "login success",
                                userData : {
                    
                                }
                            },
                            status: 200,
                            statusText: 'Ok',
                            headers: {},
                            config: {},
                        }
                    }else{
                        axiosResponse = {
                            data: <T><any>{
                                message: "login failed",
                            },
                            status: 401,
                            statusText: 'Unauthorized',
                            headers: {},
                            config: {},
                        }
                    }
                }
            }
            return Promise.resolve(<R><any>axiosResponse)
        });
    });

  test('loggedIn test', () => {
    mockedAxios.get(`/auth`, {
        data: {
            loggedIn: true
        }
    }).then((res: AxiosResponse) => {
        const expected = {
            message: "login success",
            userData : {

            }
        };
        expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
        expect(res.status).toBe(200);
    }).catch((err: any) => {
        console.log(err);
    });
  });

  test('not loggedIn test', () => {
    mockedAxios.get(`/auth`, {
        data: {
            loggedIn: false
        }
    }).then((res: AxiosResponse) => {
        const expected = {
            message: "not logged in"
        };
        expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
        expect(res.status).toBe(401);
    }).catch((err: any) => {
        console.log(err);
    });
  });

    test('login test', () => {
        mockedAxios.post(`/login`, {
            data: {
                username: "test",
                password: "test"
            }
        }).then((res: AxiosResponse) => {
            const expected = {
                message: "login success",
                userData : {

                }
            };
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
            expect(res.status).toBe(200);
        }).catch((err: any) => {
            console.log(err);
        });
    });

    test('login test failure', () => {
        mockedAxios.post(`/login`, {
            data: {
                username: "test",
                password: "test1"
            }
        }).then((res: AxiosResponse) => {
            const expected = {
                message: "login failed"
            };
            expect(JSON.stringify(res.data)).toBe(JSON.stringify(expected));
            expect(res.status).toBe(401);
        }).catch((err: any) => {
            console.log(err);
        });
    });
});