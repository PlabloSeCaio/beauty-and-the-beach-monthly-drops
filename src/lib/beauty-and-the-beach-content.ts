import c1s0 from "@/assets/beauty-and-the-beach/carousels/c1/slide-0.png";
import c1s1 from "@/assets/beauty-and-the-beach/carousels/c1/slide-1.png";
import c1s2 from "@/assets/beauty-and-the-beach/carousels/c1/slide-2.png";
import c1s3 from "@/assets/beauty-and-the-beach/carousels/c1/slide-3.png";

import c2s0 from "@/assets/beauty-and-the-beach/carousels/c2/slide-0.png";
import c2s1 from "@/assets/beauty-and-the-beach/carousels/c2/slide-1.png";
import c2s2 from "@/assets/beauty-and-the-beach/carousels/c2/slide-2.png";
import c2s3 from "@/assets/beauty-and-the-beach/carousels/c2/slide-3.png";

import c3s0 from "@/assets/beauty-and-the-beach/carousels/c3/slide-0.png";
import c3s1 from "@/assets/beauty-and-the-beach/carousels/c3/slide-1.png";
import c3s2 from "@/assets/beauty-and-the-beach/carousels/c3/slide-2.png";
import c3s3 from "@/assets/beauty-and-the-beach/carousels/c3/slide-3.png";

import c4s0 from "@/assets/beauty-and-the-beach/carousels/c4/slide-0.png";
import c4s1 from "@/assets/beauty-and-the-beach/carousels/c4/slide-1.png";
import c4s2 from "@/assets/beauty-and-the-beach/carousels/c4/slide-2.png";
import c4s3 from "@/assets/beauty-and-the-beach/carousels/c4/slide-3.png";
import c4s4 from "@/assets/beauty-and-the-beach/carousels/c4/slide-4.png";

import c5s0 from "@/assets/beauty-and-the-beach/carousels/c5/slide-0.png";
import c5s1 from "@/assets/beauty-and-the-beach/carousels/c5/slide-1.png";
import c5s2 from "@/assets/beauty-and-the-beach/carousels/c5/slide-2.png";

import c6s0 from "@/assets/beauty-and-the-beach/carousels/c6/slide-0.png";
import c6s1 from "@/assets/beauty-and-the-beach/carousels/c6/slide-1.png";
import c6s2 from "@/assets/beauty-and-the-beach/carousels/c6/slide-2.png";
import c6s3 from "@/assets/beauty-and-the-beach/carousels/c6/slide-3.png";

import c7s0 from "@/assets/beauty-and-the-beach/carousels/c7/slide-0.png";
import c7s1 from "@/assets/beauty-and-the-beach/carousels/c7/slide-1.png";
import c7s2 from "@/assets/beauty-and-the-beach/carousels/c7/slide-2.png";
import c7s3 from "@/assets/beauty-and-the-beach/carousels/c7/slide-3.png";

import blog1Banner from "@/assets/beauty-and-the-beach/blogs/blog1-banner.png";
import blog1Story from "@/assets/beauty-and-the-beach/blogs/blog1-story.png";
import blog2Banner from "@/assets/beauty-and-the-beach/blogs/blog2-banner.png";
import blog2Story from "@/assets/beauty-and-the-beach/blogs/blog2-story.png";
import blog3Banner from "@/assets/beauty-and-the-beach/blogs/blog3-banner.png";
import blog3Story from "@/assets/beauty-and-the-beach/blogs/blog3-story.png";
import blog4Banner from "@/assets/beauty-and-the-beach/blogs/blog4-banner.png";
import blog4Story from "@/assets/beauty-and-the-beach/blogs/blog4-story.png";
import blog5Banner from "@/assets/beauty-and-the-beach/blogs/blog5-banner.png";
import blog5Story from "@/assets/beauty-and-the-beach/blogs/blog5-story.png";

