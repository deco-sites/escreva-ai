import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "jornal"
  | "jornal2"
  | "mouse"
  | "email"
  | "email2"
  | "foguete"
  | "escrita"
  | "formatura"
  | "raio";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  id: AvailableIcons;
  size?: string;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
