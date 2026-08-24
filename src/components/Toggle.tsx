type ToggleProps = {
  defaultChecked?: boolean;
  size?: "sm" | "md";
  "aria-label": string;
};

export default function Toggle({
  defaultChecked = false,
  size = "sm",
  "aria-label": ariaLabel,
}: ToggleProps) {
  if (size === "md") {
    return (
      <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out">
        <input
          aria-label={ariaLabel}
          defaultChecked={defaultChecked}
          className="peer absolute w-12 h-6 opacity-0 cursor-pointer z-10"
          type="checkbox"
        />
        <div className="w-12 h-6 bg-surface-container-highest rounded-full peer-checked:bg-gradient-to-r peer-checked:from-primary peer-checked:to-primary-container peer-focus-visible:ring-2 peer-focus-visible:ring-primary transition-all"></div>
        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
      </div>
    );
  }

  return (
    <div className="relative inline-block w-10 h-5 transition duration-200 ease-in-out">
      <input
        aria-label={ariaLabel}
        defaultChecked={defaultChecked}
        className="peer absolute w-10 h-5 opacity-0 cursor-pointer z-10"
        type="checkbox"
      />
      <div className="w-10 h-5 bg-surface-container-highest rounded-full peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary transition-colors"></div>
      <div className="absolute top-1 left-1 w-3 h-3 bg-on-surface-variant rounded-full transition-transform peer-checked:translate-x-5 peer-checked:bg-on-primary"></div>
    </div>
  );
}
