import React from 'react-dom';
import {
    Breadcrumb, BreadcrumbItem, Stack
} from "@carbon/react";


export default function Posts() {
    return (
        <div>
            <Stack as="div" gap={4}>
                <h1>
                    同济大学高程论坛
                </h1>
                <div>
                    <Breadcrumb>
                        <BreadcrumbItem href="/">首页</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div>
                    {localStorage.getItem("loggedIn") ? "Yes" : "No"}
                </div>
            </Stack>

        </div>
    )
}