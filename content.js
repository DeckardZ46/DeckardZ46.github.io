// ==========================================
//  Site Content Configuration
//  Modify this file to update your homepage
// ==========================================

const CONTENT = {
    // Page metadata
    meta: {
        title: "DeckardZ46"
    },

    // Navigation
    nav: {
        logo: "&lt;DeckardZ46 /&gt;",
        links: [
            { label: "Home", href: "#", active: true },
            { label: "About", href: "#" },
            { label: "Projects", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Contact", href: "#" }
        ]
    },

    // Profile / Left sidebar
    profile: {
        avatar: "&lt;/&gt;",
        name: "DeckardZ46",
        title: "Graphics & Gaming",
        bio: [
            "In my heart, I'm a gamer"
        ],
        skills: ["C++", "Game Engine", "Vulkan", "OpenGL", "Graphics"],
        socials: [
            { name: "GitHub", url: "https://github.com/DeckardZ46" },
            { name: "bilibili", url: "#" },
            { name: "Zhihu", url: "https://www.zhihu.com/people/lang-wei-xian-he-lu-ye/" }
        ]
    },

    // Projects section
    projects: {
        sectionTitle: "Projects",
        items: [
            {
                name: "Rewind Engine",
                desc: "A light-weight game engine",
                tags: ["C++", "Game Engine"]
            }
        ]
    },

    // Footer
    footer: {
        status: "Online",
        info: "",
        copy: "© 2026 DeckardZ46"
    }
};
