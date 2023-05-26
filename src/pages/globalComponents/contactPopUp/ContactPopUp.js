import { useState, useEffect } from "react";
import { Drawer, FloatButton } from "antd";
import { LikeOutlined } from "@ant-design/icons";

function ContactPopUp() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let isScrollingTimer = null;

    const handleScroll = () => {
      clearTimeout(isScrollingTimer);
      setIsScrolling(true);

      isScrollingTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 3000); // Adjust the delay time as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(isScrollingTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FloatButton
        icon={<LikeOutlined />}
        description="Contact"
        onClick={() => setOpen(true)}
        style={{
          width: 80,
          height: 80,
          bottom: 50,
          right: 20,
          opacity: isScrolling ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <Drawer
        title="Contact"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="large"
        width="90%"
      >
        <iframe
          className="form"
          title="YNA Sponsor/Information Inquiry"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdaVM6MOpbkvv1deoYmmJnxyLRd8rXnSiQRQoV8WKY_AAQmLQ/viewform?embedded=true"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          style={{ width: "100%", height: "calc(100% - 3px)" }}
        >
          Loading…
        </iframe>
      </Drawer>
    </>
  );
}

export default ContactPopUp;
