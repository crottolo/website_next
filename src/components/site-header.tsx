"use client"

import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
// import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import { LogOut, Menu, User } from "lucide-react"
import { AnimatedSheetContent, MenuItemAnimation, MenuItem } from "./ui/animated-sheet"
import { useState } from "react"
import { useRouter } from "next/navigation"
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

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { user, setUser } = useAuth()

  const menuItems = [
    { href: "/services", label: "Services" },
    { href: "/odoo", label: "Odoo" },
    { href: "/about", label: "About" }
  ]

  const handleLogout = async () => {
    await logout("")
    setUser(null)
    router.push("/")
  }

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/LL_visual_col.png'
            alt='Persevida Logo'
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
          {/* <ThemeToggle /> */}
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
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className='mr-2 h-4 w-4' />
                    Logout
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
                    Login
                  </Button>
                </Link>
                <Link href='/contact'>
                  <Button size='sm' className='bg-green-600 hover:bg-green-700 text-white'>
                    Contact Us
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
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <AnimatedSheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
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
                        alt='Persevida Logo'
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
                              Dashboard
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
                          className='w-full justify-start gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 dark:text-green-400 dark:hover:text-green-300 dark:hover:bg-green-950'
                          onClick={() => {
                            handleLogout();
                            setOpen(false);
                          }}>
                          <LogOut className='h-4 w-4' />
                          Logout
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
                              Login
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
                              Contact Us
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