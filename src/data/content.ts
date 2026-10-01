// All page copy and assets live here so the site can be updated without touching components.

const CDN = 'https://cdn.prod.website-files.com/6152248936a80f8e7d189f77'

export const links = {
  apply: '#',
  contact: 'mailto:steph@icehouseventures.co.nz?subject=The%20Fellowship',
  fullFaqs: 'https://help.icehouseventures.co.nz/knowledge-portfolio/the-fellowship',
  terms: 'https://help.icehouseventures.co.nz/knowledge-portfolio/the-fellowship-terms-and-conditions',
  eventInfo: '#',
  icehouse: 'https://www.icehouseventures.co.nz',
  linkedin: 'https://www.linkedin.com/company/icehouse-ventures',
  instagram: 'https://www.instagram.com/icehouseventures',
}

export const applicationsOpen = false

export const nav = {
  logo: `${CDN}/6750d0227e76493329a7a310_IV%20logo%20white.svg`,
  items: [
    { label: 'About', href: '#about' },
    { label: 'Funding', href: '#funding' },
    { label: "What's included", href: '#includes' },
    { label: 'Selection', href: '#selection' },
    { label: 'FAQs', href: '#faqs' },
  ],
  cta: { label: 'Apply now', href: links.apply },
}

export const hero = {
  lockup: `${CDN}/69f93e8cc2e837b7b1eb203d_Lockup%20Full%20Colour.svg`,
  lockupAlt: 'Icehouse Ventures and Crimson Global Academy',
  heading: "New Zealand's fellowship for ambitious young founders",
  body:
    'A first-of-its-kind programme offering world-class education and support for entrepreneurial high school students. If you are curious, ambitious, and have the conviction to build something that matters, we want to hear from you.',
  status: 'Applications are now closed',
  statusQuestion: 'Have questions?',
  statusLink: 'Get in touch',
  primary: { label: 'Apply now', href: links.apply },
  secondary: { label: 'Learn more', href: '#about' },
  background: `${CDN}/69f92bb13216ea8b45a12cc5_CGA%20Hero%20Edit.jpg`,
}

export const about = {
  tagline: 'About the Fellowship',
  heading: 'A new pathway for the next generation of founders',
  paragraphs: [
    "This Fellowship has been designed for exceptional young New Zealanders ready to build what's next, before university, before your first job, before you even have an idea.",
    'As one of five fellows, you will receive a fully funded scholarship, which includes a world-class education pathway through Crimson Global Academy, and a year-long programme with Icehouse Ventures that includes mentorship, engagement with investors, attendance at events, support from other founders, and $10,000 funding to put towards launching and growing a business.',
    "You will have the chance to learn from some of New Zealand's most experienced founders, including Brooke Roberts of Sharesies, Craig Piggott of Halter, Toby Hilliam of Appetise, Stefan and James Powell of Dawn Aerospace, and Jamie Beaton of Crimson Education.",
  ],
  logos: [
    { src: `${CDN}/6152248936a80fe4e218a1e4_dawn%20aerospace.svg`, alt: 'Dawn Aerospace' },
    { src: `${CDN}/6152248936a80f458918a1c3_sharesies.svg`, alt: 'Sharesies' },
    { src: `${CDN}/666685428295b624b0568e2a_Halter%40300x.png`, alt: 'Halter' },
    { src: `${CDN}/69f816a93e5c4a450e843ad5_Appetise%20logo.svg`, alt: 'Appetise' },
  ],
  image: `${CDN}/6a0ade3c6addfa1dbdc22897_240516_FirstCut-15.jpg`,
  imageAlt: 'Founders at an Icehouse Ventures event',
}

export const event = {
  show: true,
  title: 'The Fellowship Information Evening Event',
  description: 'A live Q&A with Icehouse Ventures and Crimson Global Academy. Free to attend.',
  when: 'Tuesday 2nd June, 6pm - 8pm',
  where: 'Auckland',
  cta: { label: 'Learn more', href: links.eventInfo },
  background: `${CDN}/6a0ae911af99f95d75c62e83_Banner%20Bg.jpg`,
}

export const funding = {
  tagline: 'Funding',
  heading: '$200,000 to back high school students',
  body:
    "Five Year 12 students. $10,000 funding to launch and grow a business. A $30,000 world-class education at Crimson Global Academy. And one year learning from New Zealand's most successful founders.",
  stats: [
    { value: '5', label: 'Fellowship places' },
    { value: '$10k', label: 'Funding per fellow' },
    { value: '$30k', label: 'Education value per fellow' },
    { value: '1 year', label: 'With Icehouse Ventures' },
  ],
  image: `${CDN}/6a0aef40218847cb8fe2c30c_Thumbnail.png`,
  imageAlt: 'The Fellowship',
}

