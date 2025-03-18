export type TReqParams = {
  page?: number;
  size?: number;
  type?: string;
  sort?: string[];
};

export type TPublishReq = {
  id: number;
  isPublished?: boolean;
};

export type TDeleteReq = {
  id?: string;
};

type TBaseWithNameReq<nameType = string> = {
  name: nameType;
};

export type TBaseWithDescReq<nameType = string, descType = string> = {
  description: descType;
} & TBaseWithNameReq<nameType>;

export type TPatch<T> = {
  id?: string;
} & Partial<T>;

export type TUserReq = {
  firstName: string;
  lastName: string;
  patronymic: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
};
