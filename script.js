//Navya Wor
const CONFIG = {
  NEWS_API_KEY: '8c71ff5b60a3e14d70d01a0b653b44e4',
  NEWS_API_URL: 'https://gnews.io/api/v4/search?q=artificial+intelligence&lang=en&topic=technology&token=',
  ANIMATION_DELAY: 150,
  STAGGER_DELAY: 200,
  PARTICLE_COUNT: 50
};

// Enhanced AI Tools Data with More Categories
const aiTools = [
  // Content Writing & Text Generation
  {
    name: "ChatGPT",
    emoji: "✍️",
    category: "Content Writing",
    description: "Advanced conversational AI for writing, editing, coding, and creative tasks.",
    url: "https://chat.openai.com",
    color: "from-green-400 to-emerald-600",
    categoryClass: "category-writing"
  },
  {
    name: "Claude AI",
    emoji: "🧠",
    category: "Content Writing",
    description: "Helpful, harmless, and honest AI assistant by Anthropic for complex reasoning.",
    url: "https://claude.ai",
    color: "from-orange-400 to-red-600",
    categoryClass: "category-writing"
  },
  {
    name: "Gemini",
    emoji: "🔮",
    category: "Content Writing",
    description: "Google's multimodal AI assistant for text, images, and code generation.",
    url: "https://gemini.google.com",
    color: "from-blue-400 to-purple-600",
    categoryClass: "category-writing"
  },
  {
    name: "Jasper AI",
    emoji: "📝",
    category: "Content Writing",
    description: "AI writing assistant specialized in marketing copy and business content.",
    url: "https://www.jasper.ai",
    color: "from-purple-400 to-pink-600",
    categoryClass: "category-writing"
  },
  {
    name: "Copy.ai",
    emoji: "📋",
    category: "Content Writing",
    description: "AI copywriting tool for marketing, sales, and social media content.",
    url: "https://copy.ai",
    color: "from-indigo-400 to-blue-600",
    categoryClass: "category-writing"
  },
  {
    name: "Writesonic",
    emoji: "🖊️",
    category: "Content Writing",
    description: "AI writer for blogs, ads, emails, and website copy generation.",
    url: "https://writesonic.com",
    color: "from-cyan-400 to-teal-600",
    categoryClass: "category-writing"
  },

  // Image Generation & Design
  {
    name: "Midjourney",
    emoji: "🎨",
    category: "Image Generation",
    description: "Create stunning artwork and visuals from text prompts with artistic flair.",
    url: "https://www.midjourney.com",
    color: "from-purple-400 to-indigo-600",
    categoryClass: "category-design"
  },
  {
    name: "DALL·E 3",
    emoji: "🖼️",
    category: "Image Generation",
    description: "Advanced image generation from prompts by OpenAI with precise control.",
    url: "https://openai.com/dall-e-3",
    color: "from-green-400 to-teal-600",
    categoryClass: "category-design"
  },
  {
    name: "Stable Diffusion",
    emoji: "🎭",
    category: "Image Generation",
    description: "Open-source image generation model for creative and artistic projects.",
    url: "https://stablediffusionweb.com",
    color: "from-pink-400 to-red-600",
    categoryClass: "category-design"
  },
  {
    name: "Leonardo AI",
    emoji: "🖌️",
    category: "Image Generation",
    description: "AI art generator with fine-tuned models for game assets and creative content.",
    url: "https://leonardo.ai",
    color: "from-yellow-400 to-orange-600",
    categoryClass: "category-design"
  },
  {
    name: "Canva AI",
    emoji: "🎨",
    category: "Image Generation",
    description: "AI-powered design assistant integrated into Canva's design platform.",
    url: "https://canva.com",
    color: "from-blue-400 to-purple-600",
    categoryClass: "category-design"
  },
  {
    name: "Adobe Firefly",
    emoji: "🔥",
    category: "Image Generation",
    description: "Adobe's generative AI for creative workflows and content creation.",
    url: "https://firefly.adobe.com",
    color: "from-red-400 to-pink-600",
    categoryClass: "category-design"
  },

  // Video Creation & Editing
  {
    name: "Synthesia",
    emoji: "🎥",
    category: "Video Creation",
    description: "Create professional avatar-based videos with AI-generated voiceovers.",
    url: "https://www.synthesia.io",
    color: "from-red-400 to-pink-600",
    categoryClass: "category-video"
  },
  {
    name: "Pika Labs",
    emoji: "🎞️",
    category: "Video Creation",
    description: "AI video generation from text prompts and image-to-video conversion.",
    url: "https://pika.art",
    color: "from-cyan-400 to-blue-600",
    categoryClass: "category-video"
  },
  {
    name: "Runway ML",
    emoji: "🎬",
    category: "Video Creation",
    description: "AI-powered video editing and generation tools for creators.",
    url: "https://runwayml.com",
    color: "from-green-400 to-teal-600",
    categoryClass: "category-video"
  },
  {
    name: "Lumen5",
    emoji: "📹",
    category: "Video Creation",
    description: "Transform blog posts and articles into engaging video content.",
    url: "https://lumen5.com",
    color: "from-purple-400 to-indigo-600",
    categoryClass: "category-video"
  },
  {
    name: "Pictory",
    emoji: "🎭",
    category: "Video Creation",
    description: "AI video creation from scripts, articles, and blog posts.",
    url: "https://pictory.ai",
    color: "from-orange-400 to-red-600",
    categoryClass: "category-video"
  },

  // Code Assistant & Development
  {
    name: "GitHub Copilot",
    emoji: "💻",
    category: "Code Assistant",
    description: "AI pair programmer that suggests code completions and functions.",
    url: "https://github.com/features/copilot",
    color: "from-gray-400 to-gray-700",
    categoryClass: "category-code"
  },
  {
    name: "Cody",
    emoji: "🧑‍💻",
    category: "Code Assistant",
    description: "AI coding assistant by Sourcegraph for code understanding and generation.",
    url: "https://sourcegraph.com/cody",
    color: "from-indigo-400 to-purple-600",
    categoryClass: "category-code"
  },
  {
    name: "Tabnine",
    emoji: "⚡",
    category: "Code Assistant",
    description: "AI code completion tool that learns from your codebase.",
    url: "https://tabnine.com",
    color: "from-blue-400 to-cyan-600",
    categoryClass: "category-code"
  },
  {
    name: "Cursor",
    emoji: "🎯",
    category: "Code Assistant",
    description: "AI-powered code editor built for pair programming with AI.",
    url: "https://cursor.sh",
    color: "from-green-400 to-emerald-600",
    categoryClass: "category-code"
  },
  {
    name: "Replit AI",
    emoji: "🔧",
    category: "Code Assistant",
    description: "AI coding assistant integrated into Replit's collaborative IDE.",
    url: "https://replit.com",
    color: "from-orange-400 to-red-600",
    categoryClass: "category-code"
  },
  {
    name: "CodeWhisperer",
    emoji: "🔮",
    category: "Code Assistant",
    description: "Amazon's AI coding companion for multiple programming languages.",
    url: "https://aws.amazon.com/codewhisperer",
    color: "from-yellow-400 to-orange-600",
    categoryClass: "category-code"
  },

  // Search & Research
  {
    name: "Perplexity AI",
    emoji: "🔍",
    category: "Search & Research",
    description: "AI-powered search engine that provides cited answers and sources.",
    url: "https://www.perplexity.ai",
    color: "from-yellow-400 to-orange-600",
    categoryClass: "category-research"
  },
  {
    name: "You.com",
    emoji: "🔎",
    category: "Search & Research",
    description: "Privacy-focused AI search engine with personalized results.",
    url: "https://you.com",
    color: "from-teal-400 to-cyan-600",
    categoryClass: "category-research"
  },
  {
    name: "Elicit",
    emoji: "📊",
    category: "Search & Research",
    description: "AI research assistant for finding and analyzing academic papers.",
    url: "https://elicit.org",
    color: "from-purple-400 to-pink-600",
    categoryClass: "category-research"
  },
  {
    name: "Consensus",
    emoji: "📚",
    category: "Search & Research",
    description: "AI-powered search engine for scientific research and evidence.",
    url: "https://consensus.app",
    color: "from-blue-400 to-indigo-600",
    categoryClass: "category-research"
  },
  {
    name: "Semantic Scholar",
    emoji: "🔬",
    category: "Search & Research",
    description: "AI-powered academic search engine by Allen Institute.",
    url: "https://semanticscholar.org",
    color: "from-green-400 to-teal-600",
    categoryClass: "category-research"
  },

  // Business & Productivity
  {
    name: "Notion AI",
    emoji: "📝",
    category: "Business & Productivity",
    description: "AI writing assistant integrated into Notion's workspace platform.",
    url: "https://notion.so",
    color: "from-gray-400 to-gray-600",
    categoryClass: "category-business"
  },
  {
    name: "Grammarly",
    emoji: "✏️",
    category: "Business & Productivity",
    description: "AI-powered writing assistant for grammar, style, and clarity.",
    url: "https://grammarly.com",
    color: "from-green-400 to-emerald-600",
    categoryClass: "category-business"
  },
  {
    name: "Otter.ai",
    emoji: "🎙️",
    category: "Business & Productivity",
    description: "AI meeting assistant that records, transcribes, and summarizes.",
    url: "https://otter.ai",
    color: "from-blue-400 to-purple-600",
    categoryClass: "category-business"
  },
  {
    name: "Zapier AI",
    emoji: "🔗",
    category: "Business & Productivity",
    description: "AI automation platform connecting apps and workflows.",
    url: "https://zapier.com",
    color: "from-orange-400 to-red-600",
    categoryClass: "category-business"
  },
  {
    name: "Monday.com AI",
    emoji: "📋",
    category: "Business & Productivity",
    description: "AI-powered project management and team collaboration platform.",
    url: "https://monday.com",
    color: "from-pink-400 to-purple-600",
    categoryClass: "category-business"
  },
  {
    name: "Clockify AI",
    emoji: "⏰",
    category: "Business & Productivity",
    description: "AI-powered time tracking and productivity analytics tool.",
    url: "https://clockify.me",
    color: "from-indigo-400 to-blue-600",
    categoryClass: "category-business"
  },

  // Audio & Music
  {
    name: "Murf AI",
    emoji: "🎵",
    category: "Audio & Music",
    description: "AI voice generator for creating realistic voiceovers and narration.",
    url: "https://murf.ai",
    color: "from-purple-400 to-pink-600",
    categoryClass: "category-audio"
  },
  {
    name: "ElevenLabs",
    emoji: "🔊",
    category: "Audio & Music",
    description: "Advanced AI voice synthesis and cloning technology.",
    url: "https://elevenlabs.io",
    color: "from-green-400 to-teal-600",
    categoryClass: "category-audio"
  },
  {
    name: "AIVA",
    emoji: "🎼",
    category: "Audio & Music",
    description: "AI music composition assistant for creating original soundtracks.",
    url: "https://aiva.ai",
    color: "from-blue-400 to-purple-600",
    categoryClass: "category-audio"
  },
  {
    name: "Soundful",
    emoji: "🎹",
    category: "Audio & Music",
    description: "AI music generator for royalty-free background music.",
    url: "https://soundful.com",
    color: "from-orange-400 to-red-600",
    categoryClass: "category-audio"
  },
  {
    name: "Speechify",
    emoji: "📢",
    category: "Audio & Music",
    description: "AI text-to-speech tool for converting written content to audio.",
    url: "https://speechify.com",
    color: "from-cyan-400 to-blue-600",
    categoryClass: "category-audio"
  },

  // Data Analysis & AI Tools
  {
    name: "DataRobot",
    emoji: "📈",
    category: "Data Analysis",
    description: "Enterprise AI platform for automated machine learning and analytics.",
    url: "https://datarobot.com",
    color: "from-blue-400 to-indigo-600",
    categoryClass: "category-productivity"
  },
  {
    name: "Tableau AI",
    emoji: "📊",
    category: "Data Analysis",
    description: "AI-powered data visualization and business intelligence platform.",
    url: "https://tableau.com",
    color: "from-green-400 to-teal-600",
    categoryClass: "category-productivity"
  },
  {
    name: "Julius AI",
    emoji: "🧮",
    category: "Data Analysis",
    description: "AI data analyst that interprets and visualizes your data.",
    url: "https://julius.ai",
    color: "from-purple-400 to-pink-600",
    categoryClass: "category-productivity"
  },
  {
    name: "ChatCSV",
    emoji: "📋",
    category: "Data Analysis",
    description: "Ask questions about your CSV data in natural language.",
    url: "https://chatcsv.co",
    color: "from-yellow-400 to-orange-600",
    categoryClass: "category-productivity"
  }
];

