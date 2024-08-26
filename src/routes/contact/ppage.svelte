<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Textarea } from "$lib/components/ui/textarea";
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";

  let name = '';
  let email = '';
  let subject = '';
  let message = '';

  function handleSubmit() {
    // Handle form submission logic here
    console.log({ name, email, subject, message });
    // You can add API calls or other processing here
  }
</script>

<div class="container mx-auto px-4 py-8">
  <Card class="max-w-2xl mx-auto">
    <CardHeader>
      <CardTitle class="text-2xl font-bold text-center">Contact Us</CardTitle>
    </CardHeader>
    <CardContent>
      <form on:submit|preventDefault={handleSubmit} class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <Input type="text" id="name" bind:value={name} required />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <Input type="email" id="email" bind:value={email} required />
        </div>
        <div>
          <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
          <Input type="text" id="subject" bind:value={subject} required />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <Textarea id="message" bind:value={message} rows="4" required />
        </div>
        <Button type="submit" class="w-full">Send Message</Button>
      </form>
    </CardContent>
  </Card>
</div>
