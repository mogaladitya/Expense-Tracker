import React from "react";
import { getInitials } from "../../utils/helper";

const CharAvatar = ({ fullName, width, height, style }) => {
  return (
    <div
      className={`${width || 'w-12'} ${height || 'h-12'} ${style || ''} rounded-full bg-gray-300 flex items-center justify-center text-gray-900 font-semibold`}
      style={style}
    >
      {getInitials(fullName || "")}
    </div>
  );
};

export default CharAvatar;