import Link from "next/link";

export function BinMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 9h20" />
      <path d="M13 9V6h8v3" />
      <path d="M9 9l2 19h12l2-19" />
      <path d="M14 16c1 1.5 5 1.5 6 0" />
      <circle cx="12" cy="30" r="1.6" />
      <circle cx="22" cy="30" r="1.6" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Binsmith London home">
      <BinMark />
      <span>
        Binsmith <em>London</em>
      </span>
    </Link>
  );
}
