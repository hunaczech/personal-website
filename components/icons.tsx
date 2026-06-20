type IconProps = { className?: string };

export const ArrowUpRight = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export const Mail = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const LinkedIn = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8.34 18.34v-7.2H6.06v7.2zM7.2 10.06a1.32 1.32 0 1 0 0-2.64 1.32 1.32 0 0 0 0 2.64zm11.14 8.28v-3.95c0-2.11-.45-3.74-2.92-3.74-1.19 0-1.98.65-2.31 1.27h-.03v-1.07h-2.19v7.2h2.28v-3.56c0-.94.18-1.85 1.34-1.85 1.15 0 1.16 1.07 1.16 1.91v3.5z" />
  </svg>
);

export const XLogo = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.9 2H22l-7.3 8.34L23 22h-6.56l-5.14-6.72L5.4 22H2.3l7.8-8.92L1.7 2h6.72l4.65 6.15zm-1.1 18h1.7L7.3 3.74H5.46z" />
  </svg>
);