// Utility Functions
const utils = {
  // Group tools by category
  groupByCategory: (tools) => {
    const grouped = {};
    tools.forEach(tool => {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
    });
    return grouped;
  },

  // Format date
  formatDate: (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  },

  // Add animation delay
  addAnimationDelay: (element, delay) => {
    element.style.animationDelay = `${delay}ms`;
  },

  // Smooth scroll to element
  scrollTo: (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  // Create particle effect
  createParticles: () => {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      particlesContainer.appendChild(particle);
    }
  },

  // Get category emoji
  getCategoryEmoji: (category) => {
    const categoryEmojis = {
      'Content Writing': '✍️',
      'Image Generation': '🎨',
      'Video Creation': '🎥',
      'Code Assistant': '💻',
      'Search & Research': '🔍',
      'Business & Productivity': '📊',
      'Audio & Music': '🎵',
      'Data Analysis': '📈'
    };
    return categoryEmojis[category] || '🤖';
  }
};

// Enhanced AI Tools Renderer
class ToolsRenderer {
  constructor() {
    this.container = document.getElementById('categories-container');
    this.groupedTools = utils.groupByCategory(aiTools);
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = '';
    
    Object.entries(this.groupedTools).forEach(([category, tools], categoryIndex) => {
      const categorySection = this.createCategorySection(category, tools, categoryIndex);
      this.container.appendChild(categorySection);
    });
  }

