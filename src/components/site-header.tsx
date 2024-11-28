"use client"

import Link from "next/link"
import Image from "next/image"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "./ui/sheet"
import { Menu } from "lucide-react"
import { AnimatedSheetContent, MenuItemAnimation, MenuItem } from "./ui/animated-sheet"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const menuItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ]

  const handleNavigation = (href: string) => {
    setOpen(false)
    router.push(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={32} 
            height={32}
            className="dark:invert"
          />
          <span className="font-bold text-xl hidden sm:inline-block">Persevida</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium transition-colors hover:text-primary">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <AnimatedSheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <MenuItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <SheetClose asChild>
                    <Link
                      href="/"
                      className="flex items-center space-x-2"
                    >
                      <Image 
                        src="/logo.svg" 
                        alt="Logo" 
                        width={24} 
                        height={24}
                        className="dark:invert"
                      />
                      <span className="font-bold">YourBrand</span>
                    </Link>
                  </SheetClose>
                </MenuItem>
                <div className="flex flex-col gap-3 mt-4">
                  {menuItems.map((item, i) => (
                    <MenuItem
                      key={item.href}
                      custom={i}
                      initial="initial"
                      animate="animate"
                      variants={MenuItemAnimation}
                    >
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="text-sm font-medium transition-colors hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </MenuItem>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <MenuItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <SheetClose asChild>
                      <Link href="/login">
                        <Button variant="ghost" className="w-full justify-start">
                          Login
                        </Button>
                      </Link>
                    </SheetClose>
                  </MenuItem>
                  <MenuItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <SheetClose asChild>
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </SheetClose>
                  </MenuItem>
                </div>
              </nav>
            </AnimatedSheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
} 