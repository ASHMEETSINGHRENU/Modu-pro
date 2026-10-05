import React from 'react';
import { PackageSearch } from 'lucide-react';
import { Button } from './Button';

export const EmptyState = ({
  title = 'No products found',
  description = 'Try selecting another category or clearing your search filter.',
  onReset,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white rounded-xl border border-[#E5E0D8] p-8 max-w-lg mx-auto">
      <div className="w-16 h-16 rounded-full bg-[#F7F4EF] flex items-center justify-center text-[#8C460C] mb-4 border border-[#E5E0D8]">
        <PackageSearch className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-bold text-[#1F241F] mb-2">{title}</h3>
      <p className="text-sm text-[#636D64] mb-6 max-w-sm">{description}</p>
      {onReset && (
        <Button variant="outline" size="sm" onClick={onReset}>
          Reset Filter
        </Button>
      )}
    </div>
  );
};
