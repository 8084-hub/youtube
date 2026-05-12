const categories = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "Podcasts",
  "Coding",
  "News",
  "Mixes",
  "Sports",
  "Recently uploaded"
];

const videos = [
  { title: "Build a YouTube Clone UI in 30 Minutes", channel: "Frontend Hub", views: "1.2M", age: "2 weeks ago", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" },
  { title: "Lofi Beats to Focus While Coding", channel: "Code Chill", views: "845K", age: "5 days ago", thumb: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80" },
  { title: "JavaScript Tips That Save Hours", channel: "Dev Today", views: "403K", age: "1 month ago", thumb: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" },
  { title: "How Big Tech Designs Product UI", channel: "Design Ledger", views: "659K", age: "3 weeks ago", thumb: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80" },
  { title: "Minimal Desk Setup for Creators", channel: "Studio Build", views: "297K", age: "6 days ago", thumb: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80" },
  { title: "React Components You Should Know", channel: "JS Simplified", views: "1.9M", age: "4 months ago", thumb: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80" }
];

const chips = document.getElementById("chips");
const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

const renderChips = () => {
  chips.innerHTML = "";
  categories.forEach((category, index) => {
    const btn = document.createElement("button");
    btn.className = `chip ${index === 0 ? "active" : ""}`;
    btn.textContent = category;
    chips.appendChild(btn);
  });
};

const renderVideos = (filter = "") => {
  const normalized = filter.trim().toLowerCase();
  const filtered = videos.filter((video) => {
    return (
      video.title.toLowerCase().includes(normalized) ||
      video.channel.toLowerCase().includes(normalized)
    );
  });

  videoGrid.innerHTML = filtered
    .map((video) => {
      return `
      <article class="video-card">
        <img class="thumbnail" src="${video.thumb}" alt="${video.title}" />
        <div class="video-meta">
          <div class="channel-badge">${video.channel.slice(0, 2).toUpperCase()}</div>
          <div>
            <h3 class="video-title">${video.title}</h3>
            <p class="video-sub">${video.channel}</p>
            <p class="video-sub">${video.views} views • ${video.age}</p>
          </div>
        </div>
      </article>`;
    })
    .join("");
};

searchBtn.addEventListener("click", () => renderVideos(searchInput.value));
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") renderVideos(searchInput.value);
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

renderChips();
renderVideos();
