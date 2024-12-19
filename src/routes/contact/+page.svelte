<script lang="ts">
  import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-svelte';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';

  let form = {
    name: '',
    email: '',
    message: ''
  };

  let isSubmitting = false;

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    isSubmitting = true;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      form = { name: '', email: '', message: '' };
    } finally {
      isSubmitting = false;
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 80 4151 3947'],
      link: 'tel:+918041513947'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@trisara.com'],
      link: 'mailto:support@trisara.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['#45, Embassy Square', '4th Main, Chamrajpet','Bengaluru - 560 018']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sun: Closed']
    }
  ];
</script>

<div class="bg-orange-50">
  <!-- Hero Section -->
  <div class="relative  py-16 sm:py-24">
    <div class="absolute inset-0">
<!--      <img-->
<!--              src="/images/our-story-2.jpg"-->
<!--              alt="Contact Us"-->
<!--              class="h-full w-full object-cover opacity-30"-->
<!--      />-->
    </div>
    <div class="relative">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg ">
            Have questions about our products or services? We're here to help you find the perfect Thai
            culinary experience.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <div class="relative bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <!-- Contact Info Grid -->
      <div class="mb-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {#each contactInfo as info}
          <div class="group relative rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl">
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white">
              <svelte:component this={info.icon} class="h-6 w-6" />
            </div>
            <h3 class="mt-4 text-lg font-semibold text-gray-900">{info.title}</h3>
            {#each info.details as detail}
              {#if info.link}
                <a
                        href={info.link}
                        class="block  transition-colors hover:text-orange-500"
                >
                  {detail}
                </a>
              {:else}
                <p class="">{detail}</p>
              {/if}
            {/each}
          </div>
        {/each}
      </div>

      <div class="grid gap-8 lg:grid-cols-2">
        <!-- Contact Form -->
        <div class="relative rounded-2xl bg-white p-8 shadow-xl">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400" />
          <div class="relative rounded-xl bg-white p-8">
            <h2 class="text-2xl font-bold text-gray-900">Send us a Message</h2>
            <p class="mt-2 ">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form on:submit={handleSubmit} class="mt-8 space-y-6">
              <div class="space-y-2">
                <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
                <Input
                        type="text"
                        id="name"
                        bind:value={form.name}
                        required
                        placeholder="Your name"
                        class="w-full"
                />
              </div>

              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                <Input
                        type="email"
                        id="email"
                        bind:value={form.email}
                        required
                        placeholder="your@email.com"
                        class="w-full"
                />
              </div>

              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
                <Textarea
                        id="message"
                        bind:value={form.message}
                        required
                        placeholder="How can we help you?"
                        rows="4"
                        class="min-h-[120px] w-full"
                />
              </div>

              <Button
                      type="submit"
                      class="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
              >
                {#if isSubmitting}
                  <div class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Sending...
                {:else}
                  Send Message
                  <ArrowRight class="ml-2 h-4 w-4" />
                {/if}
              </Button>
            </form>
          </div>
        </div>

        <!-- Map Section -->
        <div class="relative overflow-hidden rounded-2xl bg-white shadow-xl lg:h-auto">
          <div class="absolute inset-0">
            <img
                    src="/images/store.JPG"
                    alt="Location map"
                    class="h-full w-full object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <h3 class="text-xl font-semibold text-white">Visit Our Store</h3>
            <p class="mt-2 text-white/90">
              Experience our range of products at our store.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>