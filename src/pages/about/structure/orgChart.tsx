import { TDepartment, TLanguages } from "@/types";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { useTimeout } from "usehooks-ts";
import { cn } from "@/libs";
import ReactDOM from "react-dom";

interface OrgChartProps {
  departments: TDepartment[];
  currentLang: TLanguages;
  setId: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  portalContainer: HTMLElement | null;
  childPortalContainer: HTMLElement | null;
}

export const OrgChart: React.FC<OrgChartProps> = ({
  departments,
  currentLang = "uz",
  setOpen,
  setId,
  portalContainer,
  childPortalContainer,
}) => {
  const rootNodes = departments.filter((dept) => dept.parentId === null);
  const heightRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const parentHeightRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const getChildren = (parentId: number) => {
    return departments.filter((dept) => dept.parentId === parentId);
  };

  useTimeout(() => {
    parentHeightRefs.current.forEach((parentEl, parentId) => {
      const childHeightEl = heightRefs.current.get(parentId);
      if (childHeightEl && !parentEl.className.includes("customized_height")) {
        parentEl.style.height = `${childHeightEl.clientHeight + parentEl.clientHeight + 20}px`;
        parentEl.classList.add("customized_height");
      }
    });
  }, 500);

  return (
    <div className="flex flex-col items-center gap-6 structure-head relative">
      <div className="flex gap-6 relative">
        {rootNodes.map((item) => {
          const children = getChildren(item.id);
          const hasChildren = children.length > 0;

          return (
            <div key={item.id} className="flex items-center relative">
              <div
                onClick={() => {
                  setId(item.managementId);
                  setOpen(true);
                }}
                className={cn(
                  "bg-[#764AE6] text-white text-[1vw] cursor-pointer p-2 py-4 1380:p-4 rounded-md w-[18vw] 1380:w-64 text-center relative structure-head-item",
                  { "has-children": hasChildren },
                )}
              >
                <div className="font-medium">
                  {item.name[currentLang] || item.name.uz || "Unnamed"}
                </div>
                {item.staffCount && (
                  <div className="absolute bottom-1 right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {item.staffCount}
                  </div>
                )}
              </div>

              {hasChildren &&
                portalContainer &&
                ReactDOM.createPortal(
                  <div className="flex items-start gap-4">
                    {children.map((child) => {
                      const childrensChild = getChildren(child.id);

                      return (
                        <>
                          {!!childrensChild.length && (
                            <div className={"structure-sub-item"}>
                              <div
                                key={child.id}
                                className="bg-primary text-white text-[1vw] cursor-pointer p-2 py-4 1380:p-4 rounded-md w-[18vw] 1380:w-64 text-center relative mt-4 head structure-child-item"
                                onClick={() => {
                                  setId(child.managementId);
                                  setOpen(true);
                                }}
                              >
                                <div className="font-medium">
                                  {child.name[currentLang] ||
                                    child.name.uz ||
                                    "Unnamed"}
                                </div>
                                {child.staffCount && (
                                  <div className="absolute bottom-1 right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {child.staffCount}
                                  </div>
                                )}
                              </div>
                              {childrensChild.map((child) => {
                                const children = getChildren(child.id);
                                return (
                                  <div
                                    className={cn(
                                      "relative structure-sub-child-item",
                                      { "has-children": !!children.length },
                                    )}
                                    id={"plus-height"}
                                    ref={(el) => {
                                      if (el)
                                        parentHeightRefs.current.set(
                                          child.id,
                                          el,
                                        );
                                      else
                                        parentHeightRefs.current.delete(
                                          child.id,
                                        );
                                    }}
                                  >
                                    <div
                                      key={child.id}
                                      className={cn(
                                        "bg-[#30D298] text-white text-[1vw] cursor-pointer p-2 py-4 1380:p-4 rounded-md w-[18vw] 1380:w-64 text-center relative mt-4 structure-child-item",
                                        { "has-children": !!children.length },
                                      )}
                                      onClick={() => {
                                        setId(child.managementId);
                                        setOpen(true);
                                      }}
                                    >
                                      <div className="font-medium">
                                        {child.name[currentLang] ||
                                          child.name.uz ||
                                          "Unnamed"}
                                      </div>
                                      {child.staffCount && (
                                        <div className="absolute bottom-1 right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                          {child.staffCount}
                                        </div>
                                      )}
                                    </div>
                                    {!!children.length && (
                                      <div
                                        id={"height"}
                                        ref={(el) => {
                                          if (el)
                                            heightRefs.current.set(
                                              child.id,
                                              el,
                                            );
                                          else
                                            heightRefs.current.delete(child.id);
                                        }}
                                        className={
                                          "flex gap-x-5  min-w-[500px] max-w-[600px] xl:min-w-[600px] xl:max-w-[600px] !w-full flex-wrap absolute"
                                        }
                                      >
                                        {children.map((child) => (
                                          <div
                                            key={child.id}
                                            className="bg-[#FC5B20] text-white text-[1vw] cursor-pointer p-2 py-4 1380:p-4 rounded-md w-[18vw] 1380:w-64 text-center relative mt-4 structure-sub-child-item-child"
                                            onClick={() => {
                                              setId(child.managementId);
                                              setOpen(true);
                                            }}
                                          >
                                            <div className="font-medium">
                                              {child.name[currentLang] ||
                                                child.name.uz ||
                                                "Unnamed"}
                                            </div>
                                            {child.staffCount && (
                                              <div className="absolute bottom-1 right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                                {child.staffCount}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {!childrensChild.length &&
                            childPortalContainer &&
                            ReactDOM.createPortal(
                              <div
                                key={child.id}
                                className="bg-primary text-white text-[1vw] cursor-pointer p-2 py-4 1380:p-4 rounded-md w-[18vw] 1380:w-64 text-center relative mt-4 structure-child-grid-item"
                                onClick={() => {
                                  setId(child.managementId);
                                  setOpen(true);
                                }}
                              >
                                <div className="font-medium">
                                  {child.name[currentLang] ||
                                    child.name.uz ||
                                    "Unnamed"}
                                </div>
                                {child.staffCount && (
                                  <div className="absolute bottom-1 right-2 bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {child.staffCount}
                                  </div>
                                )}
                              </div>,
                              childPortalContainer,
                            )}
                        </>
                      );
                    })}
                  </div>,
                  portalContainer,
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
