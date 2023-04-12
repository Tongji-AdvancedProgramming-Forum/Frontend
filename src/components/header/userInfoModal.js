import React from "react-dom";
import {
    Content, Modal, Button
} from '@carbon/react'

import "../../styles/avatar.scss"
import { Stack } from "rsuite";

function UserInfo() {


    if (localStorage.getItem("loggedIn")) {
        return (
            <>
                <div style={{ flexDirection: "row", display: "flex", marginLeft: 15 }}>
                    <img src="https://avatars.githubusercontent.com/u/45115933" className="avatar" alt="@Cinea4678" />
                    <div style={{ margin: "auto 10px" }}>
                        <h3>2152955-助教-张尧</h3>
                        <span style={{ color: "gray", fontStyle: "italic" }}>您当前具有<strong>助教</strong>权限。</span>
                    </div>
                </div>
                <Stack gap={6} style={{ marginTop: 20 }}>
                    <Button kind="ghost">修改头像</Button>
                    <Button kind="ghost" onClick={() => { localStorage.removeItem("loggedIn"); window.location.href = "/"; }}>退出登录</Button>
                </Stack>
            </>
        )
    } else {
        return (
            <>
                <div style={{ flexDirection: "row", display: "flex", marginLeft: 15 }}>
                    <img src="/user.png" className="avatar" alt="defaultAvatar" />
                    <div style={{ margin: "auto 10px" }}>
                        <h3>未登录</h3>
                        <span style={{ color: "gray", fontStyle: "italic" }}>您必须登录才能使用本站。</span>
                    </div>
                </div>
                <div style={{ marginTop: 25 }}>
                    <Button onClick={() => { window.location.href = "/login"; }}>
                        登录
                    </Button>
                </div>
            </>
        )
    }
}

export default function UserInfoModal({ userInfoOn, setUserInfoOn }) {
    return (
        <Modal open={userInfoOn}
            modalHeading={"用户信息"}
            primaryButtonText="关闭"
            onRequestSubmit={() => setUserInfoOn(false)}
            onRequestClose={() => setUserInfoOn(false)}
        >
            <Content>
                <UserInfo />
            </Content>
        </Modal >
    )
}