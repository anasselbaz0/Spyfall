/**
 * @param color is a hex color code
 * @param opacity is the alpha value between 0 and 1
 * @return a hex color code with opacity
* */
export function withOpacity(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}