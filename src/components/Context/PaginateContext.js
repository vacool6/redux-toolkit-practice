import { createContext, useContext, useState } from "react";

export const PaginateContext = createContext({});

export const usePaginate = () => useContext(PaginateContext);

const PaginateProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const paginate = (value) => {
    setCurrentPage(value);
  };

  const values = {
    currentPage,
    itemsPerPage,
    lastItemIndex,
    firstItemIndex,
    paginate,
  };

  return (
    <PaginateContext.Provider value={values}>
      {children}
    </PaginateContext.Provider>
  );
};

export default PaginateProvider;
