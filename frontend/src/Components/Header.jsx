import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
      <Marquee className="bg-primary text-primaryWhite font-tirobangla" pauseOnHover={true}>
        আমাদের যে কোন পণ্য অর্ডার করতে কল বা WhatsApp করুন:01723473565
      </Marquee>
    </div>
  );
};

export default Header;
