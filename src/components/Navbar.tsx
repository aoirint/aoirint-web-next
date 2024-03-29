import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu'
import { Menu, MenuItem } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MuiLink from '@mui/material/Link'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { miscExternalLinks, miscInternalLinks, miscStatusLinks } from '@/models/misc_links'
import { socialAccounts } from '@/models/social_accounts'

interface NavItem {
  text: string
  href: string
  isMe?: boolean
}

const leftNavItems: Array<NavItem> = [
  {
    text: 'ホーム',
    href: '/',
  },
  {
    text: 'ソフトウェア',
    href: '/software/',
  },
  {
    text: 'コンテンツ',
    href: '/content/',
  },
]

const leftMobileNavItems: Array<NavItem> = [
  {
    text: 'その他',
    href: '/misc/',
  },
  {
    text: 'ソーシャル',
    href: '/social/',
  },
]

const rightNavItems: Array<NavItem> = [
  {
    text: 'Blog',
    href: 'https://blog.aoirint.com/',
    isMe: true,
  },
  {
    text: 'GitHub',
    href: 'https://github.com/aoirint',
    isMe: true,
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/aoirint',
    isMe: true,
  },
  {
    text: 'Fediverse',
    href: 'https://mstdn.aoirint.com/@aoirint',
    isMe: true,
  },
]

function NavBarLinkItem({ navItem }: { navItem: NavItem }): JSX.Element {
  return (
    <>
      <Button
        key={navItem.text}
        href={navItem.href}
        rel={navItem.isMe ? 'me' : undefined}
        LinkComponent={NextLink}
        sx={{
          textTransform: 'none',
          color: '#fff',
        }}
      >
        {navItem.text}
      </Button>
    </>
  )
}

function NavDrawerLinkItem({ navItem }: { navItem: NavItem }): JSX.Element {
  return (
    <>
      <ListItemButton
        key={navItem.text}
        href={navItem.href}
        rel={navItem.isMe ? 'me' : undefined}
        LinkComponent={NextLink}
        sx={{ textAlign: 'center' }}
      >
        <ListItemText primary={navItem.text} />
      </ListItemButton>
    </>
  )
}

export default function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false)
  const [socialMenuAnchorElement, setSocialMenuAnchorElement] = React.useState<HTMLElement | null>(
    null,
  )
  const socialMenuOpen = Boolean(socialMenuAnchorElement)

  const [miscMenuAnchorElement, setMiscMenuAnchorElement] = React.useState<HTMLElement | null>(null)
  const miscMenuOpen = Boolean(miscMenuAnchorElement)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleSocialMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSocialMenuAnchorElement(event.currentTarget)
  }

  const handleSocialMenuClose = () => {
    setSocialMenuAnchorElement(null)
  }

  const handleMiscMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMiscMenuAnchorElement(event.currentTarget)
  }

  const handleMiscMenuClose = () => {
    setMiscMenuAnchorElement(null)
  }

  const drawerWidth = 240

  const navDrawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        aoirint
      </Typography>
      <Divider />
      <List>
        {leftNavItems.map((navItem, navItemIndex) => (
          <NavDrawerLinkItem key={navItemIndex} navItem={navItem} />
        ))}
        {leftMobileNavItems.map((navItem, navItemIndex) => (
          <NavDrawerLinkItem key={navItemIndex} navItem={navItem} />
        ))}
      </List>
      <Divider />
      <List>
        {rightNavItems.map((navItem, navItemIndex) => (
          <NavDrawerLinkItem key={navItemIndex} navItem={navItem} />
        ))}
      </List>
    </Box>
  )

  const miscMenu = (
    <Menu anchorEl={miscMenuAnchorElement} open={miscMenuOpen} onClose={handleMiscMenuClose}>
      {miscInternalLinks.map((miscLink, miscLinkIndex) => (
        <MenuItem
          key={miscLinkIndex}
          component={NextLink}
          href={miscLink.href}
          onClick={handleMiscMenuClose}
          disableRipple
        >
          {miscLink.text}
        </MenuItem>
      ))}
      <Divider />
      {miscStatusLinks.map((miscLink, miscLinkIndex) => (
        <MenuItem
          key={miscLinkIndex}
          component={NextLink}
          href={miscLink.href}
          onClick={handleMiscMenuClose}
          disableRipple
        >
          {miscLink.text}
        </MenuItem>
      ))}
      <Divider />
      {miscExternalLinks.map((miscLink, miscLinkIndex) => (
        <MenuItem
          key={miscLinkIndex}
          component={NextLink}
          href={miscLink.href}
          onClick={handleMiscMenuClose}
          disableRipple
        >
          {miscLink.text}
        </MenuItem>
      ))}
    </Menu>
  )

  const socialMenu = (
    <Menu anchorEl={socialMenuAnchorElement} open={socialMenuOpen} onClose={handleSocialMenuClose}>
      {socialAccounts.map((socialAccount, socialAccountIndex) => (
        <MenuItem
          key={socialAccountIndex}
          component={NextLink}
          href={socialAccount.href}
          rel='me'
          onClick={handleSocialMenuClose}
          disableRipple
        >
          {socialAccount.service} {socialAccount.identifier}
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NextLink href='/' passHref legacyBehavior>
              <MuiLink color='inherit' underline='none'>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image src='/images/icon.png' alt='Logo image' width='28' height='28' />
                  <Typography variant='h6' component='div' sx={{ ml: '0.5rem' }}>
                    aoirint
                  </Typography>
                </Box>
              </MuiLink>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box sx={{ mx: 1 }}>
                {leftNavItems.map((navItem, navItemIndex) => (
                  <NavBarLinkItem key={navItemIndex} navItem={navItem} />
                ))}
                <Button
                  onClick={handleMiscMenuOpen}
                  sx={{
                    textTransform: 'none',
                    color: '#fff',
                  }}
                >
                  その他
                  <ArrowDropDownIcon />
                </Button>
                <Button
                  onClick={handleSocialMenuOpen}
                  sx={{
                    textTransform: 'none',
                    color: '#fff',
                  }}
                >
                  ソーシャル
                  <ArrowDropDownIcon />
                </Button>
              </Box>
              <Box>
                {rightNavItems.map((navItem, navItemIndex) => (
                  <NavBarLinkItem key={navItemIndex} navItem={navItem} />
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {navDrawerContent}
        </Drawer>
      </nav>
      {miscMenu}
      {socialMenu}
    </>
  )
}
