<script>
    import { MapPin, Mail, Phone } from 'lucide-svelte';
    import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-svelte';
  </script>
  
  <footer class="my-3 border">
    <div class="mx-auto px-4 flex flex-col md:flex-row relative">
      <!-- Contact Section -->
      <div class="space-y-4 flex-1 py-16 bg-orange-50 justify-center">
        <div class="flex mt-10 items-center space-x-2">
          <MapPin class="w-5 h-5 text-orange-500" />
          <span class="text-sm">#45, Embassy Square, 4th Main, Chamarajpet, Bangalore, 560018</span>
        </div>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <Mail class="w-5 h-5 text-orange-500" />
            <a href="mailto:care@trisara.com" class="text-gray-600 hover:text-orange-500">
              care@trisara.com
            </a>
          </div>
          <a href="mailto:corporate@trisara.com" class="text-gray-600 hover:text-orange-500 ml-7">
            corporate@trisara.com
          </a>
        </div>
        
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <Phone class="w-5 h-5 text-orange-500" />
            <a href="tel:+919353258820" class="text-gray-600 hover:text-orange-500">+91 93532 58820</a>
          </div>
        </div>
      </div>
  
      <!-- Vertical Divider -->
      <div class="hidden md:block w-px bg-gray-200 h-full"></div>
  
      <!-- About Section -->
      <div class="flex-1 text-center py-16">
        <h3 class="font-bold text-xl text-orange-500 mb-4">About us</h3>
        <ul class="space-y-3">
          <li><a href="/our-story" class="text-gray-600 hover:text-orange-500">Our story</a></li>
          <li><a href="/press" class="text-gray-600 hover:text-orange-500">All Products</a></li>
          <li><a href="/contact" class="text-gray-600 hover:text-orange-500">Contact us</a></li>
        </ul>
        <div class="flex space-x-4 justify-center mt-4">
            <!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
      <Facebook size={20} />
    </a> -->
            <!-- <a
                href="https://x.com/liw_symposium"
                class="text-orange-500 transition-colors hover:text-brand-gold"
            >
                <Twitter size={20} />
            </a> -->
            <a
                href="https://www.instagram.com/leadershipinnovationworld"
                class="text-orange-500 transition-colors hover:text-brand-gold"
            >
                <Instagram size={20} />
            </a>
            <!-- <a href="#" class="text-brand-burgundy hover:text-brand-gold transition-colors">
      <Linkedin size={20} />
    </a> -->
        </div>
      </div>
  
      <!-- Vertical Divider -->
      <div class="hidden md:block w-px bg-gray-200 h-full"></div>
  
      <!-- Quick Links -->
      <div class="flex-1 text-center py-16 border-x">
        <h3 class="font-bold text-xl text-orange-500 mb-4">Quick links</h3>
        <ul class="space-y-3">
            <li><a href="/cookbooks" class=" hover:text-orange-500">Cookbooks</a></li>
            <li><a href="/products" class=" hover:text-orange-500">All Products</a></li>
            <li><a href="/privacy" class=" hover:text-orange-500">Privacy policy</a></li>
            <li><a href="/terms" class=" hover:text-orange-500">Terms & Conditions</a></li>
        </ul>
      </div>
  
      <!-- Vertical Divider -->
      <div class="hidden md:block w-px bg-gray-200 h-full"></div>
  
      <!-- Logo Section -->
      <div class="flex-1 flex flex-col items-center py-16">
        <img 
          src="images/trisara-logo.png" 
          alt="Trisara Logo" 
          class="h-32 mt-5 w-auto mb-auto"
        />
        <p class="text-gray-500 text-sm mt-8">
          Arvind Industries All Rights Reserved © 2024
        </p>
      </div>
    </div>
  </footer>