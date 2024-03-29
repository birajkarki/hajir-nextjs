import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  companies: [],
  pagination: {
    currentPage: 1,
    rowsPerPage: 5,
  },
  companyIdToEdit: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      const newCompany = {
        id: nanoid(),
        ...action.payload,
      };
      state.companies.push(newCompany);
    },
    toggleActiveState: (state, action) => {
      const companyId = action.payload;
      const company = state.companies.find((c) => c.id === companyId);

      if (company) {
        company.status = company.status === "active" ? "inactive" : "active";
      }
    },
    deleteCompany: (state, action) => {
      const companyId = action.payload;
      state.companies = state.companies.filter((c) => c.id !== companyId);
    },
    editCompany: (state, action) => {
      const { id, updatedCompany } = action.payload;
      const index = state.companies.findIndex((c) => c.id === id);

      if (index !== -1) {
        state.companies[index] = {
          ...state.companies[index],
          ...updatedCompany,
        };
      } else {
        const newCompany = {
          id: nanoid(),
          ...updatedCompany,
        };
        state.companies.push(newCompany);
      }
    },
    changePage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.pagination.rowsPerPage = action.payload;
      state.pagination.currentPage = 1;
    },
    setCompanyIdToEdit: (state, action) => {
      state.companyIdToEdit = action.payload;
    },
  },
});

export const {
  addCompany,
  toggleActiveState,
  deleteCompany,
  editCompany,
  changePage,
  setRowsPerPage,
  setCompanyIdToEdit,
} = companySlice.actions;

export default companySlice.reducer;
