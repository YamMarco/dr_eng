// Module E word deck, List A (180 items, in the list's own order: 30 sets of 6).
// Source: questions_Module_E_List_A.1.docx. Definitions given in the source are
// kept (contemporary, disagreement, dispute reworded so no two same-class
// definitions fit the same item); the rest, the Hebrew and the examples are ours.
import type { DeckWord, WordPos } from '$lib/deck/types';

const w = (word: string, pos: WordPos, defEn: string, he: string, exampleEn: string): DeckWord => ({
	id: word
		.toLowerCase()
		.replace(/[^a-z]+/g, '-')
		.replace(/^-|-$/g, ''),
	word,
	pos,
	defEn,
	he,
	exampleEn
});

export const eWords: DeckWord[] = [
	// 1
	w(
		'acquire',
		'verb',
		'to obtain or get something',
		'להשיג, לרכוש',
		'It takes years to **acquire** a new language.'
	),
	w(
		'barrier',
		'noun',
		'something that prevents movement or progress',
		'מחסום',
		'Language can be a **barrier** for new immigrants.'
	),
	w(
		'anxious',
		'adj',
		'worried or nervous about something',
		'מודאג, חרד',
		'She felt **anxious** before the exam.'
	),
	w(
		'bargain',
		'noun',
		'something bought for less than its usual price',
		'מציאה',
		'The jacket was only 50 shekels. What a **bargain**!'
	),
	w(
		'assure',
		'verb',
		'to tell someone that something is certain so they worry less',
		'להבטיח, להרגיע',
		'The doctor tried to **assure** us that everything was fine.'
	),
	w(
		'atmosphere',
		'noun',
		'the mood or feeling of a place',
		'אווירה',
		'The **atmosphere** at the party was warm and friendly.'
	),
	// 2
	w(
		'bring up',
		'chunk',
		'to raise a child; to start talking about a subject',
		'לגדל (ילד); להעלות נושא',
		'It is not easy to **bring up** three children alone.'
	),
	w(
		'capacity',
		'noun',
		'the amount that something can hold',
		'קיבולת',
		'The stadium has a **capacity** of 30,000 people.'
	),
	w(
		'bold',
		'adj',
		'brave and confident',
		'נועז, אמיץ',
		'It was a **bold** decision to leave her job.'
	),
	w(
		'calculate',
		'verb',
		'to work out an amount using numbers',
		'לחשב',
		'Can you **calculate** how much the trip will cost?'
	),
	w(
		'burst into tears',
		'chunk',
		'to suddenly begin crying',
		'לפרוץ בבכי',
		'When she heard the news, she **burst into tears**.'
	),
	w(
		'branch',
		'noun',
		'a part of a tree that grows out from the trunk; a local office of a company',
		'ענף; סניף',
		'A bird was sitting on a **branch** of the tree.'
	),
	// 3
	w(
		'consequence',
		'noun',
		'a result of an action or situation',
		'תוצאה, השלכה',
		'Pollution is a **consequence** of heavy traffic.'
	),
	w(
		'competitive',
		'adj',
		'wanting very much to win or to be better than others',
		'תחרותי',
		'He is very **competitive** and hates losing.'
	),
	w(
		'cope',
		'verb',
		'to deal with something difficult',
		'להתמודד',
		'Many students find it hard to **cope** with stress.'
	),
	w(
		'contemporary',
		'adj',
		'belonging to the present time; modern',
		'עכשווי, מודרני',
		'The museum shows **contemporary** art.'
	),
	w(
		'conduct',
		'verb',
		'to organize and carry out an activity, such as a study',
		'לערוך, לבצע',
		'The scientists will **conduct** a study on sleep.'
	),
	w(
		'considerable',
		'adj',
		'large in size or amount',
		'ניכר, משמעותי',
		'The project cost a **considerable** amount of money.'
	),
	// 4
	w(
		'distinguish',
		'verb',
		'to recognize the difference between things',
		'להבחין',
		'Young children cannot always **distinguish** right from wrong.'
	),
	w(
		'disaster',
		'noun',
		'a sudden event that causes great damage',
		'אסון',
		'The flood was a **disaster** for the whole town.'
	),
	w(
		'dedicate',
		'verb',
		'to give all your time or energy to something',
		'להקדיש',
		'She decided to **dedicate** her life to helping animals.'
	),
	w(
		'dishonest',
		'adj',
		'not truthful or honest',
		'לא ישר, רמאי',
		"It is **dishonest** to copy someone else's work."
	),
	w(
		'decrease',
		'verb',
		'to become smaller or less',
		'לפחות, לרדת',
		'The number of birds in the area began to **decrease**.'
	),
	w(
		'deliver',
		'verb',
		'to take goods or letters to a place',
		'למסור, לספק (משלוח)',
		'The shop will **deliver** the sofa on Monday.'
	),
	// 5
	w(
		'destination',
		'noun',
		'the place where someone is going',
		'יעד',
		'Eilat is a popular **destination** in winter.'
	),
	w(
		'determine',
		'verb',
		'to decide or find out something exactly',
		'לקבוע',
		'Tests will **determine** the cause of the illness.'
	),
	w(
		'demanding',
		'adj',
		'requiring a lot of effort or attention',
		'תובעני, קשה',
		'Being a nurse is a **demanding** job.'
	),
	w(
		'dreadful',
		'adj',
		'very bad or unpleasant',
		'נורא, איום',
		'The food at the hotel was **dreadful**.'
	),
	w(
		'domestic',
		'adj',
		'related to the home, or to your own country',
		'ביתי; פנימי (במדינה)',
		'Cats and dogs are **domestic** animals.'
	),
	w(
		'demonstrate',
		'verb',
		'to show or explain clearly',
		'להדגים, להראות',
		'The teacher will **demonstrate** how the machine works.'
	),
	// 6
	w(
		'absorb',
		'verb',
		'to take in or soak up',
		'לספוג',
		'Plants **absorb** water through their roots.'
	),
	w(
		'access',
		'noun',
		'the right or the way to enter or use something',
		'גישה',
		'Every student should have **access** to a computer.'
	),
	w(
		'advanced',
		'adj',
		'at a high level; modern',
		'מתקדם',
		'This phone uses very **advanced** technology.'
	),
	w(
		'advertising',
		'noun',
		'telling people about products so that they buy them',
		'פרסום',
		'Companies spend millions on **advertising**.'
	),
	w(
		'agriculture',
		'noun',
		'farming or growing crops',
		'חקלאות',
		'Water is very important for **agriculture**.'
	),
	w(
		'ambition',
		'noun',
		'a strong desire to achieve something',
		'שאיפה, אמביציה',
		'Her **ambition** is to become a doctor.'
	),
	// 7
	w(
		'all of a sudden',
		'chunk',
		'suddenly and unexpectedly',
		'פתאום',
		'**All of a sudden**, the lights went out.'
	),
	w(
		'all over the place',
		'chunk',
		'everywhere; in a messy way',
		'בכל מקום, מפוזר',
		'His clothes were **all over the place**.'
	),
	w(
		'altogether',
		'adv',
		'completely or in total',
		'בסך הכול; לגמרי',
		'There were twenty people **altogether**.'
	),
	w(
		'among other things',
		'chunk',
		'as well as other things',
		'בין היתר',
		'The club offers, **among other things**, music lessons.'
	),
	w(
		'analysis',
		'noun',
		'a careful study of something to understand it',
		'ניתוח',
		'The **analysis** of the results took a month.'
	),
	w(
		'annoy',
		'verb',
		'to make someone feel irritated',
		'לעצבן',
		'Loud music can **annoy** the neighbours.'
	),
	// 8
	w(
		'apparent',
		'adj',
		'easy to see or understand',
		'ברור, גלוי',
		'It was **apparent** that he was tired.'
	),
	w(
		'approach',
		'noun',
		'a method or way of dealing with something',
		'גישה, דרך',
		'We need a new **approach** to the problem.'
	),
	w(
		'appropriate',
		'adj',
		'suitable for a particular situation',
		'מתאים, הולם',
		'Jeans are not **appropriate** for a wedding.'
	),
	w(
		'argue',
		'verb',
		'to disagree with someone, often angrily',
		'להתווכח',
		'My brothers always **argue** about football.'
	),
	w(
		'artistic',
		'adj',
		'good at art, or connected with art',
		'אומנותי',
		'She is very **artistic** and loves to paint.'
	),
	w(
		'ashamed',
		'adj',
		'embarrassed or guilty about something',
		'מתבייש',
		'He felt **ashamed** of his behaviour.'
	),
	// 9
	w(
		'at fault',
		'chunk',
		'responsible for a mistake or problem',
		'אשם',
		'The driver who crossed the red light was **at fault**.'
	),
	w(
		'at least',
		'chunk',
		'not less than',
		'לפחות',
		'You should sleep **at least** eight hours a night.'
	),
	w(
		'at his best',
		'chunk',
		'at the highest level he can reach',
		'במיטבו',
		'The singer was **at his best** in the last song.'
	),
	w(
		'attraction',
		'noun',
		'an interesting place that people come to see',
		'אטרקציה',
		'The old city is the main **attraction** for tourists.'
	),
	w(
		'average',
		'adj',
		'ordinary or typical',
		'ממוצע, רגיל',
		'He is an **average** student, not the best and not the worst.'
	),
	w(
		'awareness',
		'noun',
		'knowledge or understanding of a situation',
		'מודעות',
		'The campaign raised **awareness** of the danger of smoking.'
	),
	// 10
	w('barely', 'adv', 'only just; almost not', 'בקושי', 'I could **barely** hear the teacher.'),
	w(
		'base',
		'noun',
		'the main place where someone lives or works',
		'בסיס',
		'The company has its **base** in Tel Aviv.'
	),
	w(
		'bay',
		'noun',
		'a part of the sea that is partly surrounded by land',
		'מפרץ',
		'The boats stayed in the **bay** during the storm.'
	),
	w(
		'be in charge',
		'chunk',
		'to be responsible for controlling something',
		'להיות אחראי, לנהל',
		'Who will **be in charge** while the manager is away?'
	),
	w(
		'be out of',
		'chunk',
		'to have no more of something left',
		'שנגמר ל-',
		'We will **be out of** milk by tomorrow.'
	),
	w(
		'be situated',
		'chunk',
		'to be in a particular place',
		'להיות ממוקם',
		'The hotel will **be situated** near the beach.'
	),
	// 11
	w('beat', 'noun', 'a rhythm in music', 'קצב', 'The song has a fast **beat**.'),
	w('behind', 'other', 'at the back of', 'מאחורי', 'The cat is hiding **behind** the sofa.'),
	w(
		'believe it or not',
		'chunk',
		'used before saying something surprising',
		'תאמינו או לא',
		'**Believe it or not**, he has never seen the sea.'
	),
	w(
		'bend',
		'verb',
		'to make something curved, or to move your body down',
		'לכופף, להתכופף',
		'You have to **bend** your knees to lift the box.'
	),
	w(
		'besides',
		'adv',
		'in addition to; also',
		'חוץ מזה, בנוסף',
		"I don't want to go out. **Besides**, it's raining."
	),
	w(
		'bitter',
		'adj',
		'having a sharp, unpleasant taste',
		'מר',
		'Black coffee has a **bitter** taste.'
	),
	// 12
	w(
		'blame',
		'verb',
		'to say that someone is responsible for something bad',
		'להאשים',
		"Don't **blame** me for your mistakes."
	),
	w(
		'block',
		'verb',
		'to stop movement or progress',
		'לחסום',
		'A fallen tree can **block** the road.'
	),
	w(
		'blow up',
		'chunk',
		'to explode or make something explode',
		'לפוצץ, להתפוצץ',
		'In the film, they **blow up** an old bridge.'
	),
	w(
		'boiled',
		'adj',
		'cooked in very hot water',
		'מבושל, רתוח',
		'I had a **boiled** egg for breakfast.'
	),
	w(
		'bother',
		'verb',
		'to annoy or worry someone',
		'להטריד',
		'Sorry to **bother** you, but can you help me?'
	),
	w(
		'bottom',
		'noun',
		'the lowest part of something',
		'תחתית',
		'Write your name at the **bottom** of the page.'
	),
	// 13
	w(
		'brake',
		'noun',
		'a device used to slow or stop a vehicle',
		'בלם',
		'He pressed the **brake** and the car stopped.'
	),
	w('breast', 'noun', 'the front part of the chest', 'חזה', 'The bird had a red **breast**.'),
	w('breeze', 'noun', 'a light wind', 'משב רוח, בריזה', 'A cool **breeze** came from the sea.'),
	w(
		'brick',
		'noun',
		'a block of baked clay used for building',
		'לבנה',
		'The house is built of red **brick**.'
	),
	w(
		'brilliant',
		'adj',
		'very intelligent, or full of light and colour',
		'מבריק; זוהר',
		'She is a **brilliant** scientist.'
	),
	w(
		'bucket',
		'noun',
		'an open container with a handle, for carrying water',
		'דלי',
		'The children filled a **bucket** with sand.'
	),
	// 14
	w(
		'bug',
		'noun',
		'a small insect; a fault in a computer program',
		'חרק; באג',
		'There is a **bug** in the app, so it keeps closing.'
	),
	w(
		'bunch',
		'noun',
		'a group of things together',
		'צרור, חבורה',
		'He gave her a **bunch** of flowers.'
	),
	w(
		'bury',
		'verb',
		'to put something in the ground and cover it',
		'לקבור',
		'Dogs like to **bury** bones in the garden.'
	),
	w(
		'butcher',
		'noun',
		'a person who cuts and sells meat',
		'קצב',
		'We bought chicken from the **butcher**.'
	),
	w(
		'cabin',
		'noun',
		'a small simple house, or a room on a ship',
		'בקתה; תא',
		'They spent the weekend in a **cabin** in the forest.'
	),
	w(
		'capture',
		'verb',
		'to catch and keep',
		'ללכוד',
		'The police managed to **capture** the thief.'
	),
	// 15
	w('cash', 'noun', 'money in the form of notes and coins', 'מזומן', 'Can I pay in **cash**?'),
	w(
		'casual',
		'adj',
		'relaxed and not formal',
		'לא רשמי, יומיומי',
		'You can wear **casual** clothes to the party.'
	),
	w(
		'cave',
		'noun',
		'a large hole in the side of a hill or under the ground',
		'מערה',
		'Bats live in the **cave**.'
	),
	w(
		'ceremony',
		'noun',
		'a formal event held for a special occasion',
		'טקס',
		'The graduation **ceremony** starts at six.'
	),
	w(
		'certificate',
		'noun',
		'an official document that proves something',
		'תעודה',
		'You get a **certificate** at the end of the course.'
	),
	w(
		'challenge',
		'verb',
		'to question or express disagreement with something',
		'לערער על, לאתגר',
		"Students should **challenge** ideas they don't agree with."
	),
	// 16
	w(
		'chance',
		'noun',
		'a possibility; an opportunity',
		'סיכוי; הזדמנות',
		'There is a good **chance** it will rain.'
	),
	w(
		'change',
		'noun',
		'the process of becoming different',
		'שינוי',
		'Moving to a new city is a big **change**.'
	),
	w(
		'characteristic',
		'noun',
		'a quality that is typical of someone or something',
		'מאפיין, תכונה',
		'Long ears are a **characteristic** of this dog.'
	),
	w(
		'charge',
		'verb',
		'to ask an amount of money for something',
		'לגבות (מחיר)',
		'Some museums **charge** nothing for students.'
	),
	w(
		'chase',
		'verb',
		'to follow someone quickly in order to catch them',
		'לרדוף אחרי',
		'The dog likes to **chase** cats.'
	),
	w(
		'cheat',
		'verb',
		'to behave dishonestly in order to gain an advantage',
		'לרמות',
		'If you **cheat** in the exam, you will fail.'
	),
	// 17
	w(
		'check in / check out',
		'chunk',
		'to arrive at or leave a hotel or airport officially',
		'להירשם / לעזוב (מלון, שדה תעופה)',
		'Guests must **check in** before 3 p.m.'
	),
	w(
		'claim',
		'noun',
		'a statement that something is true, or a demand for something',
		'טענה; דרישה',
		'There is no proof for his **claim**.'
	),
	w(
		'classic',
		'adj',
		'of high quality and popular for a long time',
		'קלאסי',
		'This is a **classic** film that everyone should see.'
	),
	w(
		'clinic',
		'noun',
		'a place where people get medical help',
		'מרפאה',
		'She took her baby to the **clinic**.'
	),
	w('clothing', 'noun', 'clothes in general', 'ביגוד', 'Bring warm **clothing** for the trip.'),
	w(
		'coach',
		'noun',
		'a person who trains a sports team or player',
		'מאמן',
		'The **coach** told the players to run faster.'
	),
	// 18
	w(
		'cold',
		'noun',
		'a common illness that makes you sneeze',
		'הצטננות',
		'I stayed home because I had a **cold**.'
	),
	w(
		'collector',
		'noun',
		'a person who collects things as a hobby',
		'אספן',
		'He is a stamp **collector**.'
	),
	w(
		'common',
		'adj',
		'shared by many people or happening often',
		'נפוץ; משותף',
		'Cohen is a **common** name in Israel.'
	),
	w(
		'complicated',
		'adj',
		'difficult to understand because it has many parts',
		'מסובך',
		'The instructions were too **complicated**.'
	),
	w(
		'concern',
		'noun',
		'a feeling of worry',
		'דאגה',
		'There is growing **concern** about the climate.'
	),
	w(
		'conditions',
		'noun',
		'the circumstances that affect a situation',
		'תנאים',
		'Working **conditions** in the factory were bad.'
	),
	// 19
	w('contest', 'noun', 'a competition', 'תחרות', 'She won a singing **contest**.'),
	w(
		'continent',
		'noun',
		"one of the world's large land masses",
		'יבשת',
		'Africa is a huge **continent**.'
	),
	w(
		'copy',
		'verb',
		'to make something exactly like something else',
		'להעתיק',
		'Please **copy** the sentence into your notebook.'
	),
	w(
		'correspond',
		'verb',
		'to write to someone, or to be similar to something',
		'להתכתב; להתאים',
		'The two friends **correspond** by email.'
	),
	w(
		'costume',
		'noun',
		'special clothes worn to look like someone or something else',
		'תחפושת',
		'He wore a pirate **costume** on Purim.'
	),
	w(
		'courage',
		'noun',
		'the ability to face fear or difficulty',
		'אומץ',
		'It takes **courage** to say you were wrong.'
	),
	// 20
	w(
		'cover',
		'verb',
		'to put something over something else',
		'לכסות',
		'**Cover** the pot so the soup stays hot.'
	),
	w(
		'crash',
		'noun',
		'an accident in which a vehicle hits something',
		'התנגשות, התרסקות',
		'Nobody was hurt in the **crash**.'
	),
	w(
		'criterion',
		'noun',
		'a standard used for judging something',
		'קריטריון, אמת מידה',
		'Price is not the only **criterion** when you buy a phone.'
	),
	w(
		'critic',
		'noun',
		'a person who judges and writes about books, films, etc.',
		'מבקר',
		'The **critic** loved the new film.'
	),
	w(
		'cure',
		'noun',
		'a treatment that makes an illness go away',
		'תרופה, ריפוי',
		'There is still no **cure** for the common cold.'
	),
	w(
		'current',
		'adj',
		'happening or existing now',
		'נוכחי, עדכני',
		'What is your **current** address?'
	),
	// 21
	w(
		'customs',
		'noun',
		'the place at a border where bags are checked',
		'מכס',
		'We waited an hour at **customs**.'
	),
	w(
		'cut down',
		'chunk',
		'to reduce something, or to cut a tree down',
		'לצמצם; לכרות',
		'Doctors told him to **cut down** on sugar.'
	),
	w(
		'cyberbullying',
		'noun',
		'bullying that takes place through digital technology',
		'בריונות ברשת',
		'**Cyberbullying** can hurt as much as real bullying.'
	),
	w('cycle', 'verb', 'to ride a bicycle', 'לרכוב על אופניים', 'I **cycle** to school every day.'),
	w('date', 'noun', 'a particular day of the month', 'תאריך', 'What is the **date** of the exam?'),
	w('deaf', 'adj', 'unable to hear', 'חירש', 'He is **deaf**, so he uses sign language.'),
	// 22
	w('debt', 'noun', 'money that is owed', 'חוב', 'It took him years to pay his **debt**.'),
	w(
		'decade',
		'noun',
		'a period of ten years',
		'עשור',
		'The city has changed a lot in the last **decade**.'
	),
	w(
		'deck',
		'noun',
		'the floor of a ship',
		'סיפון',
		'The passengers stood on the **deck** to watch the sea.'
	),
	w(
		'declare',
		'verb',
		'to announce something officially',
		'להכריז',
		'The government may **declare** a holiday.'
	),
	w(
		'decorate',
		'verb',
		'to make something look more attractive',
		'לקשט',
		'We will **decorate** the classroom for the party.'
	),
	w(
		'defeat',
		'verb',
		'to win against someone',
		'להביס',
		'Our team managed to **defeat** the champions.'
	),
	// 23
	w(
		'degree',
		'noun',
		'a unit for measuring temperature; a university qualification',
		'מעלה; תואר',
		'She has a **degree** in biology.'
	),
	w(
		'delayed',
		'adj',
		'later than planned',
		'מעוכב, מאחר',
		'Our flight was **delayed** by two hours.'
	),
	w('deliberately', 'adv', 'on purpose', 'בכוונה', 'He broke the window **deliberately**.'),
	w(
		'departure',
		'noun',
		'the act of leaving a place',
		'יציאה, עזיבה',
		'Check the **departure** time of the train.'
	),
	w(
		'deposit',
		'noun',
		'money given as a first payment or as security',
		'פיקדון, מקדמה',
		'We paid a **deposit** on the apartment.'
	),
	w(
		'deserve',
		'verb',
		'to have earned something because of your actions or qualities',
		'להיות ראוי ל-',
		'You worked hard, so you **deserve** a rest.'
	),
	// 24
	w(
		'design',
		'noun',
		'a plan or drawing of how something will look',
		'עיצוב, תכנון',
		'I like the **design** of the new building.'
	),
	w(
		'destruction',
		'noun',
		'serious damage that ruins something',
		'הרס',
		'The fire caused great **destruction**.'
	),
	w(
		'detect',
		'verb',
		'to discover or notice something that is not easy to see',
		'לגלות, לזהות',
		'Dogs can **detect** smells we cannot.'
	),
	w(
		'development',
		'noun',
		'the process of growth or change',
		'התפתחות',
		"Sleep is important for a child's **development**."
	),
	w('devil', 'noun', 'an evil spirit', 'שטן', 'In the story, the **devil** offers him money.'),
	w(
		'diagram',
		'noun',
		'a drawing that explains how something works or is arranged',
		'תרשים',
		'The **diagram** shows how the heart works.'
	),
	// 25
	w(
		'differ',
		'verb',
		'to be unlike, or to have a different opinion',
		'להיות שונה; לחלוק על',
		'The two brothers **differ** in many ways.'
	),
	w(
		'difficult',
		'adj',
		'not easy to do or understand',
		'קשה',
		'The last question was very **difficult**.'
	),
	w(
		'direct',
		'verb',
		'to be in charge of a film or play',
		'לביים',
		'Who will **direct** the school play?'
	),
	w(
		'disabled',
		'adj',
		'having a physical or mental condition that limits activity',
		'בעל מוגבלות',
		'The building has a lift for **disabled** people.'
	),
	w(
		'disagreement',
		'noun',
		'a situation in which people have different opinions',
		'אי־הסכמה',
		'There was a **disagreement** about where to eat.'
	),
	w(
		'disappointed',
		'adj',
		'unhappy because something was not as good as expected',
		'מאוכזב',
		'She was **disappointed** with her grade.'
	),
	// 26
	w(
		'discovery',
		'noun',
		'something found or learned for the first time',
		'תגלית',
		'The **discovery** of the old coins surprised everyone.'
	),
	w('disk', 'noun', 'a flat, round object', 'דיסק', 'He saved the files on a **disk**.'),
	w(
		'dislike',
		'verb',
		'not to like someone or something',
		'לא לאהוב, לסלוד',
		'Many children **dislike** vegetables.'
	),
	w(
		'dispute',
		'noun',
		'a serious argument, often one that lasts a long time',
		'סכסוך',
		'The workers are in a **dispute** with the company over pay.'
	),
	w(
		'disturb',
		'verb',
		'to interrupt or bother someone',
		'להפריע',
		"Please don't **disturb** me while I'm studying."
	),
	w(
		'divide',
		'verb',
		'to separate something into parts',
		'לחלק',
		'**Divide** the cake into eight pieces.'
	),
	// 27
	w(
		'divorce',
		'noun',
		'the legal end of a marriage',
		'גירושין',
		'Their **divorce** was hard for the children.'
	),
	w(
		'do a good job',
		'chunk',
		'to do something well',
		'לעשות עבודה טובה',
		'You will **do a good job** if you prepare.'
	),
	w('done', 'adj', 'finished or completed', 'גמור, הושלם', 'Is your homework **done**?'),
	w(
		'double',
		'adj',
		'twice as much or as many',
		'כפול',
		'He ordered a **double** portion of fries.'
	),
	w(
		'doubt',
		'verb',
		'to question whether something is true',
		'לפקפק',
		'I **doubt** that he told the truth.'
	),
	w('dozen', 'noun', 'twelve of something', 'תריסר', 'She bought a **dozen** eggs.'),
	// 28
	w(
		'draft',
		'noun',
		'a first version of a piece of writing',
		'טיוטה',
		'Write a **draft** first, then correct it.'
	),
	w(
		'dramatic',
		'adj',
		'sudden and very noticeable; exciting',
		'דרמטי',
		'There was a **dramatic** change in the weather.'
	),
	w(
		'drink',
		'verb',
		'to take liquid into your mouth and swallow it',
		'לשתות',
		'You should **drink** water every hour.'
	),
	w(
		'drive',
		'verb',
		'to control a car or other vehicle',
		'לנהוג',
		'My sister is learning to **drive**.'
	),
	w(
		'drop',
		'verb',
		'to stop doing something, or to let something fall',
		'להפיל; להפסיק',
		'Be careful not to **drop** the glasses.'
	),
	w(
		'drunk',
		'adj',
		'affected by too much alcohol',
		'שיכור',
		'It is dangerous to drive when you are **drunk**.'
	),
	// 29
	w(
		'earth',
		'noun',
		'the planet we live on; soil',
		'כדור הארץ; אדמה',
		'The **earth** goes around the sun.'
	),
	w(
		'earthquake',
		'noun',
		'a sudden shaking of the ground',
		'רעידת אדמה',
		'The **earthquake** destroyed many houses.'
	),
	w(
		'economical',
		'adj',
		'saving money or resources; not wasteful',
		'חסכוני',
		'Small cars are more **economical**.'
	),
	w(
		'editor',
		'noun',
		'a person who checks and corrects texts before they are published',
		'עורך',
		'The **editor** made changes to my article.'
	),
	w(
		'educate',
		'verb',
		'to teach or train someone',
		'לחנך, ללמד',
		'Schools **educate** children for the future.'
	),
	w(
		'advance',
		'noun',
		'progress or improvement',
		'התקדמות',
		'The new drug is a great **advance** in medicine.'
	),
	// 30
	w(
		'(all) on your own',
		'chunk',
		'without help from anyone else',
		'לבד, בכוחות עצמך',
		'Did you build this **all on your own**?'
	),
	w(
		'(every) once in a while',
		'chunk',
		'occasionally; not very often',
		'מדי פעם',
		'We eat out **once in a while**.'
	),
	w('a little', 'chunk', 'a small amount; slightly', 'קצת', "I'm **a little** tired today."),
	w(
		'appear',
		'verb',
		'to seem; to start to be seen',
		'להיראות; להופיע',
		'The stars **appear** at night.'
	),
	w(
		'be responsible for',
		'chunk',
		'to have the duty of taking care of something',
		'להיות אחראי ל-',
		'From now on, you will **be responsible for** the keys.'
	),
	w(
		'believe in',
		'chunk',
		'to trust that something exists or is good',
		'להאמין ב-',
		'I **believe in** hard work.'
	)
];