import nl1Banner from "@/assets/beauty-and-the-beach/newsletters/newsletter.1.png";
import nl2Banner from "@/assets/beauty-and-the-beach/newsletters/newsletter.2.png";
import nl3Banner from "@/assets/beauty-and-the-beach/newsletters/newsletter.3.png";
import nl4Banner from "@/assets/beauty-and-the-beach/newsletters/newsletter.4.png";
import nl5Banner from "@/assets/beauty-and-the-beach/newsletters/newsletter.5.png";

import email1Story from "@/assets/beauty-and-the-beach/newsletters/email1-story.png";
import email2Story from "@/assets/beauty-and-the-beach/newsletters/email2-story.png";
import email3Story from "@/assets/beauty-and-the-beach/newsletters/email3-story.png";
import email4Story from "@/assets/beauty-and-the-beach/newsletters/email4-story.png";
import email5Story from "@/assets/beauty-and-the-beach/newsletters/email5-story.png";

export type CarouselItem = {
  id: number;
  title: string;
  caption?: string;
  slides: string[];
};

export type BlogItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
};

export type NewsletterItem = {
  id: number;
  title: string;
  preview: string;
  banner: string;
  story: string;
  docUrl: string;
  body: string;
  ctaUrl: string;
  ctaText: string;
};

export const carousels: CarouselItem[] = [
  {
    id: 1,
    title: "Your Blonde Deserves a Summer Refresh",
    caption: "Summer is here — and so is brassiness season. 🌞 Don't let the Florida sun turn your blonde warm. Our color specialists use Davines toners + K-18 bond repair to keep you cool, dimensional, and healthy. Book your July refresh now. → beautyandthebeachsalon.net/book",
    slides: [c1s0, c1s1, c1s2, c1s3],
  },
  {
    id: 2,
    title: "What to Expect at Your First Visit",
    caption: "New to Beauty and the Beach? Here's what your first visit looks like. No guesswork, no surprises — just a real conversation about your hair. Book your consultation today. → beautyandthebeachsalon.net/book",
    slides: [c2s0, c2s1, c2s2, c2s3],
  },
  {
    id: 3,
    title: "Meet Mike — Your Color Specialist",
    caption: "Meet Mike — one of the reasons our blonde clients keep coming back. 🎨 He specializes in dimensional color that stays cool, healthy, and grows out beautifully. Book by name, not luck. → beautyandthebeachsalon.net/book",
    slides: [c3s0, c3s1, c3s2, c3s3],
  },
  {
    id: 4,
    title: "Real Results. Real Clients. Real Trust.",
    caption: "Don't take our word for it — hear from our clients. 🗣️ Real results, real transformations, and a whole lot of listening. Book your first appointment today. → beautyandthebeachsalon.net/book",
    slides: [c4s0, c4s1, c4s2, c4s3, c4s4],
  },
  {
    id: 5,
    title: "Mom & Me: Hair Days Are Better Together",
    caption: "Mom & Me appointments = same time, same salon, no extra trips. 🏖️ You get a moment to yourself while your child is in great hands. Book your family appointment today. → beautyandthebeachsalon.net/book",
    slides: [c5s0, c5s1, c5s2],
  },
  {
    id: 6,
    title: "Keratin vs. K-18: Which One Does Your Hair Need?",
    caption: "Keratin vs. K-18 — which treatment is right for you? 🤔 We break it down so you can choose with confidence. Not sure? Book a consultation — we'll help you decide. → beautyandthebeachsalon.net/book",
    slides: [c6s0, c6s1, c6s2, c6s3],
  },
  {
    id: 7,
    title: "Mid-Summer Blonde Check: Is Your Color Still Cool?",
    caption: "Mid-summer blonde check: is your color still cool? ❄️ If you're seeing warmth creeping in, a toner gloss can reset your tone in one appointment. Book your refresh. → beautyandthebeachsalon.net/book",
    slides: [c7s0, c7s1, c7s2, c7s3],
  },
];

