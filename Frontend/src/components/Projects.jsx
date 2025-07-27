import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-lg text-gray-600">Some of my recent work</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            {/* Project Image */}
                            <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {index === 0 && (
                                        // MERN Auth System
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="text-gray-600 font-medium">Authentication System</div>
                                        </div>
                                    )}
                                    {index === 1 && (
                                        // TiffinDelight
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                                </svg>
                                            </div>
                                            <div className="text-gray-600 font-medium">Food Delivery Platform</div>
                                        </div>
                                    )}
                                    {index === 2 && (
                                        // Background Remover
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3 mx-auto">
                                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="text-gray-600 font-medium">AI Image Processing</div>
                                        </div>
                                    )}
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute top-2 right-2 w-8 h-8 bg-white opacity-20 rounded-full"></div>
                                <div className="absolute bottom-2 left-2 w-6 h-6 bg-white opacity-30 rounded-full"></div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <Github size={16} />
                                        Code
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects