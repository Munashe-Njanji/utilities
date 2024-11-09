"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { utilityApps } from '@/utils/util_list';

export default function Home() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const categories = ['All', ...new Set(utilityApps.map(app => app.category))];

    const filteredApps = utilityApps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            app.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen p-6 space-y-8">
            {/* Header and Search Section */}
            <div className="space-y-6">
                <h1 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    Utility Apps
                </h1>

                <div className={`relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl p-2 shadow-lg transition-all duration-200`}>
                    <div className="flex items-center space-x-3">
                        <Search className={`w-5 h-5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                        <input
                            type="text"
                            placeholder="Search utilities..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full bg-transparent outline-none ${theme === 'dark' ? 'text-white placeholder-gray-400' : 'text-gray-800 placeholder-gray-500'}`}
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex space-x-4 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-lg transition-all duration-200 ${selectedCategory === category
                                ? theme === 'dark'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-blue-500 text-white'
                                : theme === 'dark'
                                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Apps Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {filteredApps.map((app) => (
                    <motion.a
                        key={app.id}
                        href={app.path}
                        className={`block p-6 rounded-xl transition-all duration-200 ${theme === 'dark'
                            ? 'bg-gray-800 hover:bg-gray-700'
                            : 'bg-white hover:bg-gray-50'
                            } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-start space-x-4">
                            <div className="text-4xl">{app.icon}</div>
                            <div className="space-y-2">
                                <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                    {app.name}
                                </h3>
                                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {app.description}
                                </p>
                                <div className={`text-xs inline-block px-2 py-1 rounded-full ${theme === 'dark'
                                    ? 'bg-gray-700 text-gray-300'
                                    : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {app.category}
                                </div>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </motion.div>

            {/* No Results Message */}
            {filteredApps.length === 0 && (
                <div className="text-center py-12">
                    <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        No utilities found matching your search.
                    </p>
                </div>
            )}
        </div>
    );
}
