import { useState, useEffect } from 'react';
import companiesData from '../data/companies.json';

export const useCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    industry: '',
    companyType: '',
    city: '',
    sortBy: 'name'
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCompanies(companiesData.companies);
      setFilteredCompanies(companiesData.companies);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let result = companies;

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(company => 
        company.companyName.toLowerCase().includes(searchLower) ||
        company.description.toLowerCase().includes(searchLower) ||
        company.industry.toLowerCase().includes(searchLower)
      );
    }

    // Apply industry filter
    if (filters.industry) {
      result = result.filter(company => company.industry === filters.industry);
    }

    // Apply company type filter
    if (filters.companyType) {
      result = result.filter(company => company.companyType === filters.companyType);
    }

    // Apply city filter
    if (filters.city) {
      result = result.filter(company => company.city === filters.city);
    }

    // Apply sorting
    if (filters.sortBy === 'name') {
      result = [...result].sort((a, b) => a.companyName.localeCompare(b.companyName));
    } else if (filters.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'founded') {
      result = [...result].sort((a, b) => b.foundedYear - a.foundedYear);
    }

    setFilteredCompanies(result);
  }, [companies, filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      industry: '',
      companyType: '',
      city: '',
      sortBy: 'name'
    });
  };

  const getUniqueValues = (key) => {
    return [...new Set(companies.map(company => company[key]))].filter(Boolean);
  };

  return {
    companies: filteredCompanies,
    filters,
    updateFilters,
    clearFilters,
    getUniqueValues,
    loading
  };
};