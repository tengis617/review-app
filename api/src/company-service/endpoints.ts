import * as Service from './service'

export const getCompany = async (ctx) => {
  const { id } = ctx.params
  const company = await Service.getCompanyById(id)
  ctx.body = company
}

export const createCompany = async (ctx) => {
  const {
    name,
    description
  } = ctx.request.body
  const company = await Service.createCompany({ name, description, ownerId: 'test' })
  ctx.body = company
}

export const getCompanies = async (ctx) => {
  const companies = await Service.getAllCompanies()
  ctx.body = companies
}