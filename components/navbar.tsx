"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">RCS</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-foreground/60 hover:text-foreground text-sm font-medium">
                  Home
                </Link>
                <Link href="#services" className="text-foreground/60 hover:text-foreground text-sm font-medium">
                  Services
                </Link>
                <Link href="#about" className="text-foreground/60 hover:text-foreground text-sm font-medium">
                  About
                </Link>
                <Link href="#contact" className="text-foreground/60 hover:text-foreground text-sm font-medium">
                  Contact
                </Link>
                <ModeToggle />
                <Button onClick={() => setShowQuoteModal(true)}>Get Quote</Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 ml-4 text-foreground"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground/60 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-foreground/60 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-foreground/60 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-foreground/60 hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full" onClick={() => setShowQuoteModal(true)}>
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Dialog open={showQuoteModal} onOpenChange={setShowQuoteModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Get a Quote</DialogTitle>
            <DialogDescription className="space-y-4 pt-4">
              <p>
                For detailed quotes, please contact our customer service team at:
              </p>
              <div className="flex items-center justify-center space-x-2 text-lg font-semibold text-primary">
                <Phone className="h-5 w-5" />
                <span>+91 825-253-0306</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team will assist you with a customized quote based on your specific requirements.
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}