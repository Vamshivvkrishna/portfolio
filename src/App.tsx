import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Eye,
  Palette,
  Video,
  Code,
  Star,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const portfolioItems = [
    {
      id: 1,
      title: "ChefMate - AI Culinary App",
      category: "web-design",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "MERN Stack web app with AI-powered recipe generation",
      link: "https://github.com/Vamshivvkrishna/ChefMate", // Replace with actual project link
    },
    {
      id: 2,
      title: "Nike Interface Redesign",
      category: "ui-design",
      image: "/nike.png",
      description: "Modern UI/UX redesign for Nike's e-commerce platform",
      link: "https://www.figma.com/proto/j36RD0QWJ5vvSbfszjjGUA/Untitled?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=BPpjSpHMcVmu0BTw-1", // Replace with actual project link
    },
    {
      id: 3,
      title: "McDonald's Website Redesign",
      category: "ui-design",
      image: "/mc.png",
      description: "Global website redesign enhancing user experience",
      link: "https://www.figma.com/proto/17reduu3DRTSlOPWbshlwv/Untitled?page-id=0%3A1&node-id=1-2&t=8LVnwU1q737qVrQj-1", // Replace with actual project link
    },
    {
      id: 4,
      title: "Netflix Clone",
      category: "web-design",
      image:
        "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Fully responsive Netflix clone with TMDB API integration",
      link: "https://github.com/Vamshivvkrishna/netflix-clone", // Replace with actual project link
    },
    {
      id: 5,
      title: "Creative Video Content",
      category: "video-editing",
      image:
        "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Professional video editing and content creation",
      link: "https://drive.google.com/file/d/16CP_ttkVbGFAjZnGGoQBvBxqWUliXVd-/view?usp=drive_link", // Replace with actual video portfolio link
      reelsLink: "https://www.instagram.com/krishhnaa04/reels/", // Instagram reels link
    },
  ];

  const [filter, setFilter] = useState("all");
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamshi Krishna
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "services", "portfolio", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-purple-400 transition-colors relative ${
                      activeSection === item ? "text-purple-400" : ""
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
                    )}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4 animate-fadeIn">
              {["home", "about", "services", "portfolio", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 px-4 capitalize hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              UI/UX Designer
            </span>
            <br />
            <span className="text-white">& Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeInUp delay-200">
            UI/UX Design • Full Stack Development • Video Editing
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fadeInUp delay-400">
            Computer Science student passionate about creating intuitive user
            experiences and modern web applications. From UI/UX design to
            full-stack development, I build digital solutions that make an
            impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-600">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-400 rounded-full hover:bg-purple-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Passionate creative professional with a keen eye for design and
              storytelling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src="/dp.jpg"
                      alt="Vamshi Krishna Vilasagar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-300">Professional Portrait</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Creative Professional
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm Vamshi Krishna Vilasagar, a Computer Science Engineering
                student at JNTUH College of Engineering with a passion for UI/UX
                design and full-stack development. My journey combines technical
                expertise with creative design thinking to build user-centered
                digital experiences.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white">UI/UX Design</span>
                  <span className="text-purple-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-[90%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Full Stack Development</span>
                  <span className="text-blue-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-[85%]"></div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white">Video Editing</span>
                  <span className="text-orange-400">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive creative solutions to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Graphic Design
              </h3>
              <p className="text-gray-400 mb-6">
                Designing intuitive user interfaces and experiences using modern
                design principles. Specializing in web interfaces, mobile apps,
                and brand redesigns.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Star size={16} className="text-purple-400 mr-2" />
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-purple-400 mr-2" />
                  Interface Redesign
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-purple-400 mr-2" />
                  Canva Design
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-purple-400 mr-2" />
                  Brand Interface
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Full Stack Development
              </h3>
              <p className="text-gray-400 mb-6">
                Building modern web applications using MERN stack, with
                expertise in React.js, Node.js, MongoDB, and responsive design
                principles.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Star size={16} className="text-blue-400 mr-2" />
                  MERN Stack
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-blue-400 mr-2" />
                  React.js
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-blue-400 mr-2" />
                  Node.js & MongoDB
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-blue-400 mr-2" />
                  API Integration
                </li>
              </ul>
            </div>

            <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Video size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Video Editing & Photography
              </h3>
              <p className="text-gray-400 mb-6">
                Creative video editing and photography services for digital
                content, social media, and promotional materials with
                professional quality.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Star size={16} className="text-orange-400 mr-2" />
                  Video Editing
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-orange-400 mr-2" />
                  Photography
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-orange-400 mr-2" />
                  Content Creation
                </li>
                <li className="flex items-center">
                  <Star size={16} className="text-orange-400 mr-2" />
                  Post Production
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
              A showcase of my creative work across different mediums and
              industries
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: "all", label: "All Work" },
                { key: "ui-design", label: "UI/UX Design" },
                { key: "web-design", label: "Web Development" },
                { key: "video-editing", label: "Video Editing" },
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === filterOption.key
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-gray-700/50 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category === "video-editing" && item.reelsLink ? (
                    <div className="flex space-x-4">
                      <a
                        href={item.reelsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-orange-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <Eye size={20} className="text-white" />
                      </a>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </a>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <div className="mt-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.category === "ui-design"
                          ? "bg-purple-500/20 text-purple-400"
                          : item.category === "web-design"
                          ? "bg-orange-500/20 text-orange-400"
                          : item.category === "video-editing"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {item.category.replace("-", " ").toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to bring your creative vision to life? Let's discuss your
              next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">vamshivvkkrishna@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 9347014487</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/krishhnaa04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 group"
                  >
                    <Instagram
                      size={20}
                      className="text-white group-hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://x.com/editing94171388"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 group"
                  >
                    <Twitter
                      size={20}
                      className="text-white group-hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vamshi-krishna-464890298/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 group"
                  >
                    <Linkedin
                      size={20}
                      className="text-white group-hover:scale-110 transition-transform"
                    />
                  </a>
                  <a
                    href="https://github.com/Vamshivvkrishna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center hover:transform hover:scale-110 transition-all duration-300 group"
                  >
                    <Github
                      size={20}
                      className="text-white group-hover:scale-110 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 text-white font-medium shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Vamshi Krishna
            </div>
            <p className="text-gray-400 mb-4">
              UI/UX Designer & Full Stack Developer
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Vamshi Krishna Vilasagar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
