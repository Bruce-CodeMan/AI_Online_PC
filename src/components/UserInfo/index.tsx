/*
 * @Date: 2023-08-04 13:35:58
 * @Author: Bruce Hsu
 * @Description: 获取用户信息 
 */
import { IPropChild } from "@/utils/types";
import { connect, useGetUser } from "@/utils/userHooks"

const UserInfo = ({ children }: IPropChild) => {
    useGetUser()
    return (
      <div>{ children }</div>
    );
}

export default connect(UserInfo);