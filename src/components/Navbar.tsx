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
  isMe?: boolean
}

const navItems: NavItem[] = [
  {
    text: "ホーム",
    href: "/",
  },
  {
    text: "ソフトウェア",
    href: "/software/",
  },
  {
    text: "コンテンツ",
    href: "/content/",
  },
  {
    text: "ソーシャル",
    href: "/social/",
    isMe: true,
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
                <MuiLink color="inherit" underline="none" rel={item.isMe ? "me" : undefined}>
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
                  <MuiLink color="inherit" underline="none" rel={item.isMe ? "me" : undefined}>
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
      */}
    </>
  )
}

export default Navbar