  createCategorySection(category, tools, categoryIndex) {
    const section = document.createElement('div');
    section.className = 'category-section animate-fade-in opacity-0';
    utils.addAnimationDelay(section, categoryIndex * CONFIG.STAGGER_DELAY);

    const categoryEmoji = utils.getCategoryEmoji(category);
    
    section.innerHTML = `
      <div class="mb-10">
        <h3 class="text-4xl font-bold mb-6 flex items-center gap-4">
          <span class="text-5xl category-icon animate-float">${categoryEmoji}</span>
          <span class="gradient-text">${category}</span>
        </h3>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 rounded-full mb-4"></div>
        <p class="text-gray-400 text-lg max-w-2xl">
          ${this.getCategoryDescription(category)}
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        ${tools.map((tool, index) => this.createToolCard(tool, index)).join('')}
      </div>
    `;

    return section;
  }

  getCategoryDescription(category) {
    const descriptions = {
      'Content Writing': 'AI-powered writing assistants to help you create, edit, and improve your content.',
      'Image Generation': 'Create stunning visuals, artwork, and graphics from text descriptions.',
      'Video Creation': 'Generate and edit videos with AI-powered tools and automation.',
      'Code Assistant': 'AI-powered coding companions to boost your development productivity.',
      'Search & Research': 'Advanced AI search engines and research assistants for finding information.',
      'Business & Productivity': 'Streamline your workflow with AI-powered productivity tools.',
      'Audio & Music': 'Create, edit, and enhance audio content with artificial intelligence.',
      'Data Analysis': 'Analyze and visualize your data with AI-powered analytics tools.'
    };
    return descriptions[category] || 'Explore these amazing AI tools to enhance your workflow.';
  }

