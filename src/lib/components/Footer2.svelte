<script lang="ts">
  import { Instagram, Facebook, Twitter, Mail } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import type { ComponentProps } from 'svelte';

  interface FooterLink {
    label: string;
    href: string;
  }

  interface SocialLink extends FooterLink {
    icon: ComponentProps<any>;
  }

  const quickLinks: FooterLink[] = [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Products', href: '/products' },
    { label: 'Cookbooks', href: '/cookbooks' },
    { label: 'Contact', href: '/contact' }
  ];

  const customerService: FooterLink[] = [
    { label: 'FAQ', href: '/faq' },
    { label: 'Terms of Service', href: '/track-order' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Contact Us', href: '/contact' }
  ];

  const socialLinks: SocialLink[] = [
    { label: 'Instagram', href: 'https://instagram.com/', icon: Instagram },
    { label: 'Email', href: 'mailto:contact@trisara.com', icon: Mail }
  ];

  let email = '';

  function handleSubscribe(event: SubmitEvent) {
    event.preventDefault();
    if (email.trim()) {
      // Handle newsletter subscription
      console.log('Subscribe:', email);
      email = '';
    }
  }
</script>

<footer class="bg-gray-50 mt-5">
  <div class="container mx-auto px-4 py-8 md:px-6 md:py-12 lg:px-8">
    <!-- Top Section with Newsletter -->
    <div class="mb-8 md:mb-12">
      <div class="mx-auto max-w-md text-center">
        <h3 class="mb-3 text-lg font-semibold text-gray-900 md:mb-4">Subscribe to Our Newsletter</h3>
        <p class="mb-4 text-sm md:text-base">
          Stay updated with our latest products, recipes, and cooking tips.
        </p>
        <form on:submit={handleSubscribe} class="flex flex-col gap-3 sm:flex-row sm:gap-2">
          <Input
                  type="email"
                  placeholder="Enter your email"
                  class="flex-grow"
                  bind:value={email}
                  required
          />
          <Button
                  type="submit"
                  variant="default"
                  class="w-full bg-orange-500 hover:bg-orange-600 sm:w-auto"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>

    <!-- Main Footer Content -->
    <div class="grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 md:pt-12 lg:grid-cols-4">
      <!-- Logo and Social Links Section -->
      <div class="order-1 sm:col-span-2 lg:col-span-1">
        <div class="flex flex-col items-center text-center sm:items-start sm:text-left">
          <img src="/images/trisara-logo.png" alt="Trisara" class="mb-4 h-16 w-16 rounded-full" />
          <p class="mb-4 max-w-md text-sm  md:text-base">
            Affordable Kitchenware and Cookware for Home Cooks and Professional Chefs.
          </p>
          <div class="flex space-x-4">
            {#each socialLinks as link}
              <a
                      href={link.href}
                      class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white  shadow-sm transition-colors hover:bg-orange-500 hover:text-white md:h-10 md:w-10"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
              >
                <svelte:component this={link.icon} class="h-4 w-4 md:h-5 md:w-5" />
              </a>
            {/each}
          </div>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="order-2">
        <h3 class="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Quick Links</h3>
        <ul class="space-y-2 text-sm md:text-base">
          {#each quickLinks as link}
            <li>
              <a
                      href={link.href}
                      class=" transition-colors hover:text-orange-500"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Customer Service -->
      <div class="order-3">
        <h3 class="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Customer Service</h3>
        <ul class="space-y-2 text-sm md:text-base">
          {#each customerService as link}
            <li>
              <a
                      href={link.href}
                      class=" transition-colors hover:text-orange-500"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="order-4">
        <h3 class="mb-3 text-base font-semibold text-gray-900 md:mb-4 md:text-lg">Contact Us</h3>
        <address class="not-italic text-sm md:text-base">
          <p class="mb-2 ">#45, Embassy Square</p>
          <p class="mb-2 ">4th Main, Chamrajpet</p>
          <p class="mb-2 ">Bengaluru - 560 018</p>
          <p class="mb-2">
            <a href="tel:+918041513947" class=" hover:text-orange-500">
              +91 80 4151 3947
            </a>
          </p>
          <p>
            <a href="mailto:support@trisara.in" class=" hover:text-orange-500">
              support@trisara.in
            </a>
          </p>
        </address>
      </div>
    </div>

    <!-- Bottom Section with Copyright -->
    <div class="mt-8 border-t border-gray-200 pt-6 text-center md:mt-12 md:pt-8">
      <p class="text-xs  md:text-sm">
        © {new Date().getFullYear()} Trisara. All rights reserved.
      </p>
      <p class="mt-2 space-x-2 text-xs  md:text-sm">
        <a href="/terms" class="hover:text-orange-500">Terms of Service</a>
        <span>•</span>
        <a href="/privacy" class="hover:text-orange-500">Privacy Policy</a>
        <span>•</span>
        <a href="/sitemap.xml" class="hover:text-orange-500">Sitemap</a>
      </p>
    </div>
  </div>
</footer>