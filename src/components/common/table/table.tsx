import { Table, TableProps } from "antd";
import { ColumnsType, IAntTableProps } from "@/types";
import "./table.css";
import { useMediaQuery } from "@/hooks";
import { useEffect, useState } from "react";

export const AntTable = ({
  columns,
  rowSelection,
  dataSource,
  loading,
  onChange,
  pagination,
  setParams,
  withoutPagination,
  ...props
}: IAntTableProps) => {
  const { tabletXs, mobile, tabletLg } = useMediaQuery();
  const [responsiveColumns, setResponsiveColumns] = useState<ColumnsType<any>>(
    columns || [],
  );
  const handleTableChange: TableProps["onChange"] = (pagination) =>
    setParams &&
    setParams((prev) => ({
      ...prev,
      page: pagination.current,
      limit: pagination.pageSize,
      sortOrder: "ASC",
    }));

  useEffect(() => {
    const updatedColumns: ColumnsType<any> = tabletLg
      ? (columns || []).map((e, idx) => {
          if (idx === 0) return { ...e, width: "auto" };
          if (idx === 1 && !mobile)
            return {
              ...e,
              width: "auto",
              responsive: ["xs", "sm", "lg", "xl"],
            };
          if (idx === 2 && !tabletXs)
            return {
              ...e,
              width: !e?.title ? "10%" : "auto",
              responsive: ["xs", "sm", "lg", "xl"],
            };
          return { ...e, responsive: ["lg", "xl"], width: "auto" };
        })
      : columns || [];

    setResponsiveColumns(updatedColumns);
  }, [columns, tabletLg, tabletXs, mobile]);

  return (
    <Table
      columns={responsiveColumns}
      size="middle"
      dataSource={dataSource}
      pagination={
        withoutPagination
          ? false
          : { showSizeChanger: true, size: "default", ...pagination }
      }
      loading={loading}
      expandable={{
        showExpandColumn: tabletLg,
        expandedRowRender: (_, index) => (
          <>
            {!tabletXs &&
              columns?.reduce((acc: React.ReactNode[], _, idx: number) => {
                if (idx === 0 || idx === 1 || idx === 2) {
                  return acc;
                }

                if (idx % 3 == 0) {
                  acc.push(
                    <Table
                      key={idx}
                      columns={columns?.slice(idx, idx + 3).map((e) => {
                        if (!columns[idx].title)
                          return { ...e, width: "10%", title: "Harakat" };
                        return { ...e, width: "auto" };
                      })}
                      dataSource={dataSource?.slice(index, index + 1)}
                      pagination={false}
                      className="nested-table"
                    />,
                  );
                }

                return acc;
              }, [] as React.ReactNode[])}

            {!mobile &&
              tabletXs &&
              columns?.reduce((acc: React.ReactNode[], _, idx: number) => {
                if (idx === 0 || idx === 1) {
                  return acc;
                }

                if (idx % 2 === 0) {
                  acc.push(
                    <Table
                      key={idx}
                      columns={columns?.slice(idx, idx + 2).map((e) => {
                        if (!columns[idx].title)
                          return { ...e, width: "10%", title: "Harakat" };
                        return { ...e, width: "auto" };
                      })}
                      dataSource={dataSource?.slice(index, index + 1)}
                      pagination={false}
                      className="nested-table"
                    />,
                  );
                }

                return acc;
              }, [] as React.ReactNode[])}

            {mobile && (
              <>
                {columns
                  ?.map((e, idx) => {
                    if (!columns[idx].title)
                      return { ...e, width: "10%", title: "Harakat" };
                    return { ...e, width: "auto" };
                  })
                  .map((_, idx, array) => {
                    if (idx == 0) return;
                    return (
                      <Table
                        columns={array.slice(idx, idx + 1)}
                        dataSource={dataSource?.slice(index, index + 1)}
                        pagination={false}
                        className="nested-table"
                      />
                    );
                  })}
              </>
            )}
          </>
        ),
        rowExpandable: () => tabletLg,
      }}
      className="responsive-table"
      onChange={onChange || handleTableChange}
      rowSelection={tabletLg ? undefined : rowSelection}
      rowKey={(record) => record?.id}
      {...props}
    />
  );
};
