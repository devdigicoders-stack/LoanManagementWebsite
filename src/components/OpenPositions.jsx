import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, Clock, Folder, ChevronDown, ArrowRight, Check, CheckCircle2, Circle, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locationData, DEPARTMENTS, departmentDesignations } from '../data/locations';

// Custom Dropdown Component with search filter and multi-select
const FilterDropdown = ({ options, value, onChange, placeholder, icon: Icon, disabled = false, disabledMessage = '' }) => {
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

  const displayValue = value.length > 0 
    ? (value.length === 1 ? value[0] : `${value.length} Selected`) 
    : (disabled && disabledMessage ? disabledMessage : placeholder);

  return (
    <div className="relative w-full md:w-64" ref={dropdownRef}>
      <button
        type="button"
        disabled={disabled}
        className={`w-full flex items-center justify-between px-4 py-3 border rounded-xl text-sm transition-all focus:outline-none ${
          disabled 
            ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
            : value.length > 0
              ? 'bg-sky-50/60 border-[#0EA5E9] text-gray-900 font-semibold shadow-sm'
              : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 focus:border-[#0EA5E9] shadow-sm'
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 truncate">
          {Icon && <Icon size={18} className={disabled ? "text-gray-300 shrink-0" : value.length > 0 ? "text-[#0EA5E9] shrink-0" : "text-gray-500 shrink-0"} />}
          <span className="truncate">{displayValue}</span>
        </div>
        <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && !disabled && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-80 flex flex-col">
          <div className="p-3 border-b border-gray-100 sticky top-0 bg-white z-10">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#0EA5E9]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          <div className="overflow-y-auto p-2 flex-1 custom-scrollbar">
            {value.length > 0 && (
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); clearSelection(); }}
                className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg mb-1 font-medium transition-colors"
              >
                Clear Selection
              </button>
            )}
            {filteredOptions.map((opt, idx) => {
              const isSelected = value.includes(opt);
              return (
                <div 
                  key={idx}
                  className={`flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors ${isSelected ? 'bg-sky-50' : ''}`}
                  onClick={() => toggleOption(opt)}
                >
                  <input 
                    type="checkbox" 
                    checked={isSelected}
                    readOnly
                    className="w-4 h-4 text-[#0EA5E9] rounded border-gray-300 focus:ring-[#0EA5E9] cursor-pointer"
                  />
                  <span className="truncate text-sm text-gray-800">{opt}</span>
                </div>
              );
            })}
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

  const availableDistricts = selectedStates.length > 0 
    ? selectedStates.flatMap(state => locationData[state] || []).sort()
    : [];

  const availableDesignations = selectedDepartments.length > 0
    ? selectedDepartments.flatMap(dept => departmentDesignations[dept] || []).sort()
    : [];

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

  // All 4 filter fields must be selected to display opportunities
  const allFiltersSelected = 
    selectedDepartments.length > 0 &&
    selectedDesignations.length > 0 &&
    selectedStates.length > 0 &&
    selectedDistricts.length > 0;

  const resetAllFilters = () => {
    setSelectedDepartments([]);
    setSelectedDesignations([]);
    setSelectedStates([]);
    setSelectedDistricts([]);
    setSearchQuery('');
  };

  const filteredJobs = allFiltersSelected ? jobs.filter(job => {
    const matchSearch = searchQuery.trim() === '' || 
                        (job.title && job.title.toLowerCase().includes(searchQuery.toLowerCase())) || 
                        (job.department && job.department.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchDept = selectedDepartments.some(d => (job.department || '').toLowerCase() === d.toLowerCase());
      
    const matchDesig = selectedDesignations.some(desig => (job.title || '').toLowerCase() === desig.toLowerCase());

    const matchState = selectedStates.some(st => (job.location || '').toLowerCase().includes(st.toLowerCase()));

    const matchDistrict = selectedDistricts.some(dt => (job.location || '').toLowerCase().includes(dt.toLowerCase()));

    return matchSearch && matchDept && matchDesig && matchState && matchDistrict;
  }) : [];

  const filterSteps = [
    { name: 'Department', selected: selectedDepartments.length > 0, count: selectedDepartments.length },
    { name: 'Designation', selected: selectedDesignations.length > 0, count: selectedDesignations.length },
    { name: 'State', selected: selectedStates.length > 0, count: selectedStates.length },
    { name: 'District', selected: selectedDistricts.length > 0, count: selectedDistricts.length },
  ];

  const completedCount = filterSteps.filter(s => s.selected).length;

  return (
    <section id="open-positions" className="py-24 px-6 md:px-12 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Open Positions</h2>
          <p className="text-gray-500 text-lg md:text-xl">Come, join the NuoG crew!</p>
        </div>

        {/* Filter Section */}
        <div className="mb-10 space-y-6">
          {allFiltersSelected && (
            <div className="relative max-w-2xl mx-auto">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search roles or keywords in filtered jobs..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#0EA5E9] focus:ring-4 focus:ring-[#0EA5E9]/10 transition-all text-gray-800 font-medium shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          {/* 4 Filters */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <FilterDropdown
              options={DEPARTMENTS}
              value={selectedDepartments}
              onChange={setSelectedDepartments}
              placeholder="1. Select Department *"
              icon={Folder}
            />

            <FilterDropdown
              options={availableDesignations}
              value={selectedDesignations}
              onChange={setSelectedDesignations}
              placeholder="2. Select Designation *"
              disabled={selectedDepartments.length === 0}
              disabledMessage="Select Department first"
              icon={Folder}
            />

            <FilterDropdown
              options={states}
              value={selectedStates}
              onChange={setSelectedStates}
              placeholder="3. Select State *"
              icon={MapPin}
            />

            <FilterDropdown
              options={availableDistricts}
              value={selectedDistricts}
              onChange={setSelectedDistricts}
              placeholder="4. Select District *"
              disabled={selectedStates.length === 0}
              disabledMessage="Select State first"
              icon={MapPin}
            />
          </div>

          {/* Clear Filters Button if anything is selected */}
          {(selectedDepartments.length > 0 || selectedDesignations.length > 0 || selectedStates.length > 0 || selectedDistricts.length > 0) && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-500 bg-gray-100 hover:bg-red-50 px-3.5 py-1.5 rounded-full transition-colors"
              >
                <RotateCcw size={13} /> Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-16 text-gray-500 font-medium">Loading open positions...</div>
        ) : !allFiltersSelected ? (
          /* Guide card when not all 4 filters are selected */
          <div className="text-center py-12 px-6 bg-[#fcfcfc] border border-gray-200/80 rounded-3xl max-w-2xl mx-auto shadow-sm">
            <div className="w-16 h-16 mx-auto bg-sky-50 text-[#0EA5E9] rounded-full flex items-center justify-center mb-4">
              <Folder size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Select All Filters to View Opportunities</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              Please select all 4 fields (Department, Designation, State, and District) above to discover open positions matching your criteria.
            </p>

            {/* Step Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto">
              {filterSteps.map((step, idx) => (
                <div 
                  key={idx} 
                  className={`p-3 rounded-xl border text-left transition-all ${
                    step.selected 
                      ? 'bg-sky-50/80 border-[#0EA5E9] text-slate-900' 
                      : 'bg-white border-gray-200 text-gray-400'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    {step.selected ? (
                      <CheckCircle2 size={16} className="text-[#0EA5E9] shrink-0" />
                    ) : (
                      <Circle size={16} className="text-gray-300 shrink-0" />
                    )}
                    <span className="text-xs font-bold truncate">Step {idx + 1}</span>
                  </div>
                  <p className={`text-xs font-semibold truncate ${step.selected ? 'text-sky-700' : 'text-gray-500'}`}>
                    {step.name}
                  </p>
                  <p className="text-[10px] mt-0.5 text-gray-400">
                    {step.selected ? `${step.count} selected` : 'Pending'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* When all 4 filters are selected, display job listings */
          <div>
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="text-sm font-semibold text-slate-700">
                Found <span className="text-[#0EA5E9] font-bold">{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'Opportunity' : 'Opportunities'}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredJobs.map(job => {
                const openingsLeft = (job.openings || 1) - (job.hiredCount || 0);
                
                return (
                  <div key={job._id} className="bg-[#fcfcfc] rounded-2xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#E0F2FE] flex flex-col group hover:-translate-y-0.5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="inline-block bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-600 shadow-sm border border-gray-100 group-hover:text-[#0EA5E9] transition-colors">
                        {job.department}
                      </div>
                      {openingsLeft > 0 && (
                        <div className="inline-block bg-[#E0F2FE] text-[#0284C7] px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                          {openingsLeft} {openingsLeft === 1 ? 'Seat' : 'Seats'} Left
                        </div>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug flex-grow">{job.title}</h3>

                    <div className="space-y-1.5 mb-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-gray-400 shrink-0" />
                        <span className="text-xs">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={13} className="text-gray-400 shrink-0" />
                        <span className="text-xs">{job.type}</span>
                      </div>
                    </div>

                    <Link
                      to={`/careers/${job._id}`}
                      className="inline-flex items-center gap-1.5 w-max bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm"
                    >
                      Apply Now <ArrowRight size={13} />
                    </Link>
                  </div>
                );
              })}

              {filteredJobs.length === 0 && (
                <div className="col-span-full text-center py-16 px-6 bg-[#fcfcfc] border border-gray-100 rounded-3xl">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-400">
                    <Search size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No positions found</h3>
                  <p className="text-gray-500 mb-4 text-sm max-w-md mx-auto">
                    We couldn't find any open positions matching your selected combination. Try selecting a different location or role.
                  </p>
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0EA5E9] hover:underline"
                  >
                    <RotateCcw size={14} /> Reset Filters
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
