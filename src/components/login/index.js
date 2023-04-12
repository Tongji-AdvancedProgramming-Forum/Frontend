// 登录窗口的实现
import React from "react-dom";
import ReactDOM from "react-dom";
import { useState } from 'react';
import {
    Content, Form, Stack, TextInput, Dropdown, Button, Tooltip, Modal, InlineNotification
} from "@carbon/react";
import "./index.css"
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid'
import axios from "axios";
import $ from 'jquery'

fontawesome.library.add(faQuestionCircle)

export default function LoginPage() {

    const [stuid, setStuid] = useState("");
    const [passwd, setPasswd] = useState("");
    const [expiredIn, setExpiredIn] = useState(0);

    const [showLoginSuccModal, setShowLoginSuccModal] = useState(false);

    const userdata = JSON.parse(localStorage.getItem("userData"))

    function Notification({ title, subtitle, kind, selfId }) {
        return (
            <InlineNotification
                kind={kind}
                aria-label="closes notification"
                onClose={function noRefCheck() { $(`#${selfId}`).remove(); }}
                onCloseButtonClick={function noRefCheck() { }}
                subtitle={subtitle}
                title={title}
            />
        )
    }

    function handleErrors(title, subtitle) {
        const $stack = $("#form-Stack");
        const selfId = Math.random().toString().substring(2);
        $stack.prepend($(`<div id='${selfId}'>`));
        ReactDOM.render(
            <Notification title={title} kind={"error"} subtitle={subtitle ? subtitle : "未知错误"} selfId={selfId} />,
            $stack.children().first()[0]);
    }

    function loginHandler() {
        axios.post("/api/auth/login", {
            username: stuid,
            password: passwd,
            validfor: expiredIn
        })
            .then(res => {
                if (res.data && res.data.success && res.data.success === true) {
                    localStorage.setItem("loggedIn", "OK");
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userData", JSON.stringify(res.data.userdata))
                    setShowLoginSuccModal(true)
                } else {
                    handleErrors("登录未成功", res.data.msg)
                }
            })
            .catch(error => {
                if (error.response) {
                    handleErrors("登录失败", error.response.data.msg)
                } else if (error.request) {
                    handleErrors("登录失败", "网络错误");
                } else {
                    handleErrors("登录失败", "未知错误");
                }
            })
    }

    return (
        <Content>
            <h1 style={{ marginBottom: 50 }}>登录到论坛</h1>
            <Form className="form">
                <Stack gap={7} id="form-Stack">
                    <TextInput
                        helperText="请在这里输入你的学号"
                        id="stuid"
                        labelText="学号"
                        onChange={(e) => setStuid(e.target.value)}
                    />
                    <TextInput.PasswordInput
                        helperText="请在这里输入你的【交作业网站】密码"
                        id="passwd"
                        labelText="密码"
                        onChange={(e) => setPasswd(e.target.value)}
                    />
                    <Dropdown
                        ariaLabel="有效期选择"
                        id="carbon-dropdown-example"
                        items={[
                            ["30分钟", 30], ["1天", 1440], ["7天", 10080]
                        ]}
                        itemToString={(item) => item[0]}
                        label="请选择"
                        titleText="登录有效期"
                        helperText="有效期过后，需要重新登录。虽然在本网站上的操作不会影响你的成绩，但选择较短的有效期可以保护你的账号安全。"
                        onChange={(i) => setExpiredIn(i.selectedItem[1])}
                    />
                    <div style={{ display: "flex" }}>
                        <div>
                            <Modal
                                open={showLoginSuccModal}
                                primaryButtonText="关闭"
                                onRequestSubmit={() => { setShowLoginSuccModal(false); window.location.href = "/" }}
                                onRequestClose={() => { setShowLoginSuccModal(false); window.location.href = "/" }}
                            >
                                <Content>
                                    <h3>
                                        登录成功！
                                    </h3>
                                    <Stack gap={10}>
                                        <p>你是<strong>{userdata ? userdata.name : ""}</strong>，学号{userdata ? userdata.stuno : ""}</p>
                                    </Stack>
                                </Content>
                            </Modal>
                            <Button onClick={loginHandler}>
                                登录
                            </Button>
                        </div>
                        <div style={{ marginLeft: 10 }}>
                            <Tooltip align="bottom" label={
                                <>
                                    <p><strong>本论坛没有注册功能。</strong></p>
                                    <p>使用本论坛不需要你自行注册，后台已经和交作业网站连通并共享账号和密码。</p>
                                </>
                            }>
                                <Button kind="ghost" >
                                    <FontAwesomeIcon icon="question-circle" />我需要注册吗？
                                </Button>
                            </Tooltip>
                        </div>
                    </div>

                </Stack>
            </Form>
        </Content>
    )
}