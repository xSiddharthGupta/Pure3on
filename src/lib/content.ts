import logo from "@/assets/wix/logo.png";

export const site = {
  name: "PURE3ON",
  tagline: "Engaging. Environmental. Education.",
  motto: "Every action counts. Spread awareness.",
  contactEmail: "j.hollis.hart@gmail.com",
  mission: [
    "At PURE3ON, we believe environmental sustainability isn't just important — it's essential for our future. As a non-profit, we equip young minds with the knowledge, skills, and opportunities to create real change for our planet.",
    "Our programs inspire students to take simple, everyday actions that conserve energy and water — small habits that add up to a big impact. By fostering curiosity, innovation, and collaboration, we're shaping the next generation of environmental leaders.",
  ],
};

export const pillars = [
  {
    name: "Engaging",
    color: "leaf" as const,
    description:
      "We spark interest and curiosity, helping young minds connect with sustainability in a way that feels natural, meaningful, and fun. When learning is engaging, lasting habits take root.",
  },
  {
    name: "Environmental",
    color: "ocean" as const,
    description:
      "This is our planet, our home, and our future. We empower students to take responsibility for preserving and protecting it — because small choices today lead to a better tomorrow.",
  },
  {
    name: "Education",
    color: "emer" as const,
    description:
      "Knowledge is the foundation of change. We cultivate passion and creativity, showing students not just the need for sustainability, but the power they have to make a difference.",
  },
];

import eventMellow from "@/assets/wix/event-mellow.jpg";
import eventChattahoochee from "@/assets/wix/event-chattahoochee.jpg";
import eventBethel from "@/assets/wix/event-bethel.jpg";

export const events = [
  { name: "Mellow Mushroom Membership Drive", photo: eventMellow },
  { name: "Chattahoochee Nature Center Meet", photo: eventChattahoochee },
  { name: "Mount Bethel Elementary", photo: eventBethel },
];

export type TeamMember = {
  name: string;
  role: string;
  detail?: string;
  email?: string;
  photo: string;
};

import sneha from "@/assets/wix/sneha.jpg";
import arnav from "@/assets/wix/arnav.jpg";
import siddharth from "@/assets/wix/siddharth.jpg";
import dirgh from "@/assets/wix/dirgh.jpeg";
import amy from "@/assets/wix/amy.png";
import janya from "@/assets/wix/janya.jpg";
import naren from "@/assets/wix/naren.jpeg";
import hollis from "@/assets/wix/hollis.jpg";
import glenn from "@/assets/wix/glenn.jpg";
import joe from "@/assets/wix/joe.jpg";
import kafi from "@/assets/wix/kafi.jpg";
import snigdha from "@/assets/wix/snigdha.jpg";
import gavin from "@/assets/wix/gavin.jpg";
import zoe from "@/assets/wix/zoe.jpg";
import harper from "@/assets/wix/harper.jpg";
import taylor from "@/assets/wix/taylor.jpg";
import aambal from "@/assets/wix/aambal.jpg";

export const studentBoard: TeamMember[] = [
  { name: "Sneha Gupta", role: "General Co-President", detail: "Senior at Walton High School", photo: sneha },
  { name: "Arnav Patil", role: "General Co-President", detail: "Senior at Walton High School", photo: arnav },
  { name: "Siddharth Gupta", role: "Vice President of Outreach", detail: "Senior at Walton High School", photo: siddharth },
  { name: "Dirgh Kikani", role: "Vice President of Communications", detail: "Senior at Walton High School", photo: dirgh },
  { name: "Amy Valero", role: "Vice President of Membership", detail: "Junior at Walton High School", photo: amy },
  { name: "Janya Gowda", role: "Vice President of Education", detail: "Senior at Walton High School", photo: janya },
  { name: "Naren Kumar", role: "Vice President of Events", detail: "Junior at Walton High School", photo: naren },
];

export const adultBoard: TeamMember[] = [
  {
    name: "Hollis Hart",
    role: "Executive Director",
    detail: "CEO, STEGO, Inc.",
    email: "j.hollis.hart@gmail.com",
    photo: hollis,
  },
  { name: "Glenn James", role: "Board Member", photo: glenn },
  { name: "Joe Rozza", role: "Board Member", photo: joe },
  { name: "Kafi London", role: "Board Member", photo: kafi },
];

export const alumni: TeamMember[] = [
  { name: "Snigdha Surapaneni", role: "Previous General President", photo: snigdha },
  { name: "Zoe Wang", role: "Previous General President", photo: zoe },
  { name: "Gavin Pilger", role: "Former Student Board", photo: gavin },
  { name: "Molly Perignat", role: "Former Student Board", photo: gavin },
  { name: "Harper Teilhet", role: "Previous Vice President of Activities", photo: harper },
  { name: "Taylor Hart", role: "Previous Vice President of Education", photo: taylor },
  { name: "Aambal Ganapathy", role: "Previous Vice President of Communications", photo: aambal },
];

export { logo };
