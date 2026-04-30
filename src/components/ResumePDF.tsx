import {
  Document,
  Page,
  PDFDownloadLink,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import {FC, memo, useMemo} from 'react';

import {useLocale} from '../context/LocaleContext';

const GREEN = '#1b5e20';
const GRAY = '#888888';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    padding: '50 60',
    lineHeight: 1.4,
    color: '#000000',
  },
  header: {
    textAlign: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  jobTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: GREEN,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  address: {
    fontSize: 9,
    color: GRAY,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    fontSize: 9,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  sectionTitleGreen: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: GREEN,
  },
  sectionTitleBlack: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
  },
  sectionTitleLine: {
    flex: 1,
    borderBottomWidth: 1.5,
    borderBottomColor: '#000000',
    marginLeft: 4,
    marginBottom: 3,
  },
  summaryText: {
    fontSize: 9.5,
    lineHeight: 1.55,
  },
  entry: {
    marginBottom: 12,
  },
  entryLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  entryRole: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  entryCompany: {
    fontSize: 9,
    textTransform: 'uppercase',
  },
  entryLocation: {
    fontSize: 9,
    fontStyle: 'italic',
    color: GREEN,
  },
  entryDate: {
    fontSize: 9,
    fontStyle: 'italic',
    color: GRAY,
  },
  bulletItem: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 16,
  },
  bulletText: {
    fontSize: 9.5,
    lineHeight: 1.55,
    flex: 1,
  },
  skillRow: {
    flexDirection: 'row',
    fontSize: 9.5,
    marginBottom: 3,
  },
  skillCat: {
    fontFamily: 'Helvetica-Bold',
    width: 110,
    textAlign: 'right',
    marginRight: 12,
  },
});

const resumeData = {
  summary:
    'Seasoned software engineer with 8+ years of full-stack product development experience. Passionate about creating products that are both user-friendly and technically robust. Proficient in React, Typescript, GraphQL, Rust, and Postgres, with a broad knowledge of other technologies. Thrives in fast-paced environments with a high degree of ownership and autonomy.',
  summaryZh:
    '资深软件工程师，拥有 8 年以上全栈产品开发经验。热衷于创建既用户友好又技术稳健的产品。精通 React、TypeScript、GraphQL、Rust 和 Postgres，并广泛了解其他技术。在快节奏、高自主权的环境中表现出色。',
  experience: [
    {
      role: 'Senior Full Stack Software Engineer',
      company: 'Strobe',
      location: 'Victoria, BC',
      date: 'April 2023 - Present',
      bullets: [
        'Contributed in end-to-end development of an AI-enhanced social CRM in a distributed team of 9 engineers',
        'Facilitated deep integration with Instagram, TikTok, and YouTube APIs for discovery and aggregation of creator data',
        "Contributed to our Strobe for Creators product, generating public-facing profiles of aggregated social account metrics",
        'Implemented Relay.js throughout the product and supported team members in its adoption',
        "Led development of many of the product's core features, from conception to launch",
      ],
    },
    {
      role: 'Senior Full Stack Software Engineer',
      company: 'Instant Labs, Inc.',
      location: 'Victoria, BC',
      date: 'October 2020 - April 2023',
      bullets: [
        'Contributed to React rendering performance overhaul for multi-source domain availability reconciliation',
        'Migrated existing Gatsby frontend to Next.js',
        'Performed site-wide migration from LinariaCSS to TailwindCSS',
        'Contributed to the implementation of Relay GraphQL and its integration with a Rust async-graphql API',
        'Built user-facing dashboard for our mobile-first domain registrar using Next.js, React, and Relay',
        "Built the next iteration of Instant Domain Search's mobile app using React Native",
      ],
    },
    {
      role: 'Full Stack Software Engineer',
      company: 'Shop Your Own Mortgage',
      location: 'Victoria, BC',
      date: 'Sep. 2018 - October 2020',
      bullets: [
        'Developed an admin portal for mortgage brokers to manage their clients and applications using React, Next.js, GraphQL, and Strapi CMS',
        'Led development of a real estate website built with Next.js, Typescript, Mobx and Mapbox on the client and an Express backend, backed by ElasticSearch',
        'Led migration from an inherited PHP server to Node/Express + Typescript',
        "Led development of the company's mobile app using React Native and Redux, integrated with the new Express backend",
      ],
    },
  ],
  education: [
    {
      school: 'University of Victoria',
      degree: 'B.Sc in Computer Science, Software Engineering',
      location: 'Victoria, BC',
      date: '2013 - 2018',
    },
    {
      school: 'Grande Prairie Regional College',
      degree: 'Diploma of Computer Systems Technology',
      location: 'Grande Prairie, AB',
      date: '2011 - 2013',
    },
  ],
  skills: [
    {category: 'Frontend', skills: 'React, TypeScript, GraphQL, Relay, React Native'},
    {category: 'Backend', skills: 'Rust, Node.js, Python, Go, Postgres, Redis, MongoDB'},
    {category: 'Applications', skills: 'React Native, Tauri, Leptos, Electron, Flutter'},
    {category: 'DevOps', skills: 'Docker, Pulumi, Terraform, GCP, AWS, Kubernetes'},
  ],
};

