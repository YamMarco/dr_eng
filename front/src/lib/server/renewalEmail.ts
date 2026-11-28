// The renewal reminder, 7 days before a subscription renews (/api/cron/renewals). Styled like
// feedbackEmail.ts. Values come from the catalogue and the DB, never from a user.
import { he } from '$lib/i18n/locales/he';
import { formatPrice, planById } from '$lib/plans';

const font = "font-family:'Heebo',Arial,Helvetica,sans-serif;";
const SETTINGS_URL = 'https://www.engup.co.il/app/settings';

/** d/m/yyyy in Israel. */
const israelDay = (at: Date) =>
	new Intl.DateTimeFormat('en-GB', {
		timeZone: 'Asia/Jerusalem',
		day: 'numeric',
		month: 'numeric',
		year: 'numeric'
	}).format(at);

export function planName(planId: string): string {
	const plan = planById(planId);
	if (!plan) return planId;
	const name = he.plans.offers[plan.offer].name;
	return plan.bundle ? name + he.plans.withCobe : name;
}

export type Renewal = { planId: string; price: number; at: Date };

export const renewalSubject = (r: Renewal) => `תזכורת: המנוי ל-EngUp מתחדש ב-${israelDay(r.at)}`;

export function renewalHtml(r: Renewal): string {
	const p = `${font}font-size:16px;line-height:26px;color:#1F2937;margin:0 0 14px;`;
	return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head><meta charset="UTF-8"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background-color:#F9F7F4;direction:rtl;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F9F7F4">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;width:100%;">
<tr><td style="${font}font-size:22px;font-weight:900;color:#1F2937;padding-bottom:14px;" dir="ltr" align="left">Eng<span style="color:#2A9D8F;">Up</span></td></tr>
<tr><td bgcolor="#FFFFFF" style="background-color:#FFFFFF;border-radius:20px;border:1px solid #ECE8E1;padding:24px;">
<p style="${p}font-weight:700;">המנוי שלכם מתחדש בעוד שבוע</p>
<p style="${p}">ב-${israelDay(r.at)} המסלול ${planName(r.planId)} מתחדש לחודש נוסף, בחיוב של ${formatPrice(r.price)} ₪.</p>
<p style="${p}">רוצים להמשיך? לא צריך לעשות כלום. רוצים לבטל? מבטלים בהגדרות, והגישה נשארת עד סוף התקופה.</p>
<p style="margin:20px 0 0;"><a href="${SETTINGS_URL}" style="${font}display:inline-block;background-color:#23867B;color:#FFFFFF;font-size:16px;font-weight:700;text-decoration:none;border-radius:12px;padding:12px 22px;">להגדרות המנוי</a></p>
</td></tr>
<tr><td style="${font}font-size:13px;color:#6B7280;padding-top:14px;">שאלות? support@engup.co.il</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
