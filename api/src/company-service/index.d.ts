
export interface Company {
  id: string,
  name: string,
  description?: string,
  created: Number,
  updaged?: Number,
  ownerId: string,
}

export interface CreateCompanyRequest {
  name: string,
  description?: string,
  ownerId: string
}

export interface GetCompanyRequest {
  id: string
}