export const blogs: BlogItem[] = [
  {
    id: 1,
    title: "Florida Humidity Got You Down? Here's Your Summer Hair Survival Guide",
    preview: "Living in South Florida means eight months of humidity, heat, and hair that doesn't cooperate. Between the frizz, the brassiness, and the constant battle to keep your blowout alive, summer hair can feel like a full-time job. Here's your survival guide.",
    banner: blog1Banner,
    story: blog1Story,
    docUrl: "/blog-posts.html#post-1",
  },
  {
    id: 2,
    title: "5 Questions to Ask Before Your First Salon Visit",
    preview: "Walking into a new salon for the first time can feel like a blind date. You're hopeful, but you've been burned before. Here are five questions to ask — and what great answers sound like.",
    banner: blog2Banner,
    story: blog2Story,
    docUrl: "/blog-posts.html#post-2",
  },
  {
    id: 3,
    title: "Your Child's First Haircut: Tips for a Happy Salon Visit",
    preview: "A child's first haircut is a milestone — for both of you. Will they sit still? Will they be scared? Will it be a good memory or a traumatic one? Here's how to make it a positive experience for everyone.",
    banner: blog3Banner,
    story: blog3Story,
    docUrl: "/blog-posts.html#post-3",
  },
  {
    id: 4,
    title: "How to Keep Your Blonde Healthy All Summer Long",
    preview: "Blonde hair requires maintenance — and summer is the most demanding season. Between the pool, the sun, and the humidity, your blonde needs extra care to stay cool, healthy, and dimensional. Here's your summer blonde maintenance guide.",
    banner: blog4Banner,
    story: blog4Story,
    docUrl: "/blog-posts.html#post-4",
  },
  {
    id: 5,
    title: "End of Summer Hair Refresh: Your August-Ready Guide",
    preview: "Summer is winding down, and your hair is telling the story. The blonde is warmer than it was in June. The ends feel drier. The frizz is still here. An end-of-summer refresh sets you up for a strong fall.",
    banner: blog5Banner,
    story: blog5Story,
    docUrl: "/blog-posts.html#post-5",
  },
];

