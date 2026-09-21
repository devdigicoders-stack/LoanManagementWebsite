import React, { useState, useRef, useEffect } from 'react';
import {
  Search, MapPin, Clock, Folder, ChevronDown, ArrowRight, Check, CheckCircle2,
  Circle, RotateCcw, Briefcase, Sparkles, Filter, Building, Compass, UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { locationData, DEPARTMENTS, departmentDesignations } from '../data/locations';

// Custom Dropdown Component with search filter and multi-select
const FilterDropdown = ({ options, value, onChange, placeholder, stepNumber, icon: Icon, disabled = false, disabledMessage = '' }) => {
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

  const filteredOptions = (options || []).filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

  const toggleOption = (opt) => {
    if (value.includes(opt)) {
      onChange(value.filter(v => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  };

  const clearSelection = () => {
    onChange([]);
    setIsOpen(false);
    setSearch('');
  };

  const isSelected = value.length > 0;
  const displayValue = isSelected
    ? (value.length === 1 ? value[0] : `${value.length} Selected`)
    : (disabled && disabledMessage ? disabledMessage : placeholder);

  return (
    <div className="relative w-full md:w-64" ref={dropdownRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-200 focus:outline-none select-none border ${disabled
            ? 'bg-slate-50/80 border-slate-200/70 text-slate-400 cursor-not-allowed'
            : isSelected
              ? 'bg-sky-50/80 border-sky-400 text-sky-900 shadow-sm ring-2 ring-sky-400/20'
              : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-slate-50/50 shadow-xs'
          }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${disabled
              ? 'bg-slate-100 text-slate-400'
              : isSelected
                ? 'bg-[#0EA5E9] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600'
            }`}>
            {isSelected ? <Check size={12} strokeWidth={3} /> : stepNumber}
          </div>
          <span className="truncate">{displayValue}</span>
        </div>
        <ChevronDown size={16} className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} />
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 left-0 sm:left-auto w-full sm:w-80 mt-2 bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-72 flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="p-3 border-b border-slate-100 sticky top-0 bg-slate-50/90 backdrop-blur-xs z-10">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          <div className="overflow-y-auto p-2 flex-1 custom-scrollbar">
            {isSelected && (
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); clearSelection(); }}
                className="w-full text-left px-3 py-2 text-xs text-red-500 hover:bg-red-50 rounded-xl mb-1 font-bold transition-colors flex items-center justify-between"
              >
                <span>Clear Selection</span>
                <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-mono">Reset</span>
              </button>
            )}
            {filteredOptions.map((opt, idx) => {
              const optionActive = value.includes(opt);
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-3 py-2.5 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors text-xs ${optionActive ? 'bg-sky-50/80 font-bold text-sky-900' : 'text-slate-700 font-medium'
                    }`}
                  onClick={() => toggleOption(opt)}
                >
                  <input
                    type="checkbox"
                    checked={optionActive}
                    readOnly
                    className="w-4 h-4 text-[#0EA5E9] rounded border-slate-300 focus:ring-[#0EA5E9] accent-[#0EA5E9] cursor-pointer"
                  />
                  <span className="truncate flex-1">{opt}</span>
                </div>
              );
            })}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-6 text-xs text-slate-400 text-center font-medium">No options match "{search}"</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const OpenPositions = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedDesignations, setSelectedDesignations] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/recruitment/jobs?status=Open`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setJobs(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const states = Object.keys(locationData).sort();

  const availableDepartments = Array.from(
    new Set([
      ...DEPARTMENTS,
      ...jobs.map(j => j.department).filter(Boolean)
    ])
  ).sort();

  const availableDistricts = selectedStates.length > 0
    ? selectedStates.flatMap(state => locationData[state] || []).sort()
    : [];

  const availableDesignations = (() => {
    // 1. Static standard designations
    const staticList = selectedDepartments.length > 0
      ? selectedDepartments.flatMap(dept => departmentDesignations[dept] || [])
      : Object.values(departmentDesignations).flat();

    // 2. Dynamic live job titles and designations from the backend
    const liveJobTitles = jobs
      .filter(job => selectedDepartments.length === 0 || selectedDepartments.some(d => (job.department || '').toLowerCase() === d.toLowerCase()))
      .flatMap(job => [job.designation, job.title])
      .filter(Boolean);

    // Combine and deduplicate
    return Array.from(new Set([...staticList, ...liveJobTitles])).sort();
  })();

  useEffect(() => {
    if (selectedStates.length > 0) {
      const validDistricts = selectedDistricts.filter(dist => availableDistricts.includes(dist));
      if (validDistricts.length !== selectedDistricts.length) {
        setSelectedDistricts(validDistricts);
      }
    } else {
      setSelectedDistricts([]);
    }
  }, [selectedStates]);

  useEffect(() => {
    if (selectedDepartments.length > 0) {
      const validDesignations = selectedDesignations.filter(des => availableDesignations.includes(des));
      if (validDesignations.length !== selectedDesignations.length) {
        setSelectedDesignations(validDesignations);
      }
    } else {
      setSelectedDesignations([]);
    }
  }, [selectedDepartments]);

  const hasAnyFilter =
    selectedDepartments.length > 0 ||
    selectedDesignations.length > 0 ||
    selectedStates.length > 0 ||
    selectedDistricts.length > 0 ||
    searchQuery.trim() !== '';

  const resetAllFilters = () => {
    setSelectedDepartments([]);
    setSelectedDesignations([]);
    setSelectedStates([]);
    setSelectedDistricts([]);
    setSearchQuery('');
  };

  const filteredJobs = jobs.filter(job => {
    const matchSearch = searchQuery.trim() === '' ||
      (job.title && job.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.designation && job.designation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.department && job.department.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchDept = selectedDepartments.length === 0 || selectedDepartments.some(d => (job.department || '').toLowerCase() === d.toLowerCase());

    const matchDesig = selectedDesignations.length === 0 || selectedDesignations.some(desig => {
      const d = desig.toLowerCase().trim();
      const t = (job.title || '').toLowerCase().trim();
      const dg = (job.designation || '').toLowerCase().trim();
      return t === d || t.includes(d) || d.includes(t) || dg === d || dg.includes(d) || d.includes(dg);
    });

    const matchState = selectedStates.length === 0 || selectedStates.some(st => (job.location || '').toLowerCase().includes(st.toLowerCase()));

    const matchDistrict = selectedDistricts.length === 0 || selectedDistricts.some(dt => (job.location || '').toLowerCase().includes(dt.toLowerCase()));

    return matchSearch && matchDept && matchDesig && matchState && matchDistrict;
  });

  const filterSteps = [
    { name: 'Department', selected: selectedDepartments.length > 0, count: selectedDepartments.length, desc: 'Choose division' },
    { name: 'Designation', selected: selectedDesignations.length > 0, count: selectedDesignations.length, desc: 'Select role' },
    { name: 'State', selected: selectedStates.length > 0, count: selectedStates.length, desc: 'Choose state' },
    { name: 'District', selected: selectedDistricts.length > 0, count: selectedDistricts.length, desc: 'Select location' },
  ];

  const completedCount = filterSteps.filter(s => s.selected).length;
  const progressPercent = (completedCount / 4) * 100;
  const allFiltersSelected = completedCount === 4;

  return (
    <section id="open-positions" className="py-24 px-6 md:px-12 bg-slate-50/50 text-slate-900 relative overflow-visible min-h-[550px]">

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-sky-100/40 via-blue-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto pb-12">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 text-[#0284C7] text-xs font-black uppercase tracking-wider mb-4 border border-sky-200/60 shadow-xs">
            <Sparkles size={14} /> Career Opportunities
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Find Your Dream Role
          </h2>
          <p className="text-slate-500 text-sm md:text-base mt-2.5 max-w-xl mx-auto font-medium">
            Discover opening positions tailored to your department, role, and location preference.
          </p>
        </div>

        {/* Filter Container Card */}
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-sm mb-10 relative z-20">

          {/* Progress tracker bar */}
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-2">
              <span className="flex items-center gap-1.5">
                <Filter size={14} className="text-[#0EA5E9]" />
                <span>Filter Criteria Progress</span>
              </span>
              <span className="font-black text-[#0EA5E9]">
                {completedCount} of 4 Filters Selected ({progressPercent}%)
              </span>
            </div>

            {/* Progress bar track */}
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-[#0EA5E9] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Search box if all filters selected */}
          {allFiltersSelected && (
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search within filtered opportunities..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-[#0EA5E9] focus:bg-white focus:ring-4 focus:ring-[#0EA5E9]/10 transition-all text-slate-800 text-xs font-semibold shadow-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          {/* 4 Interactive Dropdown Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4">
            <FilterDropdown
              stepNumber={1}
              options={availableDepartments}
              value={selectedDepartments}
              onChange={setSelectedDepartments}
              placeholder="1. Department"
              icon={Building}
            />

            <FilterDropdown
              stepNumber={2}
              options={availableDesignations}
              value={selectedDesignations}
              onChange={setSelectedDesignations}
              placeholder="2. Designation"
              disabled={selectedDepartments.length === 0}
              disabledMessage="Choose Dept First"
              icon={Briefcase}
            />

            <FilterDropdown
              stepNumber={3}
              options={states}
              value={selectedStates}
              onChange={setSelectedStates}
              placeholder="3. State"
              icon={Compass}
            />

            <FilterDropdown
              stepNumber={4}
              options={availableDistricts}
              value={selectedDistricts}
              onChange={setSelectedDistricts}
              placeholder="4. District"
              disabled={selectedStates.length === 0}
              disabledMessage="Choose State First"
              icon={MapPin}
            />
          </div>

          {/* Clear Filters Button if anything is selected */}
          {(selectedDepartments.length > 0 || selectedDesignations.length > 0 || selectedStates.length > 0 || selectedDistricts.length > 0) && (
            <div className="flex justify-center mt-6 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-4 py-2 rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw size={13} /> Reset All 4 Filters
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        {loading ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-16 text-center text-slate-500 font-bold shadow-xs">
            <div className="w-8 h-8 border-3 border-[#0EA5E9] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            Loading available positions...
          </div>
        ) : !allFiltersSelected ? (
          <div className="text-center py-12 px-4">
            <p className="text-slate-400 font-semibold text-sm md:text-base flex items-center justify-center gap-2">
              <Filter size={16} className="text-[#0EA5E9]" />
              <span>First select all filters to view available jobs.</span>
            </p>
          </div>
        ) : (
          /* Job Listings Grid */
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
              <div className="text-xs font-bold text-slate-600 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>
                  Filtered Opportunities:{' '}
                  <strong className="text-[#0EA5E9] text-sm">{filteredJobs.length}</strong>{' '}
                  {filteredJobs.length === 1 ? 'position found' : 'positions found'}
                </span>
              </div>
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs font-bold text-red-500 hover:text-red-700 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <RotateCcw size={12} /> Clear Filter
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map(job => {
                const openingsLeft = (job.openings || 1) - (job.hiredCount || 0);

                return (
                  <div
                    key={job._id}
                    className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-block bg-sky-50 text-[#0284C7] px-3 py-1 rounded-full text-[11px] font-black border border-sky-100 group-hover:bg-[#0EA5E9] group-hover:text-white transition-colors">
                        {job.department}
                      </div>
                      {openingsLeft > 0 && (
                        <div className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                          {openingsLeft} {openingsLeft === 1 ? 'Opening' : 'Openings'}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <h3 className="text-base font-black text-slate-900 leading-snug group-hover:text-[#0EA5E9] transition-colors">
                        {job.title || 'HAUS NUO-Pay Career Opening'}
                      </h3>
                      <p className="text-xs font-bold text-[#0284C7] mt-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]"></span>
                        {job.designation || job.title}
                      </p>
                    </div>

                    <div className="space-y-2 mb-5 text-slate-500 text-xs font-medium border-t border-slate-100 pt-3">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-[#0EA5E9] shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-slate-400 shrink-0" />
                        <span>{job.type || 'Full Time'}</span>
                      </div>
                    </div>

                    <Link
                      to={`/careers/${job._id}`}
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-black py-2.5 px-4 rounded-xl transition-all shadow-xs group-hover:shadow-md mt-auto"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}

              {filteredJobs.length === 0 && (
                <div className="col-span-full text-center py-16 px-6 bg-white border border-slate-200 rounded-3xl shadow-xs">
                  <div className="w-14 h-14 mx-auto bg-slate-100 rounded-2xl flex items-center justify-center mb-4 text-slate-400">
                    <Search size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-1">No Openings Match This Selection</h3>
                  <p className="text-slate-500 mb-5 text-xs max-w-md mx-auto font-medium">
                    We currently do not have vacancies for this specific combination of department, designation, and district.
                  </p>
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#0EA5E9] hover:underline"
                  >
                    <RotateCcw size={14} /> Try Another Filter Combination
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenPositions;
