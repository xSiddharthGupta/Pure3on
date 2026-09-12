type WaveProps = {
  className?: string;
};

/** Organic wave divider that bleeds into the next (white) section. */
export function Wave({ className = "fill-white" }: WaveProps) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-0">
      <svg
        className="relative block h-[80px] w-[calc(100%+1.3px)] md:h-[110px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.78,126.12,111,192.83,101.32c54.76-7.93,105.57-23.78,128.56-44.88Z"
          className={className}
        />
      </svg>
    </div>
  );
}
