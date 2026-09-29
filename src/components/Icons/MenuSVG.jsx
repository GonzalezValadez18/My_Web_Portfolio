export default function MenuSVG({ className, open = false, "aria-label": ariaLabel = "Abrir menú", ...props }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-label={ariaLabel} className={className} fill="none" {...props}>
      {open ? (
        <>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          <path d="M7 12H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

          <path d="M4 17H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
