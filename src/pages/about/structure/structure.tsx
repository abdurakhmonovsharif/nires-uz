import "./structure.css";
import { Box, H4, SectionTitle, Text } from "@/components";
import { useAppStore } from "@/store";
import { useTranslation } from "react-i18next";
import { Empty, Image, Modal } from "antd";
import { useState } from "react";

import { useGetDepartments, useGetManagement } from "@/libs";
import { getFile } from "@/utils";
import { StructureCard } from "@/pages/about/structure/structureCard.tsx";

export const Structure = () => {
  const { t } = useTranslation("main");
  const { language } = useAppStore();
  const { data } = useGetManagement();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string>("");
  const { departments, isSuccess } = useGetDepartments();
  const management = data?.find((data) => data.id === id);

  return (
    <section id="structure" className="py-[60px]">
      <Modal open={open} onCancel={() => setOpen(false)} footer={""}>
        {management && (
          <>
            <Box $align={"center"} $justify={"center"}>
              <Image
                src={getFile(management?.image)}
                width={187}
                alt={management?.name?.[language]?.split(" ")[0]}
                className={"aspect-[187/240] object-cover rounded-xl"}
              />
            </Box>
            <H4 $textAlign={"center"} $mt={"8px"}>
              {management?.name?.[language]}
            </H4>{" "}
            <Text $textAlign={"center"} $mt={"8px"}>
              {management?.rank?.[language]}
            </Text>
          </>
        )}
        {!management && <Empty description={"Ma'lumot kiritilmagan"} />}
      </Modal>
      <div className=" container max-w-[1400px] ">
        <SectionTitle
          label={t(
            "Energetika vazirligi huzuridagi Qayta tiklanuvchi energiya manbalari milliy ilmiy-tadqiqot institutining Tuzilmasi",
          )}
          $color={"black"}
          $textAlign="center"
        />
        {isSuccess && (
          <StructureCard
            departments={departments}
            setId={setId}
            setOpen={setOpen}
          />
        )}
      </div>
    </section>
  );
};