  createToolCard(tool, index) {
    return `
      <div class="glass rounded-3xl p-8 card-hover animate-slide-up opacity-0 group relative overflow-hidden" style="animation-delay: ${index * CONFIG.ANIMATION_DELAY}ms">
        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tool.color} opacity-10 rounded-full -mr-10 -mt-10"></div>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="text-3xl animate-float">${tool.emoji}</span>
          <h4 class="text-xl font-bold bg-gradient-to-r ${tool.color} bg-clip-text text-transparent ${tool.categoryClass}">
            ${tool.name}
          </h4>
        </div>
        
        <p class="text-gray-300 mb-6 leading-relaxed text-sm">
          ${tool.description}
        </p>
        
        <div class="flex items-center justify-between">
          <a href="${tool.url}" 
             target="_blank" 
             rel="noopener noreferrer"
             class="inline-flex items-center gap-2 bg-gradient-to-r ${tool.color} text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <span>Try Now</span>
            <span class="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
          
          <div class="flex items-center gap-2 text-gray-400">
            <span class="text-xs bg-gray-800 px-2 py-1 rounded-full">
              ${tool.category.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

// Enhanced News Renderer
class NewsRenderer {
  constructor() {
    this.container = document.getElementById('news-container');
    this.apiUrl = CONFIG.NEWS_API_URL + CONFIG.NEWS_API_KEY;
  }

  async fetchNews() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) throw new Error('Failed to fetch news');
      
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }

  async render() {
    if (!this.container) return;

    try {
      const articles = await this.fetchNews();
      
      if (articles.length === 0) {
        this.renderErrorState();
        return;
      }

      this.container.innerHTML = '';
      
      articles.slice(0, 6).forEach((article, index) => {
        const newsCard = this.createNewsCard(article, index);
        this.container.appendChild(newsCard);
      });

    } catch (error) {
      console.error('Error rendering news:', error);
      this.renderErrorState();
    }
  }

  createNewsCard(article, index) {
    const card = document.createElement('div');
    card.className = 'news-card rounded-3xl p-8 card-hover animate-fade-in opacity-0';
    utils.addAnimationDelay(card, index * CONFIG.ANIMATION_DELAY);

    const publishedDate = utils.formatDate(article.publishedAt);
    const description = article.description || 'No description available.';
    const truncatedDescription = description.length > 150 
      ? description.substring(0, 150) + '...' 
      : description;

    card.innerHTML = `
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <span class="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-4 py-2 rounded-full font-bold">
            🚀 AI NEWS
          </span>
          <span class="text-xs text-gray-400">${publishedDate}</span>
        </div>
      </div>
      
      <h3 class="text-xl font-bold mb-4 line-clamp-2 leading-tight">
        <a href="${article.url}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-white hover:text-purple-300 transition-colors duration-200">
          ${article.title}
        </a>
      </h3>
      
      <p class="text-gray-300 mb-6 leading-relaxed">
        ${truncatedDescription}
      </p>
      
      <div class="flex items-center justify-between">
        <a href="${article.url}" 
           target="_blank" 
           rel="noopener noreferrer"
           class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
          <span>Read Article</span>
          <span>📖</span>
        </a>
        
        <div class="flex items-center gap-2">
          <span class="text-2xl">📰</span>
        </div>
      </div>
    `;

    return card;
  }

  renderErrorState() {
    this.container.innerHTML = `
      <div class="col-span-full glass rounded-3xl p-12 text-center">
        <div class="text-8xl mb-6 animate-bounce-soft">📰</div>
        <h3 class="text-2xl font-bold mb-4 gradient-text">News Temporarily Unavailable</h3>
        <p class="text-gray-400 text-lg mb-6">
          We're working to bring you the latest AI news. Please check back later!
        </p>
        <button onclick="location.reload()" class="btn-primary">
          🔄 Refresh Page
        </button>
      </div>
    `;
  }
}

// Enhanced Navigation Handler
class NavigationHandler {
  constructor() {
    this.init();
  }

  init() {
    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        utils.scrollTo(targetId);
      });
    });

    // Handle navbar background on scroll
    window.addEventListener('scroll', this.handleScroll.bind(this));

    // Handle mobile menu
    this.setupMobileMenu();
  }

  handleScroll() {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('bg-gray-900/90');
        navbar.classList.add('backdrop-blur-xl');
      } else {
        navbar.classList.remove('bg-gray-900/90');
        navbar.classList.remove('backdrop-blur-xl');
      }
    }
  }

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        // Add mobile menu functionality here
        console.log('Mobile menu clicked');
      });
    }
  }
}

// Enhanced Animation Observer
class AnimationObserver {
  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        entry.target.classList.add('opacity-100');
        
        // Add stagger effect for cards in the same section
        if (entry.target.classList.contains('card-hover')) {
          const cards = Array.from(entry.target.parentElement.children);
          const index = cards.indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 100}ms`;
        }
      }
    });
  }

  observe() {
    document.querySelectorAll('.animate-fade-in, .animate-slide-up').forEach(el => {
      this.observer.observe(el);
    });
  }
}

