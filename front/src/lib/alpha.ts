// Alpha on production: COBE is staff-only (admins) until it's ready. Set true to open it to all.
export const COBE_OPEN = false;

export const cobeVisible = (isAdmin: boolean | undefined) => COBE_OPEN || !!isAdmin;
