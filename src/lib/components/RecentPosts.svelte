<script lang="ts">
  const recentPosts = [
    {
      title: "Deumanto Sollicitudin Delo Milancelos",
      author: "Halo Themes",
      date: "Jul 18, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius...",
      image: "https://new-ella-demo-11.myshopify.com/cdn/shop/articles/blog-fur-3_560x.jpg?v=1658202656"
    },
    {
      title: "Loremous Comodous: Trending",
      author: "Halo Themes",
      date: "Jul 18, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius...",
      image: "https://new-ella-demo-11.myshopify.com/cdn/shop/articles/blog-fur-2_560x.jpg?v=1658202563"
    },
    {
      title: "Commodo Muso Magna Cosmopolis",
      author: "Halo Themes",
      date: "Jul 18, 2022",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius...",
      image: "https://new-ella-demo-11.myshopify.com/cdn/shop/articles/blog-fur-1_560x.jpg?v=1658202489"
    }
  ];
</script>

<section class="py-12 bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold">Recent Posts</h2>
      <a href="/blog" class="text-orange-500 hover:underline">Read More</a>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each recentPosts as post}
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <div class="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              class="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
            <p class="text-sm text-gray-600 mb-4">by {post.author} on {post.date}</p>
            <p class="text-gray-700 mb-4">{post.excerpt}</p>
            <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} class="text-orange-500 hover:underline">
              View Details
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
