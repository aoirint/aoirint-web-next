export interface MiscLink {
  text: string
  href: string
}

export const miscInternalLinks: MiscLink[] = [
  {
    text: 'おしらせ',
    href: '/info/',
  },
  {
    text: 'サービス',
    href: '/service/',
  },
  {
    text: '作品ギャラリー',
    href: '/activity/',
  },
  {
    text: 'プロフィール',
    href: '/profile/',
  },
  {
    text: 'リンク集',
    href: '/links/',
  },
]

export const miscStatusLinks: MiscLink[] = [
  {
    text: 'サービスの稼働状況',
    href: 'https://status.aoirint.com',
  },
  {
    text: 'Minecraftサーバーの稼働状況',
    href: '/minecraft/',
  },
]

export const miscExternalLinks: MiscLink[] = [
  {
    text: 'GitHub上の活動を検索',
    href: 'https://github.com/pulls?q=involves%3Aaoirint+-user%3Aaoirint+sort%3Aupdated-desc',
  },
  {
    text: 'Scrapbox',
    href: 'https://scrapbox.io/aoirint/',
  },
  {
    text: 'Wiki',
    href: 'https://wiki.aoirint.com/',
  },
]
