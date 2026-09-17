// Static frontend-only data for COOPEC Microtous.
// Every localized field is provided in English, French and Kiswahili.

const tr = (en, fr, sw) => ({ en, fr, sw });

export const pick = (field, lang) => {
  const lng = ['en', 'fr', 'sw'].includes(lang) ? lang : 'fr';
  return field[lng] ?? field.fr;
};

export const localize = (obj, lang) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      value.fr !== undefined
    ) {
      result[key] = pick(value, lang);
    } else {
      result[key] = value;
    }
  });
  return result;
};

export const servicesData = [
  {
    id: 1,
    name: tr('Secure Savings', 'Épargne sécurisée', 'Akiba salama'),
    description: tr(
      'Save your money safely and earn interest while building a stable future.',
      'Épargnez votre argent en toute sécurité et profitez d’intérêts tout en construisant un avenir stable.',
      'Weka akiba yako kwa usalama na upate riba huku ukijenga mustakabali thabiti.'
    ),
  },
  {
    id: 2,
    name: tr('Accessible Credit', 'Crédit accessible', 'Mikopo rahisi'),
    description: tr(
      'Access adapted loans at favourable rates to finance your projects.',
      'Accédez à des crédits adaptés à des taux avantageux pour financer vos projets.',
      'Pata mikopo inayofaa kwa viwango vya kuridhisha ili kufadhili miradi yako.'
    ),
  },
  {
    id: 3,
    name: tr('Financial Support & Advice', 'Accompagnement et conseil financier', 'Usaidizi na ushauri wa kifedha'),
    description: tr(
      'Benefit from the advice of our experts to manage your finances with confidence.',
      'Bénéficiez des conseils de nos experts pour gérer vos finances en toute confiance.',
      'Nufaika na ushauri wa wataalamu wetu ili kusimamia fedha zako kwa ujasiri.'
    ),
  },
  {
    id: 4,
    name: tr('Community Development', 'Développement communautaire', 'Maendeleo ya jamii'),
    description: tr(
      'Join initiatives that strengthen solidarity and local economic growth.',
      'Participez à des initiatives qui renforcent la solidarité et la croissance économique locale.',
      'Jiunge na mipango inayoimarisha mshikamano na ukuaji wa uchumi wa ndani.'
    ),
  },
];

export const subservicesData = [
  {
    id: 1,
    name: tr('Current Savings', 'Épargne Courant', 'Akiba Courant'),
    tagline: tr(
      'For your immediate projects.',
      'Pour vos projets immédiats.',
      'Kwa miradi yako ya karibu.'
    ),
    points: [
      tr('Valid identity document', "Pièce d'identité en cours de validité", 'Kitambulisho halali'),
      tr('Two passport photos', 'Deux photos passeport', 'Picha mbili za pasipoti'),
      tr('Account opening: $5', 'Ouverture de compte : 5 $', 'Ufunguzi wa akaunti: $5'),
      tr('Account keeping fee: $1 per month', 'Frais de tenue de compte : 1 $ le mois', 'Ada ya utunzaji wa akaunti: $1 kwa mwezi'),
    ],
  },
  {
    id: 2,
    name: tr('Maisha Savings', 'Épargne Maisha', 'Akiba Maisha'),
    tagline: tr(
      'To build your future.',
      'Pour construire votre avenir.',
      'Kujenga mustakabali wako.'
    ),
    points: [
      tr('Valid identity document', "Pièce d'identité en cours de validité", 'Kitambulisho halali'),
      tr('Two passport photos', 'Deux photos passeport', 'Picha mbili za pasipoti'),
      tr('Account opening: $10', 'Ouverture de compte : 10 $', 'Ufunguzi wa akaunti: $10'),
      tr(
        'Withdrawal retention: 0.25% of the withdrawn amount from the second withdrawal of the month.',
        'Retenue sur retrait : 0,25 % du montant retiré à partir du deuxième retrait du mois.',
        'Uzuiaji wa uondoaji: 0.25% ya kiasi kilichotolewa kuanzia uondoaji wa pili wa mwezi.'
      ),
      tr('Chance to earn up to 8%', 'Possibilité de gagner jusqu’à 8 %', 'Fursa ya kupata hadi 8%'),
    ],
  },
  {
    id: 3,
    name: tr('Card Savings', 'Épargne à la Carte', 'Akiba kwa Kadi'),
    tagline: tr(
      'Flexible savings with our agents or mobile money.',
      'Épargne flexible via mobile money, notre bureau ou nos agents.',
      'Akiba rahisi kupitia mobile money, ofisi yetu au mawakala wetu.'
    ),
    points: [
      tr('Valid identity document', "Pièce d'identité en cours de validité", 'Kitambulisho halali'),
      tr('Two passport photos', 'Deux photos passeport', 'Picha mbili za pasipoti'),
      tr('Account opening: $3', 'Ouverture de compte : 3 $', 'Ufunguzi wa akaunti: $3'),
      tr(
        'Signing of the commitment form for a blocked account with a minimum of 30 deposits.',
        'Signature de la fiche d’engagement pour un compte bloqué avec un minimum de 30 mises.',
        'Kusaini fomu ya ahadi kwa akaunti iliyofungwa na kiwango cha chini cha mchango 30.'
      ),
      tr('10% penalty in case of cancellation', 'Pénalité de 10 % en cas d’annulation', 'Adhabu ya 10% endapo utaghairiwa'),
    ],
    payment: tr(
      'Mobile money, our office or through our field agents.',
      'Mobile money, notre bureau ou à travers nos agents de terrain.',
      'Mobile money, ofisi yetu au kupitia mawakala wetu wa shambani.'
    ),
  },
];

