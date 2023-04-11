import React from "react-dom";
import { Component } from "react";
import {
    Content, Modal
} from '@carbon/react'
import {
    Avatar
} from 'rsuite'
import './style.css';

export default class UserInfoModal extends Component {
    render() {
        return (
            <Modal open={this.props.userInfoOn}
                modalHeading={"用户信息"}
                primaryButtonText="关闭"
                onRequestSubmit={() => this.props.setUserInfoOn(false)}
                onRequestClose={() => this.props.setUserInfoOn(false)}
            >
                <Content>
                    <Avatar
                        size="md" circle
                        src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
                    <p>Test text 1234</p>
                </Content>
            </Modal >
        )
    }
}