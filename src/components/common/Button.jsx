import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-md gap-2 shadow-sm',
    lg: 'text-base px-6 py-3 rounded-md gap-2.5 shadow',
  };

  const variantStyles = {
    primary:
      'bg-[#8C460C] text-white hover:bg-[#703709] active:bg-[#582a06] focus-visible:ring-[#8C460C]',
    secondary:
      'bg-[#D17E3A] text-white hover:bg-[#bd6d2c] active:bg-[#a65d21] focus-visible:ring-[#D17E3A]',
    green:
      'bg-[#47704C] text-white hover:bg-[#38593c] active:bg-[#2c472f] focus-visible:ring-[#47704C]',
    outline:
      'border border-[#8C460C] text-[#8C460C] bg-transparent hover:bg-[#8C460C] hover:text-white active:bg-[#703709]',
    outlineGreen:
      'border border-[#47704C] text-[#47704C] bg-transparent hover:bg-[#47704C] hover:text-white active:bg-[#38593c]',
    outlineLight:
      'border border-white/60 text-white bg-transparent hover:bg-white hover:text-[#1F241F] active:bg-white/90',
    ghost:
      'text-[#8C460C] hover:bg-[#8C460C]/10 active:bg-[#8C460C]/20',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={combinedStyles}
    >
      {content}
    </button>
  );
};
