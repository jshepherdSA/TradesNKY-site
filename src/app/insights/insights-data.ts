// Single source of truth for TradesNKY Insights, adapted from the
// organization's press releases (public/insights/*.pdf). The press-release
// scaffolding — "FOR IMMEDIATE RELEASE", logos, dateline city prefixes, media
// contact blocks, "About TradesNKY" boilerplate, and "###" — has been removed
// and the body text restructured as articles. The substantive body copy is
// unchanged. Ordered newest-first.

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] };

export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  /** Display date, e.g. "May 21, 2026". */
  date: string;
  /** ISO date for <time dateTime>. */
  dateTime: string;
  imageSrc: string;
  imageAlt: string;
  body: InsightBlock[];
};

export const INSIGHTS: Insight[] = [
  {
    slug: "middle-school-build-expansion-kenton",
    category: "Program Expansion",
    title:
      "TradesNKY Expands Middle School Construction Curriculum to Kenton County Schools Through ARPA Funding Partnership",
    excerpt:
      "TradesNKY is expanding its hands-on middle school BUILD curriculum to Holmes Middle School and four Kenton County middle schools through a new ARPA-funded partnership.",
    date: "May 21, 2026",
    dateTime: "2026-05-21",
    imageSrc: "/images/students-handson.jpg",
    imageAlt:
      "Middle school students using power tools during a hands-on TradesNKY BUILD lesson",
    body: [
      {
        type: "p",
        text: "TradesNKY is expanding its hands-on middle school BUILD curriculum into additional Northern Kentucky schools through a new partnership supported by American Rescue Plan Act (ARPA) funding.",
      },
      {
        type: "p",
        text: "The expansion includes Holmes Middle School and the four middle schools within Kenton County School District, significantly growing student access to career exploration and skilled trades education across the region.",
      },
      {
        type: "p",
        text: "The BUILD curriculum introduces students to the wide range of careers involved in building and maintaining communities, including construction, electrical, plumbing, HVAC, engineering, and other skilled trades.",
      },
      {
        type: "p",
        text: "“This expansion represents another major step forward in building strong workforce pathways for students across Northern Kentucky,” said Phil Griffin, co-founder of TradesNKY. “We know there is tremendous demand for skilled trades professionals throughout our region, and these partnerships allow students to begin exploring those opportunities earlier through hands-on experiences.”",
      },
      {
        type: "p",
        text: "The program provides schools with TradesNKY’s proprietary curriculum focused on trades career pathways that fall into the BUILD curriculum through project-based, hands-on learning experiences. The initiative is designed to introduce students to high-demand career opportunities while helping schools strengthen workforce readiness efforts at an earlier age.",
      },
      {
        type: "p",
        text: "Through the partnership, participating schools will receive one-time start-up funding to help convert classroom spaces into hands-on learning labs equipped for construction and trades instruction. Funding will also support equipment purchases, classroom furnishings and one year of consumable materials needed to launch the program.",
      },
      {
        type: "p",
        text: "Schools participating in the program will designate teachers to lead instruction and complete specialized professional development training facilitated by TradesNKY during the summer of 2026. TradesNKY will also provide ongoing support, curriculum resources, instructor collaboration opportunities and connections to local industry partners for guest speakers, site visits and workforce experiences.",
      },
      {
        type: "p",
        text: "TradesNKY leaders said the ARPA funding is especially meaningful for schools like Holmes Middle School, which previously did not have funding available to implement the curriculum.",
      },
      {
        type: "p",
        text: "Participating schools will also work closely with TradesNKY to track student participation and outcomes, helping measure the program’s impact and future growth opportunities.",
      },
    ],
  },

  {
    slug: "campbell-county-schools-partnership",
    category: "Partnership News",
    title:
      "TradesNKY and Campbell County Schools Announce Strategic Partnership to Expand Regional Career Pathways",
    excerpt:
      "A new strategic partnership will expand hands-on PK–12 career pathways across Campbell County Schools, including a new regional manufacturing pathway known as MAKE.",
    date: "March 26, 2026",
    dateTime: "2026-03-26",
    imageSrc: "/images/campbell-county-partnership.jpeg",
    imageAlt:
      "TradesNKY and Campbell County Schools leaders at the partnership announcement event",
    body: [
      {
        type: "p",
        text: "TradesNKY and Campbell County Schools today announced a new strategic partnership to expand and strengthen hands-on career pathways for PK-12 students, including the development of a regional manufacturing pathway known as MAKE. This partnership model links classroom learning with real workforce opportunities, guiding students from early exposure in elementary school through exploration in middle school and hands-on experience, credentialing, and technical training in high school, ultimately preparing them for college and career success at graduation.",
      },
      {
        type: "p",
        text: "The announcement, made during a special event at Campbell County High School last night, builds on the district’s nationally recognized career pathway model and introduces new resources, curriculum development and industry partnerships designed to prepare students for high-demand careers.",
      },
      {
        type: "p",
        text: "“We are incredibly proud and honored to partner with Campbell County Schools,” said Phil Griffin, founder of TradesNKY. “They have already built an outstanding model for career pathways starting as early as preschool, and we’re excited to work alongside them to expand these opportunities and help even more students discover meaningful, in-demand careers.”",
      },
      {
        type: "p",
        text: "Campbell County Schools has already established itself as a leader in learning through its BUILD pathway, developed in partnership with TradesNKY. Building on that success, this next phase of collaboration will introduce the MAKE pathway, focused on manufacturing careers, and further expand opportunities for students across all grade levels. This pathway development has been made possible through the generous support and expertise of our industry partners, especially Randy Hemmerle, Vice President of Administration at Krauss Maffei and TradesNKY Board Member.",
      },
      {
        type: "p",
        text: "“This is one of the most innovative and comprehensive pathway models in the state,” said Lorraine Moore, executive director of TradesNKY. “Campbell County has built something exceptional, and our role is to come alongside them, strengthen it and help scale what works. Together, we are creating more opportunities for students to explore high-demand careers right here in our region.”",
      },
      { type: "p", text: "The initiative will include:" },
      {
        type: "list",
        items: [
          "Development of the MAKE manufacturing pathway to complement existing career tracks",
          "Expansion of K-5 career clubs across all elementary school clusters",
          "Integration of TradesNKY resources into existing school programming",
          "Increased engagement with industry partners, who will work directly with students alongside educators",
          "Continued alignment of career pathways with academic achievement, reinforcing reading and math proficiency through real-world application",
        ],
      },
      {
        type: "p",
        text: "“We are proud to continue expanding our PK–12 Advanced Manufacturing and Automation Engineering pathway, creating meaningful opportunities for students to explore, develop, and apply skills aligned to high-demand careers,” said Dr. Shelli Wilson, Superintendent of Campbell County Schools. “Through this pathway, students will have access to hands-on learning, industry-recognized certifications, and experiences that prepare them for both college and the workforce. This public–private partnership with TradesNKY is essential in providing authentic experiences and connecting our students to real opportunities. We are truly grateful for their investment in our students and in the future of our community. This work ensures our students are prepared, confident, and ready to contribute to a rapidly evolving workforce.”",
      },
      {
        type: "p",
        text: "A key component of the program is direct involvement from industry professionals, who regularly engage in classrooms, providing real world insights and hands-on instruction in partnership with teachers. This approach ensures students are not only learning about career opportunities but actively experiencing them.",
      },
      {
        type: "p",
        text: "The expanded pathway model also connects early exposure at the elementary level with more advanced opportunities in middle and high school, creating a seamless system that helps students explore interests, build skills and pursue certifications, employment or continued education after graduation.",
      },
      {
        type: "p",
        text: "TradesNKY and Campbell County Schools will continue working with educators, business leaders and community partners to grow and sustain the program.",
      },
    ],
  },

  {
    slug: "four-new-board-members",
    category: "Leadership",
    title: "TradesNKY Announces Four New Members to Its Board of Directors",
    excerpt:
      "Four new board members — leaders in manufacturing, construction, and workforce development — bring added expertise to TradesNKY’s skilled-trades mission.",
    date: "March 13, 2025",
    dateTime: "2025-03-13",
    imageSrc: "/images/students-event.jpg",
    imageAlt:
      "TradesNKY board and industry leaders connecting with students at a career event",
    body: [
      {
        type: "p",
        text: "TradesNKY has announced the appointment of four new members to its board of directors, bringing additional leadership and industry expertise to the organization’s mission of strengthening the region’s skilled trades workforce.",
      },
      {
        type: "p",
        text: "TradesNKY works in partnership with educators and industry leaders to provide career planning and hands-on learning opportunities that mirror traditional college preparation. The organization’s mission is to help students discover viable, rewarding career paths while building a strong regional workforce.",
      },
      {
        type: "p",
        text: "New board members include Philippe Garnier, CEO and general manager of Safran Landing Systems; Michael Taylor, HR director at Riegler Blacktop; John Strawser, owner of Stud Chopper and former COO of Valley Interior Systems; and Randy Hemmerle, Vice President of Administration at KraussMaffei.",
      },
      {
        type: "p",
        text: "The new members represent a range of industries including manufacturing, construction and workforce development, and will help guide TradesNKY as it continues to expand career pathways and awareness of skilled trades opportunities across Northern Kentucky.",
      },
      {
        type: "p",
        text: "“TradesNKY is committed to connecting students, educators and industry leaders to strengthen the skilled trades pipeline in our region,” said Lorraine O’Moore, executive director of TradesNKY. “These new board members bring valuable expertise and passion for workforce development that will help advance our mission.”",
      },
      {
        type: "p",
        text: "Philippe Garnier serves as CEO and general manager of Safran Landing Systems’ Kentucky facility in Walton, where he has led the site since 2015. Garnier joined the company in 1987 and has held multiple leadership roles, including quality manager and vice president of both the Wheels & Brakes and Carbon facilities. Under his leadership, the Walton site has continued to grow as a key contributor to Kentucky’s aerospace manufacturing sector.",
      },
      {
        type: "p",
        text: "Michael Taylor, HR director at Riegler Blacktop, has worked closely with Boone County Schools through the Heavy Equipment Sciences program since 2022, helping mentor students and connect them with careers in construction. The partnership has helped mentor, employ or graduate 29 students since the program began.",
      },
      {
        type: "p",
        text: "“I wanted to serve on the TradesNKY board to help make it clearer for students, parents and counselors what career paths and local opportunities exist in the skilled trades,” Taylor said. “I also want to help streamline the process for businesses of all sizes to get involved with developing the workforce of tomorrow.”",
      },
      {
        type: "p",
        text: "John Strawser, owner of Stud Chopper and former chief operating officer of Valley Interior Systems, has spent decades supporting workforce development in the construction industry. He served on the Spirit of Construction board of directors for 20 years and now holds emeritus status. His work has focused on youth education and hands-on learning, including helping develop the MACkit curriculum (Math Applied in Construction) through the Construction Career Advocacy Program.",
      },
      {
        type: "p",
        text: "“After seeing the success that visual and hands-on learning can have with students, I couldn’t say no to the opportunity to help strengthen what TradesNKY is building,” Strawser said. “Many students thrive when learning is practical and experiential, and organizations like TradesNKY are helping create better pathways for them.”",
      },
      {
        type: "p",
        text: "Randy Hemmerle, Vice President of Administration at KraussMaffei, has extensive experience supporting workforce development through industry partnerships with Gateway Community & Technical College and the Northern Kentucky FAME apprenticeship program. His company also collaborates with multiple school districts in the region to support curriculum development and technical education initiatives.",
      },
      {
        type: "p",
        text: "“The vision of TradesNKY aligns with my passion for creating opportunities and pathways for students,” Hemmerle said. “This board is made up of individuals who are committed to getting things done, and that’s exciting.”",
      },
      {
        type: "p",
        text: "TradesNKY works with schools, employers and community partners to raise awareness of skilled trades careers and connect students with education and training opportunities that lead to high-demand jobs across the region.",
      },
    ],
  },

  {
    slug: "kenton-county-400k-grant",
    category: "Funding & Grants",
    title:
      "Kenton County Awards $400,000 Grant to TradesNKY to Expand Skilled Trades Education in Local Schools",
    excerpt:
      "The Kenton County Fiscal Court voted unanimously to award $400,000 in ARPA funding to bring hands-on, trades-based career exploration to six Title I middle schools.",
    date: "January 14, 2025",
    dateTime: "2025-01-14",
    imageSrc: "/images/students-building.jpg",
    imageAlt:
      "Students exploring construction and skilled-trades careers in a TradesNKY classroom",
    body: [
      {
        type: "p",
        text: "The Kenton County Fiscal Court voted unanimously to award $400,000 in American Rescue Plan Act (ARPA) funding to TradesNKY, a Northern Kentucky based nonprofit dedicated to expanding access to skilled trades education and career pathways for students.",
      },
      {
        type: "p",
        text: "The funding will support one-time startup costs to implement a hands-on, trades-based career exploration and skills development curriculum at six Title I middle schools across Kenton County. The program is designed to address lost instructional time and reduced access to experiential learning opportunities caused by the COVID-19 pandemic.",
      },
      {
        type: "p",
        text: "“This investment allows us to meet students where they are and reintroduce hands-on learning that was disrupted during the pandemic,” said Lorraine O’Moore, Executive Director of TradesNKY.",
      },
      {
        type: "p",
        text: "The grant will fund classroom conversions, industry-standard equipment, and one year of consumable materials at participating schools, allowing students to explore careers in construction, manufacturing, and other high-demand skilled trades. The program is specifically tailored to serve students who were disproportionately impacted by disruptions to in-person learning.",
      },
      {
        type: "p",
        text: "The use of ARPA funds aligns with federal guidelines supporting initiatives that address lost instructional time for K–12 students and respond to the long-term economic impacts of the pandemic.",
      },
      {
        type: "p",
        text: "TradesNKY works in partnership with educators and industry leaders to provide career planning and hands-on learning opportunities that mirror traditional college preparation. The organization’s mission is to help students discover viable, rewarding career paths while building a strong regional workforce.",
      },
    ],
  },

  {
    slug: "lorraine-omoore-executive-director",
    category: "Leadership",
    title:
      "TradesNKY Appoints First Executive Director to Lead Regional Workforce Efforts",
    excerpt:
      "TradesNKY has named Lorraine O’Moore — a workforce-development leader with more than 30 years of experience — as its first Executive Director.",
    date: "January 12, 2025",
    dateTime: "2025-01-12",
    imageSrc: "/images/mentor-student.jpg",
    imageAlt:
      "A workforce-development leader mentoring a student in a Northern Kentucky trades setting",
    body: [
      {
        type: "p",
        text: "TradesNKY, a Northern Kentucky based non-profit organization focused on strengthening the region’s skilled trades and workforce pipeline, has named Lorraine O’Moore as its first Executive Director, marking a significant milestone in the organization’s growth.",
      },
      {
        type: "p",
        text: "O’Moore brings more than 30 years of experience in workforce development, education partnerships and talent pipeline strategy to the role. Most recently, she served as the Workforce Development Manager with BE NKY, leading their workforce initiatives and serving as a key partner in attracting and retaining businesses in Northern Kentucky.",
      },
      {
        type: "p",
        text: "She also served as the Director of Work-Based Learning at NaviGo (a division of Learning Grove), where she worked closely with employers to design customized work-based learning (WBL) programs and strengthen connections between industry and education.",
      },
      {
        type: "p",
        text: "In her new role, O’Moore will lead TradesNKY’s strategic growth, deepen partnerships with schools and employers, and expand hands-on career pathways that prepare students and jobseekers for high-demand skilled trades careers across Northern Kentucky.",
      },
      {
        type: "p",
        text: "“TradesNKY is at a pivotal moment,” O’Moore said. “This organization is proving that when education, industry and community come together with a shared purpose, we can create real opportunities for students and build the workforce our region needs to thrive. I’m honored to step into this role and help scale that impact across Northern Kentucky.”",
      },
      {
        type: "p",
        text: "O’Moore is a 2022 graduate of Leadership Northern Kentucky and currently co-chairs the organization’s Talent Pipeline Day committee. She also founded the Northern Kentucky College & Career Counselor Network, bringing together K-12, post-secondary, industry and community partners to improve career awareness and alignment.",
      },
      {
        type: "p",
        text: "Her leadership and contributions to the region’s workforce ecosystem have earned widespread recognition, including being named Workforce Professional of the Year in 2024 by the Northern Kentucky Workforce Investment Board.",
      },
      {
        type: "p",
        text: "The appointment reflects TradesNKY’s momentum as it works to address workforce shortages, elevate the skilled trades, and create sustainable career pathways for Northern Kentucky students.",
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return INSIGHTS.find((i) => i.slug === slug);
}

/** Flattened plain-text body — used for the index page's full-text search. */
export function insightBodyText(insight: Insight): string {
  return insight.body
    .map((block) => (block.type === "p" ? block.text : block.items.join(" ")))
    .join(" ");
}