export const creditData = [
  {
    id: 1,
    name: tr('Twekambe Loan', 'Crédit Twekambe', 'Mkopo wa Twekambe'),
    description: tr(
      'Group solidarity loan allowing members to support each other.',
      'Crédit de solidarité groupée permettant aux membres de se soutenir mutuellement.',
      'Mkopo wa mshikamano wa kikundi unaowaruhusu wanachama kusaidiana.'
    ),
    conditions: [
      tr(
        'Be in a group of 5 to 10 people to request an amount between $30 and $1,000.',
        'Être dans un groupe de 5 à 10 personnes pour solliciter un montant compris entre 30 $ et 1 000 $.',
        'Kuwa katika kikundi cha watu 5 hadi 10 kuomba kiasi kati ya $30 na $1,000.'
      ),
    ],
    taux: tr('Rate: 4% fixed', 'Taux : 4 % fixe', 'Kiwango: 4% kudumu'),
    remboursement: tr(
      'Weekly repayment or after two weeks',
      'Remboursement hebdomadaire ou après deux semaines',
      'Malipo ya kila wiki au baada ya wiki mbili'
    ),
    echeance: tr(
      'Maturity equal to the number of people in the group',
      'Échéance égale au nombre de personnes constituant le groupe',
      'Ukomo sawa na idadi ya watu wanaounda kikundi'
    ),
    garantieFinanciere: tr(
      'Financial guarantee: 1/3 of the disbursed amount',
      'Garantie financière : 1/3 du montant décaissé',
      'Dhamana ya fedha: 1/3 ya kiasi kilichotolewa'
    ),
  },
  {
    id: 2,
    name: tr('Nibuthe Loan', 'Crédit Nibuthe', 'Mkopo wa Nibuthe'),
    description: tr(
      'Quick loan for urgent personal or family needs.',
      'Crédit rapide pour les besoins personnels ou familiaux urgents.',
      'Mkopo wa haraka kwa mahitaji ya kibinafsi au ya familia.'
    ),
    conditions: [
      tr(
        'Have material collateral for an amount between $400 and $30,000.',
        'Avoir une garantie matérielle pour un montant compris entre 400 $ et 30 000 $.',
        'Kuwa na dhamana ya kimwili kwa kiasi kati ya $400 na $30,000.'
      ),
      tr(
        'Material collateral equivalent to or greater than the requested credit.',
        'Garantie matérielle équivalente ou supérieure au crédit demandé.',
        'Dhamana ya kimwili sawa au zaidi ya mkopo unaoulizwa.'
      ),
    ],
    taux: tr('Rate: 3.5% – 5% degressive', 'Taux : 3,5 % – 5 % dégressif', 'Kiwango: 3.5% – 5% kinachopungua'),
    remboursement: tr('Monthly repayment', 'Remboursement mensuel', 'Malipo ya kila mwezi'),
    echeance: tr('Negotiable maturity', 'Échéance négociable', 'Ukomo unaoweza kujadiliwa'),
    garantieFinanciere: tr(
      'Financial guarantee: 1/3 of the disbursed amount',
      'Garantie financière : 1/3 du montant décaissé',
      'Dhamana ya fedha: 1/3 ya kiasi kilichotolewa'
    ),
  },
  {
    id: 3,
    name: tr('Mushahara Loan', 'Crédit Mushahara', 'Mkopo wa Mushahara'),
    description: tr(
      'Payroll-backed loan for salaried members with a competitive rate.',
      'Crédit adossé au salaire pour les membres fonctionnaires avec un taux compétitif.',
      'Mkopo unaolimbikizwa kwenye mshahara kwa wanachama wenye mishahara na kiwango cha ushindani.'
    ),
    conditions: [
      tr(
        'Have a work contract currently in force and request an amount from $100 to $10,000.',
        'Avoir un contrat de travail en cours de validité et solliciter un montant de 100 $ à 10 000 $.',
        'Kuwa na mkataba wa kazi unaotumika kwa sasa na kuomba kiasi cha $100 hadi $10,000.'
      ),
      tr(
        'Work contract currently in force',
        'Contrat de travail en cours de validité',
        'Mkataba wa kazi unaotumika kwa sasa'
      ),
    ],
    taux: tr('Rate: 4% degressive', 'Taux : 4 % dégressif', 'Kiwango: 4% kinachopungua'),
    remboursement: tr('Monthly repayment', 'Remboursement mensuel', 'Malipo ya kila mwezi'),
    echeance: tr('Negotiable maturity', 'Échéance négociable', 'Ukomo unaoweza kujadiliwa'),
    garantieFinanciere: tr(
      'Financial guarantee: 1/3 of the disbursed amount',
      'Garantie financière : 1/3 du montant décaissé',
      'Dhamana ya fedha: 1/3 ya kiasi kilichotolewa'
    ),
  },
];

