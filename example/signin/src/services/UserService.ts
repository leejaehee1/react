import React from 'react'
import axios from 'axios';
import { LoginReqType } from '../types';

// 여기서 만든걸 auth 모듈로 가져가서 사용한다.

const USER_API_URL = 'http://jsoftware.co.kr/jhuman/'

export default class UserService {
    public static async login(reqData: LoginReqType): Promise<string> {
        const response = await axios.post(USER_API_URL, reqData);
        return response.data.token
    }

    public static async logout(token: string): Promise<void> {
        await axios.delete(USER_API_URL, {
            headers: { Authorization: `Bearer ${token}` }
        })
    }
}