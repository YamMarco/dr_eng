// The email a feedback report becomes: sent to support@ (forwarded to the team), styled like
// the auth emails in emails/auth/. Everything from the client is escaped.

export type FeedbackReport = {
	message: string;
	url: string;
	screen: string;
	viewport: string;
	language: string;
	userId: string;
	email?: string;
	userAgent: string;
	/** True when a screenshot is attached (inline, cid:screenshot). */
	screenshot: boolean;
};

const escape = (text: string) =>
	text.replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
	);

const font = "font-family:'Heebo',Arial,Helvetica,sans-serif;";

function row(label: string, value: string, ltr = true) {
	return `<tr>
<td style="${font}font-size:13px;color:#6B7280;padding:6px 0;width:110px;vertical-align:top;">${label}</td>
<td dir="${ltr ? 'ltr' : 'rtl'}" style="${font}font-size:14px;color:#1F2937;padding:6px 0;text-align:${ltr ? 'left' : 'right'};word-break:break-all;">${value}</td>
</tr>`;
}

export function feedbackSubject(report: FeedbackReport): string {
	const first = report.message.trim().split('\n')[0].slice(0, 60);
	return `משוב: ${first || report.screen || report.url} [tester report]`;
}

export function feedbackHtml(report: FeedbackReport, at: Date): string {
	const time = at.toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' });
	const link = escape(report.url);
	return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head><meta charset="UTF-8"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background-color:#F9F7F4;direction:rtl;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F9F7F4">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;">
<tr><td style="${font}font-size:22px;font-weight:900;color:#1F2937;padding-bottom:14px;" dir="ltr" align="left">Eng<span style="color:#2A9D8F;">Up</span> <span style="font-size:15px;font-weight:700;color:#6B7280;">feedback report</span></td></tr>
<tr><td bgcolor="#FFFFFF" style="background-color:#FFFFFF;border-radius:20px;border:1px solid #ECE8E1;padding:24px;">

<p style="${font}font-size:13px;font-weight:700;color:#6B7280;margin:0 0 8px;">מה כתבו</p>
<div style="${font}font-size:16px;line-height:26px;color:#1F2937;white-space:pre-wrap;background-color:#F9F7F4;border-radius:12px;padding:14px 16px;margin-bottom:20px;">${escape(report.message) || '<span style="color:#9CA3AF;">(בלי טקסט)</span>'}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
${row('עמוד', `<a href="${link}" style="color:#23867B;">${link}</a>`)}
${report.screen ? row('מסך', escape(report.screen)) : ''}
${row('משתמש', `${escape(report.email ?? '-')}<br><span style="color:#9CA3AF;font-size:12px;">${escape(report.userId)}</span>`)}
${row('זמן', escape(time), false)}
${row('מסך המכשיר', `${escape(report.viewport)} · ${escape(report.language)}`)}
${row('דפדפן', `<span style="font-size:12px;color:#6B7280;">${escape(report.userAgent)}</span>`)}
</table>

${
	report.screenshot
		? `<p style="${font}font-size:13px;font-weight:700;color:#6B7280;margin:22px 0 8px;">צילום מסך</p>
<img src="cid:screenshot" alt="צילום מסך" style="display:block;max-width:100%;border-radius:12px;border:1px solid #ECE8E1;">`
		: ''
}

</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}
