import React, { useState } from 'react';

const EmailCopy = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setIsCopied(true);
  };

  return (
    <div
      className="group cursor-pointer "
      onClick={handleCopyClick}
    >
      <span className='underline hover:underline-offset-4'>{email}</span>
      {isCopied ? <span className="text-fuchsia-500 text-base pl-2">Copied!</span> : <span className="hidden group-hover:inline-block text-base text-blue-400 pl-2">Click to Copy</span>}
    </div>
  );
};

export default EmailCopy;
