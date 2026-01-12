import { Bodoni_Moda } from 'next/font/google';
import { Target, Eye, Leaf, Globe, Recycle, Lightbulb } from 'lucide-react';

const bodoni = Bodoni_Moda({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
});

export default function MissionVision() {
    return (
        <section className="py-24 bg-linear-to-b from-white to-green-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Core Values
                    </span>
                    <h2 className={`${bodoni.className} text-4xl md:text-5xl font-bold text-gray-900 mb-6`}>
                        Our Purpose & Path
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We are driven by a commitment to environmental stewardship and technological sustainability,
                        paving the way for a cleaner, greener future.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Mission Card */}
                    <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition duration-300">
                            <Target size={120} className="text-green-600" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition duration-300">
                                <Target className="text-green-600 w-7 h-7 group-hover:text-white transition duration-300" />
                            </div>

                            <h3 className={`${bodoni.className} text-3xl font-bold text-gray-900 mb-4`}>
                                Our Mission
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                To revolutionize e-waste management in India by providing secure, transparent, and eco-friendly
                                disposal and recycling solutions. We aim to bridge the gap between technology consumption and
                                sustainable disposal, ensuring zero landfill waste while extracting maximum value from retired IT assets.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Leaf, text: "Zero landfill commitment" },
                                    { icon: Recycle, text: "Responsible recycling practices" },
                                    { icon: Globe, text: "Global environmental standards" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                                            <item.icon size={14} className="text-green-600" />
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="group relative bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 overflow-hidden text-white">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition duration-300">
                            <Eye size={120} className="text-green-400" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition duration-300">
                                <Eye className="text-green-400 w-7 h-7 group-hover:text-white transition duration-300" />
                            </div>

                            <h3 className={`${bodoni.className} text-3xl font-bold mb-4`}>
                                Our Vision
                            </h3>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                To become India's most trusted partner in the circular economy ecosystem, creating a sustainable
                                future where electronic waste is viewed not as trash, but as a valuable resource. We envision
                                a cleaner India driven by technological innovation and environmental consciousness.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    { icon: Lightbulb, text: "Innovation in recycling tech" },
                                    { icon: Globe, text: "Pan-India sustainable impact" },
                                    { icon: Leaf, text: "Circular economy leadership" }
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-200">
                                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                            <item.icon size={14} className="text-green-400" />
                                        </div>
                                        <span className="font-medium">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