// Application Initializer
class App {
  constructor() {
    this.toolsRenderer = new ToolsRenderer();
    this.newsRenderer = new NewsRenderer();
    this.navigationHandler = new NavigationHandler();
    this.animationObserver = new AnimationObserver();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.start());
    } else {
      this.start();
    }
  }

  async start() {
    console.log('🚀 NavyaWorld Enhanced v2.0 initializing...');
    
    // Create particle background
    utils.createParticles();
    
    // Render AI tools
    this.toolsRenderer.render();
    
    // Fetch and render news
    await this.newsRenderer.render();
    
    // Setup animation observer
    setTimeout(() => {
      this.animationObserver.observe();
    }, 100);
    
    // Add some interactive effects
    this.addInteractiveEffects();
    
    console.log('✅ NavyaWorld Enhanced ready!');
  }

  addInteractiveEffects() {
    // Add cursor trail effect
    document.addEventListener('mousemove', (e) => {
      const trail = document.createElement('div');
      trail.className = 'fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-50 opacity-75';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      trail.style.animation = 'fadeOut 1s ease-out forwards';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        trail.remove();
      }, 1000);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}

// Add fadeOut animation for cursor trail
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from { opacity: 0.75; transform: scale(1); }
    to { opacity: 0; transform: scale(0); }
  }
`;
document.head.appendChild(style);

// Initialize the application
const app = new App();
app.init();