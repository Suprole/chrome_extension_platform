"use client";

import { useState } from "react";
import { Command } from "cmdk";
import { Search, Star, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: 1, name: "Developer Tools", count: 245, icon: "⚡️" },
  { id: 2, name: "Productivity", count: 189, icon: "⚙️" },
  { id: 3, name: "Security", count: 167, icon: "🔒" },
  { id: 4, name: "Ad Blockers", count: 92, icon: "🛡️" },
  { id: 5, name: "Social Media", count: 156, icon: "🌐" },
  { id: 6, name: "Education", count: 134, icon: "📚" },
];

const extensions = [
  {
    id: 1,
    name: "DevTools Pro",
    description: "Advanced developer tools for web debugging and performance analysis",
    icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=128&h=128&fit=crop",
    rating: 4.8,
    reviews: "2.3k",
    users: "1.2M",
    category: "Developer Tools",
  },
  {
    id: 2,
    name: "TaskMaster",
    description: "Boost your productivity with smart task management",
    icon: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=128&h=128&fit=crop",
    rating: 4.7,
    reviews: "1.8k",
    users: "890K",
    category: "Productivity",
  },
  {
    id: 3,
    name: "SecureGuard",
    description: "Enhanced security and privacy protection for your browser",
    icon: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=128&h=128&fit=crop",
    rating: 4.9,
    reviews: "3.1k",
    users: "2.1M",
    category: "Security",
  },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Discover the Best
              <span className="block text-indigo-600">Chrome Extensions</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Enhance your browsing experience with our curated collection of powerful and trusted extensions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-xl">
            <Command className="rounded-lg border shadow-md">
              <div className="flex items-center border-b px-3">
                <Search className="h-4 w-4 shrink-0 text-gray-500" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 bg-transparent p-3 text-sm outline-none placeholder:text-gray-500"
                  placeholder="Search extensions..."
                />
              </div>
            </Command>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Browse Categories</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer transition-all hover:shadow-md"
            >
              <div className="flex flex-col items-center p-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="mt-2 text-sm font-medium text-gray-900">{category.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.count} extensions</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Extensions List */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured Extensions</h2>
          <Tabs defaultValue="popular" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="rated">Highest Rated</TabsTrigger>
              <TabsTrigger value="recent">Recently Added</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {extensions.map((extension) => (
            <Card key={extension.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={extension.icon}
                    alt={extension.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-medium text-gray-900">{extension.name}</h3>
                    <Badge variant="secondary">{extension.category}</Badge>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500">{extension.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {extension.rating} ({extension.reviews})
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{extension.users}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:bg-indigo-50">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}