import React from 'react';

export const LoadingState = ({ message = 'Loading catalog data...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="w-12 h-12 border-3 border-[#E5E0D8] border-t-[#8C460C] rounded-full animate-spin mb-4" />
      <p className="text-sm font-medium text-[#636D64] tracking-wide uppercase">{message}</p>
    </div>
  );
};