export const includes = {
  tagline: 'What the Fellowship includes',
  heading: 'An opportunity to change your trajectory',
  intro:
    "Crimson Global Academy's world-class learning and development expertise, combined with Icehouse Ventures' networks and resources for startups has the potential to be life-changing.",
  benefits: [
    {
      title: 'World-class education',
      body: 'A fully-funded Year 13 place at Crimson Global Academy, valued at $30,000 per student.',
      icon: 'education',
    },
    {
      title: 'Funding and resources',
      body: 'Receive $10,000 in funding to support the launch and growth of your company or ideas.',
      icon: 'funding',
    },
    {
      title: 'An expert network',
      body: "Connect with founders, investors, and operators from New Zealand's leading companies.",
      icon: 'network',
    },
    {
      title: 'Exclusive events',
      body: 'Attend Icehouse Ventures flagship events, workshops, and founder sessions.',
      icon: 'events',
    },
  ] as const,
}

export const selection = {
  tagline: 'Build something that matters',
  heading: "We're not looking for the perfect pitch. We're looking for you.",
  paragraphs: [
    "The Fellowship is open to Year 12 students across New Zealand, with five places open for the country's most exceptional young thinkers.",
    "Fellows are assessed the same way we assess the founders we back: we're looking for those who think bigger, question harder, and have the conviction to build something the world needs before the world knows it yet.",
    'Not polished pitches or formed business plans. Just the drive, curiosity, and determination to find the problem you are meant to solve.',
  ],
  images: [
    { src: `${CDN}/69f95e063eec36ad8677f17b_4.png`, alt: '' },
    { src: `${CDN}/69f944113d4deae28f1bbdb8_Criag%20(1).jpg`, alt: 'Craig Piggott, Halter' },
    { src: `${CDN}/69f95e6121e73c080de148ec_3.png`, alt: '' },
    { src: `${CDN}/69f944350f9c1c5bd4dfb944_Jaimie.jpg`, alt: 'Jamie Beaton, Crimson Education' },
    { src: `${CDN}/69f94602d6b40a244d37aa30_Dawn%20guys.jpg`, alt: 'Stefan and James Powell, Dawn Aerospace' },
    { src: `${CDN}/69f95dddab38555454d43952_8.png`, alt: '' },
    { src: `${CDN}/69f94423d125f9b4a0fc4e7f_250319_Icehouse-49.jpg`, alt: 'Icehouse Ventures event' },
    { src: `${CDN}/69f9449e73a832b51805b647_sharesies%20team.jpeg`, alt: 'The Sharesies team' },
  ],
}

export const status = {
  heading: 'Applications are now closed',
  body: 'Thank you to everyone who applied! We are now reviewing the submissions. If you have any questions please get in touch or read our FAQs below.',
  terms: { label: 'Ts & Cs Apply', href: links.terms },
  cta: { label: 'Contact us', href: links.contact },
}

export const testimonial = {
  quote:
    'Icehouse Ventures has been part of the Sharesies journey from the beginning, since we were just a team of 6. They have backed us with capital, networks, and shown up when it counted. That consistency over a decade has meant a lot as we’ve grown.',
  name: 'Brooke Roberts',
  role: 'Co-Founder, Co-CEO and Director at Sharesies',
  photo: `${CDN}/6683352725fece3450d46284_Brooke.jpg`,
  logo: `${CDN}/68ecc50df52ab53f542168c0_Sharesies%20Icon.png`,
}

export type FaqItem = {
  question: string
  answer: string[]
  bullets?: { title: string; body: string }[]
  afterBullets?: string[]
  steps?: { title: string; body: string }[]
}

