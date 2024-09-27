import clsx from "clsx";
import Marker from "./Marker";

const Button = ({
  children,
  icon,
  href,
  containerCLassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img src={icon} alt="" className="z-10 mr-5 size-10 object-contain" />
        )}
        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after"></span>
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerCLassName,
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerCLassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