export const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: "Your summer hair survival kit is here 🌴",
    preview: "Florida humidity is no match for NKST keratin and K-18 bond repair.",
    banner: nl1Banner,
    story: email1Story,
    docUrl: "#",
    body: `Hi [First Name],

Florida summer is here — and so is the frizz, the humidity, and the fight to keep your hair looking good. If you're tired of battling your hair every morning, we have a solution that actually works.

Our NKST formaldehyde-free keratin treatments are customized to your hair type. Smooth doesn't have to mean pin-straight — we tailor every treatment so you keep your natural movement while saying goodbye to frizz. And for damaged or over-processed hair, K-18 bond repair rebuilds your hair from the inside out.

We're running our Summer Hair Reset special through July. Book a consultation and we'll help you figure out which treatment is right for your hair.

→ Book your Summer Hair Reset: beautyandthebeachsalon.net/book

See you at the salon,
The Beauty and the Beach Team`,
    ctaUrl: "https://beautyandthebeachsalon.net/book",
    ctaText: "Book your Summer Hair Reset",
  },
  {
    id: 2,
    title: "Keep your blonde cool this summer 💁‍♀️",
    preview: "Brassiness happens. Here's how to prevent it between visits.",
    banner: nl2Banner,
    story: email2Story,
    docUrl: "#",
    body: `Hi [First Name],

Summer is the hardest season on blonde hair. Pool chlorine, salt water, and UV rays all work together to turn your cool blonde warm and brassy. But a few small habits can make a big difference between appointments.

First: purple shampoo is your best friend — but use it right. Once a week, leave it on for 2-3 minutes. Any longer and it can start to tint your hair violet.

Second: heat protection. Every time you use a hot tool, you're opening the cuticle and letting brassiness creep in. A Davines heat protectant keeps your color safe and your hair healthy.

Third: refresh your toner. If you're seeing brassiness, don't wait 4 more weeks. A quick gloss treatment can reset your tone and buy you time until your full appointment.

Ready for your July refresh? Brittny, Anjalic, and Abby are booking now.

→ Book your blonde refresh: beautyandthebeachsalon.net/book

Stay cool (literally),
The Beauty and the Beach Team`,
    ctaUrl: "https://beautyandthebeachsalon.net/book",
    ctaText: "Book your blonde refresh",
  },
  {
    id: 3,
    title: "Back-to-school haircuts: book early 🎒",
    preview: "Your kids need haircuts. You need a moment. Let's do both.",
    banner: nl3Banner,
    story: email3Story,
    docUrl: "#",
    body: `Hi [First Name],

We know: back-to-school feels far away, but August books up fast, especially for kids' haircuts. Here's a pro tip — book your family appointments in July while availability is open.

Here's how it works: book yourself with one stylist and your child with another at the same time. You get a blowout, a cut, or color — while your child gets a patient, fun haircut experience with Alexandra or Tori.

Kalene put it best: "Alexandra was phenomenal with my 5-year-old daughter. My daughter had her hair cut for the first time, and it turned out wonderful."

July appointments are wide open. August fills up quickly. Book now and save the back-to-school stress for actual school.

→ Book your family appointment: beautyandthebeachsalon.net/book

See you soon,
The Beauty and the Beach Team`,
    ctaUrl: "https://beautyandthebeachsalon.net/book",
    ctaText: "Book your family appointment",
  },
  {
    id: 4,
    title: "Your hair has been through a lot this summer. Let's fix it.",
    preview: "Post-summer repair starts now — before the real damage sets in.",
    banner: nl4Banner,
    story: email4Story,
    docUrl: "#",
    body: `Hi [First Name],

July is almost over, and your hair has been through three months of Florida summer. Pool chemicals, UV rays, salt water, humidity, heat styling — it adds up.

The good news: fall is the perfect time to repair before the damage becomes permanent. K-18 bond repair rebuilds the broken bonds in your hair from the inside. It's not a surface treatment — it actually restores your hair's strength and elasticity.

And if your hair is feeling dry and brittle from the sun, our Davines nourishing treatments restore moisture and shine without weighing your hair down.

Book a consultation this month and we'll assess what your hair needs. Summer took a lot out of your hair. We can put it back.

→ Book your hair repair consultation: beautyandthebeachsalon.net/book

Your hair will thank you,
The Beauty and the Beach Team`,
    ctaUrl: "https://beautyandthebeachsalon.net/book",
    ctaText: "Book your hair repair consultation",
  },
  {
    id: 5,
    title: "August is almost here. Here's what's coming 👀",
    preview: "Back-to-school specials, new stylist features, and your referral reward.",
    banner: nl5Banner,
    story: email5Story,
    docUrl: "#",
    body: `Hi [First Name],

July flew by, and August is right around the corner. Here's what you need to know:

📅 Book your back-to-school appointments now. August slots fill up fast. If you need haircuts for the kids — or a refresh for yourself — book this week while availability is open.

🎁 Refer a friend and save. Know someone who keeps saying "I need to find a new salon"? Send them our way. When they book, you both get $10-20 off your next visit.

💇‍♀️ Coming in August: New stylist features, a post-summer repair series, and an early look at our fall color trends.

See you in August,
The Beauty and the Beach Team

→ Book your appointment: beautyandthebeachsalon.net/book
→ Refer a friend: beautyandthebeachsalon.net/refer`,
    ctaUrl: "https://beautyandthebeachsalon.net/book",
    ctaText: "Book your appointment",
  },
];

export const meta = {
  client: "Beauty and the Beach Salon",
  period: "Monthly Drop",
  preparedBy: "Content Preview",
};
