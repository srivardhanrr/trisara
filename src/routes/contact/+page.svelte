<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import {Textarea} from "$lib/components/ui/textarea";
</script>

<svelte:head>
	<title>Trisara | Contact Us</title>
	<meta
		name="description"
		content="{product.description}"
	/>
</svelte:head>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
  <div class="flex items-center justify-center py-12">
    <div class="mx-auto grid w-[350px] gap-6">
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Contact Us</h1>
      </div>
      <div class="grid gap-4">
        <div class="grid gap-2">
          <Label for="name">Name</Label>
          <Input id="name" type="text" placeholder="trisara" required />
        </div>
        <div class="grid gap-2">
          <Label for="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div class="grid gap-2">
          <Label for="subject">Subject</Label>
          <Input id="subject" type="text" placeholder="" required />
        </div>
        <div class="grid gap-2">
          <Label for="message">Message</Label>
          <Textarea id="message" required />
        </div>
        <Button type="submit" class="w-full">Send Message</Button>
      </div>
    </div>
  </div>
  <div class="bg-muted hidden lg:block">
    <img
      src="/images/hero1.png"
      alt="placeholder"
      width="1920"
      height="1080"
      class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
    />
  </div>
</div>
