export interface SevaBlock {
  image: string;
  imageWidth: number;
  imageHeight: number;
  heading: string;
  paragraphs: string[];
  highlights?: string[];
  closing?: string;
}

/**
 * "Seva Hi Param Dharma" — Pannkaj's temple/dharmic service initiatives,
 * sourced from the client-provided document of the same name. Content is
 * presented as given (Hindi/Hinglish), image followed by its text.
 */
export const sevaIntro = {
  title: "Seva Hi Param Dharma.",
  subtitle: "सेवा ही परम धर्म",
};

export const sevaBlocks: SevaBlock[] = [
  {
    image: "/images/seva-1-param-dharma.jpg",
    imageWidth: 1400,
    imageHeight: 704,
    heading: "Seva Hi Param Dharma",
    paragraphs: [
      "Bhagwan ne hume bina maange bahut kuch diya hai—jeevan, parivaar, sukh, avsar aur ashirwad. Ab hamari baari hai... sirf maangne ki nahi, balki lautane ki.",
      "Mandir ki seva ho, Gau Seva ho, ya Sanatan Sanskriti ki raksha—har seva, Bhagwan ki seva hai. Aaiye, Kar-Seva ke madhyam se apni aane wali peedhiyon ke liye dharm aur virasat ko surakshit banayein.",
      "Don't just celebrate life... serve a higher purpose. Seva kijiye, Sanskar badhaiye, aur Dharm ko majboot banaiye.",
      "Let's give back through Seva, because serving creation is serving the Creator.",
    ],
    closing: "Seva Hi Param Dharma. Jay Jay Shree RadheShyam..!",
  },
  {
    image: "/images/seva-2-gurudev.jpg",
    imageWidth: 1400,
    imageHeight: 1488,
    heading: "Jay Gurudev, Jay Radheshyam",
    paragraphs: [
      "Every life has a purpose. Guru aur Govind ki kripa se hume bhi ek pavitra jeevan uddeshya mila hai — Seva, Sanskar aur Dharm ko samaj tak pahunchana.",
      "Isi pavitra bhavna ke saath hum aapke liye tin (3) vishesh sevaon ka avsar lekar aaye hain, jisse aapka har shubh din sirf yaadgaar hi nahi, balki Dharm aur Manav seva ka prateek bhi ban sake.",
    ],
    closing: "Jay Jay Shree RadheShyam",
  },
  {
    image: "/images/seva-3-mahamantra.jpg",
    imageWidth: 1080,
    imageHeight: 836,
    heading: "हरे कृष्ण महामंत्र अखंड नाम जाप सेवा",
    paragraphs: [
      "\"Kaliyug mein sabse saral, sabse shaktishali aur sabse divya sadhana hai — Hare Krishna Mahamantra ka Akhanda Naam Jaap.\"",
      "हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे। हरे राम हरे राम, राम राम हरे हरे॥",
      "Bhagavan ke pavitra Naam mein hi unki sampoorna shakti aur kripa samaayi hui hai. Jab hum Naam ka sankirtan karte hain, tab hamara hriday shuddh hota hai, man ko shanti milti hai aur jeevan mein divya anand ka anubhav hota hai.",
      "Aaiye, Akhanda Naam Jaap Seva se judiye. Apne janmadin, vivah varshgaanth, griha pravesh, ya kisi bhi shubh avsar par Hare Krishna Mahamantra Akhanda Naam Jaap ka sankalp lijiye.",
      "Bhagavan ne humein bahut kuch diya hai... ab hamari baari hai unke Naam ki seva aur prachaar mein apna yogdaan dene ki. Hare Krishna Mahamantra Akhanda Naam Jaap Seva mein apna sahyog dein aur is divya seva ka hissa banein.",
    ],
    highlights: [
      "Spiritual peace & inner happiness",
      "Positive vibrations at home & workplace",
      "Bhakti, shanti aur mangal ka vardaan",
      "Punya aur Bhagavan ki anukampa ka anubhav",
    ],
    closing: "Hare Krishna!",
  },
  {
    image: "/images/seva-4-ramdhenu-mandir.jpg",
    imageWidth: 1400,
    imageHeight: 933,
    heading: "Ramdhenu Mandir Jirnodhaar & Seva Samiti",
    paragraphs: [
      "Humara ek hi sankalp hai — \"Dharm Rakshati Rakshitah.\"",
      "Hum Kar-Seva ke madhyam se Dharmik virasat ki raksha, Jeern-sheern mandiron ka punaruddhar aur marmmat, Gau Seva aur Sanrakshan aur Hindu Sanskriti ki raksha ke liye samarpit hain.",
      "Aaiye, is pavitra abhiyan ka hissa baniye. Aapka har sahyog dharm, sanskriti aur aane wali peedhiyon ke liye ek amoolya yogdaan dijiye…….",
    ],
  },
  {
    image: "/images/seva-5-hanuman.jpg",
    imageWidth: 1024,
    imageHeight: 1438,
    heading: "Jai Shri Ram!",
    paragraphs: [
      "Aksar log humse poochte hain, \"Birthday, Marriage Anniversary ya Bachchon ke Janmadin par sabse shreshth karya kya ho sakta hai?\"",
      "Hamara vinamra sujhav hai: Celebration ke saath Seva ko bhi jodiye. Apne shubh avsar ko Punya, Ashirwad aur Lok-kalyan ka madhyam banaiye.",
      "Agar aap Hanuman Ji ki kripa aur divya anugrah prapt karna chahte hain, to hamare paas anubhavi pandit jan dwara Hanuman Chalisa Path, Sampoorna Sundarkand Path, aur Hanuman Ji ke Vishesh Yagya-Havan ki seva uplabdh hai.",
      "Yeh sabhi anushthan Vedic vidhi aur poorn shraddha ke saath samarprann kiye jaate hain, jisse bhakti aur adhyatmik shanti ka anubhav ho.",
    ],
    closing: "Seva book karne ke liye aaj hi humse sampark kijiye…..Jai Shri Ram! Jai Hanuman!",
  },
];
