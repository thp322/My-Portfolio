import type { SVGProps } from 'react'

// 简化的单色平台图标（currentColor），契合深色画面。
// 如需官方多彩 logo，替换对应 path 即可。

export function DouyinIcon(props: SVGProps<SVGSVGElement>) {
  // 音符 + 旗 —— 抖音的标志性符号
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 3h3a5 5 0 0 0 4.6 4.98V11A8 8 0 0 1 16 9.6V15a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.12A3 3 0 1 0 13 15V3z" />
    </svg>
  )
}

export function BilibiliIcon(props: SVGProps<SVGSVGElement>) {
  // 电视机 + 两根天线
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7 3l3 3M17 3l-3 3" />
      <rect x="3" y="6" width="18" height="13" rx="3.5" />
      <path d="M9 11v2M15 11v2" />
    </svg>
  )
}

export function XiaohongshuIcon(props: SVGProps<SVGSVGElement>) {
  // 圆角方块 + 爱心
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M12 16.2c-2.1-1.5-4-3-4-5.1A2.1 2.1 0 0 1 12 9.9a2.1 2.1 0 0 1 4 1.2c0 2.1-1.9 3.6-4 5.1z" fill="currentColor" />
    </svg>
  )
}

export function BlogIcon(props: SVGProps<SVGSVGElement>) {
  // 通用博客/文档图标：方块 + 文本行
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="7" y1="9" x2="17" y2="9" />
      <line x1="7" y1="13" x2="17" y2="13" />
      <line x1="7" y1="17" x2="13" y2="17" />
    </svg>
  )
}

export function CsdnIcon(props: SVGProps<SVGSVGElement>) {
  // 大写字母 C
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <text x="12" y="19" textAnchor="middle" fontSize="20" fontWeight="bold" fill="currentColor" fontFamily="Arial, sans-serif">C</text>
    </svg>
  )
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  // GitHub 官方 Octocat 简化版
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.14c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export const SOCIAL_ICONS = {
  douyin: DouyinIcon,
  bilibili: BilibiliIcon,
  xiaohongshu: XiaohongshuIcon,
  blog: BlogIcon,
  csdn: CsdnIcon,
  github: GithubIcon,
}
