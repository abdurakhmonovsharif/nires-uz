"use client";

import { Dispatch, SetStateAction, useRef, useEffect, useState } from "react";
import { TDepartment } from "@/types";
import { OrgChart } from "@/pages/about/structure/orgChart.tsx";

export const StructureCard = ({
  departments,
  setId,
  setOpen,
}: {
  departments: TDepartment[];
  setId: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const portalRef = useRef<HTMLDivElement | null>(null);
  const withoutChildrenRef = useRef<HTMLDivElement | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );
  const [childPortalContainer, setChildPortalContainer] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    if (portalRef.current) {
      setPortalContainer(portalRef.current);
    }
  }, []);
  useEffect(() => {
    if (withoutChildrenRef.current) {
      setChildPortalContainer(withoutChildrenRef.current);
    }
  }, []);

  return (
    <div className="my-10 flex flex-col items-start justify-center relative">
      <div className="structure pb-6 overflow-hidden">
        <OrgChart
          departments={departments}
          currentLang="uz"
          setId={setId}
          setOpen={setOpen}
          portalContainer={portalContainer}
          childPortalContainer={childPortalContainer}
        />
      </div>
      <div
        className={
          "flex items-start gap-4 w-full justify-between structure-wrapper"
        }
      >
        <div ref={portalRef} />
        <div>
          <div
            ref={withoutChildrenRef}
            className="w-full grid flex-1 grid-cols-2 gap-x-5 structure-child-grid"
          />
        </div>
      </div>
    </div>
  );
};