const SectionTitle: FC<{blackPart: string; greenPart: string}> = memo(
  ({blackPart, greenPart}) => (
    <View style={styles.sectionTitleRow}>
      <Text style={styles.sectionTitleGreen}>{greenPart}</Text>
      <Text style={styles.sectionTitleBlack}>{blackPart}</Text>
      <View style={styles.sectionTitleLine} />
    </View>
  ),
);
SectionTitle.displayName = 'SectionTitle';

const Entry: FC<{
  bullets?: string[];
  company: string;
  date: string;
  location: string;
  role: string;
}> = memo(({bullets, company, date, location, role}) => (
  <View style={styles.entry}>
    <View style={styles.entryLine}>
      <Text style={styles.entryRole}>{role}</Text>
      <Text style={styles.entryLocation}>{location}</Text>
    </View>
    <View style={styles.entryLine}>
      <Text style={styles.entryCompany}>{company}</Text>
      <Text style={styles.entryDate}>{date}</Text>
    </View>
    {bullets?.map((bullet, i) => (
      <View key={i} style={styles.bulletItem}>
        <Text style={styles.bulletText}>{`•  ${bullet}`}</Text>
      </View>
    ))}
  </View>
));
Entry.displayName = 'Entry';

const ResumeDocument: FC<{isZh: boolean}> = memo(({isZh}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Tim Baker</Text>
        <Text style={styles.jobTitle}>Senior Full Stack Engineer</Text>
        <Text style={styles.address}>3277 Quadra St, Victoria, BC, Canada</Text>
        <View style={styles.contactRow}>
          <Text>hello@timbaker.me</Text>
          <Text>timbaker.me</Text>
          <Text>github.com/tbakerx</Text>
          <Text>linkedin.com/in/timbakerx</Text>
        </View>
      </View>

      <View style={styles.section}>
        <SectionTitle blackPart="mary" greenPart="Sum" />
        <Text style={styles.summaryText}>{isZh ? resumeData.summaryZh : resumeData.summary}</Text>
      </View>

      <View style={styles.section}>
        <SectionTitle blackPart="erience" greenPart="Exp" />
        {resumeData.experience.map((entry, i) => (
          <Entry bullets={entry.bullets} company={entry.company} date={entry.date} key={i} location={entry.location} role={entry.role} />
        ))}
      </View>

      <View style={styles.section}>
        <SectionTitle blackPart="cation" greenPart="Edu" />
        {resumeData.education.map((entry, i) => (
          <Entry company={entry.degree} date={entry.date} key={i} location={entry.location} role={entry.school} />
        ))}
      </View>

      <View style={styles.section}>
        <SectionTitle blackPart="lls" greenPart="Ski" />
        {resumeData.skills.map((row, i) => (
          <View key={i} style={styles.skillRow}>
            <Text style={styles.skillCat}>{row.category}</Text>
            <Text>{row.skills}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
));
ResumeDocument.displayName = 'ResumeDocument';

const DownloadButton: FC<{label: string}> = memo(({label}) => {
  const {locale} = useLocale();
  const isZh = locale === 'zh';
  const filename = isZh ? 'Tim_Baker_简历.pdf' : 'Tim_Baker_Resume.pdf';

  const pdfDoc = useMemo(() => <ResumeDocument isZh={isZh} />, [isZh]);

  return (
    <PDFDownloadLink document={pdfDoc} fileName={filename}>
      {({loading}) => (
        <span className={loading ? 'opacity-70' : ''}>{loading ? 'Loading...' : label}</span>
      )}
    </PDFDownloadLink>
  );
});
DownloadButton.displayName = 'DownloadButton';

export default DownloadButton;
