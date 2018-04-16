
export interface Company {
  _key: string,
  name: string,
  category: string,
  description?: string,
}

export interface CreateCompanyRequest {
  name: string,
  category: string,
  description?: string,
}