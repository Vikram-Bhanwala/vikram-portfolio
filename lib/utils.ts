export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function screenshotUrl(site: string, width = 1600) {
  const clean = site.replace(/\/$/, "");
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(clean)}?w=${width}`;
}

export function formatPhoneDisplay(phone: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return phone;
}

export function displayHost(site: string) {
  try {
    return new URL(site).host.replace(/^www\./, "");
  } catch {
    return site;
  }
}
