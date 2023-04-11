import React from "react-dom";
import {
    Header, HeaderContainer, SkipToContent, HeaderMenuButton, HeaderName, HeaderNavigation, HeaderMenuItem,
    SideNav, SideNavItems, HeaderSideNavItems, HeaderGlobalBar, HeaderGlobalAction,
} from '@carbon/react'
import { Notification, UserAvatar } from '@carbon/react/icons';
import { useState } from "react";

import UserInfoModal from "./userInfoModal";

export default function MyHeader() {
    const [userInfoOn, setUserInfoOn] = useState(false)
    return (
        <>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <Header aria-label="Carbon Tutorial">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName href="/" prefix="Tongji">
                            Advanced Language Programming
                        </HeaderName>
                        <HeaderNavigation aria-label="同济高程论坛">
                            <HeaderMenuItem href="/about">总览</HeaderMenuItem>
                            <HeaderMenuItem href="/about">分类查看</HeaderMenuItem>
                            <HeaderMenuItem href="/about"><b>发起提问</b></HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="侧边导航栏"
                            expanded={isSideNavExpanded}
                            isPersistent={isSideNavExpanded}
                        >
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem href="/about">总览</HeaderMenuItem>
                                    <HeaderMenuItem href="/about">分类查看</HeaderMenuItem>
                                    <HeaderMenuItem href="/about"><b>发起提问</b></HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav>
                        <HeaderGlobalBar>
                            <HeaderGlobalAction aria-label="通知我的" tooltipAlignment="center">
                                <Notification size={20} />
                            </HeaderGlobalAction>
                            <HeaderGlobalAction aria-label="用户中心" tooltipAlignment="center"
                                onClick={() => setUserInfoOn(true)}>
                                <UserAvatar size={20} />
                            </HeaderGlobalAction>
                        </HeaderGlobalBar>
                    </Header>
                )}
            />
            <UserInfoModal userInfoOn={userInfoOn} setUserInfoOn={setUserInfoOn} />
        </>
    );
}