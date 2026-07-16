// Single source of truth for TradesNKY Insights, adapted from the
// organization's press releases (public/insights/*.pdf). The press-release
// scaffolding — "FOR IMMEDIATE RELEASE", logos, dateline city prefixes, media
// contact blocks, "About TradesNKY" boilerplate, and "###" — has been removed
// and the body text restructured as articles. The substantive body copy is
// unchanged. Ordered newest-first.

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

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
    title: "TradesNKY expands middle school curriculum to Kenton Co. Schools",
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
    slug: "skillup-career-fair-gateway",
    category: "Community Events",
    title:
      "Skill UP career fair connects over 1,000 students with in-demand careers at Gateway",
    excerpt:
      "More than 1,000 Northern Kentucky middle school students explored the skilled trades through hands-on demonstrations and industry professionals at the skill UP Regional Career Fair, hosted at Gateway Community & Technical College.",
    date: "April 24, 2026",
    dateTime: "2026-04-24",
    imageSrc: "/images/DSC_0087.JPG",
    imageAlt:
      "Northern Kentucky middle school students explore hands-on exhibits at the skill UP Regional Career Fair at Gateway Community & Technical College",
    body: [
      {
        type: "p",
        text: "Over one thousand Northern Kentucky middle school students explored experiential exhibits representing career opportunities in the essential trades at the skill UP Regional Career Fair, hosted last week at Gateway Community & Technical College’s Boone Campus.",
      },
      {
        type: "p",
        text: "The large-scale, interactive event introduced area students to high-demand careers in the skilled trades through real-world demonstrations and direct engagement with local industry professionals.",
      },
      {
        type: "p",
        text: "Hosted in partnership with TradesNKY and Allied Construction Industries (ACI), with support from the Spirit of Construction Foundation and BE NKY, the event highlighted the critical role of early career exposure in building the region’s future workforce.",
      },
      {
        type: "p",
        text: "Throughout the day, students rotated through immersive exhibits spanning many industries such as construction, advanced manufacturing, engineering, logistics, public safety, energy systems, and cybersecurity. Hands-on stations allowed students to try tools, interact with emerging technologies, and learn directly from skilled professionals currently working in the field.",
      },
      {
        type: "image",
        src: "/images/DSC_0101.JPG",
        alt: "Students participate in a hands-on demonstration with an industry professional at the skill UP Regional Career Fair",
        caption:
          "Students tried tools, engaged with exhibitors, and discovered new career interests throughout the day.",
      },
      {
        type: "p",
        text: "“Skill UP wasn’t just an event, it was a spark,” said Sara Bray, board member at TradesNKY. “From the moment the students walked off the bus, you could see curiosity turn into confidence as students leaned in, asked questions, tried new skills, and discovered paths they had never imagined. What made it powerful wasn’t just the learning, but the connection of industry professionals pouring into these kids and walking away just as inspired. That’s how you build a future workforce.”",
      },
      {
        type: "p",
        text: "“We are proud to bring education and industry together in a way that is engaging and impactful for students,” said Dr. Fernando Figueroa, Gateway President. “Events like skill UP help students see that rewarding, high-skill careers are both attainable and available right here in their communities.”",
      },
      {
        type: "p",
        text: "As workforce demand continues to rise, initiatives like skill UP play a vital role in closing awareness gaps and inspiring the next generation to pursue the high-paying, in-demand career pathways in their communities.",
      },
      {
        type: "p",
        text: "“Allied Construction Industries developed this event in partnership with TradesNKY at Gateway to provide young people with line of sight and access to rewarding careers in the skilled trades,” said Jordan Vogel, Executive Director of Allied Construction Industries. “With 500-member companies, ACI is keenly aware of the need to be laser-focused on building a strong pipeline of talent for the region’s employers. Creating this event lets us deliver on both these fronts.”",
      },
      { type: "p", text: "Event highlights included:" },
      {
        type: "list",
        items: [
          "1,150 middle school students from across Northern Kentucky participated",
          "43 regional employers provided hands-on demonstrations",
          "Interactive career exploration across 20+ trade sectors",
          "Direct engagement between students and industry professionals",
        ],
      },
    ],
  },

  {
    slug: "kenton-county-trades-clubs-community-projects",
    category: "Community Impact",
    title:
      "Kenton County Trades Clubs complete community projects through hands-on learning",
    excerpt:
      "Middle school students in TradesNKY’s Kenton County Trades Clubs built beds and benches for local families and nonprofits this spring, applying real construction skills alongside industry mentors.",
    date: "March 30, 2026",
    dateTime: "2026-03-30",
    imageSrc: "/images/kenton-trades-club-bed-build.jpg",
    imageAlt:
      "Kenton County Trades Club students measure and assemble bed slats alongside an industry mentor",
    body: [
      {
        type: "p",
        text: "Students participating in TradesNKY’s Kenton County middle school Trades Clubs put their skills to work this spring by completing projects that will benefit local families and community organizations.",
      },
      {
        type: "p",
        text: "Working alongside volunteers from industry partners throughout March, students from Summit View Academy, Twenhofel Middle School, Turkey Foot Middle School and Woodland Middle School built beds and outdoor benches as part of their after-school Trades Club experience. The projects gave students an opportunity to apply the construction skills they have been developing while demonstrating how careers in the skilled trades can make a lasting difference in their communities.",
      },
      {
        type: "p",
        text: "Students at Summit View Academy partnered with O’Rourke Wrecking, while students at Twenhofel Middle School worked alongside volunteers from Bray Construction Services to construct beds that were donated to Sleep in Heavenly Peace, a nonprofit organization that builds and delivers beds to children in need. During the project, students measured, assembled and secured bed slats and side rails before combining them with the headboards they had completed during previous club sessions.",
      },
      {
        type: "image",
        src: "/images/kenton-trades-club-shp-donation.jpg",
        alt: "Twenhofel Middle School students and Bray Construction volunteers celebrate their completed bed build with nonprofit partner Sleep in Heavenly Peace",
        caption:
          "Twenhofel Middle School students, with support from Bray Construction, celebrate their completed bed build with nonprofit partner Sleep in Heavenly Peace.",
      },
      {
        type: "p",
        text: "At Turkey Foot Middle School, students partnered with Valley Interior Systems to build outdoor benches that were donated to the Kenton Conservancy for use at Brushy Fork Nature Preserve. Students at Woodland Middle School collaborated with Turner Construction to build benches for the Kenton County Conservation District’s Morning View Heritage Area Conservation and Education Center, creating durable seating that will serve visitors for years to come.",
      },
      {
        type: "image",
        src: "/images/kenton-trades-club-bench.jpg",
        alt: "Kenton County Trades Club students gather around an outdoor bench they built for donation to a local community organization",
        caption:
          "Students show off a finished bench built for donation to a local community organization.",
      },
      {
        type: "p",
        text: "The community projects provided students with valuable hands-on experience while reinforcing important trade skills, including measuring, material preparation, teamwork, problem-solving and safe tool use.",
      },
      {
        type: "p",
        text: "TradesNKY’s after-school Trades Clubs connect middle school students with local construction professionals and industry partners who volunteer their time to mentor students while introducing them to careers in the skilled trades. Through real-world projects like these, students gain confidence, develop practical skills and begin exploring career pathways that are essential to Northern Kentucky’s workforce.",
      },
      {
        type: "p",
        text: "The success of these community projects was made possible through the support of TradesNKY’s industry partners, including O’Rourke Wrecking, Bray Construction Services, Valley Interior Systems and Turner Construction. Their mentorship provided students with firsthand exposure to the construction industry while demonstrating the value of giving back through skilled trades.",
      },
    ],
  },

  {
    slug: "campbell-county-schools-partnership",
    category: "Partnership News",
    title: "TradesNKY and Campbell Co. Schools announce strategic partnership",
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
    slug: "benky-spirit-of-construction-investment",
    category: "Funding & Grants",
    title:
      "BE NKY and Spirit of Construction invest $420,000 in TradesNKY programming",
    excerpt:
      "BE NKY Growth Partnership and the Spirit of Construction Foundation are investing a combined $420,000 to expand TradesNKY’s skilled-trades programming for middle school students across Northern Kentucky.",
    date: "July 2025",
    dateTime: "2025-07",
    imageSrc: "/images/benky-check-presentation.jpg",
    imageAlt:
      "TradesNKY leaders and partners hold a ceremonial $420,000 check from BE NKY and the Spirit of Construction Foundation at the Northern Kentucky Chamber of Commerce",
    body: [
      {
        type: "p",
        text: "BE NKY Growth Partnership and the Spirit of Construction Foundation announced investments into several Northern Kentucky education nonprofits at the Northern Kentucky Chamber of Commerce’s Tuesday Eggs ’N Issues event, with TradesNKY among the recipients.",
      },
      {
        type: "p",
        text: "BE NKY, the economic development company for Boone, Kenton, and Campbell counties, catalyzed the effort to generate new financial support for organizations working with children and families from kindergarten through high school. In total, $420,000 over fiscal years 2025 and 2026 — $220,000 from BE NKY and $200,000 from the Spirit of Construction Foundation — will fund an expansion of TradesNKY, a nonprofit promoting opportunities in the skilled trades that lead to successful careers. The funding will help students in grades 6–8 explore trade careers in schools beyond Campbell County.",
      },
      {
        type: "p",
        text: "The Spirit of Construction Foundation, a coalition of individuals and companies committed to the construction industry’s future growth and prosperity, is investing its $200,000 in two annual installments. The organization is dedicated to fostering awareness of the importance of the region’s construction industry and creating opportunities for young people and adults to thrive through careers in the industry and its various trades, supporting the field through workforce development programs, community outreach grants and scholarships.",
      },
      {
        type: "p",
        text: "“With a focus on building it forward, we are invested in the growth of skilled trades and the construction industry as a whole in our region,” said Spirit of Construction Executive Director Amanda Smith. “TradesNKY opens doors for young people in Northern Kentucky to discover many rewarding career opportunities in the trades.”",
      },
      {
        type: "p",
        text: "These investments align with BE NKY’s efforts to develop a comprehensive roadmap for workforce development by connecting students from kindergarten through 12th grade to Northern Kentucky career opportunities through exposure, exploration, and engagement.",
      },
      {
        type: "p",
        text: "In March 2024, BE NKY released “Population and Labor Force Trends and Future Projections,” a study researched by Janet Harrah and student fellows at the Center for Economic Analysis and Development (CEAD) at the Haile College of Business at Northern Kentucky University. The study showed that although baseline projections predict a population increase of 58,429 people in Northern Kentucky between 2020 and 2050, the labor force in prime working ages of 16 to 64 is only predicted to grow by 8,450 — highlighting the need to expand and upskill the region’s workforce.",
      },
      {
        type: "p",
        text: "Through subsequent meetings with more than 100 business executives at more than 40 strategic base companies, BE NKY learned that the number one challenge businesses faced was the quantity and quality of the workforce available in the region. BE NKY is focusing on students at schools where 50% or more of students are in the free or reduced lunch program — 26,876 students at 50 schools across Northern Kentucky.",
      },
      {
        type: "p",
        text: "“BE NKY is taking a hands-on, long-term approach to preparing our region’s children for future career opportunities at locally owned, national and international companies here in Northern Kentucky,” said BE NKY Growth Partnership CEO Lee Crume. “Our goal is for our children and grandchildren to have a deep understanding of the diverse corporate community we have in the region and the opportunities for good-paying jobs and career advancement they offer. We are looking for corporate partners who are willing to contribute financially and join us in classrooms throughout the region to reach children of all ages.”",
      },
      {
        type: "p",
        text: "“TradesNKY is deeply grateful to BE NKY Growth Partnership and the Spirit of Construction Foundation for their unwavering commitment to workforce development in our region,” said TradesNKY Board Chair Phil Griffin. “Our mission to build a stronger future means investing in our young people today. These organizations understand that lasting change doesn’t come from a short-term fix, but from long-term solutions that empower the next generation with the skills and opportunities they need to thrive. We could not ask for better partners, and we look forward to expanding our impact in the region.”",
      },
      {
        type: "p",
        text: "Today’s third graders will begin joining the workforce in just 10 years, and those who aren’t reading proficiently are four times less likely to graduate from high school by age 19 — making early involvement in children’s education imperative. Workforce issues are not exclusive to Northern Kentucky, but the collaboration among these organizations, elected officials and other community leaders shows the region is dedicated to building a strong workforce for the future.",
      },
    ],
  },

  {
    slug: "four-new-board-members",
    category: "Leadership",
    title: "TradesNKY announces four new members to Board of Directors",
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
    title: "Kenton County awards $400,000 grant to TradesNKY",
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
    title: "TradesNKY appoints first Executive Director",
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

  {
    slug: "campbell-county-classroom-curriculum",
    category: "Program Expansion",
    title:
      "TradesNKY expands partnership with Campbell County MS through in-class career exploration",
    excerpt:
      "In 2023, TradesNKY brought its hands-on Explorations curriculum directly into Campbell County Middle School classrooms, giving sixth-graders an early introduction to the skilled trades.",
    date: "January 2023",
    dateTime: "2023-01",
    imageSrc: "/images/campbell-classroom-explorations.jpg",
    imageAlt:
      "Sixth-grade students work at hands-on stations in Campbell County Middle School’s Introduction to Construction Technology classroom",
    body: [
      {
        type: "p",
        text: "TradesNKY expanded its partnership with Campbell County Middle School in 2023 by bringing its hands-on career exploration curriculum directly into the classroom, providing sixth-grade students with an early introduction to the skilled trades and the careers that help build Northern Kentucky’s communities.",
      },
      {
        type: "p",
        text: "Through the school’s Introduction to Construction Technology elective course, students participated in TradesNKY’s Explorations curriculum, an interactive program designed to expose middle school students to a variety of skilled trades while building confidence through hands-on learning. The partnership represented an important milestone in TradesNKY’s mission to connect education with workforce opportunities by introducing students to career pathways before they begin making decisions about high school and beyond.",
      },
      {
        type: "p",
        text: "The curriculum moved beyond traditional classroom instruction by combining career exploration with project-based learning and direct engagement from local industry professionals. Throughout the school year, students participated in “exploration days,” where experts from construction and related skilled trades visited the classroom to share their experiences, demonstrate industry tools and discuss the skills needed for success in their professions.",
      },
      {
        type: "p",
        text: "Students were encouraged to learn by doing. In addition to exploring career opportunities, they gained hands-on experience using industry tools and equipment while developing foundational skills in safety, measuring, teamwork and problem-solving.",
      },
      {
        type: "p",
        text: "The course introduced students to the many careers that contribute to creating and maintaining the places where people live, learn and work. From construction and carpentry to electrical, plumbing and HVAC professions, students gained a broader understanding of the industries that keep communities growing and functioning.",
      },
    ],
  },

  {
    slug: "campbell-county-workshop-series-launch",
    category: "Program Launch",
    title: "TradesNKY launches workshop series with Campbell County Middle School",
    excerpt:
      "One of TradesNKY’s earliest middle school partnerships introduced Campbell County seventh-graders to the skilled trades in 2022 through hands-on woodworking projects and mentorship from local building professionals.",
    date: "April 22, 2022",
    dateTime: "2022-04-22",
    imageSrc: "/images/campbell-workshop-handsaw.jpg",
    imageAlt:
      "A TradesNKY mentor guides a Campbell County Middle School student through a hand-saw cut during a hands-on workshop",
    body: [
      {
        type: "p",
        text: "TradesNKY launched a new series of hands-on workshops with seventh-grade students at Campbell County Middle School in the spring of 2022, introducing young learners to the skilled trades through interactive projects and industry mentorship.",
      },
      {
        type: "p",
        text: "The workshop series marked one of TradesNKY’s earliest partnerships with a local middle school. Designed to move beyond traditional career presentations, the workshops immersed students in the skilled trades through hands-on activities that emphasized safety, teamwork and problem-solving. Students learned foundational construction skills while working directly with tools, materials and experienced professionals from the building industry.",
      },
      {
        type: "image",
        src: "/images/campbell-workshop-drills.jpg",
        alt: "Campbell County Middle School students gather around a work table to practice using drills with a trades professional",
        caption:
          "Students work directly with industry professionals and power tools during a hands-on workshop session.",
      },
      {
        type: "p",
        text: "The multi-week program allowed students to build confidence by developing new skills one step at a time. Throughout the series, students were introduced to proper tool safety, measuring techniques and construction fundamentals before applying those lessons to complete their own woodworking projects. Each workshop built on the previous session, reinforcing practical skills while demonstrating how planning and collaboration are essential on every job site.",
      },
      {
        type: "p",
        text: "In addition to learning technical skills, students had the opportunity to interact with local trades professionals who shared their experiences, discussed career pathways and answered questions about working in the industry. These conversations helped students gain a better understanding of the wide range of careers available in construction and the skilled trades, from carpentry and electrical work to plumbing, HVAC and project management.",
      },
      {
        type: "p",
        text: "The partnership with Campbell County Middle School established a foundation for TradesNKY’s growing presence in Northern Kentucky schools. What began as a workshop series would soon evolve into an expanded classroom curriculum, after-school clubs and comprehensive career exploration programs that continue to connect students with local employers and industry leaders.",
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
    .map((block) => {
      if (block.type === "p") return block.text;
      if (block.type === "list") return block.items.join(" ");
      return block.caption ?? "";
    })
    .join(" ");
}