export const promotionsData = [];

export const activitiesData = [
  {
    id: 1,
    name: tr('Members Annual General Meeting', "Assemblée générale annuelle des membres", 'Mkutano mkuu wa kila mwaka wa wanachama'),
    description: tr(
      'A gathering of all members to review the year and plan the next one together.',
      'Un rassemblement de tous les membres pour faire le bilan de l’année et planifier la suivante.',
      'Mkutano wa wanachama wote wa kupitia mwaka na kupanga ujao kwa pamoja.'
    ),
    date: tr('2026-01-25', '2026-01-25', '2026-01-25'),
    start_hour: '09:00',
    end_hour: '13:00',
    venue: tr('COOPEC Microtous Hall, Bunia', 'Salle de la COOPEC Microtous, Bunia', 'Ukumbi wa COOPEC Microtous, Bunia'),
    image: null,
  },
  {
    id: 2,
    name: tr('Savings & Financial Education Workshop', "Atelier d'éducation financière et d'épargne", 'Warsha ya elimu ya fedha na akiba'),
    description: tr(
      'Learn how to better manage your money and grow your savings.',
      'Apprenez à mieux gérer votre argent et à faire croître votre épargne.',
      'Jifunze jinsi ya kusimamia pesa zako vizuri na kukuza akiba yako.'
    ),
    date: tr('2026-02-14', '2026-02-14', '2026-02-14'),
    start_hour: '14:00',
    end_hour: '16:00',
    venue: tr('Community Centre, Bunia', 'Centre communautaire, Bunia', 'Kituo cha jamii, Bunia'),
    image: null,
  },
  {
    id: 3,
    name: tr('Microtous Savings Lottery', 'Loterie d’épargne Microtous', 'Bahati nasibu ya akiba Microtous'),
    description: tr(
      'A fun lottery rewarding our most active savers of the month.',
      'Une loterie ludique qui récompense nos épargnants les plus actifs du mois.',
      'Bahati nasibu ya kufurahisha inayozawadia wawekaji akiba wakali zaidi wa mwezi.'
    ),
    date: tr('2026-03-08', '2026-03-08', '2026-03-08'),
    start_hour: '10:00',
    end_hour: '12:00',
    venue: tr('COOPEC Microtous Hall, Bunia', 'Salle de la COOPEC Microtous, Bunia', 'Ukumbi wa COOPEC Microtous, Bunia'),
    image: null,
  },
];

