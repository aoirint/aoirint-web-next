export interface SocialAccount {
  service: string
  identifier: string
  href: string
}

export const socialAccounts: Array<SocialAccount> = [
  {
    service: 'GitHub',
    identifier: '@aoirint',
    href: 'https://github.com/aoirint',
  },
  {
    service: 'Qiita',
    identifier: '@aoirint',
    href: 'https://qiita.com/aoirint',
  },
  {
    service: 'Twitter',
    identifier: '@aoirint',
    href: 'https://twitter.com/aoirint',
  },
  {
    service: 'Mastodon',
    identifier: '@aoirint@mstdn.aoirint.com',
    href: 'https://mstdn.aoirint.com/@aoirint',
  },
  {
    service: 'Misskey.io',
    identifier: '@aoirint@misskey.io',
    href: 'https://misskey.io/@aoirint',
  },
  {
    service: 'Bluesky',
    identifier: 'aoirint.bsky.social',
    href: 'https://bsky.app/profile/aoirint.bsky.social',
  },
  {
    service: 'Threads',
    identifier: '@aoirint@threads.net',
    href: 'https://www.threads.net/@aoirint',
  },
  {
    service: 'Keybase',
    identifier: '@aoirint',
    href: 'https://keybase.io/aoirint',
  },
  {
    service: 'AtCoder',
    identifier: '@aoirint',
    href: 'https://atcoder.jp/users/aoirint',
  },
  {
    service: 'PyPI',
    identifier: '@aoirint',
    href: 'https://pypi.org/user/aoirint/',
  },
  {
    service: 'Docker Hub',
    identifier: '@aoirint',
    href: 'https://hub.docker.com/u/aoirint',
  },
  {
    service: 'pub.dev',
    identifier: 'aoirint.com',
    href: 'https://pub.dev/publishers/aoirint.com',
  },
  {
    service: 'Zenn',
    identifier: '@aoirint',
    href: 'https://zenn.dev/aoirint',
  },
]
