import React from "react";
import styles from "./ListingTable.module.css";
import { useTable, useSortBy, usePagination } from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowUpShortWide,
  faAnglesRight,
  faAnglesLeft,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

const ListingTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    state,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  const pageNumbers = [10, 25, 50];

  return (
    <>
      <header>
        <select
          className={styles["select-pages"]}
          name="pages"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {pageNumbers.map((pageNum) => {
            return (
              <option key={pageNum} value={pageNum}>
                Show {pageNum}
              </option>
            );
          })}
        </select>
      </header>
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className={styles["table-header"]}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className={styles["header-cell"]}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <div className={styles.sorting}>
                    <span>{column.render("Header")}</span>
                    {column.isSorted && (
                      <FontAwesomeIcon
                        className={styles.btn}
                        icon={
                          column.isSortedDesc
                            ? faArrowUpShortWide
                            : faArrowDownShortWide
                        }
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td className={styles["body-cell"]} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.footer}>
        <button
          className={styles.arrows}
          disabled={!canPreviousPage}
          onClick={() => gotoPage(0)}
        >
          <FontAwesomeIcon icon={faBackwardStep} />
        </button>
        <button
          className={styles.arrows}
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <span className={styles["pages-text"]}>{` ${pageIndex + 1} di ${
          pageOptions.length
        } `}</span>
        <button
          className={styles.arrows}
          disabled={!canNextPage}
          onClick={() => nextPage()}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
        <button
          className={styles.arrows}
          disabled={!canNextPage}
          onClick={() => gotoPage(pageCount - 1)}
        >
          <FontAwesomeIcon icon={faForwardStep} />
        </button>
      </div>
    </>
  );
};

export default ListingTable;