export const jobsData = [];

export const testimonialsData = [
  {
    id: 1,
    name: tr('Angel Alafu', 'Angel Alafu', 'Angel Alafu'),
    role: tr('Trader', 'Commerçante', 'Mfanyabiashara'),
    text: tr(
      'With COOPEC Microtous I finally found a place where I can save my money in total confidence and grow my trade.',
      'Avec COOPEC Microtous, j’ai enfin trouvé un endroit où épargner mon argent en toute confiance et faire grandir mon commerce.',
      'Kwa COOPEC Microtous, hatimaye nimepata mahali pa kuweka akiba kwa uhakika na kukuza biashara yangu.'
    ),
    image: null,
  },
  {
    id: 2,
    name: tr('Moyoni Muzuri', 'Moyoni Muzuri', 'Moyoni Muzuri'),
    role: tr('Trader', 'Commerçante', 'Mfanyabiashara'),
    text: tr(
      'A very welcoming team that guides members with patience and honesty. I recommend it.',
      'Une équipe très accueillante qui accompagne les membres avec patience et honnêteté. Je recommande.',
      'Timu inayokaribisha sana na inayowaongoza wanachama kwa subira na uaminifu. Nipendekeza.'
    ),
    image: null,
  },
  {
    id: 3,
    name: tr('CS Agape École', 'CS Agape École', 'CS Agape École'),
    role: tr('School Member', 'Membre d’école', 'Mwanachama wa shule'),
    text: tr(
      'The cooperative has helped our school community save regularly and plan together.',
      'La coopérative a aidé notre communauté scolaire à épargner régulièrement et à se projeter ensemble.',
      'Ushirika umesaidia jamii yetu ya shule kuweka akiba kwa utaratibu na kupanga pamoja.'
    ),
    image: null,
  },
  {
    id: 4,
    name: tr('Wabiwa Georgine', 'Wabiwa Georgine', 'Wabiwa Georgine'),
    role: tr('Trader', 'Commerçante', 'Mfanyabiashara'),
    text: tr(
      'Thanks to their loans I expanded my shop and increased my sales. A true partner for small businesses.',
      'Grâce à leurs crédits, j’ai agrandi ma boutique et augmenté mes ventes. Un vrai partenaire pour les petits commerces.',
      'Shukrani kwa mikopo yao nimepanua duka langu na kuongeza mauzo. Mshirika halisi wa biashara ndogo.'
    ),
    image: null,
  },
  {
    id: 5,
    name: tr('Dieudonné Safari', 'Dieudonné Safari', 'Dieudonné Safari'),
    role: tr('Prefect', 'Préfet', 'Pfefekti'),
    text: tr(
      'A serious and transparent institution that keeps its promises. My savings are safe here.',
      'Une institution sérieuse et transparente qui tient ses promesses. Mes économies sont en sécurité ici.',
      'Taasisi nzito na ya uwazi inayotimiza ahadi zake. Akiba yangu iko salama hapa.'
    ),
    image: null,
  },
  {
    id: 6,
    name: tr('Germain Ngabu', 'Germain Ngabu', 'Germain Ngabu'),
    role: tr('Entrepreneur', 'Entrepreneur', 'Mjasiriamali'),
    text: tr(
      'As an entrepreneur I needed flexible financing. COOPEC Microtous gave me the support to launch my project.',
      'En tant qu’entrepreneur, j’avais besoin d’un financement flexible. COOPEC Microtous m’a soutenu pour lancer mon projet.',
      'Kama mjasiriamali nilihitaji fedha inayonyumbulika. COOPEC Microtous imenisaidia kuzindua mradi wangu.'
    ),
    image: null,
  },
  {
    id: 7,
    name: tr('Isude Batchulu', 'Isude Batchulu', 'Isude Batchulu'),
    role: tr('Trader', 'Commerçante', 'Mfanyabiashara'),
    text: tr(
      'Fast service and fair terms. I save without stress and can access credit when I need it.',
      'Service rapide et conditions justes. J’épargne sans stress et je peux accéder au crédit quand j’en ai besoin.',
      'Huduma ya haraka na masharti ya haki. Ninaweka akiba bila mkazo na kupata mkopo ninapohitaji.'
    ),
    image: null,
  },
  {
    id: 8,
    name: tr('Fama Roger', 'Fama Roger', 'Fama Roger'),
    role: tr('Nurse', 'Infirmier', 'Muuguzi'),
    text: tr(
      'A cooperative that respects its members and offers honest rates. I trust it completely.',
      'Une coopérative qui respecte ses membres et propose des taux honnêtes. J’ai toute confiance.',
      'Ushirika unaoheshimu wanachama na kutoa viwango vya uaminifu. Ninaamini kabisa.'
    ),
    image: null,
  },
  {
    id: 9,
    name: tr('Salamon Kalume', 'Salamon Kalume', 'Salamon Kalume'),
    role: tr('Trader', 'Commerçant', 'Mfanyabiashara'),
    text: tr(
      'I started saving small amounts and today I have a solid reserve for my business.',
      'J’ai commencé à épargner de petites sommes et aujourd’hui j’ai une réserve solide pour mon commerce.',
      'Nilianza kuweka akiba ndogo na leo nina hifadhi thabiti kwa biashara yangu.'
    ),
    image: null,
  },
  {
    id: 10,
    name: tr('David Shukuru', 'David Shukuru', 'David Shukuru'),
    role: tr('Trader', 'Commerçant', 'Mfanyabiashara'),
    text: tr(
      'Professional and kind staff. Every question I had was answered clearly.',
      'Personnel professionnel et aimable. Toutes mes questions ont reçu des réponses claires.',
      'Wafanyakazi wenye taaluma na wema. Kila swali nililokuwa nalo lilijibiwa wazi.'
    ),
    image: null,
  },
  {
    id: 11,
    name: tr('Isaac Mugenzi', 'Isaac Mugenzi', 'Isaac Mugenzi'),
    role: tr('Businessman', 'Commerçant', 'Mwanamume wa biashara'),
    text: tr(
      'Thanks to the cooperative I manage my finances better and grow my business step by step.',
      'Grâce à la coopérative, je gère mieux mes finances et je fais croître mon affaire pas à pas.',
      'Shukrani kwa ushirika nasimamia vyema fedha zangu na kukuza biashara yangu hatua kwa hatua.'
    ),
    image: null,
  },
  {
    id: 12,
    name: tr('Benjamin Bagonza', 'Benjamin Bagonza', 'Benjamin Bagonza'),
    role: tr('Employee', 'Salarié', 'Mfanyakazi'),
    text: tr(
      'As an employee, saving with them is simple and secure. Their advice helped me a lot.',
      'En tant que salarié, épargner chez eux est simple et sécurisé. Leurs conseils m’ont beaucoup aidé.',
      'Kama mfanyakazi, kuweka akiba kwao ni rahisi na salama. Ushauri wao umenisaidia sana.'
    ),
    image: null,
  },
  {
    id: 13,
    name: tr('Jonathan Byamukama', 'Jonathan Byamukama', 'Jonathan Byamukama'),
    role: tr('Engineer', 'Ingénieur', 'Mhandisi'),
    text: tr(
      'A modern and efficient cooperative. I appreciate their transparency and the quality of service.',
      'Une coopérative moderne et efficace. J’apprécie leur transparence et la qualité du service.',
      'Ushirika wa kisasa na wenye ufanisi. Ninapenda uwazi wao na ubora wa huduma.'
    ),
    image: null,
  },
];

