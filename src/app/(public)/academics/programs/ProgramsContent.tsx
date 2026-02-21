'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Buildings,
  FunnelSimple,
  MagnifyingGlass,
  X,
  ShieldCheck,
} from '@phosphor-icons/react';

type Program = {
  name: string;
  department: string;
  subDepartment?: string;
  duration: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  accreditation?: string;
};

const allPrograms: Program[] = [
  // ─── Undergraduate (24) ──────────────────────────────────────────
  // Faculty of Engineering
  { name: 'B.Tech. Computer Science & Engineering', department: 'Engineering', subDepartment: 'Computer Science & Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. CSE AI & ML', department: 'Engineering', subDepartment: 'Computer Science & Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. CSE Data Science', department: 'Engineering', subDepartment: 'Computer Science & Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. Electronics and Communication Engineering', department: 'Engineering', subDepartment: 'Electronics and Communication Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. Electrical and Electronics Engineering', department: 'Engineering', subDepartment: 'Electrical and Electronics Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. Mechanical Engineering', department: 'Engineering', subDepartment: 'Mechanical Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  { name: 'B.Tech. Civil Engineering', department: 'Engineering', subDepartment: 'Civil Engineering', duration: '4 Years', level: 'Undergraduate', accreditation: 'AICTE' },
  // Department of Pharmacy
  { name: 'B.Pharmacy', department: 'Pharmacy', duration: '4 Years', level: 'Undergraduate', accreditation: 'PCI' },
  // Department of Agriculture
  { name: 'B.Sc. (Hons.) Agriculture', department: 'Agriculture', duration: '4 Years', level: 'Undergraduate' },
  // Department of Nursing
  { name: 'B.Sc. (Hons.) Nursing', department: 'Nursing', duration: '4 Years', level: 'Undergraduate', accreditation: 'INC' },
  // Faculty of Science
  { name: 'B.Sc. M.P.Cs', department: 'Humanities & Sciences', subDepartment: 'Physics', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. M.St.Cs', department: 'Humanities & Sciences', subDepartment: 'Mathematics & Statistics', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Bt.Mb.C.', department: 'Humanities & Sciences', subDepartment: 'Microbiology', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Nutrition and Food Science', department: 'Humanities & Sciences', subDepartment: 'Biochemistry', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Medical Lab Technology', department: 'Humanities & Sciences', subDepartment: 'Microbiology', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Forensic Science', department: 'Humanities & Sciences', subDepartment: 'Chemistry', duration: '3 Years', level: 'Undergraduate' },
  { name: 'BS Computer Science', department: 'Humanities & Sciences', subDepartment: 'Computer Science', duration: '4 Years', level: 'Undergraduate' },
  { name: 'BCA', department: 'Humanities & Sciences', subDepartment: 'Computer Science', duration: '3 Years', level: 'Undergraduate' },
  // Faculty of Commerce and Business Management
  { name: 'B.Com. (Computer Applications)', department: 'Commerce & Business Management', duration: '3 Years', level: 'Undergraduate' },
  { name: 'BBA', department: 'Commerce & Business Management', duration: '3 Years', level: 'Undergraduate' },
  // Department of Allied Health Sciences
  { name: 'B.Sc. Radiology and Imaging Technology', department: 'Allied Health Sciences', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Anaesthesia & Operation Theatre Technology', department: 'Allied Health Sciences', duration: '3 Years', level: 'Undergraduate' },
  { name: 'B.Sc. Cardiovascular Technology', department: 'Allied Health Sciences', duration: '3 Years', level: 'Undergraduate' },
  { name: 'Bachelor of Physiotherapy', department: 'Allied Health Sciences', duration: '4.5 Years', level: 'Undergraduate' },

  // ─── Postgraduate (19) ───────────────────────────────────────────
  // Faculty of Engineering
  { name: 'M.Tech. Computer Science & Engineering', department: 'Engineering', subDepartment: 'Computer Science & Engineering', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
  { name: 'M.Tech. VLSI System Design', department: 'Engineering', subDepartment: 'Electronics and Communication Engineering', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
  { name: 'M.Tech. Power Electronics', department: 'Engineering', subDepartment: 'Electrical and Electronics Engineering', duration: '2 Years', level: 'Postgraduate', accreditation: 'AICTE' },
  // Department of Pharmacy
  { name: 'M.Pharmacy Pharmaceutics', department: 'Pharmacy', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
  { name: 'M.Pharmacy Drug Regulatory Affairs', department: 'Pharmacy', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
  { name: 'M.Pharmacy Industrial Pharmacy', department: 'Pharmacy', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
  { name: 'M.Pharmacy Pharmaceutical Analysis', department: 'Pharmacy', duration: '2 Years', level: 'Postgraduate', accreditation: 'PCI' },
  { name: 'Pharm D (PB)', department: 'Pharmacy', duration: '3 Years', level: 'Postgraduate', accreditation: 'PCI' },
  { name: 'Pharm. D', department: 'Pharmacy', duration: '6 Years', level: 'Postgraduate', accreditation: 'PCI' },
  // Faculty of Science
  { name: 'M.Sc. Physics', department: 'Humanities & Sciences', subDepartment: 'Physics', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Organic Chemistry', department: 'Humanities & Sciences', subDepartment: 'Chemistry', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Microbiology', department: 'Humanities & Sciences', subDepartment: 'Microbiology', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Biotechnology', department: 'Humanities & Sciences', subDepartment: 'Biotechnology', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Computer Science', department: 'Humanities & Sciences', subDepartment: 'Computer Science', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Medical Lab Technology', department: 'Humanities & Sciences', subDepartment: 'Microbiology', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Clinical Nutrition and Dietetics', department: 'Humanities & Sciences', subDepartment: 'Biochemistry', duration: '2 Years', level: 'Postgraduate' },
  { name: 'M.Sc. Food Technology and Quality Assurance', department: 'Humanities & Sciences', subDepartment: 'Biochemistry', duration: '2 Years', level: 'Postgraduate' },
  { name: 'MCA', department: 'Humanities & Sciences', subDepartment: 'Computer Science', duration: '2 Years', level: 'Postgraduate' },
  // Faculty of Commerce and Business Management
  { name: 'MBA', department: 'Commerce & Business Management', duration: '2 Years', level: 'Postgraduate' },

  // ─── Doctoral (14) ───────────────────────────────────────────────
  // Faculty of Engineering
  { name: 'Ph.D. Computer Science & Engineering', department: 'Engineering', subDepartment: 'Computer Science & Engineering', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Electronics and Communication Engineering', department: 'Engineering', subDepartment: 'Electronics and Communication Engineering', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Electrical and Electronics Engineering', department: 'Engineering', subDepartment: 'Electrical and Electronics Engineering', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Mechanical Engineering', department: 'Engineering', subDepartment: 'Mechanical Engineering', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Civil Engineering', department: 'Engineering', subDepartment: 'Civil Engineering', duration: '3-5 Years', level: 'Doctoral' },
  // Department of Pharmacy
  { name: 'Ph.D. Pharmacy', department: 'Pharmacy', duration: '3-5 Years', level: 'Doctoral' },
  // Faculty of Science
  { name: 'Ph.D. Physics', department: 'Humanities & Sciences', subDepartment: 'Physics', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Mathematics and Statistics', department: 'Humanities & Sciences', subDepartment: 'Mathematics and Statistics', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Chemistry', department: 'Humanities & Sciences', subDepartment: 'Chemistry', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Microbiology', department: 'Humanities & Sciences', subDepartment: 'Microbiology', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Biotechnology', department: 'Humanities & Sciences', subDepartment: 'Biotechnology', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Computer Science', department: 'Humanities & Sciences', subDepartment: 'Computer Science', duration: '3-5 Years', level: 'Doctoral' },
  { name: 'Ph.D. Biochemistry', department: 'Humanities & Sciences', subDepartment: 'Biochemistry', duration: '3-5 Years', level: 'Doctoral' },
  // Faculty of Commerce and Business Management
  { name: 'Ph.D. Commerce & Business Management', department: 'Commerce & Business Management', duration: '3-5 Years', level: 'Doctoral' },
];

const levels = ['All', 'Undergraduate', 'Postgraduate', 'Doctoral'] as const;
const departments = [
  'All Departments',
  'Engineering',
  'Pharmacy',
  'Humanities & Sciences',
  'Allied Health Sciences',
  'Commerce & Business Management',
  'Agriculture',
  'Nursing',
];

const deptColors: Record<string, { border: string; bg: string; text: string }> = {
  'Engineering': { border: 'border-l-blue-600', bg: 'bg-blue-50', text: 'text-blue-700' },
  'Pharmacy': { border: 'border-l-emerald-600', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'Humanities & Sciences': { border: 'border-l-purple-600', bg: 'bg-purple-50', text: 'text-purple-700' },
  'Allied Health Sciences': { border: 'border-l-rose-600', bg: 'bg-rose-50', text: 'text-rose-700' },
  'Commerce & Business Management': { border: 'border-l-amber-600', bg: 'bg-amber-50', text: 'text-amber-700' },
  'Agriculture': { border: 'border-l-lime-600', bg: 'bg-lime-50', text: 'text-lime-700' },
  'Nursing': { border: 'border-l-cyan-600', bg: 'bg-cyan-50', text: 'text-cyan-700' },
};

const accreditationColors: Record<string, { bg: string; text: string }> = {
  'AICTE': { bg: 'bg-blue-100', text: 'text-blue-800' },
  'PCI': { bg: 'bg-emerald-100', text: 'text-emerald-800' },
  'INC': { bg: 'bg-cyan-100', text: 'text-cyan-800' },
};

const levelImages: Record<string, string> = {
  'Undergraduate': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&q=80',
  'Postgraduate': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&q=80',
  'Doctoral': 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=600&h=400&fit=crop&q=80',
};

export function ProgramsContent() {
  const [activeLevel, setActiveLevel] = useState<string>('All');
  const [activeDept, setActiveDept] = useState<string>('All Departments');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return allPrograms.filter((p) => {
      const matchLevel = activeLevel === 'All' || p.level === activeLevel;
      const matchDept = activeDept === 'All Departments' || p.department === activeDept;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return matchLevel && matchDept && matchSearch;
    });
  }, [activeLevel, activeDept, search]);

  const counts = useMemo(() => ({
    All: allPrograms.length,
    Undergraduate: allPrograms.filter((p) => p.level === 'Undergraduate').length,
    Postgraduate: allPrograms.filter((p) => p.level === 'Postgraduate').length,
    Doctoral: allPrograms.filter((p) => p.level === 'Doctoral').length,
  }), []);

  const hasActiveFilters = activeLevel !== 'All' || activeDept !== 'All Departments' || search !== '';

  const clearFilters = () => {
    setActiveLevel('All');
    setActiveDept('All Departments');
    setSearch('');
  };

  return (
    <section className="py-12 md:py-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Level Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {(['Undergraduate', 'Postgraduate', 'Doctoral'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(activeLevel === level ? 'All' : level)}
              className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                activeLevel === level
                  ? 'ring-2 ring-primary-600 shadow-lg'
                  : 'hover:shadow-md'
              }`}
            >
              <div className="relative h-44">
                <Image
                  src={levelImages[level]}
                  alt={level}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-white/70 text-sm font-medium">
                    {counts[level]} Programs
                  </span>
                  <h3 className="text-white font-bold text-xl leading-tight mt-0.5">
                    {level}
                  </h3>
                </div>
                {activeLevel === level && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-white" weight="bold" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Level Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {levels.map((level) => {
            const isActive = activeLevel === level;
            const count = counts[level as keyof typeof counts];
            return (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`
                  relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                  ${isActive
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 shadow-sm border border-neutral-200'
                  }
                `}
              >
                {level === 'All' ? 'All Programs' : level}
                <span className={`ml-2 text-xs font-medium ${isActive ? 'text-white/80' : 'text-neutral-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-4 md:p-5 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search programs..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  <X className="h-4 w-4 text-neutral-500" />
                </button>
              )}
            </div>

            {/* Department Select */}
            <div className="relative min-w-[240px]">
              <Buildings className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none z-10" />
              <select
                value={activeDept}
                onChange={(e) => setActiveDept(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-800 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 transition-all"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <FunnelSimple className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
            </div>
          </div>

          {/* Active Filter Indicator */}
          {hasActiveFilters && (
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100">
              <span className="text-sm text-neutral-500">
                Showing <strong className="text-neutral-800">{filtered.length}</strong> of {allPrograms.length} programs
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
              >
                <X className="h-3.5 w-3.5" />
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Programs List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((program, index) => {
              const colors = deptColors[program.department] || { border: 'border-l-neutral-400', bg: 'bg-neutral-50', text: 'text-neutral-600' };
              const accColors = program.accreditation ? accreditationColors[program.accreditation] : null;

              return (
                <motion.div
                  key={program.name}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.03, 0.3) }}
                  className={`group bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-200 border-l-4 ${colors.border} overflow-hidden`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-5 md:p-6 gap-4">
                    {/* Program Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3">
                        <h3 className="text-base md:text-lg font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors leading-tight">
                          {program.name}
                        </h3>
                        {program.accreditation && accColors && (
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0 ${accColors.bg} ${accColors.text}`}>
                            <ShieldCheck className="h-3.5 w-3.5" weight="bold" />
                            {program.accreditation}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2.5">
                        <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                          <Clock className="h-4 w-4 text-neutral-400" />
                          {program.duration}
                        </span>
                        <span className="hidden md:inline text-neutral-300">|</span>
                        <span className="flex items-center gap-1.5 text-sm text-neutral-500">
                          <GraduationCap className="h-4 w-4 text-neutral-400" />
                          {program.level}
                        </span>
                        <span className="hidden md:inline text-neutral-300">|</span>
                        <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.text}`}>
                          <Buildings className="h-4 w-4" />
                          {program.subDepartment || program.department}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href="/admissions/how-to-apply"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border-2 border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-200"
                      >
                        Apply Now
                      </Link>
                      <Link
                        href="/academics/departments"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-neutral-100 text-neutral-700 text-sm font-semibold hover:bg-neutral-200 transition-all duration-200"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center mx-auto mb-4">
              <MagnifyingGlass className="h-8 w-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">No programs found</h3>
            <p className="text-neutral-500 mb-6">Try adjusting your filters or search query.</p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm">
              <p className="text-neutral-600 text-lg">Ready to begin your academic journey?</p>
              <Link
                href="/admissions/how-to-apply"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
              >
                Apply for Admission
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
