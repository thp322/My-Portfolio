// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailPlaceholder: '作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'AI-Agent',
        no: '01',
        title: 'Agent 项目',
        tagline: 'LangChina · LangGraph',
        items: [
          { name: '01 DataClaw产品文档智能维护Agent', 
            meta: 'LangChain + LangGraph + FastAPI + ChromaDB', 
            slug: 'dataclaw-agent' },
          { name: '02 基于LLM的智能SVG图像生成Agent应用', 
            meta: 'PyTorch + Transformers + OpenCV + KaggleHub', 
            slug: 'svg-agent-app' },
          { name: '03 ', meta: ' ', slug: '' },
          { name: '04 ', meta: ' ', slug: '' },
        ],
        // ooter: '中国大学生计算机设计大赛 · 全国大学生数字媒体与科技竞赛',
        awards: ['Kaggle 参赛经历'],
      },
      {
        id: 'DataViz',
        no: '02',
        title: '数据可视化',
        tagline: 'Python · Django',
        items: [
          {
            name: '01 病毒性肝炎疾病数据可视化分析',
            meta: 'Django + MySQL + ECharts + chart.js',
            // tags: ['111'],
            slug: 'visualize-data',
          },
          {
            name: '02 本草脉络——中医药大数据可视化之旅',
            meta: 'Django + MySQL + Neo4j + D3.js',
            slug: 'visualize-data',
          },
         { name: '03 ', meta: ' ', slug: '' },
         { name: '04 ', meta: ' ', slug: '' },
        ],
        awards: ['中国大学生计算机设计大赛', '全国大学生数字媒体与科技竞赛'],
      },
      {
        id: 'GD32',
        no: '03',
        title: '嵌入式',
        tagline: 'GD32 · QT',
        items: [
          {
            name: '01 基于GD32的压力性损伤数据监测智能病服系统的设计与研发',
            meta: 'GD32 + QT',
            slug: 'system-design',
          },
         { name: '03 ', meta: ' ', slug: '' },
         { name: '04 ', meta: ' ', slug: '' },
         { name: '04 ', meta: ' ', slug: '' },
        ],
        awards: ['大学生创新训练计划项目'],
      },
      {
        id: 'BERT',
        no: '04',
        title: '学术论文',
        tagline: '机器学习 · 深度学习',
        items: [
          { name: '01 长沙市社区老年人陪诊服务需求及应用现状的调查研究', slug: 'survey' },
          { name: '02 基于LDA与BERT模型的陪诊行业的认知和态度的时间演化分析', slug: 'lda-bert-analysis' },
          { name: '', meta: ' ', slug: '' },
        ],
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'AI-Agent',
        no: '01',
        title: 'Agent Projects',
        tagline: 'LangChain · LangGraph',
        items: [
          {
            name: '01 DataClaw Product Document Intelligent Maintenance Agent',
            meta: 'LangChain + LangGraph + FastAPI + ChromaDB',
            slug: 'dataclaw-agent',
          },
          {
            name: '02 LLM-based Intelligent SVG Image Generation Agent',
            meta: 'PyTorch + Transformers + OpenCV + KaggleHub',
            slug: 'svg-agent-app',
          },
          { name: '03 ', meta: ' ', slug: '' },
          { name: '04 ', meta: ' ', slug: '' },
        ],
        awards: ['Kaggle Competition Experience'],
      },
      {
        id: 'DataViz',
        no: '02',
        title: 'Data Visualization',
        tagline: 'Python · Django',
        items: [
          {
            name: '01 Viral Hepatitis Disease Data Visualization Analysis',
            meta: 'Django + MySQL + ECharts + Chart.js',
            slug: 'visualize-data',
          },
          {
            name: '02 Tracing Herbal Origins — A Journey into TCM Big Data Visualization',
            meta: 'Django + MySQL + Neo4j + D3.js',
            slug: 'visualize-data',
          },
          { name: '03 ', meta: ' ', slug: '' },
          { name: '04 ', meta: ' ', slug: '' },
        ],
        awards: ['China College Student Computer Design Competition', 'National College Digital Media and Technology Competition'],
      },
      {
        id: 'GD32',
        no: '03',
        title: 'Embedded Systems',
        tagline: 'GD32 · QT',
        items: [
          {
            name: '01 Design & Development of GD32-based Smart Hospital Gown System for Pressure Injury Monitoring',
            meta: 'GD32 + QT',
            slug: 'system-design',
          },
          { name: '03 ', meta: ' ', slug: '' },
          { name: '04 ', meta: ' ', slug: '' },
          { name: '04 ', meta: ' ', slug: '' },
        ],
        awards: ['College Student Innovation Training Program'],
      },
      {
        id: 'BERT',
        no: '04',
        title: 'Academic Papers',
        tagline: 'Machine Learning · Deep Learning',
        items: [
          {
            name: '01 Investigation on Demand and Application Status of Escort Medical Services for Community Elderly in Changsha',
            slug: 'survey',
          },
          {
            name: '02 Temporal Evolution Analysis of Cognition and Attitudes in the Escort Industry Based on LDA and BERT Models',
            slug: 'lda-bert-analysis',
          },
          { name: '', meta: ' ', slug: '' },
        ],
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  'AI-Agent': `${import.meta.env.BASE_URL}works/covers/AI-Agent.png`,
  DataViz: `${import.meta.env.BASE_URL}works/covers/DataViz.png`,
  GD32: `${import.meta.env.BASE_URL}works/covers/GD32.jpg`,
  BERT: `${import.meta.env.BASE_URL}works/covers/BERT.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
