import type { Walkthrough } from './model';

// Green Africa passage from Module C (c-1), solved "Give TWO" style.
export const greenAfricaDemo: Walkthrough = {
	question:
		'What do we learn from paragraph III about the results of the project? Give TWO answers.',
	paragraphs: [
		{
			label: 'I',
			text: 'Every year, forests around the world are destroyed by fire, farming, and pollution. However, there is good news. In 2019, a group of scientists started a project to plant one billion trees in Africa by 2030. The project, called Green Africa, has already planted over 200 million trees in 15 countries.'
		},
		{
			label: 'II',
			text: 'The project is led by Dr. Amara Diallo, a scientist from Senegal. "We do not just plant trees," says Dr. Diallo. "We teach local people how to care for them." According to Dr. Diallo, most trees die because nobody looks after them. When local people are involved, 85% of trees survive.'
		},
		{
			label: 'III',
			text: 'The results are already visible. In Ethiopia, the number of birds increased by 60% in areas where trees were planted. In addition, in Kenya, rivers that were dry for 20 years began to flow again. Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.'
		}
	],
	steps: [
		{
			caption: '**לא מתחילים מהטקסט.** קודם קוראים את השאלה, ורק אותה.',
			focus: [{ in: 'q' }]
		},
		{
			caption: '**כמה תשובות?** שתיים. לא אחת ולא שלוש.',
			marks: [{ kind: 'circle', target: { in: 'q', text: 'Give TWO answers' }, note: '2 תשובות' }]
		},
		{
			caption: '**איפה מחפשים?** רק בפסקה III. את שאר הטקסט בכלל לא צריך לקרוא.',
			marks: [{ kind: 'circle', target: { in: 'q', text: 'paragraph III' }, note: 'איפה' }]
		},
		{
			caption: '**מה מחפשים?** תוצאות, results. זו מילת המפתח.',
			marks: [{ kind: 'highlight', target: { in: 'q', text: 'results' } }]
		},
		{
			caption: 'קופצים ישר לפסקה III. **אותה מילה בדיוק** מחכה כבר במשפט הראשון.',
			focus: [{ in: 'q' }, { in: 'p3' }],
			marks: [
				{
					kind: 'link',
					from: { in: 'q', text: 'results' },
					to: { in: 'p3', text: 'results' }
				},
				{ kind: 'highlight', target: { in: 'p3', text: 'results' } }
			]
		},
		{
			caption: '**תשובה 1:** מספר הציפורים באתיופיה עלה ב-60%.',
			marks: [
				{
					kind: 'underline',
					target: { in: 'p3', text: 'the number of birds increased by 60%' },
					note: 'תשובה 1'
				}
			]
		},
		{
			caption: '**In addition** = עוד תשובה בדרך. מילת הוספה מסמנת את התשובה השנייה.',
			marks: [{ kind: 'circle', target: { in: 'p3', text: 'In addition' } }]
		},
		{
			caption: '**תשובה 2:** בקניה, נהרות שהיו יבשים 20 שנה התחילו לזרום שוב.',
			marks: [
				{
					kind: 'underline',
					target: { in: 'p3', text: 'rivers that were dry for 20 years began to flow again' },
					note: 'תשובה 2'
				}
			]
		},
		{
			caption:
				'המשפט האחרון מפתה, אבל **could** אומר שזו תחזית. זו לא תוצאה שכבר קרתה, אז לא כותבים אותו.',
			marks: [
				{
					kind: 'strike',
					target: {
						in: 'p3',
						text: 'Scientists say that if the project continues, it could reduce carbon in the atmosphere by 15%.'
					},
					note: 'תחזית, לא תוצאה'
				}
			]
		},
		{
			caption: 'קראנו **פסקה אחת מתוך שלוש** ומצאנו שתי תשובות. זה כל הסוד.',
			focus: [
				{ in: 'q', text: 'Give TWO answers' },
				{ in: 'p3', text: 'the number of birds increased by 60%' },
				{ in: 'p3', text: 'rivers that were dry for 20 years began to flow again' }
			]
		}
	]
};
