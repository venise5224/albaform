import Image from "next/image";
import { useState } from "react";

const AlarmButton = () => {
  const [alarm, setAlarm] = useState(false);

  return (
    <Image
      src={alarm ? "icon/bookmark-fill-lg.svg" : "icon/bookmark-lg.svg"}
      width={32}
      height={32}
      className="h-6 w-6 pc:h-8 pc:w-8"
      alt="알림"
    />
  );
};

export default AlarmButton;
