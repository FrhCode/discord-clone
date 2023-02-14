export function ExtractInitialsFromName(name: string) {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  // @ts-ignore
  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  if (initials.length < 2) {
    // @ts-ignore
    initials = name.substring(0, 2).toUpperCase();
  }

  return initials as unknown as string;
}