export const teamMembersData = [
  { id: 1, name: tr('Jean Rugenyi', 'Jean Rugenyi', 'Jean Rugenyi'), role: tr('President of the Board of Directors (PCA)', 'Président du Conseil d’Administration (PCA)', 'Rais wa Baraza la Uongozi (PCA)'), image: null },
  { id: 2, name: tr('Envi Juscard', 'Envi Juscard', 'Envi Juscard'), role: tr('Deputy President of the Board (PCAA)', 'Président du Conseil d’Administration Adjoint (PCAA)', 'Makamu Rais wa Baraza la Uongozi (PCAA)'), image: null },
  { id: 3, name: tr('Bienvenu Tambola', 'Bienvenu Tambola', 'Bienvenu Tambola'), role: tr('Board Secretary', 'Secrétaire du Conseil d’Administration', 'Katibu wa Baraza la Uongozi'), image: null },
  { id: 4, name: tr('Simon Pierre Ki-Ushindi', 'Simon Pierre Ki-Ushindi', 'Simon Pierre Ki-Ushindi'), role: tr('Vice Secretary', 'Vice-Secrétaire', 'Makamu Katibu'), image: null },
  { id: 5, name: tr('Anne Marie Uboyo', 'Anne Marie Uboyo', 'Anne Marie Uboyo'), role: tr('Treasurer', 'Trésorière', 'Mweka Hazina'), image: null },
  { id: 6, name: tr('Moïse Sidabo', 'Moïse Sidabo', 'Moïse Sidabo'), role: tr('Advisor', 'Conseiller', 'Mshauri'), image: null },
  { id: 7, name: tr('Dr Kabeya', 'Dr Kabeya', 'Dr Kabeya'), role: tr('Member of the Board of Directors (CA)', 'Membre du Conseil d’Administration (CA)', 'Mwanachama wa Baraza la Uongozi (CA)'), image: null },
  { id: 8, name: tr('Abijah Kasereka', 'Abijah Kasereka', 'Abijah Kasereka'), role: tr('President of the Credit Committee (PCC)', 'Président de la Commission de Crédit (PCC)', 'Rais wa Tume ya Mikopo (PCC)'), image: null },
  { id: 9, name: tr('Willy Beyeza', 'Willy Beyeza', 'Willy Beyeza'), role: tr('Vice President of the Credit Committee', 'Vice-Président de la Commission de Crédit', 'Makamu Rais wa Tume ya Mikopo'), image: null },
  { id: 10, name: tr('Jérémie Asimwe', 'Jérémie Asimwe', 'Jérémie Asimwe'), role: tr('Secretary of the Credit Committee', 'Secrétaire de la Commission de Crédit', 'Katibu wa Tume ya Mikopo'), image: null },
  { id: 11, name: tr('Irène Savo', 'Irène Savo', 'Irène Savo'), role: tr('President of the Supervisory Council (PCS)', 'Présidente du Conseil de Surveillance (PCS)', 'Rais wa Baraza la Uangalizi (PCS)'), image: null },
  { id: 12, name: tr('Justin B.', 'Justin B.', 'Justin B.'), role: tr('Vice President of the Supervisory Council', 'Vice-Président du Conseil de Surveillance', 'Makamu Rais wa Baraza la Uangalizi'), image: null },
  { id: 13, name: tr('Grèvisse Kasamba', 'Grèvisse Kasamba', 'Grèvisse Kasamba'), role: tr('Secretary of the Supervisory Council', 'Secrétaire du Conseil de Surveillance', 'Katibu wa Baraza la Uangalizi'), image: null },
  { id: 14, name: tr('Nadine Karungi', 'Nadine Karungi', 'Nadine Karungi'), role: tr('Managing Director (DG)', 'Directrice Gérante (DG)', 'Mkurugenzi Mkuu (DG)'), image: null },
];