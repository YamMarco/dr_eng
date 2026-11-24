// Feature flags.

/** COBE (the oral exam): every COBE surface - site, plans, checkout, the app module, the
 *  AI routes - follows this. Off = staff (admins) only. */
export const COBE_OPEN = false;

export const cobeVisible = (isAdmin: boolean | undefined) => COBE_OPEN || !!isAdmin;
