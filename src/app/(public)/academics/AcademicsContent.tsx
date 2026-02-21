'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Users,
  Flask,
  GraduationCap,
  Buildings,
  Microscope,
  Stethoscope,
  Plant,
  ChartBar,
  Pill,
  Cpu,
} from '@phosphor-icons/react';
import { DEPARTMENTS } from '@/lib/constants/navigation';

const programCategories = [
  {
    title: 'Undergraduate',
    count: 24,
    description: 'B.Tech, B.Pharm, BBA, BCA & more',
    href: '/academics/programs?level=Undergraduate',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&q=80',
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Postgraduate',
    count: 19,
    description: 'M.Tech, M.Pharm, MBA, MCA & more',
    href: '/academics/programs?level=Postgraduate',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    title: 'Doctoral (Ph.D)',
    count: 14,
    description: '14 research programs',
    href: '/academics/programs?level=Doctoral',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop&q=80',
    color: 'from-purple-600 to-purple-800',
  },
];

const departmentImages: Record<string, string> = {
  'engineering': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80',
  'pharmacy': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&q=80',
  'sciences-humanities': 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=600&h=400&fit=crop&q=80',
  'allied-health-sciences': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80',
  'commerce-management': 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80',
  'agriculture': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop&q=80',
  'nursing': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop&q=80',
};

const departmentIcons: Record<string, React.ElementType> = {
  'engineering': Cpu,
  'pharmacy': Pill,
  'sciences-humanities': Flask,
  'allied-health-sciences': Stethoscope,
  'commerce-management': ChartBar,
  'agriculture': Plant,
  'nursing': Stethoscope,
};

const resources = [
  {
    icon: Users,
    title: 'Faculty Directory',
    description: 'Meet our experienced professors and researchers',
    href: '/academics/faculty',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop&q=80',
  },
  {
    icon: Microscope,
    title: 'Research',
    description: 'Explore our research initiatives and publications',
    href: '/academics/research',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop&q=80',
  },
  {
    icon: Buildings,
    title: 'All Departments',
    description: 'Browse all 7 academic departments',
    href: '/academics/departments',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&q=80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AcademicsContent() {
  return (
    <>
      {/* Stats Row */}
      <section className="py-12 bg-secondary-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '57+', label: 'Programs' },
              { value: '24', label: 'Undergraduate' },
              { value: '19', label: 'Postgraduate' },
              { value: '14', label: 'Doctoral' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-accent-400 font-serif">{stat.value}</div>
                <div className="text-white/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs by Level */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Programs
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-3">
              Choose Your Path
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              57+ programs across undergraduate, postgraduate, and doctoral levels
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {programCategories.map((cat) => (
              <motion.div key={cat.title} variants={itemVariants}>
                <Link href={cat.href} className="group block">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-75`} />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <span className="text-white/80 text-sm font-medium">{cat.count} Programs</span>
                      <h3 className="text-white text-2xl font-bold mt-1">{cat.title}</h3>
                      <p className="text-white/80 text-sm mt-2">{cat.description}</p>
                      <div className="flex items-center gap-2 mt-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore Programs
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/academics/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
            >
              <BookOpen className="h-5 w-5" />
              Browse All 57+ Programs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
              <Buildings className="h-4 w-4" />
              Departments
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-3">
              Our Academic Departments
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              7 specialized departments with state-of-the-art facilities and industry partnerships
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {DEPARTMENTS.map((dept) => {
              const IconComponent = departmentIcons[dept.slug] || Buildings;
              const deptImage = departmentImages[dept.slug] || dept.image;
              return (
                <motion.div key={dept.id} variants={itemVariants}>
                  <Link href={`/academics/departments/${dept.slug}`} className="group block">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={deptImage}
                          alt={dept.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-3 right-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-neutral-800">
                            {dept.programs} Programs
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-white" weight="bold" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">
                          {dept.name}
                        </h3>
                        <p className="text-sm text-neutral-500 mt-1.5 line-clamp-2">
                          {dept.description}
                        </p>
                        <div className="flex items-center gap-1.5 mt-3 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore Department
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4" />
              Resources
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-900 mb-3">
              Academic Resources
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
              Access faculty directories, research initiatives, and department information
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {resources.map((resource) => (
              <motion.div key={resource.title} variants={itemVariants}>
                <Link href={resource.href} className="group block">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 hover:shadow-lg transition-all duration-300">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                        <resource.icon className="h-5 w-5 text-white" weight="bold" />
                      </div>
                      <h3 className="text-white text-xl font-bold">{resource.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{resource.description}</p>
                      <div className="flex items-center gap-2 mt-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Join 10,000+ students building their careers at Chaitanya University
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions/how-to-apply"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/academics/programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
