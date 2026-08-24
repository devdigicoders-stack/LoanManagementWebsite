import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Clock, Folder, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

// Custom Dropdown Component with search filter
const FilterDropdown = ({ options, value, onChange, placeholder, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative w-full md:w-64" ref={dropdownRef}>
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:border-gray-300 transition-colors focus:outline-none focus:border-[#0EA5E9]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {Icon && <Icon size={18} className="text-gray-500" />}
          <span className="text-sm font-medium">{value || placeholder}</span>
        </div>
        <ChevronDown size={18} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-2 border-b border-gray-100">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0EA5E9] focus:bg-white transition-colors"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="max-h-56 overflow-y-auto">
            <div
              className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-[#E0F2FE] transition-colors ${!value ? 'font-bold text-[#0EA5E9]' : 'text-gray-700'}`}
              onClick={() => { onChange(''); setIsOpen(false); setSearch(''); }}
            >
              {placeholder}
            </div>
            {filteredOptions.map((opt, i) => (
              <div
                key={i}
                className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-[#E0F2FE] transition-colors ${value === opt ? 'font-bold text-[#0EA5E9]' : 'text-gray-700'}`}
                onClick={() => { onChange(opt); setIsOpen(false); setSearch(''); }}
              >
                {opt}
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-4 text-sm text-gray-500 text-center">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const OpenPositions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');

  const departments = [...new Set(jobs.map(j => j.department))].sort();
  const locations = [...new Set(jobs.map(j => j.location))].sort();

  const filteredJobs = jobs.filter(job => {
    const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDept = department ? job.department === department : true;
    const matchLoc = location ? job.location === location : true;
    return matchSearch && matchDept && matchLoc;
  });

  return (
    <section id="open-positions" className="py-24 px-6 md:px-12 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Open Positions</h2>
          <p className="text-gray-500 text-lg md:text-xl">Come, join the NuoG crew!</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search roles or departments..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 transition-all text-gray-800 font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <FilterDropdown
              options={departments}
              value={department}
              onChange={setDepartment}
              placeholder="All departments"
              icon={Folder}
            />
            <FilterDropdown
              options={locations}
              value={location}
              onChange={setLocation}
              placeholder="All locations"
              icon={MapPin}
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-[#fcfcfc] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E0F2FE] flex flex-col h-full group hover:-translate-y-1">
              <div className="inline-block bg-white px-5 py-2 rounded-full text-sm font-bold text-slate-700 w-max mb-6 shadow-sm border border-gray-100 group-hover:text-[#0EA5E9] transition-colors">
                {job.department}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">{job.title}</h3>

              <div className="space-y-3 mb-8 text-slate-600 flex-grow font-medium">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-400" />
                  <span>{job.type} • {job.workspace}</span>
                </div>
              </div>

              <Link
                to={`/careers/${job.id}`}
                className="inline-flex justify-center items-center gap-2 w-max bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="col-span-1 md:col-span-2 text-center py-16 px-6 bg-[#fcfcfc] border border-gray-100 rounded-3xl">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No positions found</h3>
              <p className="text-gray-500">We couldn't find any open roles matching your search criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OpenPositions;
