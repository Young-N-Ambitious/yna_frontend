
import { useState } from 'react';
import { Drawer, FloatButton } from 'antd';
import { LikeOutlined } from '@ant-design/icons';

function ContactPopUp() {
    const [open, setOpen] = useState(false);
    return (
      <>
<FloatButton
icon={<LikeOutlined />}
description="Contact"
onClick={() => setOpen(true)}
style={{ width: 80, height: 80, bottom: 24, right: 24 }}
/>
<Drawer
title="Contact"
placement="right"
onClose={() => setOpen(false)}
open={open}
size="large"
>
<iframe
    title="YNA Sponsor/Information Inquiry"
    src="https://docs.google.com/forms/d/e/1FAIpQLSdaVM6MOpbkvv1deoYmmJnxyLRd8rXnSiQRQoV8WKY_AAQmLQ/viewform?embedded=true"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
    style={{ width: '100%', height: 'calc(100% - 3px)' }}
>
    Loading…
</iframe>
</Drawer>
</>
    );
}

export default ContactPopUp;