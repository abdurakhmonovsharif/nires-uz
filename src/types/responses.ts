import {
  ACTIVITY_TYPE,
  FILE_TYPE,
  JOB_STATUS,
  MANAGEMENT_TYPE,
  MEDIA_TYPE,
  PRODUCT_TYPE,
  SERVICE_TYPE,
} from "@/types/enums.ts";
import { TDataWithLangs, TLanguage } from "@/types/app.ts";

export type TMeta = {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  sortBy: string[][];
  searchBy: string[];
  search: string;
  select: string[];
  filter: {
    unity: string;
    is_deleted: string;
  };
};

export type TPageable = {
  sort: TSort[];
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type TSort = {
  direction: "ASC" | "DESC";
  property: string;
  ignoreCase: boolean;
  nullHandling: string;
  descending: boolean;
  ascending: boolean;
};

export type TResponse<T> = {
  data: T;
  content: T;
  pageable: TPageable;
  links: {
    current: string;
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
  };
  meta: TMeta;
};

export type TBase = {
  id: string;
  creationDate?: Date | string;
  updatedAt?: Date | string;
  deletedAt?: Date | string;
  isDeleted?: boolean;
};

type TBaseWithName<nameType = string> = {
  title: nameType;
} & TBase;

export type TBaseWithDesc<nameType = string, descType = string> = {
  description: descType;
} & TBaseWithName<nameType>;

export type TFile = {
  file: string;
} & TBase;

export type TProduct = {
  imageUrl: string;
  price: number;
  type: PRODUCT_TYPE;
} & TBaseWithDesc;

export type TJob = {
  level: string;
  requirements: string[];
  skills: string[];
  salary?: string;
  location?: string;
  status?: JOB_STATUS;
} & TBaseWithDesc;

export type TNews = {
  id: string;
  imageUrl: string;
  title: TDataWithLangs;
  content: TLanguage;
  sortOrder: number;
} & TBase;

export type TVacancy = {
  level: string;
  requirements: string[];
  skills: string[];
  salary?: string;
  location?: string;
  status?: JOB_STATUS;
} & TBaseWithDesc;

export type TSocialMedia = {
  imageUrl: string;
  name: string;
  siteUrl: string;
};

export type TMarquees = {
  id: string;
  text: TLanguage;
  imageUrl: string;
  isTestMode: boolean;
  startDate: string | Date;
  endDate: string | Date;
};

export type TManagement = {
  image: string;
  name: TLanguage;
  rank: TLanguage;
  phone: string;
  email: string;
  bio: TLanguage;
  duties: TLanguage;
  sortOrder: number;
  positionType: MANAGEMENT_TYPE;
} & TBase;

export type TService = {
  siteUrl: string;
  imgUrl: string;
  name: TDataWithLangs;
  description: TDataWithLangs;
  servicesType: SERVICE_TYPE;
  sortOrder: number;
} & TBase;

export type TActivity = {
  name: TDataWithLangs;
  fileUrl: string;
  fileFormat: FILE_TYPE;
  activitiesType: ACTIVITY_TYPE;
  sortOrder: number;
  text: TDataWithLangs;
} & TBase;

export type TMedia = {
  title: TDataWithLangs;
  mediaUrl: string;
  mediaType: MEDIA_TYPE;
  sortOrder: number;
  photoUrl: string;
} & TBase;

export type TDepartment = {
  id: number;
  name: TDataWithLangs;
  url: string;
  managementId: string;
  management?: TManagement;
  type: string;
  parentId: number;
  staffCount: number;
} & TBase;
