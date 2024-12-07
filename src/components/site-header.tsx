"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useRouter, usePathname } from 'next/navigation';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import { LogOut, Menu, User, Globe } from "lucide-react"
import { AnimatedSheetContent, MenuItemAnimation, MenuItem } from "./ui/animated-sheet"
import { useState } from "react"
import { useAuth } from "@/context/AuthContext"
import { logout } from "@/lib/odooService"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { user, setUser } = useAuth()
  const t = useTranslations('Navigation');
  const pathname = usePathname();

  const menuItems = [
    { href: "/services", label: t('menu.services') },
    { href: "/odoo", label: t('menu.odoo') },
    { href: "/about", label: t('menu.about') }
  ]

  const handleLogout = async () => {
    await logout("")
    setUser(null)
    router.push("/")
  }

  const handleLanguageChange = (locale: string) => {
    // Get the current path segments
    const segments = pathname.split('/');
    // Remove the current locale (first segment)
    segments.splice(1, 1);
    // Create new path with new locale
    const newPath = `/${locale}${segments.join('/')}`;
    router.push(newPath);
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/LL_visual_col.png'
            alt={t('logo.alt')}
            width={32}
            height={32}
            className='dark:invert'
          />
          <span className='font-bold'>Persevida</span>
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:block absolute left-1/2 -translate-x-1/2'>
          <NavigationMenu>
            <NavigationMenuList className='flex gap-6'>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className='text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400'>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-4'>
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-4 w-4" />
                <span className="sr-only">{t('language.select')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('language.title')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="cursor-pointer"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <div className='hidden md:flex items-center gap-2'>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='sm' className='gap-2'>
                    <User className='h-4 w-4' />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>{t('account.title')}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    {t('account.dashboard')}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className='mr-2 h-4 w-4' />
                    {t('account.logout')}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href='/login'>
                  <Button
                    variant='ghost'
                    size='sm'
                    className='text-green-600 hover:text-green-700 hover:bg-green-50'>
                    {t('auth.login')}
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button size='sm' className='bg-green-600 hover:bg-green-700 text-white'>
                    {t('cta.contact')}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>{t('menu.toggle')}</span>
              </Button>
            </SheetTrigger>
            <AnimatedSheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <SheetHeader>
                <SheetTitle>{t('menu.title')}</SheetTitle>
              </SheetHeader>
              <nav className='flex flex-col gap-4 mt-6'>
                <MenuItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}>
                  <SheetClose asChild>
                    <Link href='/' className='flex items-center space-x-2'>
                      <Image
                        src='/persevida-logo.png'
                        alt={t('logo.alt')}
                        width={24}
                        height={24}
                        className='dark:invert'
                      />
                      <span className='font-bold'>Persevida</span>
                    </Link>
                  </SheetClose>
                </MenuItem>
                <div className='flex flex-col gap-3 mt-4'>
                  {menuItems.map((item, i) => (
                    <MenuItem
                      key={item.href}
                      custom={i}
                      initial='initial'
                      animate='animate'
                      variants={MenuItemAnimation}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className='text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400'>
                          {item.label}
                        </Link>
                      </SheetClose>
                    </MenuItem>
                  ))}
                  {/* Language Options in Mobile Menu */}
                  <div className="border-t pt-4 mt-2">
                    <p className="text-sm text-muted-foreground mb-2">{t('language.title')}</p>
                    {languages.map((lang, i) => (
                      <MenuItem
                        key={lang.code}
                        custom={i + menuItems.length}
                        initial='initial'
                        animate='animate'
                        variants={MenuItemAnimation}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setOpen(false);
                        }}
                      >
                        <button className='text-sm font-medium transition-colors hover:text-green-600 dark:hover:text-green-400 flex items-center w-full text-left'>
                          <span className="mr-2">{lang.flag}</span>
                          {lang.label}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                  {user ? (
                    <>
                      <MenuItem
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}>
                        <SheetClose asChild>
                          <Link href='/dashboard'>
                            <Button variant='ghost' className='w-full justify-start gap-2'>
                              <User className='h-4 w-4' />
                              {t('account.dashboard')}
                            </Button>
                          </Link>
                        </SheetClose>
                      </MenuItem>
                      <MenuItem
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}>
                        <Button
                          variant='ghost'
                          className='w-full justify-start gap-2 text-green-600 hover:text-green-700 hover:bg-green-50/50 dark:text-green-400 dark:hover:text-green-300 dark:hover:bg-green-950/50'
                          onClick={() => {
                            handleLogout();
                            setOpen(false);
                          }}>
                          <LogOut className='h-4 w-4' />
                          {t('account.logout')}
                        </Button>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}>
                        <SheetClose asChild>
                          <Link href='/login'>
                            <Button
                              variant='ghost'
                              className='w-full justify-start text-green-600 hover:text-green-700 hover:bg-green-50'>
                              {t('auth.login')}
                            </Button>
                          </Link>
                        </SheetClose>
                      </MenuItem>
                      <MenuItem
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}>
                        <SheetClose asChild>
                          <Link href='/contact'>
                            <Button className='w-full bg-green-600 hover:bg-green-700 text-white'>
                              {t('cta.contact')}
                            </Button>
                          </Link>
                        </SheetClose>
                      </MenuItem>
                    </>
                  )}
                </div>
              </nav>
            </AnimatedSheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 