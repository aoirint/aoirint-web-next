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

const leftNavItems: NavItem[] = [
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
  {
    text: "その他",
    href: "/misc/",
  },
]

const rightNavItems: NavItem[] = [
  {
    text: "Blog",
    href: "https://blog.aoirint.com/",
    isMe: true,
  },
  {
    text: "GitHub",
    href: "https://github.com/aoirint",
    isMe: true,
  },
  {
    text: "Twitter",
    href: "https://twitter.com/aoirint",
    isMe: true,
  },
  {
    text: "Fediverse",
    href: "https://mstdn.aoirint.com/@aoirint",
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
        aoirint
      </Typography>
      <Divider />
      <List>
        {leftNavItems.map((item) => (
          <ListItemButton
            key={item.text}
            href={item.href}
            rel={item.isMe ? "me" : undefined}
            LinkComponent={NextLink}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {rightNavItems.map((item) => (
          <ListItemButton
            key={item.text}
            href={item.href}
            rel={item.isMe ? "me" : undefined}
            LinkComponent={NextLink}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
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
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Box sx={{ mx: 1 }}>
                {leftNavItems.map((item) => (
                  <Button
                    key={item.text}
                    href={item.href}
                    rel={item.isMe ? "me" : undefined}
                    LinkComponent={NextLink}
                    sx={{
                      textTransform: 'none',
                      color: '#fff',
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
              <Box>
                {rightNavItems.map((item) => (
                  <Button
                    key={item.text}
                    href={item.href}
                    rel={item.isMe ? "me" : undefined}
                    LinkComponent={NextLink}
                    sx={{
                      textTransform: 'none',
                      color: '#fff',
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            </Box>
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
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

export default Navbar
