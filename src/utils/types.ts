/*
 * @Date: 2023-08-04 09:08:13
 * @Author: Bruce Hsu
 * @Description: 
 */

export interface IPropChild {
    children: React.ReactNode;
}

export interface IUser {
    id: string;
    name: string;
    avatar: string;
    gpt3Value: number;
    gpt4Value: number;
    tel: string;
    inviteCode: string;
}