import React from 'react-dom';
import {
    Breadcrumb, BreadcrumbItem
} from "@carbon/react";


export default function Posts() {
    return (
        <div>
            <h1>
                同济大学高程论坛
            </h1>
            <div style={{
                marginTop: 5,
                marginBottom: 5
            }}>
                <Breadcrumb>
                    <BreadcrumbItem href="/">首页</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
    )
}