export const faqs: FaqItem[] = [
  {
    question: 'Is the fellowship instead of school? What kind of education is on offer within the fellowship?',
    answer: [
      'The five students selected as part of the fellowship will be required to leave their current place of schooling and attend Crimson Global Academy (CGA) for their final year(s) of school. Students will complete a US High School Diploma or International A Levels over 12-months, depending on their prior schooling. Tuition is valued at $30,000 per year, covered by Icehouse Ventures for each student.',
      "For the right student, it's a positive change: a rigorous, globally relevant academic pathway paired with the kind of founder ecosystem most people don't get access to until later in life.",
      'Read our in-depth FAQs to find out more about CGA and the fellowship.',
    ],
  },
  {
    question: 'Is 16 years old too young to start an entrepreneurial journey?',
    answer: [
      'Jamie Beaton, Sharndré Kushor, and Fangzhou Jiang of Crimson Education became founders at 18. Craig Piggott of Halter became a founder at age 21. We believe some people are born with innately entrepreneurial qualities, and this fellowship is about unlocking access and opportunities for those people as early as possible in life.',
      'The mission of the fellowship is to cultivate the next generation of founders in New Zealand. It gives exceptional young people a pathway they may not have otherwise had: a world-class education, mentorship, engagement with investors, attendance at startup events, and support from the best New Zealand founders.',
      'Most founders only get access to this kind of ecosystem years into their journey. By unlocking this earlier, we believe fellowship recipients will be even better placed to succeed in their ventures.',
    ],
  },
  {
    question: 'Does the applicant need to be based in Auckland?',
    answer: [
      'No. The fellowship is open to Year 12 students* across New Zealand, and we mean that deliberately. Where you grow up should not determine how far you go.',
      "Exceptional people don't come from one city, and we're actively looking beyond the obvious networks to find them.",
      "As part of The Fellowship, students will receive $10,000 of equity-free funding towards launching and growing their business venture. This funding can be used to support participation in the programme, whether for travel to events, startup costs for a business, product development, or other expenses that help accelerate fellows' ideas.",
      '*We will also be accepting applications from exceptional Year 11 students with CGA funding extending across two years for Year 12 and Year 13 academic years.',
    ],
  },
  {
    question: 'What does the application and selection process involve?',
    answer: [
      "The application is designed to understand the student's academic background, personal motivations, achievements, and future ambitions.",
      'The student will begin by submitting basic academic information and a recent transcript. They will then complete a short profile highlighting their aspirations, key accomplishments, and influences, along with their perspective on important future trends.',
      'The application also includes a personal statement where they will share their passions, the actions they have taken to pursue them, and what they have learned along the way. They will be asked to outline their future goals and how they are working toward them, including how the fellowship could support their journey.',
      'Finally, there is an opportunity to include supporting materials and a short video (1-2 minutes) where students can share any additional achievements that strengthen their application.',
      "Each applicant will be assessed in the same way we assess founders we invest in. Our goal is to fairly assess each applicant's potential by looking at a range of qualities that signal future impact. We look for:",
    ],
    bullets: [
      { title: 'Passion', body: 'A genuine curiosity or deep interest in a particular area, supported by actions taken to explore it.' },
      { title: 'Ambition', body: 'A clear sense of motivation and purpose, including what drives you and why it matters.' },
      { title: 'Leadership & Vision', body: 'The ability to identify opportunities or challenges others may overlook, and a track record of taking initiative or bringing others along.' },
      { title: 'Excellence', body: 'Evidence of commitment to high standards and meaningful achievement across academics, projects, or extracurriculars.' },
      { title: 'Resilience', body: 'The ability to persevere through challenges, learn from setbacks, and continue progressing.' },
      { title: 'Entrepreneurial Mindset', body: 'Creativity, problem-solving, and a willingness to take action on ideas, demonstrated through real experiences.' },
    ],
    afterBullets: [
      "We encourage applicants to share specific examples that bring these qualities to life, so we can understand not just what you've done, but how you think and approach challenges.",
      'The selection process will involve the following steps:',
    ],
    steps: [
      { title: 'Submit an application', body: 'Tell us about you, your achievements (of all kinds), your passions and your ambitions for the future. Submissions can be made up until 5:00pm on Sunday 21st June 2026.' },
      { title: 'We review applications and interview finalists', body: 'All submissions are reviewed and more information may be requested where required. We will interview all shortlisted applicants virtually.' },
      { title: 'We notify the recipients and all applicants', body: 'We will contact you privately before Friday 31st July 2026 regarding the outcome of your application, whether you are selected or not. If you are offered a place, you will need approval from your legal guardian to accept the Fellowship.' },
      { title: 'We announce the recipients', body: 'Once the 2026 cohort is confirmed, recipients will be publicly announced on social media and may also be featured in broader media, as well as within the Icehouse Ventures and Crimson Global Academy communities.' },
    ],
  },
]

export const questions = {
  heading: 'Still have questions?',
  contact: { label: 'Contact', href: links.contact },
  faqs: { label: 'See full FAQs', href: links.fullFaqs },
}

export const footer = {
  tagline: 'Investing in a brighter future',
  icon: `${CDN}/6758d4f01947d067fadcf441_V%20icon.svg`,
  wordmark: `${CDN}/6758d46e4e466c6c1a83a037_Icehouse%20Ventures.svg`,
  columns: [
    {
      title: 'Icehouse Ventures',
      links: [
        { label: 'Founders', href: 'https://www.icehouseventures.co.nz/founders' },
        { label: 'Investors', href: 'https://www.icehouseventures.co.nz/investors' },
        { label: 'Portfolio', href: 'https://www.icehouseventures.co.nz/portfolio' },
        { label: 'Investor Login', href: 'https://app.icehouseventures.co.nz' },
        { label: 'Jobs', href: 'https://www.icehouseventures.co.nz/jobs' },
        { label: 'Blog', href: 'https://www.icehouseventures.co.nz/blog' },
        { label: 'Help Center', href: 'https://help.icehouseventures.co.nz' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: 'https://www.icehouseventures.co.nz/about' },
        { label: 'Contact', href: 'https://www.icehouseventures.co.nz/contact' },
        { label: 'Community Code of Conduct', href: 'https://www.icehouseventures.co.nz/code-of-conduct' },
        { label: 'Responsible Investment Policy', href: 'https://www.icehouseventures.co.nz/responsible-investment-policy' },
        { label: 'Privacy Policy', href: 'https://www.icehouseventures.co.nz/privacy-policy' },
      ],
    },
  ],
  address: ['Level 4, Textile Centre', '125 St Georges Bay Rd,', 'Parnell, Auckland', 'New Zealand'],
  newsletter: { heading: 'Stay up to date', placeholder: 'Email address', button: 'Subscribe', success: 'Thanks for subscribing!' },
  social: [
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'Instagram', href: links.instagram },
  ],
  copyright: `All Content © Icehouse Ventures, ${new Date().getFullYear()}. All rights reserved.`,
}
