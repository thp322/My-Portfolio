import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'douyin',
    label: '抖音',
    href: 'https://www.douyin.com/user/MS4wLjABAAAA_UNh4V6nLwF1AK5fJ6u3UnDHSD4hL0e-KNx6cy99oWA?from_tab_name=main',
  },
  {
    id: 'bilibili',
    label: 'B站',
    href: 'https://space.bilibili.com/451079830?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer',
  },
]

const BLOG_LINKS = [
  {
    id: 'blog',
    label: '个人博客网站',
    href: 'https://harperlog.cn/',
  },
  {
    id: 'csdn',
    label: 'csdn',
    href: 'https://blog.csdn.net/thp2656245936?spm=1000.2115.3001.5343',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/thp322',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2022 – 2026',
        place: 'Hunan University of Chinese Medicine',
        role: '',
        logo: { src: `${import.meta.env.BASE_URL}images/hzd.png`, alt: 'Hunan University of Chinese Medicine' },
        points: [
          'University-level project, Undergraduate Scientific Research Innovation Fund',
          'National Second Prize, National College Digital Media and Technology Competition',
          'Provincial Excellence Award, Lanqiao Cup AIGC',
          'Provincial First Prize, China College Student Computer Design Competition',
          'National Excellence Award, Yiban Technical Design Competition',
          'National-level project, College Student Innovation and Entrepreneurship Training Program',
          'Excellent Poster Presentation Award, Shanghai Jiao Tong University Excellent Undergraduate Thesis Forum',
          'Excellent Undergraduate Thesis',
        ],
      },
      {
        period: '2026 – 2028',
        place: "Yan'an University",
        role: '',
        logo: { src: `${import.meta.env.BASE_URL}images/yadx.png`, alt: "Yan'an University" },
      },
      {
        period: '2024 – 2025',
        place: '··· Technology Co., Ltd.',
        role: 'Intern',
        logo: { src: `${import.meta.env.BASE_URL}images/bp.png`, alt: 'bp' },
      },
      {
        period: '2026 – Now',
        place: 'Tech Blog',
        groups: [
          {
            heading: 'Harper',
            logoImg: `${import.meta.env.BASE_URL}images/harper.jpg`,
            sub: 'Python Java Crawler Agent Blogger',
            items: ['Personal blog 100 total views · CSDN 300 total views'],
            links: BLOG_LINKS,
          },
        ],
      },
      {
        period: '2026 – Now',
        place: 'Content Creator',
        groups: [
          {
            heading: 'Harper',
            logoImg: `${import.meta.env.BASE_URL}images/harper.png`,
            sub: 'Crawler',
            items: ['Douyin 00K · Bilibili 00K followers'],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2022 – 2026',
        place: '湖南中医药大学',
        role: '',
        logo: { src: `${import.meta.env.BASE_URL}images/hzd.png`, alt: '湖南中医药大学' },
        points: [
          '校级立项 本科生科研创新基金项目',
          '国赛二等奖 全国大学生数字媒体与科技竞赛',
          '省赛优秀奖 蓝桥杯AIGC',
          '省赛一等奖 中国大学生计算机设计大赛',
          '国赛优秀奖 易班技术设计大赛',
          '国家级立项 大学生创新训练计划项目',
          '优秀壁报展示奖 上海交通大学优秀本科论文论坛',
          '本科优秀毕业论文',
        ],
      },
      {
        period: '2026 – 2028',
        place: '延安大学',
        role: '',
        logo: { src: `${import.meta.env.BASE_URL}images/yadx.png`, alt: '延安大学' },
      },
      {
        period: '2024 – 2025',
        place: '···科技有限公司',
        role: '数据分析师 · 实习',
        logo: { src: `${import.meta.env.BASE_URL}images/bp.png`, alt: 'bp' },
      },
      {
        period: '2026 – 至今',
        place: '技术博客',
        groups: [
          {
            heading: 'Harper',
            logoImg: `${import.meta.env.BASE_URL}images/harper.jpg`,
            sub: 'python Java 爬虫 Agent 博主',
            items: ['个人博客网站 100 访问总量 · CSDN 300 访问总量'],
            links: BLOG_LINKS,
          },
        ],
      },
      {
        period: '2026 – 至今',
        place: '自媒体博主',
        groups: [
          {
            heading: 'Harper',
            logoImg: `${import.meta.env.BASE_URL}images/harper.png`,
            sub: '爬虫 技术主播',
            items: ['抖音 0 万 · B站 0 万 关注'],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
