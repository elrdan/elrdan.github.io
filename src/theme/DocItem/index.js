import React from 'react';
import DocItem from '@theme-original/DocItem';

import GiscusComments from "@component/GiscusComments";

export default function DocItemWrapper(props) {
    return (
        <>
            <DocItem {...props} />

            <div style={{marginTop: '2rem'}}>
                <GiscusComments/>
            </div>
        </>
    );
}
