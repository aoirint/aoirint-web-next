import Image from 'next/image'
import NextLink  from 'next/link'
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import MuiLink from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

interface NavItem {
  text: string
  href: string
}

const navItems: NavItem[] = [
  {
    text: "ホーム",
    href: "/",
  },
  {
    text: "ソフトウェア",
    href: "/software",
  },
  {
    text: "コンテンツ",
    href: "/content",
  },
  {
    text: "その他",
    href: "/misc",
  },
]

const Navbar: React.FC<{}> = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawerWidth = 240;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NextLink href={item.href} passHref legacyBehavior>
                <MuiLink color="inherit" underline="none">
                  <ListItemText primary={item.text} />
                </MuiLink>
              </NextLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <NextLink href="/" passHref legacyBehavior>
              <MuiLink color="inherit" underline="none">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/images/icon.png"
                    alt="Logo image"
                    width="28"
                    height="28"
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ ml: '0.5rem' }}
                  >
                    aoirint
                  </Typography>
                </Box>
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.text} sx={{ color: '#fff' }}>
                <NextLink href={item.href} passHref legacyBehavior>
                  <MuiLink color="inherit" underline="none">
                    {item.text}
                  </MuiLink>
                </NextLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/*
      <section style={{ paddingTop: '3.25rem' }}>
        <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" href="/">
              <Image src='/images/icon.png' alt="Logo image" width="28" height="28" />
              <div className='has-text-weight-bold ml-2'>
                aoirint
              </div>
            </Link>

            <button role="button" className={`navbar-burger ${active ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasic" onClick={() => {
              setActive(!active)
            }}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="navbarBasic" className={`navbar-menu ${active ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link className="navbar-item" href="/">
                ホーム
              </Link>

              <Link className="navbar-item" href="/software/">
                ソフトウェア
              </Link>

              <Link className="navbar-item" href="/content/">
                コンテンツ
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  その他
                </a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" href="/info/">
                    おしらせ
                  </Link>

                  <Link className="navbar-item" href="/service/">
                    サービス
                  </Link>

                  <Link className="navbar-item" href="/activity/">
                    作品ギャラリー
                  </Link>

                  <Link className="navbar-item" href="/profile/">
                    プロフィール
                  </Link>

                  <Link className="navbar-item" href="/links/">
                    リンク集
                  </Link>

                  <hr className='navbar-divider' />

                  <a className="navbar-item" href="https://status.aoirint.com">
                    サービスの稼働状況
                  </a>

                  <Link className="navbar-item" href="/minecraft/">
                    Minecraftサーバーの稼働状況
                  </Link>

                  <hr className='navbar-divider' />

                  <a className="navbar-item" href="https://scrapbox.io/aoirint/">
                    Scrapbox
                  </a>

                  <a className="navbar-item" href="https://wiki.aoirint.com/">
                    Wiki
                  </a>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  ソーシャル
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="https://github.com/pulls?q=involves%3Aaoirint+-user%3Aaoirint+sort%3Aupdated-desc">
                    GitHub上の活動を検索
                  </a>

                  <a className="navbar-item" rel="me" href="https://github.com/aoirint">
                    GitHub @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://qiita.com/aoirint">
                    Qiita @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://twitter.com/aoirint">
                    Twitter @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://mstdn.aoirint.com/@aoirint">
                    Mastodon @aoirint@mstdn.aoirint.com
                  </a>

                  <a className="navbar-item" rel="me" href="https://misskey.io/@aoirint">
                    Misskey.io @aoirint@misskey.io
                  </a>

                  <a className="navbar-item" rel="me" href="https://bsky.app/profile/aoirint.bsky.social">
                    Bluesky aoirint.bsky.social
                  </a>

                  <a className="navbar-item" rel="me" href="https://www.threads.net/@aoirint">
                    Threads @aoirint@threads.net
                  </a>

                  <a className="navbar-item" rel="me" href="https://keybase.io/aoirint">
                    Keybase @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://atcoder.jp/users/aoirint">
                    AtCoder @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://pypi.org/user/aoirint/">
                    PyPI @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://hub.docker.com/u/aoirint">
                    Docker Hub @aoirint
                  </a>

                  <a className="navbar-item" rel="me" href="https://pub.dev/publishers/aoirint.com">
                    pub.dev aoirint.com (未使用)
                  </a>

                  <a className="navbar-item" rel="me" href="https://zenn.dev/aoirint">
                    Zenn @aoirint (未使用)
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <a className="navbar-item" href="https://blog.aoirint.com/">
                Blog
              </a>
              <a className="navbar-item" rel="me" href="https://github.com/aoirint">
                GitHub
              </a>
              <a className="navbar-item" rel="me" href="https://twitter.com/aoirint">
                Twitter
              </a>
              <a className="navbar-item" rel="me" href="https://mstdn.aoirint.com/@aoirint">
                Fediverse
              </a>
            </div>
          </div>
        </nav>
      </section>
      */}
    </>
  )
}

export default Navbar
