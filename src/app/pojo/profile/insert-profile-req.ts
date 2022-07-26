export interface InsertProfileRes {
  isActive: boolean

  userEmail: string
  userPassword: string
  fullName: string
  companyName: string
  positionName: string
  industryId: string
  subscriptionStatus: string
  verificationCode: string

  roleId: string
  balanceId: string
  userId: string

  fileName: string
  fileExt: string
}
