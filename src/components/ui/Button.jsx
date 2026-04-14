import React from 'react';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  onClick,
  href,
  type = 'button',
  className = '',
  dark = false,
}) {
  const sizeMap = {
    sm: { padding: '8px 18px', fontSize: '13px' },
    md: { padding: '12px 28px', fontSize: '14px' },
    lg: { padding: '14px 36px', fontSize: '15px' },
  };

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '4px',
    fontWeight: '600',
    letterSpacing: '0.02em',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s',
    textDecoration: 'none',
    fontFamily: "'Satoshi', sans-serif",
    border: '2px solid transparent',
    ...sizeMap[size],
  };

  const variantStyles = {
    primary: {
      background: 'var(--color-accent)',
      color: '#fff',
      border: '2px solid transparent',
    },
    outline: dark
      ? {
          background: 'transparent',
          color: '#fff',
          border: '1px solid #fff',
        }
      : {
          background: 'transparent',
          color: 'var(--color-navy)',
          border: '2px solid var(--color-navy)',
        },
    ghost: {
      background: 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid transparent',
    },
  };

  const style = { ...baseStyle, ...variantStyles[variant] };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={16} />}
      {loading ? 'Loading...' : children}
      {Icon && iconPosition === 'right' && <Icon size={16} />}
    </>
  );

  if (href) {
    return (
      <a href={href} style={style} className={className}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} style={style} onClick={onClick} disabled={disabled || loading} className={className}>
      {content}
    </button>
  );
}
